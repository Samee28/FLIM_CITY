"use client";

import Link from "next/link";
import Image from "next/image";
import { Play, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { FormEvent, useState } from "react";

const channelUrl = "https://youtube.com/@gulabsinghagriform4576";

const showcaseVideos = [
  {
    id: "2yZwoHQf3wQ",
    title: "Boat Ride - Pre-Wedding",
    subtitle: "Forest river shoot - Gulab Singh FC",
    image: "/images/couple.webp",
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
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedShort, setSelectedShort] = useState("General Visit");
  const [submitted, setSubmitted] = useState(false);

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

        <div className="mt-10 overflow-hidden rounded-2xl border border-[#D4AF37]/30 shadow-[0_18px_45px_rgba(0,0,0,0.4)]">
          <iframe
            title="Gulab Singh Film City Channel"
            src={`https://www.youtube-nocookie.com/embed/${showcaseVideos[0].id}?rel=0&modestbranding=1`}
            className="h-[420px] w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <p className="mt-3 text-sm text-[#B7C9B5]">
          If video does not load, open directly:
          <Link href={channelUrl} target="_blank" className="ml-2 text-[#F1C453] underline underline-offset-4">
            YouTube Channel
          </Link>
        </p>

        <p className="mt-12 text-sm uppercase tracking-[0.22em] text-[#D4AF37]/90">YouTube Shorts</p>
        <p className="mt-2 text-sm text-[#B7C9B5]">Choose any short and use Reserve Your Slot or Book Slot.</p>

        <div className="mt-5 space-y-5">
          {showcaseVideos.map((video) => (
            <motion.article
              key={`${video.id}-${video.title}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ y: -6 }}
              className="group luxe-card rounded-[22px] p-4 sm:p-5"
            >
              <div className="flex items-center gap-4 sm:gap-6">
                <Link
                  href={video.url}
                  target="_blank"
                  rel="noreferrer"
                  className="relative block w-[42%] min-w-[130px] max-w-[260px] flex-shrink-0 overflow-hidden rounded-2xl"
                >
                  <motion.div
                    animate={{ scale: [1, 1.08, 1], x: [0, -3, 0], y: [0, -4, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="relative h-[170px] w-full sm:h-[190px]"
                  >
                    <Image
                      src={video.image}
                      alt={video.title}
                      fill
                      unoptimized
                      sizes="(max-width: 640px) 42vw, 260px"
                      className="object-cover transition duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-transparent to-black/25" />
                    <span className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#D4AF37]/90 shadow-[0_0_22px_rgba(212,175,55,0.45)]">
                      <Play className="h-5 w-5 fill-black text-black" />
                    </span>
                  </motion.div>
                </Link>

                <div className="min-w-0 flex-1 pr-1">
                  <h3 className="font-display text-[clamp(1.5rem,2.8vw,2.2rem)] leading-tight text-[#F1FAEE]">
                    {video.title}
                  </h3>
                  <p className="mt-2 text-base sm:text-lg text-[#B7C9B5]">{video.subtitle}</p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => openBooking(video.title)}
                      className="cta-gold px-5 py-2 text-xs"
                    >
                      {video.bookingLabel}
                    </button>
                    <Link
                      href={video.url}
                      target="_blank"
                      rel="noreferrer"
                      className="cta-ghost px-5 py-2 text-xs"
                    >
                      Watch Short
                    </Link>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <Link
          href={channelUrl}
          target="_blank"
          className="cta-ghost mt-10 inline-flex items-center gap-3 px-10 py-4 text-[1.05rem] tracking-[0.18em] text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black"
        >
          <Play className="h-5 w-5 fill-[#D4AF37] text-[#D4AF37]" />
          Visit Our Channel
        </Link>
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
