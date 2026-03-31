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

const leaves = [
  { left: "12%", delay: 0, duration: 26, rotate: -20 },
  { left: "31%", delay: 5, duration: 28, rotate: 12 },
  { left: "57%", delay: 2, duration: 30, rotate: -12 },
  { left: "78%", delay: 7, duration: 24, rotate: 18 }
];

export default function Atmosphere() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.16),transparent_58%)]" />

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

      {leaves.map((leaf) => (
        <motion.span
          key={leaf.left}
          initial={{ y: "-10vh", x: 0, opacity: 0 }}
          animate={{
            y: "110vh",
            x: [0, 15, -8, 10],
            opacity: [0, 0.7, 0.5, 0]
          }}
          transition={{
            duration: leaf.duration,
            repeat: Infinity,
            delay: leaf.delay,
            ease: "linear"
          }}
          className="absolute h-3 w-6 rounded-[70%_30%_60%_40%] border border-[#2D6A4F]/65 bg-[#2D6A4F]/35"
          style={{ left: leaf.left, rotate: `${leaf.rotate}deg` }}
        />
      ))}
    </div>
  );
}
