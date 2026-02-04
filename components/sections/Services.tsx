"use client";

import Image from "next/image";

export default function Services() {
  const services = [
    {
      id: "redes-sociais",
      name: "Gestão de Redes Sociais",
      subtitle: "",
      color: "#595d6d",
      textColor: "text-white",
      description:
        "Criamos conteúdos estratégicos que fortalecem sua marca, geram autoridade e atraem o público certo. Cuidamos do planejamento, criação de artes, textos (copy), stories e calendário editorial, sempre alinhados aos objetivos do negócio.",
      hoverImage: null,
      hoverIcons: ["/facebook.png", "/instagram.png", "/linkedin.png", "/whatsapp.png"],
    },
    {
      id: "trafego-pago",
      name: "Tráfego Pago",
      subtitle: "(Meta Ads e Google Ads)",
      color: "#aba394",
      textColor: "text-gray-900",
      description:
        "Anúncios pensados para gerar visibilidade, leads qualificados e vendas. Criamos campanhas estratégicas, segmentadas e acompanhadas de perto, com foco em performance, métricas e otimização contínua.",
      hoverImage: "/trafego.png",
      hoverIcons: null,
    },
    {
      id: "criacao-de-sites",
      name: "Criação de Sites Profissionais",
      subtitle: "",
      color: "#616161",
      textColor: "text-white",
      description:
        "Desenvolvemos sites modernos, responsivos e estratégicos, pensados para conversão e posicionamento no Google. Seu site deixa de ser apenas institucional e passa a trabalhar pelo seu negócio 24h por dia.",
      hoverImage: null,
      hoverIcons: null,
    },
    {
      id: "posicionamento-google",
      name: "Posicionamento no Google",
      subtitle: "(SEO e Google Meu Negócio)",
      color: "#ececec",
      textColor: "text-gray-900",
      description:
        "Ajudamos sua empresa a ser encontrada por quem realmente está procurando pelos seus produtos ou serviços. Trabalhamos SEO estratégico, estrutura de site e otimização do Google Meu Negócio para gerar mais visibilidade e oportunidades.",
      hoverImage: null,
      hoverIcons: null,
    },
    {
      id: "identidade-visual",
      name: "Design Gráfico e Identidade Visual",
      subtitle: "",
      color: "#f3f1ee",
      textColor: "text-gray-900",
      description:
        "Criamos artes, materiais gráficos e identidades visuais que comunicam profissionalismo e fortalecem a marca. Do digital ao impresso, tudo com coerência visual e estratégia.",
      hoverImage: null,
      hoverIcons: null,
    },
    {
      id: "email-marketing",
      name: "E-mail Marketing e Automação",
      subtitle: "",
      color: "#361922",
      textColor: "text-white",
      description:
        "Criamos fluxos de e-mail personalizados para nutrir leads, fortalecer relacionamento e apoiar o time comercial. Comunicação inteligente, no momento certo, com foco em conversão.",
      hoverImage: null,
      hoverIcons: null,
    },
    {
      id: "consultoria-marketing",
      name: "Consultoria de Marketing",
      subtitle: "",
      color: "#9ba1ab",
      textColor: "text-gray-900",
      description:
        "Para empresas que precisam de direcionamento estratégico. Analisamos o cenário atual, identificamos oportunidades e entregamos um plano claro e aplicável para evolução do marketing e das vendas.",
      hoverImage: null,
      hoverIcons: null,
    },
  ];

  return (
    <section className="pt-24" style={{ backgroundColor: "#06071c" }} id="solucoes">
      {/* Section Title */}
      <div className="text-center mb-16 max-w-3xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Nossos{" "}
          <span className="bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent">
            Serviços
          </span>
        </h2>
        <p className="text-xl text-gray-400">
          Soluções completas de marketing digital para impulsionar seu negócio.
        </p>
      </div>

      {/* Services Full Width */}
      <div className="flex flex-col gap-0 w-full">
          {services.map((service, index) => (
            <div
              key={index}
              id={service.id}
              className="relative h-[500px] md:h-[650px] lg:h-[750px] group overflow-hidden cursor-pointer flex items-center justify-center scroll-mt-20"
              style={{ backgroundColor: service.color }}
            >
              {/* Title */}
              <div className="text-center z-10">
                <h3 className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${service.textColor}`}>
                  {service.name}
                </h3>
                {service.subtitle && (
                  <span className={`${service.textColor} opacity-80 text-lg mt-2 block`}>
                    {service.subtitle}
                  </span>
                )}
              </div>

              {/* Hover Overlay with Description */}
              <div
                className={`absolute inset-0 bg-black/80 flex items-center justify-center p-8 z-20
                  opacity-0 group-hover:opacity-100
                  transition-all duration-500 ease-out`}
              >
                <div className={`flex items-center justify-center gap-24 ${service.hoverImage ? 'flex-col md:flex-row max-w-6xl h-full' : service.hoverIcons ? 'flex-col max-w-3xl' : 'max-w-2xl'}`}>
                  <div className={`transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100 ${service.hoverImage ? 'text-center md:text-left md:w-1/2' : 'text-center'}`}>
                    <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      {service.name} {service.subtitle}
                    </h4>
                    <p className="text-white/90 text-base md:text-lg leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  {service.hoverImage && (
                    <div className="hidden md:flex md:w-1/2 items-center justify-center opacity-0 group-hover:opacity-100 translate-x-16 group-hover:translate-x-0 scale-90 group-hover:scale-100 transition-all duration-1000 ease-out delay-500">
                      <Image
                        src={service.hoverImage}
                        alt={service.name}
                        width={400}
                        height={250}
                        className="rounded-lg object-contain opacity-70"
                      />
                    </div>
                  )}
                  {service.hoverIcons && (
                    <div className="flex items-center justify-center gap-8 mt-8 opacity-0 group-hover:opacity-100 translate-y-8 group-hover:translate-y-0 scale-90 group-hover:scale-100 transition-all duration-1000 ease-out delay-500">
                      {service.hoverIcons.map((icon, iconIndex) => (
                        <Image
                          key={iconIndex}
                          src={icon}
                          alt="Social icon"
                          width={60}
                          height={60}
                          className="object-contain brightness-0 invert opacity-80 hover:opacity-100 hover:scale-125 transition-all duration-300 ease-out cursor-pointer"
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}

