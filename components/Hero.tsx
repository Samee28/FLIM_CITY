"use client";

import Link from "next/link";
import { ChevronDown, ArrowRight, PlayCircle } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const heroVideos = [
  "/latest_shoot/lat1.mp4",
  "/hero_section/h1.mp4",
  "/hero_section/h2.mp4",
  "/hero_section/h3.mp4",
  "/hero_section/h4.mp4"
];

const floatingParticles = Array.from({ length: 18 }).map((_, idx) => ({
  id: idx,
  left: `${5 + idx * 5}%`,
  duration: 12 + (idx % 7),
  delay: (idx % 5) * 0.5
}));

const heroStats = ["15+ Acres", "500+ Shoots", "4K Visual Zones"];

export default function Hero() {
  const [activeLayer, setActiveLayer] = useState<"a" | "b">("a");
  const [aVideoIndex, setAVideoIndex] = useState(0);
  const [bVideoIndex, setBVideoIndex] = useState(1 % heroVideos.length);
  const [isHeroHovered, setIsHeroHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoARef = useRef<HTMLVideoElement>(null);
  const videoBRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const sceneY = useTransform(scrollYProgress, [0, 1], [0, 130]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 85]);

  useEffect(() => {
    const activeVideo = activeLayer === "a" ? videoARef.current : videoBRef.current;
    const inactiveVideo = activeLayer === "a" ? videoBRef.current : videoARef.current;

    if (inactiveVideo) {
      inactiveVideo.pause();
      inactiveVideo.currentTime = 0;
    }

    if (activeVideo && isHeroHovered) {
      activeVideo.play().catch(() => undefined);
      return;
    }

    if (activeVideo) {
      activeVideo.pause();
      activeVideo.currentTime = 0;
    }
  }, [activeLayer, aVideoIndex, bVideoIndex, isHeroHovered]);

  const switchVideoLayer = () => {
    if (activeLayer === "a") {
      setActiveLayer("b");
      setAVideoIndex((bVideoIndex + 1) % heroVideos.length);
      return;
    }

    setActiveLayer("a");
    setBVideoIndex((aVideoIndex + 1) % heroVideos.length);
  };

  return (
    <section
      ref={containerRef}
      className="scene-layer flim-grain section-shell relative min-h-screen w-full overflow-hidden"
      id="home"
      onMouseEnter={() => setIsHeroHovered(true)}
      onMouseLeave={() => setIsHeroHovered(false)}
    >
      <motion.div style={{ y: sceneY }} className="absolute inset-0">
        <motion.video
          ref={videoARef}
          initial={{ opacity: 0.2, scale: 1 }}
          animate={{ opacity: activeLayer === "a" ? 1 : 0, scale: 1.12, y: [-5, 5, -5] }}
          transition={{ opacity: { duration: 0.75 }, scale: { duration: 15, ease: "linear" }, y: { duration: 11, repeat: Infinity, ease: "easeInOut" } }}
          muted
          playsInline
          preload="auto"
          onEnded={switchVideoLayer}
          className="absolute inset-0 h-full w-full object-cover"
          src={heroVideos[aVideoIndex]}
        />
        <motion.video
          ref={videoBRef}
          initial={{ opacity: 0.2, scale: 1 }}
          animate={{ opacity: activeLayer === "b" ? 1 : 0, scale: 1.12, y: [-5, 5, -5] }}
          transition={{ opacity: { duration: 0.75 }, scale: { duration: 15, ease: "linear" }, y: { duration: 11, repeat: Infinity, ease: "easeInOut" } }}
          muted
          playsInline
          preload="auto"
          onEnded={switchVideoLayer}
          className="absolute inset-0 h-full w-full object-cover"
          src={heroVideos[bVideoIndex]}
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#081C15]/42 via-[#040D0A]/20 to-black/72" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#d4af37]/14 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/80 to-transparent" />
      <div className="spot-glow gentle-glow absolute -left-20 top-12 h-80 w-80 bg-[#d4af37]/40" />
      <div className="absolute right-0 top-0 h-[26rem] w-[26rem] bg-[radial-gradient(circle,rgba(212,175,55,0.2),transparent_65%)]" />

      {floatingParticles.map((particle) => (
        <motion.span
          key={particle.id}
          className={`absolute rounded-full bg-[#D4AF37]/75 ${particle.id % 2 === 0 ? "hidden h-1.5 w-1.5 sm:block" : "h-1 w-1 sm:h-1.5 sm:w-1.5"}`}
          style={{ left: particle.left, bottom: "-10%" }}
          animate={{ y: [0, -720], opacity: [0, 1, 0], x: [0, 8, -5, 0] }}
          transition={{ duration: particle.duration, delay: particle.delay, repeat: Infinity, ease: "linear" }}
        />
      ))}

      <motion.div style={{ y: contentY }} className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <span className="section-kicker">Premium FLIM Destination</span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.35, ease: "easeOut" }}
          className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-[0.12em] text-white drop-shadow-[0_0_28px_rgba(212,175,55,0.3)] sm:text-6xl sm:tracking-[0.24em] md:text-7xl md:tracking-[0.3em]"
        >
          GULAB SINGH
          <br />
          FLIM CITY
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.9, ease: "easeOut" }}
          className="mt-6 max-w-2xl text-sm font-light tracking-[0.1em] text-[#f1faee]/95 sm:mt-7 sm:text-xl sm:tracking-[0.24em]"
        >
          Where Cinema Meets Nature
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.15 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
        >
          {heroStats.map((stat) => (
            <span key={stat} className="rounded-full border border-[#D4AF37]/45 bg-black/35 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-[#F1FAEE]/90 sm:px-4">
              {stat}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1.25, ease: "easeOut" }}
          className="mt-9 h-[3px] w-32 rounded-full bg-[#D4AF37]"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4, ease: "easeOut" }}
          className="mt-10 flex w-full max-w-md flex-col gap-3 sm:mt-12 sm:max-w-none sm:flex-row sm:gap-6"
        >
          <Link
            href="#locations"
            className="cta-gold group gap-2 px-6 py-3 text-[11px] sm:px-9 sm:py-4 sm:text-sm sm:tracking-[0.16em]"
          >
            Explore Locations
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            href="https://youtube.com/@gulabsinghagriform4576"
            target="_blank"
            className="cta-ghost group gap-2 px-6 py-3 text-[11px] sm:px-9 sm:py-4 sm:text-sm sm:tracking-[0.16em]"
          >
            <PlayCircle className="h-4 w-4" />
            See Real Videos
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-7 right-5 z-20 hidden rounded-full border border-[#D4AF37]/45 bg-black/35 px-3 py-2 backdrop-blur md:flex md:items-center md:gap-2"
      >
        {heroVideos.map((_, idx) => (
          <span
            key={`hero-dot-${idx}`}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              idx === (activeLayer === "a" ? aVideoIndex : bVideoIndex) ? "w-8 bg-[#D4AF37]" : "w-3 bg-white/45"
            }`}
          />
        ))}
      </motion.div>

      <div className="absolute right-5 top-5 z-20 hidden rounded-full border border-white/10 bg-black/35 px-4 py-2 text-[10px] uppercase tracking-[0.28em] text-white/80 backdrop-blur md:block">
        {isHeroHovered ? "Playing" : "Hover to play"}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 sm:bottom-10 sm:gap-3"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-xs uppercase tracking-[0.3em] text-[#D4AF37]"
        >
          Scroll
        </motion.div>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ChevronDown className="h-6 w-6 text-[#D4AF37]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
