"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play, Sparkles } from "lucide-react";
import { useRef, useState } from "react";

const shootImages = [
  {
    src: "/latest_shoot/lat2.jpeg",
    alt: "Family haldi celebration portrait",
    title: "Family Glow",
    note: "Warm haldi smiles",
    layout: "lg:col-span-6 lg:row-span-1",
  },
  {
    src: "/latest_shoot/lat3.jpeg",
    alt: "Elegant red saree portrait collage",
    title: "Red Grace",
    note: "Editorial portrait set",
    layout: "lg:col-span-3 lg:row-span-1",
  },
  {
    src: "/latest_shoot/lat4.jpeg",
    alt: "Beauty in silk portrait",
    title: "Silk Beauty",
    note: "Soft garden frame",
    layout: "lg:col-span-3 lg:row-span-1",
  },
  {
    src: "/latest_shoot/lat5.jpeg",
    alt: "Latest shoot fashion portrait",
    title: "Classic Pose",
    note: "Elegant natural styling",
    layout: "lg:col-span-6 lg:row-span-1",
  },
];

const floatingLeaves = [
  { left: "8%", top: "18%", delay: 0, duration: 18, rotate: -16 },
  { left: "24%", top: "62%", delay: 4, duration: 22, rotate: 10 },
  { left: "46%", top: "22%", delay: 2, duration: 20, rotate: -8 },
  { left: "61%", top: "74%", delay: 1, duration: 24, rotate: 18 },
  { left: "78%", top: "26%", delay: 5, duration: 19, rotate: -14 },
  { left: "90%", top: "68%", delay: 3, duration: 23, rotate: 12 },
];

const glowDots = [
  { left: "12%", top: "32%", delay: 0, duration: 8, size: 8 },
  { left: "34%", top: "18%", delay: 2, duration: 10, size: 10 },
  { left: "58%", top: "54%", delay: 1, duration: 9, size: 7 },
  { left: "83%", top: "22%", delay: 4, duration: 11, size: 9 },
  { left: "76%", top: "78%", delay: 3, duration: 10, size: 12 },
];

export default function LatestShoot() {
  const reelVideoRef = useRef<HTMLVideoElement | null>(null);
  const wideVideoRef = useRef<HTMLVideoElement | null>(null);
  const supportVideoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [viewMode, setViewMode] = useState<"horizontal" | "vertical">("horizontal");
  const featuredPreview = "/latest_shoot/lat5.jpeg";

  const playVideo = async () => {
    try {
      if (wideVideoRef.current) {
        await wideVideoRef.current.play();
      }

      if (reelVideoRef.current) {
        await reelVideoRef.current.play();
      }

      if (supportVideoRef.current) {
        await supportVideoRef.current.play();
      }

      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  const pauseVideo = () => {
    if (wideVideoRef.current) {
      wideVideoRef.current.pause();
      wideVideoRef.current.currentTime = 0;
    }

    if (reelVideoRef.current) {
      reelVideoRef.current.pause();
      reelVideoRef.current.currentTime = 0;
    }

    if (supportVideoRef.current) {
      supportVideoRef.current.pause();
      supportVideoRef.current.currentTime = 0;
    }

    setIsPlaying(false);
  };

  return (
    <section
      id="latest-shoot"
      className="scene-layer section-shell flim-grain relative mx-auto mt-8 w-full max-w-7xl overflow-hidden px-6 py-24 lg:px-10"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/images/garden.jpeg"
          alt="Garden backdrop"
          fill
          unoptimized
          className="object-cover opacity-[0.12] blur-sm scale-110"
        />
        <Image
          src="/latest_shoot/lat4.jpeg"
          alt="Floral portrait backdrop"
          fill
          unoptimized
          className="object-cover object-top opacity-[0.08] blur-2xl scale-110"
        />
        <div className="absolute left-[-8%] top-[8%] h-56 w-56 rounded-full bg-[#d4af37]/10 blur-3xl" />
        <div className="absolute bottom-[-6%] right-[4%] h-72 w-72 rounded-full bg-[#52b788]/12 blur-3xl" />
        <div className="absolute -left-10 bottom-[-6%] h-[18rem] w-[8rem] rounded-[55%_45%_35%_65%] bg-[linear-gradient(180deg,rgba(82,183,136,0.26),rgba(27,67,50,0.06))] blur-[1px] sm:h-[24rem] sm:w-[10rem]" />
        <div className="absolute -left-2 bottom-[-10%] h-[15rem] w-[6rem] rounded-[55%_45%_35%_65%] bg-[linear-gradient(180deg,rgba(82,183,136,0.18),rgba(27,67,50,0.02))] blur-[1px] sm:h-[20rem] sm:w-[8rem]" />
        <div className="absolute right-[-2%] bottom-[-7%] h-[16rem] w-[7rem] rounded-[40%_60%_60%_40%] bg-[linear-gradient(180deg,rgba(82,183,136,0.28),rgba(27,67,50,0.04))] blur-[1px] sm:h-[22rem] sm:w-[10rem]" />
        <div className="absolute right-[6%] bottom-[-11%] h-[13rem] w-[5rem] rounded-[40%_60%_60%_40%] bg-[linear-gradient(180deg,rgba(82,183,136,0.18),rgba(27,67,50,0.02))] blur-[1px] sm:h-[18rem] sm:w-[7rem]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.14),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(82,183,136,0.16),transparent_32%),linear-gradient(135deg,rgba(4,13,10,0.18),rgba(4,13,10,0.78))]" />

        {glowDots.map((dot) => (
          <motion.span
            key={`${dot.left}-${dot.top}`}
            className="absolute rounded-full bg-[#d9f7cc]/70 blur-[2px]"
            style={{ left: dot.left, top: dot.top, width: dot.size, height: dot.size }}
            animate={{ opacity: [0.15, 0.8, 0.2], scale: [0.85, 1.15, 0.9] }}
            transition={{ duration: dot.duration, delay: dot.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}

        {floatingLeaves.map((leaf) => (
          <motion.div
            key={`${leaf.left}-${leaf.top}`}
            animate={{
              y: [0, -14, 0],
              x: [0, 12, -6, 0],
              rotate: [leaf.rotate, leaf.rotate + 4, leaf.rotate],
              opacity: [0.18, 0.48, 0.22],
            }}
            transition={{ duration: leaf.duration, repeat: Infinity, delay: leaf.delay, ease: "easeInOut" }}
            className="absolute h-5 w-9 rounded-[70%_30%_60%_40%] border border-[#a8dfb1]/45 bg-[#2d6a4f]/12"
            style={{ left: leaf.left, top: leaf.top }}
          >
            <span className="absolute left-1/2 top-[14%] h-[72%] w-px -translate-x-1/2 bg-[#a8dfb1]/35" />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.9 }}
        className="flex flex-col gap-5 lg:max-w-2xl"
      >
        <span className="section-kicker">Latest Shoot</span>
        <h2 className="section-heading">
          Fresh <span className="accent">Highlights</span> from the lens
        </h2>
        <p className="section-subtext">
          A cinematic preview of the newest shoot, styled with motion, glow, and a hover-to-play video experience.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9 }}
        className="mt-12"
      >
        <div
          className="luxe-card group relative overflow-hidden rounded-[32px] border border-[#d4af37]/25"
          onMouseEnter={playVideo}
          onMouseLeave={pauseVideo}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/20 via-transparent to-[#52b788]/20" />
          <div className="absolute inset-0">
            <Image
              src="/images/garden.jpeg"
              alt="Plant rich backdrop"
              fill
              unoptimized
              className="object-cover opacity-20 blur-xl scale-110"
            />
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.18),transparent_34%),linear-gradient(160deg,rgba(4,13,10,0.18),rgba(4,13,10,0.75))]" />
          <div className="absolute left-5 top-5 z-20 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/45 px-4 py-2 text-xs uppercase tracking-[0.28em] text-[#f1c453] backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5" />
            Featured Reel
          </div>
          <div className="absolute right-5 top-5 z-20 flex items-center gap-2 rounded-full border border-white/10 bg-black/35 p-1.5 backdrop-blur-md">
            <button
              type="button"
              onClick={() => setViewMode("horizontal")}
              className={`rounded-full px-3 py-1.5 text-[10px] uppercase tracking-[0.24em] transition ${
                viewMode === "horizontal" ? "bg-[#d4af37] text-[#08110c]" : "text-white/72"
              }`}
            >
              Horizontal
            </button>
            <button
              type="button"
              onClick={() => setViewMode("vertical")}
              className={`rounded-full px-3 py-1.5 text-[10px] uppercase tracking-[0.24em] transition ${
                viewMode === "vertical" ? "bg-[#d4af37] text-[#08110c]" : "text-white/72"
              }`}
            >
              Vertical
            </button>
          </div>

          <div className="relative z-10 p-4 sm:p-6 xl:p-8">
            <div className="overflow-hidden rounded-[30px] border border-white/10 bg-[#08110c]/72 shadow-[0_30px_90px_rgba(0,0,0,0.42)]">
              <div
                className={`relative w-full overflow-hidden ${
                  viewMode === "horizontal" ? "aspect-[16/10] sm:aspect-[16/9]" : "aspect-[9/14] sm:aspect-[9/13]"
                }`}
              >
                {!isPlaying && (
                  <div className="pointer-events-none absolute inset-0 z-[1]">
                    <Image
                      src={featuredPreview}
                      alt="Wide video preview"
                      fill
                      unoptimized
                      className={`${
                        viewMode === "horizontal" ? "object-cover object-center" : "object-contain object-center scale-[0.94]"
                      }`}
                    />
                    {viewMode === "vertical" && (
                      <Image
                        src={featuredPreview}
                        alt="Wide video preview glow"
                        fill
                        unoptimized
                        className="object-cover object-center scale-110 opacity-35 blur-2xl"
                      />
                    )}
                  </div>
                )}
                <video
                  ref={wideVideoRef}
                  src="/hero_section/h2.mp4"
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster={featuredPreview}
                  className={`h-full w-full transition duration-700 group-hover:scale-[1.02] ${
                    viewMode === "horizontal" ? "object-cover object-[50%_20%]" : "object-contain object-center"
                  }`}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,13,10,0.1),rgba(4,13,10,0.45)),radial-gradient(circle_at_right,rgba(4,13,10,0),rgba(4,13,10,0.34)_62%)]" />
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#040d0a] to-transparent" />

                <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/35 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-[#f1c453] backdrop-blur-md sm:left-6 sm:top-6">
                  Cultural Visual Frame
                </div>
              </div>

              <div
                className={`border-t border-white/10 bg-[linear-gradient(180deg,rgba(4,13,10,0.28),rgba(4,13,10,0.62))] p-4 sm:p-5 ${
                  viewMode === "horizontal" ? "grid gap-4 lg:grid-cols-3" : "grid gap-4 sm:grid-cols-3"
                }`}
              >
                <div className="relative overflow-hidden rounded-[24px] border border-white/12 bg-[#07110c]/90 p-2 shadow-[0_18px_40px_rgba(0,0,0,0.32)]">
                  <div className="relative overflow-hidden rounded-[18px]">
                    {!isPlaying && (
                      <div className="pointer-events-none absolute inset-0 z-[1]">
                        <Image
                          src="/latest_shoot/lat2.jpeg"
                          alt="Latest shoot poster preview"
                          fill
                          unoptimized
                          className={`${
                            viewMode === "horizontal" ? "object-cover object-center" : "object-contain object-center scale-[0.94]"
                          }`}
                        />
                        {viewMode === "vertical" && (
                          <Image
                            src="/latest_shoot/lat2.jpeg"
                            alt="Latest shoot poster glow"
                            fill
                            unoptimized
                            className="object-cover object-center scale-110 opacity-30 blur-2xl"
                          />
                        )}
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,13,10,0.04),rgba(4,13,10,0.35))]" />
                      </div>
                    )}

                    <video
                      ref={reelVideoRef}
                      src="/latest_shoot/lat1.mp4"
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      poster="/latest_shoot/lat2.jpeg"
                      className={`w-full transition duration-700 group-hover:scale-[1.02] ${
                        viewMode === "horizontal"
                          ? "aspect-[16/9] object-cover object-center"
                          : "aspect-[9/16] object-contain object-center bg-[#07110c]"
                      }`}
                    />

                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(4,13,10,0.08),rgba(4,13,10,0.34)),radial-gradient(circle_at_center,transparent_30%,rgba(4,13,10,0.16)_75%)]" />

                    <motion.div
                      animate={{ opacity: isPlaying ? 0 : 1, scale: isPlaying ? 0.92 : 1 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center"
                    >
                      <div className="flex flex-col items-center gap-3">
                        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-black/45 text-white shadow-[0_0_30px_rgba(212,175,55,0.22)] backdrop-blur-md">
                          <Play className="ml-1 h-5 w-5 text-[#f1c453]" fill="currentColor" />
                        </span>
                        <p className="rounded-full border border-white/10 bg-black/35 px-3 py-1.5 text-[10px] uppercase tracking-[0.28em] text-white/80 backdrop-blur-md">
                          Hover to play
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-[24px] border border-white/12 bg-[#07110c]/90 p-2 shadow-[0_18px_40px_rgba(0,0,0,0.32)]">
                  <div className="relative overflow-hidden rounded-[18px]">
                    {!isPlaying && (
                      <div className="pointer-events-none absolute inset-0 z-[1]">
                        <Image
                          src="/images/garden.jpeg"
                          alt="Supporting visual preview"
                          fill
                          unoptimized
                          className={`${
                            viewMode === "horizontal" ? "object-cover object-center" : "object-contain object-center scale-[0.94]"
                          }`}
                        />
                        {viewMode === "vertical" && (
                          <Image
                            src="/images/garden.jpeg"
                            alt="Supporting visual glow"
                            fill
                            unoptimized
                            className="object-cover object-center scale-110 opacity-30 blur-2xl"
                          />
                        )}
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,13,10,0.08),rgba(4,13,10,0.35))]" />
                      </div>
                    )}
                    <video
                      ref={supportVideoRef}
                      src="/hero_section/h4.mp4"
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      poster="/images/garden.jpeg"
                      className={`w-full transition duration-700 group-hover:scale-[1.02] ${
                        viewMode === "horizontal"
                          ? "aspect-[16/9] object-cover object-center"
                          : "aspect-[9/16] object-contain object-center bg-[#07110c]"
                      }`}
                    />

                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(4,13,10,0.08),rgba(4,13,10,0.34)),radial-gradient(circle_at_center,transparent_30%,rgba(4,13,10,0.16)_75%)]" />
                    <div className="pointer-events-none absolute left-3 top-3 rounded-full border border-white/10 bg-black/35 px-3 py-1.5 text-[10px] uppercase tracking-[0.26em] text-[#f1c453] backdrop-blur-md">
                      Supporting Visual
                    </div>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-[24px] border border-white/12 bg-[#07110c]/90 p-2 shadow-[0_18px_40px_rgba(0,0,0,0.32)]">
                  <div className={`relative overflow-hidden rounded-[18px] ${viewMode === "horizontal" ? "aspect-[16/9]" : "aspect-[9/16]"}`}>
                    <Image
                      src="/images/garden.jpeg"
                      alt="Garden cinematic still"
                      fill
                      unoptimized
                      className={`transition duration-700 group-hover:scale-[1.02] ${
                        viewMode === "horizontal" ? "object-cover object-center" : "object-contain object-center scale-[0.94]"
                      }`}
                    />
                    {viewMode === "vertical" && (
                      <Image
                        src="/images/garden.jpeg"
                        alt="Garden cinematic glow"
                        fill
                        unoptimized
                        className="object-cover object-center scale-110 opacity-30 blur-2xl"
                      />
                    )}
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,13,10,0.08),rgba(4,13,10,0.34))]" />
                    <div className="pointer-events-none absolute left-3 top-3 rounded-full border border-white/10 bg-black/35 px-3 py-1.5 text-[10px] uppercase tracking-[0.26em] text-[#f1c453] backdrop-blur-md">
                      Garden Mood
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="mt-6 grid auto-rows-auto gap-5 lg:grid-cols-6">
          {shootImages.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, delay: index * 0.08 }}
              whileHover={{ y: -10, rotate: index % 2 === 0 ? -0.8 : 0.8 }}
              className={`luxe-card group relative overflow-hidden rounded-[28px] border border-white/8 p-3 ${image.layout}`}
            >
              <div className="relative overflow-hidden rounded-[22px] bg-[#161a14]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1080}
                  height={1347}
                  unoptimized
                  className="h-auto w-full transition duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-white/6" />
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  <div className="rounded-[18px] border border-white/10 bg-black/30 px-4 py-3 backdrop-blur-md">
                    <p className="text-[10px] uppercase tracking-[0.32em] text-[#f1c453]">{image.note}</p>
                    <p className="mt-2 text-base font-medium text-white sm:text-lg">{image.title}</p>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute inset-x-4 bottom-3 h-24 rounded-b-[22px] bg-gradient-to-t from-[#d4af37]/15 to-transparent" />
                <div className="absolute right-7 top-7 h-12 w-12 rounded-full border border-white/10 bg-white/8 blur-[1px]" />
              </div>
            </motion.div>
          ))}
      </div>
    </section>
  );
}
