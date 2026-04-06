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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(212,175,55,0.12),transparent_38%),radial-gradient(circle_at_84%_20%,rgba(255,255,255,0.06),transparent_34%),linear-gradient(180deg,rgba(2,6,10,0.08),rgba(2,6,10,0.66)_70%,rgba(1,3,6,0.95))]" />
      <div className="absolute inset-x-0 bottom-0 h-[30vh] bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.06),transparent_72%)]" />

      {particles.map((dot) => (
        <motion.span
          key={dot.left}
          initial={{ y: "110vh", opacity: 0 }}
          animate={{ y: "-20vh", opacity: [0, 0.52, 0] }}
          transition={{
            duration: dot.duration,
            repeat: Infinity,
            delay: dot.delay,
            ease: "linear"
          }}
          className="absolute rounded-full bg-[#f1c453]/60 blur-[0.5px]"
          style={{ left: dot.left, width: dot.size, height: dot.size }}
        />
      ))}
    </div>
  );
}
