"use client";

import useEmblaCarousel from "embla-carousel-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

const locations = [
  { name: "Heart Garden Paradise", image: "/images/heart.webp", tag: "Romantic Frames" },
  { name: "Bamboo Tunnel Magic", image: "/images/light.webp", tag: "Cinematic Walkway" },
  { name: "Lotus Water Zone", image: "/images/lotus.webp", tag: "Water Features" },
  { name: "Heritage Boat Rides", image: "/images/couple.webp", tag: "Scenic Cruises" },
  { name: "Forest Trail Views", image: "/images/view.jpg", tag: "Nature Backdrop" },
  { name: "Festival & Events", image: "/images/masti.avif", tag: "Celebration Space" },
  { name: "Directors Choice", image: "/images/gulab.jpg", tag: "Premium Viewing" },
  { name: "Lakeside Lounge", image: "/images/light.webp", tag: "Sunset Shoots" },
  { name: "Garden Walk", image: "/images/garden.jpeg", tag: "Nature Trail" },
  { name: "Best View Point", image: "/images/best_view.jpeg", tag: "Landscape View" },
  { name: "Lake Corner", image: "/images/lake_corner.jpeg", tag: "Quiet Spot" },
  { name: "Lake Point", image: "/images/lake point.jpeg", tag: "Waterfront" },
  { name: "Lake View Deck", image: "/images/lake view.jpeg", tag: "Wide Angle" },
  { name: "Photo Point", image: "/images/photo _point.jpeg", tag: "Picture Zone" },
  { name: "Play Ground", image: "/images/play_ground.jpeg", tag: "Family Space" },
  { name: "Playing Spot", image: "/images/playing_spot.jpeg", tag: "Activity Zone" },
  { name: "Heart View Arch", image: "/images/heart view.jpeg", tag: "Signature Frame" },
  { name: "Moments Avenue", image: "/images/caputer_moment.jpeg", tag: "Captured Moments" }
];

export default function Locations() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", dragFree: true, loop: true });
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  useEffect(() => {
    if (!emblaApi) return;
    const timer = setInterval(() => emblaApi.scrollNext(), 2600);
    return () => clearInterval(timer);
  }, [emblaApi]);

  return (
    <section ref={sectionRef} id="locations" className="scene-layer section-shell relative mx-auto w-full max-w-7xl px-6 py-24 lg:px-10">
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10 opacity-25">
        <Image src="/images/light.webp" alt="Cinematic background" fill unoptimized className="object-cover" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <span className="section-kicker">Locations</span>
        <h2 className="section-heading">
          Shooting <span className="accent">Locations</span>
        </h2>
        <p className="section-subtext text-lg">Diverse landscapes, premium setups</p>
      </motion.div>

      <div className="mt-12 overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {locations.map((location, idx) => (
            <motion.article
              key={location.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.05, duration: 0.9 }}
              className="group luxe-card relative h-[420px] min-w-[320px] overflow-hidden rounded-[26px]"
            >
              <motion.div
                animate={{ scale: [1, 1.08, 1], y: [0, 10, -6, 0] }}
                transition={{ duration: 14 + (idx % 4), repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={location.image}
                  alt={location.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                  unoptimized
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/95 transition duration-500" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.2),transparent_62%)] opacity-0 transition duration-500 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-[#F1FAEE]">
                <p className="text-sm uppercase tracking-widest text-[#D4AF37] font-semibold">{location.tag}</p>
                <h3 className="mt-2 font-display text-2xl font-bold">{location.name}</h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
