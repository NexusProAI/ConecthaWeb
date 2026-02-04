"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Quote, Star } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     // Animação dos cards
  //     gsap.from(cardsRef.current?.children || [], {
  //       scrollTrigger: {
  //         trigger: cardsRef.current,
  //         start: "top 80%",
  //       },
  //       y: 100,
  //       opacity: 0,
  //       duration: 0.8,
  //       stagger: 0.2,
  //       ease: "power3.out",
  //     });

  //     // Animação de flutuação contínua
  //     gsap.to(cardsRef.current?.children || [], {
  //       y: -10,
  //       duration: 2,
  //       stagger: 0.3,
  //       repeat: -1,
  //       yoyo: true,
  //       ease: "power1.inOut",
  //     });
  //   }, sectionRef);

  //   return () => ctx.revert();
  // }, []);

  const testimonials = [
    {
      name: "Maria Silva",
      role: "CEO, TechStart",
      image: "MS",
      text: "A Conectha Web transformou completamente nossa presença digital. Em 6 meses, triplicamos nosso faturamento online!",
      rating: 5,
    },
    {
      name: "João Santos",
      role: "Diretor de Marketing, MegaRetail",
      image: "JS",
      text: "Profissionalismo e resultados excepcionais. A equipe entende nossas necessidades e entrega além das expectativas.",
      rating: 5,
    },
    {
      name: "Ana Costa",
      role: "Fundadora, BeautyLux",
      image: "AC",
      text: "ROI impressionante! Nossas campanhas nunca tiveram tanto engajamento. Recomendo sem hesitar!",
      rating: 5,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-black relative overflow-hidden"
      id="depoimentos"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-pink-500/20 rounded-full filter blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            O Que Dizem Nossos{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Clientes
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Histórias reais de sucesso e transformação digital
          </p>
        </div>

        {/* Testimonials Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-500 cursor-pointer"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity">
                <Quote className="w-12 h-12 text-purple-400" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-300 text-lg leading-relaxed mb-6 group-hover:text-white transition-colors duration-300">
                &quot;{testimonial.text}&quot;
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="text-white font-semibold">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/10 group-hover:to-pink-600/10 rounded-2xl transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 px-8 py-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">4.9/5</div>
              <div className="text-gray-400 text-sm">Rating Médio</div>
            </div>
            <div className="w-px h-12 bg-gray-700" />
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">500+</div>
              <div className="text-gray-400 text-sm">Reviews</div>
            </div>
            <div className="w-px h-12 bg-gray-700" />
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">98%</div>
              <div className="text-gray-400 text-sm">Satisfação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
