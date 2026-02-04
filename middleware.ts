import { NextRequest, NextResponse } from 'next/server';

// --- Rate Limiting Configuration ---
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5;

// This is an in-memory store. For production, distributed environments (e.g., Vercel, multiple Docker containers),
// you MUST use a distributed store like Redis, Memcached, or a dedicated rate-limiting service (e.g., Upstash).
// Using a simple object/Map in memory will not work across multiple server instances.
const requestStore = new Map<string, number[]>();

export async function middleware(request: NextRequest) {
  // We only want to rate limit API routes
  if (request.nextUrl.pathname.startsWith('/api/')) {
    
    // Use the IP address as the identifier.
    // Note: 'x-forwarded-for' can be spoofed. In a production environment behind a trusted proxy (like Vercel or AWS ALB),
    // this is generally reliable. Consider the security implications for your specific infrastructure.
    const ip = request.ip ?? request.headers.get('x-forwarded-for') ?? '127.0.0.1';
    
    const now = Date.now();
    
    // Get the timestamps of requests from this IP
    const requests = requestStore.get(ip) ?? [];
    
    // Filter out requests that are outside the current time window
    const requestsInWindow = requests.filter((timestamp) => timestamp > now - RATE_LIMIT_WINDOW_MS);
    
    // If the number of requests exceeds the maximum, block the request
    if (requestsInWindow.length >= MAX_REQUESTS_PER_WINDOW) {
      return new NextResponse(
        JSON.stringify({ message: 'Too many requests. Please try again later.' }),
        {
          status: 429, // Too Many Requests
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }
    
    // Add the current request timestamp to the store
    requestsInWindow.push(now);
    requestStore.set(ip, requestsInWindow);
  }

  // If the request is not blocked, continue to the requested route
  return NextResponse.next();
}

// This specifies that the middleware should only run on paths matching '/api/:path*'
export const config = {
  matcher: '/api/:path*',
};
