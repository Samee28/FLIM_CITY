"use client";

import { motion } from "framer-motion";
import type { CSSProperties } from "react";

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

const treeLayers = [
  {
    left: "-2%",
    scale: 1.12,
    height: "34rem",
    delay: 0,
    duration: 9,
    blur: "1px",
    opacity: 0.22,
    blossomCount: 9,
    crown: "left",
    offset: "-8%"
  },
  {
    left: "12%",
    scale: 0.96,
    height: "30rem",
    delay: 1.5,
    duration: 8,
    blur: "0.5px",
    opacity: 0.32,
    blossomCount: 11,
    crown: "center",
    offset: "2%"
  },
  {
    left: "30%",
    scale: 1.2,
    height: "38rem",
    delay: 0.8,
    duration: 10,
    blur: "0px",
    opacity: 0.46,
    blossomCount: 14,
    crown: "center",
    offset: "0%"
  },
  {
    left: "52%",
    scale: 1.05,
    height: "33rem",
    delay: 2,
    duration: 9.5,
    blur: "0.3px",
    opacity: 0.36,
    blossomCount: 12,
    crown: "right",
    offset: "6%"
  },
  {
    left: "72%",
    scale: 1.1,
    height: "35rem",
    delay: 1.2,
    duration: 8.5,
    blur: "0.8px",
    opacity: 0.28,
    blossomCount: 10,
    crown: "center",
    offset: "-4%"
  },
  {
    left: "88%",
    scale: 0.92,
    height: "29rem",
    delay: 0.4,
    duration: 9.2,
    blur: "1px",
    opacity: 0.2,
    blossomCount: 8,
    crown: "left",
    offset: "10%"
  }
];

export default function Atmosphere() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.16),transparent_58%)]" />
      <div className="absolute inset-x-0 bottom-0 h-[42vh] bg-[radial-gradient(ellipse_at_bottom,rgba(82,183,136,0.22),transparent_65%)]" />
      <div className="absolute inset-x-0 bottom-0 h-[28vh] bg-[linear-gradient(180deg,transparent,rgba(4,13,10,0.28)_20%,rgba(4,13,10,0.72)_78%,rgba(4,13,10,0.96))]" />

      <div className="absolute inset-x-[-8%] bottom-[-8%] h-[46vh] bg-[radial-gradient(ellipse_at_center,rgba(27,67,50,0.18),transparent_62%)]" />

      <div className="flower-forest absolute inset-x-0 bottom-0 h-[46vh]">
        {treeLayers.map((tree, index) => (
          <div
            key={`${tree.left}-${index}`}
            className="flower-tree"
            style={{
              ["--tree-x" as string]: tree.offset,
              ["--tree-scale" as string]: tree.scale,
              left: tree.left,
              width: `min(22vw, 11rem)`,
              height: tree.height,
              opacity: tree.opacity,
              filter: `blur(${tree.blur})`,
              transformOrigin: "bottom center"
            } as CSSProperties}
          >
            <div className="flower-tree-trunk" />
            <div className={`flower-tree-crown flower-tree-crown--${tree.crown}`}>
              {Array.from({ length: tree.blossomCount }).map((_, blossomIndex) => {
                const angle = (blossomIndex / tree.blossomCount) * Math.PI * 2;
                const radius = 38 + (blossomIndex % 3) * 6;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * (radius * 0.76);

                return (
                  <span
                    key={`${tree.left}-blossom-${blossomIndex}`}
                    className="flower-blossom"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(42% + ${y}px)`,
                      animationDelay: `${tree.delay + blossomIndex * 0.18}s`
                    }}
                  />
                );
              })}
              <span className="flower-tree-crown-core" />
            </div>
            <span className="flower-tree-shadow" />
          </div>
        ))}
      </div>

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

      {Array.from({ length: 10 }).map((_, blossomIndex) => (
        <motion.span
          key={`petal-drift-${blossomIndex}`}
          initial={{ y: "108vh", x: 0, opacity: 0 }}
          animate={{
            y: "-18vh",
            x: [0, 14, -10, 8, 0],
            opacity: [0, 0.65, 0.35, 0]
          }}
          transition={{
            duration: 18 + (blossomIndex % 5) * 3,
            repeat: Infinity,
            delay: blossomIndex * 1.6,
            ease: "linear"
          }}
          className="absolute h-4 w-4 rounded-full bg-[radial-gradient(circle,#f7d56b_0%,#e07a5f_45%,rgba(224,122,95,0.05)_72%)] shadow-[0_0_22px_rgba(241,196,83,0.4)]"
          style={{ left: `${8 + blossomIndex * 9}%`, bottom: "-4%" }}
        />
      ))}
    </div>
  );
}
