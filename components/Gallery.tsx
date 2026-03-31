"use client";

import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Expand, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useRef, useState } from "react";

const images = [
  { id: 1, src: "/images/gulab.jpg", alt: "Gulab Singh FLIM City entrance", height: 420 },
  { id: 2, src: "/images/couple.webp", alt: "Cinematic couple boat ride", height: 500 },
  { id: 3, src: "/images/heart.webp", alt: "Heart garden sculpture", height: 560 },
  { id: 4, src: "/images/light.webp", alt: "Bamboo light tunnel", height: 520 },
  { id: 5, src: "/images/lotus.webp", alt: "Lotus water park zone", height: 520 },
  { id: 6, src: "/images/view.jpg", alt: "FLIM city scenic view", height: 450 },
  { id: 7, src: "/images/masti.avif", alt: "Resort fun moments", height: 430 },
  { id: 8, src: "/images/best_view.jpeg", alt: "Best view landscape", height: 520 },
  { id: 9, src: "/images/caputer_moment.jpeg", alt: "Captured moment", height: 500 },
  { id: 10, src: "/images/garden.jpeg", alt: "Garden frame", height: 540 },
  { id: 11, src: "/images/heart view.jpeg", alt: "Heart view", height: 520 },
  { id: 12, src: "/images/heartview.jpeg", alt: "Heartview location", height: 500 },
  { id: 13, src: "/images/lake point.jpeg", alt: "Lake point", height: 540 },
  { id: 14, src: "/images/lake view.jpeg", alt: "Lake view", height: 520 },
  { id: 15, src: "/images/lake.jpeg", alt: "Lake zone", height: 480 },
  { id: 16, src: "/images/lake_corner.jpeg", alt: "Lake corner", height: 500 },
  { id: 17, src: "/images/photo _point.jpeg", alt: "Photo point", height: 520 },
  { id: 18, src: "/images/play_ground.jpeg", alt: "Play ground", height: 470 },
  { id: 19, src: "/images/playing.jpeg", alt: "Playing area", height: 500 },
  { id: 20, src: "/images/playing_spot.jpeg", alt: "Playing spot", height: 530 },
  { id: 21, src: "/images/END_THANK_YOU.jpeg", alt: "Thank you frame", height: 460 }
];

const blurDataURL =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10'%3E%3Crect width='10' height='10' fill='%23151515'/%3E%3C/svg%3E";

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [-35, 55]);

  return (
    <section ref={sectionRef} id="gallery" className="scene-layer section-shell relative mx-auto w-full max-w-7xl px-6 py-24 lg:px-10">
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10 opacity-20">
        <Image src="/images/heart.webp" alt="Captured moments backdrop" fill unoptimized className="object-cover" />
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
        <span className="section-kicker">Gallery</span>
        <h2 className="section-heading">
          Captured <span className="accent">Moments</span>
        </h2>
      </motion.div>

      <div className="mt-10 columns-1 gap-4 space-y-4 md:mt-12 md:gap-5 md:space-y-5 md:columns-2 lg:columns-3">
        {images.map((image, index) => (
          <motion.button
            key={image.id}
            onClick={() => setActive(index)}
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, delay: index * 0.04 }}
              className={`group luxe-card relative block w-full overflow-hidden rounded-[20px] md:rounded-[24px] ${
                index % 3 === 1 ? "md:-mt-6" : index % 4 === 0 ? "md:mt-6" : ""
              }`}
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1], y: [0, -8, 8, 0] }}
              transition={{ duration: 16 + (index % 5), repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={700}
                height={image.height}
                unoptimized
                placeholder="blur"
                blurDataURL={blurDataURL}
                className="h-auto w-full object-cover transition duration-700 group-hover:scale-110"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10 opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/25 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition group-hover:opacity-100">
              <span className="rounded-full bg-black/65 p-3">
                <Expand className="h-5 w-5 text-[#D4AF37]" />
              </span>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90 p-3 sm:p-6"
          >
            <button
              className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/55 p-2 sm:right-6 sm:top-6"
              onClick={() => setActive(null)}
              aria-label="Close lightbox"
            >
              <X className="h-5 w-5 text-white" />
            </button>

            <button
              onClick={() => setActive((prev) => (prev === null ? 0 : (prev - 1 + images.length) % images.length))}
              className="absolute left-2 rounded-full border border-white/20 bg-black/55 p-2.5 sm:left-4 sm:p-3 md:left-8"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5 text-white" />
            </button>

            <div className="relative max-h-[85vh] w-full max-w-5xl overflow-hidden rounded-[26px] border border-[#D4AF37]/40">
              <Image
                src={images[active].src}
                alt={images[active].alt}
                width={1400}
                height={900}
                unoptimized
                placeholder="blur"
                blurDataURL={blurDataURL}
                className="h-auto max-h-[85vh] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
            </div>

            <button
              onClick={() => setActive((prev) => (prev === null ? 0 : (prev + 1) % images.length))}
              className="absolute right-2 rounded-full border border-white/20 bg-black/55 p-2.5 sm:right-4 sm:p-3 md:right-8"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5 text-white" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
