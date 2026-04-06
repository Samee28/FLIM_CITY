"use client";

import Link from "next/link";
import Image from "next/image";
import { Play, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { FormEvent, useRef, useState } from "react";

const channelUrl = "https://youtube.com/@gulabsinghagriform4576";

type ShowcaseVideo = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  localVideo?: string;
  url: string;
  bookingLabel: string;
};

const showcaseVideos: ShowcaseVideo[] = [
  {
    id: "2yZwoHQf3wQ",
    title: "Boat Ride - Pre-Wedding",
    subtitle: "Forest river shoot - Gulab Singh Film City",
    image: "/images/couple.webp",
    localVideo: "/latest_shoot/lat1.mp4",
    url: "https://www.youtube.com/watch?v=2yZwoHQf3wQ",
    bookingLabel: "Book Slot"
  },
  {
    id: "Vwuv0mHLsPk",
    title: "Bamboo Tunnel Night",
    subtitle: "Fairy light arch walk - Night shoot",
    image: "/images/light.webp",
    url: "https://www.youtube.com/watch?v=Vwuv0mHLsPk",
    bookingLabel: "Reserve Your Slot"
  },
  {
    id: "5hlgGhrMnYc",
    title: "Heart Garden Shoot",
    subtitle: "Romantic location - Sirumugai",
    image: "/images/heart.webp",
    url: "https://www.youtube.com/watch?v=5hlgGhrMnYc",
    bookingLabel: "Book Slot"
  },
  {
    id: "5hlgGhrMnYc",
    title: "Water Park Tour",
    subtitle: "Lotus pool & rides - Full tour",
    image: "/images/lotus.webp",
    url: "https://www.youtube.com/watch?v=5hlgGhrMnYc",
    bookingLabel: "Reserve Your Slot"
  }
];

export default function YouTubeSection() {
  const featurePreviewRef = useRef<HTMLVideoElement | null>(null);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedShort, setSelectedShort] = useState("General Visit");
  const [submitted, setSubmitted] = useState(false);
  const [selectedFeatureIndex, setSelectedFeatureIndex] = useState(0);
  const [isFeaturePlaying, setIsFeaturePlaying] = useState(false);
  const [isFeaturePreviewPlaying, setIsFeaturePreviewPlaying] = useState(false);

  const selectedFeature = showcaseVideos[selectedFeatureIndex];

  const openBooking = (title: string) => {
    setSelectedShort(title);
    setSubmitted(false);
    setBookingOpen(true);
  };

  const submitBooking = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setBookingOpen(false);
      setSubmitted(false);
    }, 1700);
  };

  const playFeature = (index: number) => {
    setSelectedFeatureIndex(index);
    setIsFeaturePlaying(true);
    setIsFeaturePreviewPlaying(false);
  };

  const playFeaturePreview = async () => {
    if (!selectedFeature.localVideo || !featurePreviewRef.current || isFeaturePlaying) return;

    try {
      await featurePreviewRef.current.play();
      setIsFeaturePreviewPlaying(true);
    } catch {
      setIsFeaturePreviewPlaying(false);
    }
  };

  const stopFeaturePreview = () => {
    if (!featurePreviewRef.current || isFeaturePlaying) return;

    featurePreviewRef.current.pause();
    featurePreviewRef.current.currentTime = 0;
    setIsFeaturePreviewPlaying(false);
  };

  return (
    <section className="scene-layer section-shell relative bg-transparent px-6 py-24 lg:px-10">
      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="section-kicker">YouTube</span>
          <h2 className="section-heading mt-4">
            Watch Us in <span className="accent">Action</span>
          </h2>
        </motion.div>

        <div className="mt-10 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            layout
            className="luxe-card relative overflow-hidden rounded-[30px] border border-[#D4AF37]/30"
            onMouseEnter={playFeaturePreview}
            onMouseLeave={stopFeaturePreview}
          >
            <div className="absolute inset-0">
              {selectedFeature.localVideo ? (
                <video
                  ref={featurePreviewRef}
                  src={selectedFeature.localVideo}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster={selectedFeature.image}
                  className="h-full w-full object-cover"
                />
              ) : (
                <Image
                  src={selectedFeature.image}
                  alt={selectedFeature.title}
                  fill
                  unoptimized
                  className="object-cover"
                />
              )}
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(4,13,10,0.18),rgba(4,13,10,0.78)),radial-gradient(circle_at_top_right,rgba(212,175,55,0.28),transparent_32%)]" />
            </div>

            {isFeaturePlaying ? (
              <iframe
                key={selectedFeature.id}
                title={selectedFeature.title}
                src={`https://www.youtube-nocookie.com/embed/${selectedFeature.id}?autoplay=1&rel=0&modestbranding=1`}
                className="relative z-10 h-[320px] w-full sm:h-[420px] xl:h-[500px]"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            ) : (
              <div className="relative z-10 flex h-[320px] flex-col justify-end p-6 sm:h-[420px] sm:p-8 xl:h-[500px]">
                <div className="max-w-xl rounded-[28px] border border-white/10 bg-black/30 p-6 backdrop-blur-md">
                  <p className="text-xs uppercase tracking-[0.34em] text-[#F1C453]">Featured Video</p>
                  <h3 className="mt-4 font-display text-3xl text-white sm:text-5xl">{selectedFeature.title}</h3>
                  <p className="mt-4 max-w-lg text-sm leading-6 text-[#F1FAEE]/80 sm:text-base">
                    {selectedFeature.subtitle}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => playFeature(selectedFeatureIndex)}
                      className="cta-gold px-6 py-3 text-xs sm:text-sm"
                    >
                      Play This Video
                    </button>
                    <Link
                      href={selectedFeature.url}
                      target="_blank"
                      rel="noreferrer"
                      className="cta-ghost px-6 py-3 text-xs sm:text-sm"
                    >
                      Open on YouTube
                    </Link>
                  </div>
                  {selectedFeature.localVideo && (
                    <p className="mt-4 text-xs uppercase tracking-[0.28em] text-white/65">
                      {isFeaturePreviewPlaying ? "Preview playing on hover" : "Hover on wallpaper to preview"}
                    </p>
                  )}
                </div>
              </div>
            )}
          </motion.div>

          <div className="grid gap-4">
            {showcaseVideos.map((video, index) => {
              const isActive = selectedFeatureIndex === index;

              return (
                <motion.button
                  key={`${video.id}-${video.title}-feature`}
                  type="button"
                  onClick={() => playFeature(index)}
                  whileHover={{ y: -4 }}
                  className={`luxe-card group relative overflow-hidden rounded-[24px] border p-3 text-left transition ${
                    isActive ? "border-[#D4AF37]/55 shadow-[0_0_28px_rgba(212,175,55,0.16)]" : "border-white/8"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="relative h-24 w-28 flex-shrink-0 overflow-hidden rounded-[18px] sm:h-28 sm:w-36">
                      <Image
                        src={video.image}
                        alt={video.title}
                        fill
                        unoptimized
                        className="object-cover transition duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-transparent to-black/20" />
                      <span className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-[#D4AF37]/92">
                        <Play className="h-4 w-4 fill-black text-black" />
                      </span>
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] uppercase tracking-[0.28em] text-[#F1C453]">
                        {isActive ? "Now Selected" : "Click to Play"}
                      </p>
                      <h3 className="mt-2 font-display text-xl leading-tight text-white sm:text-2xl">{video.title}</h3>
                      <p className="mt-2 text-sm text-[#B7C9B5]">{video.subtitle}</p>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

        <p className="mt-3 text-sm text-[#B7C9B5]">
          If video does not load, open directly:
          <Link href={channelUrl} target="_blank" className="ml-2 text-[#F1C453] underline underline-offset-4">
            YouTube Channel
          </Link>
        </p>
      </div>

      <AnimatePresence>
        {bookingOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[95] flex items-center justify-center bg-black/80 p-4"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 10, opacity: 0 }}
              className="w-full max-w-md rounded-2xl border border-[#D4AF37]/40 bg-[#081C15] p-6 shadow-[0_16px_50px_rgba(0,0,0,0.45)]"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-3xl text-[#D4AF37]">Reserve Your Slot</h3>
                <button
                  type="button"
                  onClick={() => setBookingOpen(false)}
                  className="rounded-full border border-[#D4AF37]/40 p-1.5"
                  aria-label="Close booking"
                >
                  <X className="h-4 w-4 text-[#F1FAEE]" />
                </button>
              </div>

              <p className="mt-2 text-sm text-[#B7C9B5]">Selected: {selectedShort}</p>

              <form onSubmit={submitBooking} className="mt-5 space-y-4">
                <input
                  required
                  placeholder="Your Name"
                  className="premium-input text-sm"
                />
                <input
                  required
                  placeholder="Phone Number"
                  className="premium-input text-sm"
                />
                <input
                  required
                  type="date"
                  className="premium-input text-sm"
                />
                <button
                  type="submit"
                  className="cta-gold w-full px-6 py-3 text-sm"
                >
                  Confirm Booking
                </button>
              </form>

              {submitted && (
                <p className="mt-4 rounded-lg border border-[#2D6A4F] bg-[#1B4332]/40 px-3 py-2 text-sm text-[#F1FAEE]">
                  Slot request submitted. Our team will contact you shortly.
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
