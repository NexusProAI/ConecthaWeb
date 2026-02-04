"use client";

import { motion } from "framer-motion";

const Glitter = () => {
  const numStars = 15;
  const colors = ["#ffa825", "#0a0c25"];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {Array.from({ length: numStars }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            backgroundColor: colors[Math.floor(Math.random() * colors.length)],
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.7, 0],
            scale: [0, 1.2, 0],
            transition: {
              duration: Math.random() * 1 + 0.5,
              delay: Math.random() * 0.2,
            },
          }}
        />
      ))}
    </div>
  );
};

export default Glitter;
