"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, ShoppingBag, Briefcase, GraduationCap, Utensils } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function SocialProof() {
  const sectionRef = useRef<HTMLElement>(null);
  const segmentsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animação dos segmentos
      gsap.from(segmentsRef.current?.children || [], {
        scrollTrigger: {
          trigger: segmentsRef.current,
          start: "top 85%",
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const segments = [
    { icon: ShoppingBag, name: "E-commerce & Varejo", description: "Lojas online e físicas" },
    { icon: Briefcase, name: "Serviços Profissionais", description: "Consultoria, advocacia" },
    { icon: GraduationCap, name: "Educação & Cursos", description: "Escolas e infoprodutos" },
    { icon: Utensils, name: "Alimentação & Gastronomia", description: "Restaurantes e delivery" },
  ];

  return (
    <section ref={sectionRef} className="py-16 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="ml-2 text-gray-600 font-medium">
              Avaliação 5/5 dos nossos clientes
            </span>
          </div>
          <h2 className="text-gray-500 text-sm uppercase tracking-wider font-semibold mb-4">
            Especialização em Pequenas e Médias Empresas
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Focamos em negócios locais e regionais que precisam de{" "}
            <span className="font-bold text-blue-600">atenção dedicada</span> e
            estratégias personalizadas
          </p>
        </div>

        {/* Segments Grid */}
        <div
          ref={segmentsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {segments.map((segment, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl hover:bg-blue-50 hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                <segment.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{segment.name}</h3>
              <p className="text-sm text-gray-600">{segment.description}</p>
            </div>
          ))}
        </div>

        {/* Trust Statement */}
        <div className="mt-12 text-center">
          <div className="inline-block px-6 py-3 bg-blue-50 rounded-lg border border-blue-100">
            <p className="text-gray-700">
              <span className="font-bold text-blue-600">Seu negócio merece atenção especial.</span>{" "}
              Não somos para todos — trabalhamos com poucos clientes por vez para garantir resultados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
