"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Plus, Minus } from "lucide-react";
import SuccessForm from "../ui/SuccessForm";

gsap.registerPlugin(ScrollTrigger);

export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [isFormOpen, setIsFormOpen] = useState(false);

  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     gsap.from(sectionRef.current?.querySelector(".faq-title"), {
  //       scrollTrigger: {
  //         trigger: sectionRef.current,
  //         start: "top 80%",
  //       },
  //       y: 50,
  //       opacity: 0,
  //       duration: 0.8,
  //       ease: "power3.out",
  //     });

  //     gsap.from(sectionRef.current?.querySelectorAll(".faq-item") || [], {
  //       scrollTrigger: {
  //         trigger: sectionRef.current?.querySelector(".faq-container"),
  //         start: "top 80%",
  //       },
  //       y: 50,
  //       opacity: 0,
  //       duration: 0.6,
  //       stagger: 0.1,
  //       ease: "power3.out",
  //     });
  //   }, sectionRef);

  //   return () => ctx.revert();
  // }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Quanto tempo leva para ver resultados?",
      answer:
        "Os primeiros resultados geralmente aparecem dentro de 30-60 dias, dependendo da estratégia implementada. Campanhas de tráfego pago podem gerar resultados imediatos, enquanto SEO e branding orgânico levam de 3-6 meses para resultados significativos.",
    },
    {
      question: "Qual é o investimento mínimo necessário?",
      answer:
        "Nossos pacotes começam a partir de R$ 3.000/mês, incluindo estratégia, criação de conteúdo e gerenciamento de campanhas. O investimento ideal varia de acordo com seus objetivos e o tamanho do seu negócio.",
    },
    {
      question: "Vocês trabalham com quais setores?",
      answer:
        "Trabalhamos com diversos setores: e-commerce, SaaS, serviços profissionais, educação, saúde, varejo e muito mais. Nossa metodologia é adaptável a qualquer nicho de mercado.",
    },
    {
      question: "Como funciona o processo de onboarding?",
      answer:
        "Após a contratação, realizamos um workshop de imersão para entender seu negócio, público-alvo e objetivos. Em seguida, desenvolvemos uma estratégia personalizada e iniciamos a implementação em até 7 dias úteis.",
    },
    {
      question: "Quais métricas vocês acompanham?",
      answer:
        "Acompanhamos KPIs específicos para seu negócio: ROI, CAC, LTV, taxa de conversão, engajamento, tráfego qualificado, ranking SEO, e muito mais. Fornecemos relatórios detalhados mensalmente.",
    },
    {
      question: "Posso cancelar o serviço a qualquer momento?",
      answer:
        "Sim, não trabalhamos com contratos de fidelidade. Você pode cancelar com 30 dias de antecedência. Porém, recomendamos um período mínimo de 6 meses para obter resultados consistentes.",
    },
  ];

  return (
    <>
      <section
        ref={sectionRef}
        className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden"
        id="faq"
      >
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Title */}
          <div className="faq-title text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Perguntas{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Frequentes
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Tire suas dúvidas sobre nossos serviços
            </p>
          </div>

          {/* FAQ Container */}
          <div className="faq-container max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="faq-item bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden transition-all duration-300 hover:border-purple-500/50"
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left transition-colors duration-300 hover:bg-gray-800/80"
                >
                  <h3 className="text-xl font-semibold text-white pr-8">
                    {faq.question}
                  </h3>
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-white" />
                    ) : (
                      <Plus className="w-5 h-5 text-white" />
                    )}
                  </div>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-8 pb-6 text-gray-300 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">
              Ainda tem dúvidas? Estamos aqui para ajudar!
            </p>
            <button
              onClick={() => setIsFormOpen(true)}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
            >
              Falar com Especialista
            </button>
          </div>
        </div>
      </section>
      <SuccessForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
}
