"use client";

import { useState, useRef } from "react";
import { ArrowRight } from "lucide-react";
import SuccessForm from "../ui/SuccessForm";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const phraseRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      {/* First Screen - Full Height */}
      <section
        ref={heroRef}
        className="relative overflow-hidden min-h-screen flex items-center"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/fundo.png)" }}
        ></div>
        <div className="absolute inset-0 bg-white/70"></div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-40 left-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto">
            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Phrase Section + CTA Button */}
              <div ref={phraseRef} className="text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
                  <div className="inline-block">
                    <div className="w-full h-1 bg-gradient-to-r from-azul-solido to-laranja-hover mb-2"></div>
                    <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                      CONECTANDO
                    </span>
                  </div>
                  <br />
                  <span className="text-gray-900">ESTRATÉGIA,</span>
                  <br />
                  <span className="text-gray-900">TRÁFEGO E</span>
                  <br />
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    CONVERSÃO.
                  </span>
                </h1>

                {/* CTA Button */}
                <div ref={ctaRef}>
                  <button
                    onClick={() => setIsFormOpen(true)}
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-azul-solido text-white rounded-full font-semibold text-lg shadow-xl transition-all duration-300 hover:bg-laranja-hover transform"
                  >
                    Quero ser um case de sucesso
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Story Section */}
              <div ref={storyRef} className="space-y-6">
                <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                  Especialização em Pequenas e Médias Empresas
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  Focamos em negócios locais e regionais
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Seu negócio merece atenção especial. Não somos para todos — trabalhamos
                  com poucos clientes por vez para garantir resultados. Empresas que precisam
                  de atenção dedicada e estratégias personalizadas encontram em nós o parceiro ideal.
                </p>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes blob {
            0%,
            100% {
              transform: translate(0, 0) scale(1);
            }
            33% {
              transform: translate(30px, -50px) scale(1.1);
            }
            66% {
              transform: translate(-20px, 20px) scale(0.9);
            }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
        `}</style>
      </section>

      {/* Full Width Banner - Separate Section */}
      <div className="w-full">
        <img
          src="/banner.png"
          alt="Conectha Web Banner"
          className="w-full h-[380px] md:h-[580px] object-cover"
        />
      </div>
      
      <SuccessForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
}
