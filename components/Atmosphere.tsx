"use client";

import { motion } from "framer-motion";

const particles = [
  { left: "6%", delay: 0, duration: 18, size: 5 },
  { left: "14%", delay: 2, duration: 24, size: 7 },
  { left: "22%", delay: 5, duration: 20, size: 6 },
  { left: "36%", delay: 1, duration: 22, size: 8 },
  { left: "48%", delay: 4, duration: 19, size: 5 },
  { left: "62%", delay: 3, duration: 23, size: 7 },
  { left: "74%", delay: 0, duration: 21, size: 6 },
  { left: "88%", delay: 2, duration: 25, size: 8 }
];

export default function Atmosphere() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.16),transparent_58%),radial-gradient(circle_at_80%_18%,rgba(82,183,136,0.16),transparent_40%),linear-gradient(180deg,rgba(4,13,10,0.1),rgba(4,13,10,0.45)_72%,rgba(4,13,10,0.92))]" />
      <div className="absolute inset-x-0 bottom-0 h-[34vh] bg-[radial-gradient(ellipse_at_bottom,rgba(27,67,50,0.16),transparent_68%)]" />

      {particles.map((dot) => (
        <motion.span
          key={dot.left}
          initial={{ y: "110vh", opacity: 0 }}
          animate={{ y: "-20vh", opacity: [0, 0.85, 0] }}
          transition={{
            duration: dot.duration,
            repeat: Infinity,
            delay: dot.delay,
            ease: "linear"
          }}
          className="absolute rounded-full bg-[#D4AF37]/70 blur-[0.5px]"
          style={{ left: dot.left, width: dot.size, height: dot.size }}
        />
      ))}
    </div>
  );
}
