"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Clapperboard, Tv, Camera, Building2, Sparkles, Trees } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const services = [
  {
    title: "Film Shoots",
    description: "Large-format cinematic locations with production support.",
    icon: Clapperboard
  },
  {
    title: "TV Commercials",
    description: "Flexible, high-impact sets for branded storytelling.",
    icon: Tv
  },
  {
    title: "Pre-Wedding Shoots",
    description: "Romantic natural frames with luxury visual appeal.",
    icon: Camera
  },
  {
    title: "Corporate Events",
    description: "Premium outdoor and indoor zones for company occasions.",
    icon: Building2
  },
  {
    title: "Private Parties",
    description: "Curated spaces for exclusive celebrations and gatherings.",
    icon: Sparkles
  },
  {
    title: "Nature Retreats",
    description: "Immersive agri-tourism and nature-led relaxation experiences.",
    icon: Trees
  }
];

export default function Services() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [-40, 45]);

  return (
    <section ref={sectionRef} id="services" className="scene-layer section-shell relative mx-auto w-full max-w-7xl px-6 py-24 lg:px-10">
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10 opacity-20">
        <Image src="/images/lotus.webp" alt="Services backdrop" fill unoptimized className="object-cover" />
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
        <span className="section-kicker">Services</span>
        <h2 className="section-heading">
          Our <span className="accent">Services</span>
        </h2>
      </motion.div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, idx) => {
          const Icon = service.icon;
          return (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.95 }}
              className="group luxe-card rounded-[24px] p-6"
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3 + (idx % 3), repeat: Infinity, ease: "easeInOut" }}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D4AF37]/20 shadow-[0_0_18px_rgba(212,175,55,0.22)]"
              >
                <Icon className="h-6 w-6 text-[#D4AF37]" />
              </motion.div>
              <h3 className="mt-4 text-xl font-semibold text-[#F1FAEE]">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#F1FAEE]/75">{service.description}</p>
              <Link href="#inquiry" className="mt-4 inline-block text-sm font-semibold uppercase tracking-[0.08em] text-[#D4AF37] hover:underline">
                Enquire Now
              </Link>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
