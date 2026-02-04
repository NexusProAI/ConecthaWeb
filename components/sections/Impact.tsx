"use client";

import { motion } from "framer-motion";

export default function Impact() {
  const partners = [
    { name: "Partner 1", logo: "/emp1.png" },
    { name: "Partner 2", logo: "/emp2.png" },
    { name: "Partner 3", logo: "/emp3.png" },
  ];

  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-24 bg-white" id="parceiros">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="w-12 h-1 bg-pink-500 mb-4 mx-auto"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            NOSSOS PARCEIROS
          </h2>
          <p className="text-xl text-gray-600">
            Grandes marcas, dos mais diversos segmentos, confiaram em nosso trabalho e retribuímos com projetos que hoje fazem parte do nosso portfólio. Conheça aqui algumas dessas marcas e projetos.
          </p>
        </div>
      </div>

      {/* Partners Marquee */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex"
          style={{ width: "200%" }}
          animate={{
            x: ["-50%", "0%"],
            transition: {
              ease: "linear",
              duration: 20,
              repeat: Infinity,
            },
          }}
        >
          {duplicatedPartners.map((partner, index) => (
            <div
              key={index}
              className="relative w-1/6 aspect-square flex items-center justify-center bg-gray-50 group transition-transform duration-300 hover:scale-y-95"
            >
              <img src={partner.logo} alt={partner.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-laranja-hover/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
