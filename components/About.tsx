"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Stat = {
  label: string;
  value: number;
  suffix?: string;
};

const stats: Stat[] = [
  { label: "Shoots Completed", value: 500, suffix: "+" },
  { label: "Acres", value: 15 },
  { label: "Locations", value: 10 },
  { label: "Years", value: 12 }
];

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const start = performance.now();

    const tick = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <span ref={ref} className="text-3xl font-semibold text-[#D4AF37] sm:text-4xl">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [-30, 45]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="scene-layer section-shell relative mx-auto grid w-full max-w-7xl gap-10 px-6 py-24 lg:grid-cols-2 lg:items-center lg:px-10"
    >
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10 opacity-25">
        <Image src="/images/view.jpg" alt="Nature backdrop" fill unoptimized className="object-cover" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -40, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 1 }}
        className="flex w-full flex-col items-center gap-8"
      >
        <div className="group relative w-full h-[450px] overflow-hidden rounded-[2rem] border-2 border-[#D4AF37] bg-[#081C15] shadow-[0_25px_70px_rgba(212,175,55,0.25)] sm:h-[550px] lg:h-[650px]">
          <motion.div
            animate={{ scale: [1, 1.01, 1], y: [0, -3, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src="/images/founder_image.jpeg"
              alt="Gulab Singh - Founder"
              fill
              className="object-cover object-center transition duration-700 group-hover:scale-[1.02]"
              unoptimized
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 rounded-full border border-[#D4AF37]/60 bg-black/50 px-5 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#D4AF37] backdrop-blur-sm">
            Founder
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full text-center"
        >
          <h3 className="text-4xl font-bold text-[#F1FAEE] sm:text-5xl lg:text-6xl">
            Gulab Singh
          </h3>
          <p className="mt-3 text-lg font-semibold uppercase tracking-[0.1em] text-[#D4AF37]">Founder & Visionary</p>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 1 }}
      >
        <span className="section-kicker">About FLIM City</span>
        <h2 className="section-heading">
          A World Built for <span className="accent">Cinema</span>
        </h2>
        <p className="section-subtext text-lg">
          Gulab Singh FLIM City is a handcrafted destination where dramatic cinematic spaces and serene natural
          landscapes meet in one expansive environment. From lush gardens and forest edges to water-side frames,
          every corner is designed to tell powerful visual stories.
        </p>
        <p className="mt-5 text-lg leading-relaxed text-[#F1FAEE]/85">
          Production houses, directors, photographers, and event creators choose this destination for its versatility,
          controlled access, and rich atmosphere. It supports flim shoots, television productions, ad campaigns,
          weddings, and immersive cultural celebrations.
        </p>
        <p className="mt-5 text-lg leading-relaxed text-[#F1FAEE]/85">
          The property blends curated architecture with authentic Indian terrain, delivering frames that feel both epic
          and intimate. It is equally a premium event venue and an agri-tourism retreat for families, creators, and
          nature lovers.
        </p>
        <p className="mt-5 text-lg leading-relaxed text-[#F1FAEE]/85">
          At every sunrise and dusk, the space transforms with cinematic light and depth, offering a production-ready
          world that feels alive, elegant, and unforgettable.
        </p>

        <Link
          href="#inquiry"
          className="cta-gold mt-8 px-7 py-3 text-sm"
        >
          Reserve Your Slot
        </Link>
        <p className="mt-3 text-sm text-[#B7C9B5]">Tap this button to open the ticket booking section below.</p>

        <div className="mt-10 grid grid-cols-2 gap-5">
          {stats.map((stat) => (
            <motion.div 
              key={stat.label} 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="luxe-card rounded-2xl p-5"
            >
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.08em] text-[#D4AF37]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
