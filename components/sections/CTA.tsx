"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Sparkles } from "lucide-react";
import SuccessForm from "../ui/SuccessForm";
import PartnerForm from "../ui/PartnerForm";

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isSuccessFormOpen, setIsSuccessFormOpen] = useState(false);
  const [isPartnerFormOpen, setIsPartnerFormOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current?.children || [], {
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
        },
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="py-20 bg-gray-900 relative overflow-hidden"
        id="contato"
      >
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div
            ref={contentRef}
            className="max-w-4xl mx-auto text-center bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl p-12 md:p-16 border border-gray-700"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-white">
                Oferta Especial - Consultoria Gratuita
              </span>
            </div>

            {/* Title */}
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Pronto para{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Transformar
              </span>{" "}
              Seu Negócio?
            </h2>

            {/* Description */}
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Agende uma consultoria gratuita e descubra como podemos
              impulsionar seus resultados com estratégias personalizadas de
              marketing digital.
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
              {[
                "Consultoria Gratuita",
                "Análise Completa",
                "Proposta Personalizada",
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-white/5 rounded-xl border border-white/10"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400" />
                  <span className="text-white text-sm font-medium">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                id="solicitar-proposta-btn"
                onClick={() => setIsSuccessFormOpen(true)}
                className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 flex items-center gap-2"
              >
                Solicitar Proposta
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="seja-parceiro-btn"
                onClick={() => setIsPartnerFormOpen(true)}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold text-lg border-2 border-white/20 transition-all duration-300 hover:bg-white/20 hover:scale-105"
              >
                Seja um Parceiro
              </button>
            </div>

            {/* Trust Elements */}
            <div className="mt-10 flex items-center justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Sem compromisso</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Resposta em 24h</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SuccessForm isOpen={isSuccessFormOpen} onClose={() => setIsSuccessFormOpen(false)} />
      <PartnerForm isOpen={isPartnerFormOpen} onClose={() => setIsPartnerFormOpen(false)} />
    </>
  );
}
