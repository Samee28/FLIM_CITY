"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FormEvent, useState } from "react";
import { X } from "lucide-react";

const ticketPlans = [
  {
    title: "Day Access",
    subtitle: "Explore cinematic gardens, tunnels, and lakesides",
    image: "/images/view.jpg"
  },
  {
    title: "Golden Hour Pass",
    subtitle: "Sunset entry with premium frame-worthy access",
    image: "/images/light.webp"
  },
  {
    title: "Creator Experience",
    subtitle: "Extended hours for photography and content shoots",
    image: "/images/couple.webp"
  }
];

export default function Inquiry() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("Day Access");
  const [submitted, setSubmitted] = useState(false);

  const openBooking = (planTitle: string) => {
    setSelectedPlan(planTitle);
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
    <section id="inquiry" className="scene-layer section-shell relative mx-auto w-full max-w-7xl px-6 py-24 lg:px-10">
      <div className="absolute inset-0 -z-10 opacity-25">
        <Image src="/images/gulab.jpg" alt="Ticketing scene" fill unoptimized className="object-cover" />
      </div>
      <motion.div
        animate={{ scale: [1, 1.04, 1], x: [0, -6, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 -z-10 opacity-20"
      >
        <Image src="/images/best_view.jpeg" alt="Nature atmosphere" fill unoptimized className="object-cover" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="luxe-card overflow-hidden rounded-[28px] p-6 sm:rounded-[34px] sm:p-10"
      >
        <span className="section-kicker">Bookings</span>
        <h2 className="section-heading">
          Get Your <span className="accent">Tickets</span>
        </h2>
        <p className="section-subtext text-base sm:text-lg">Experience the Magic Live</p>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {ticketPlans.map((plan, idx) => (
            <motion.article
              key={plan.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: idx * 0.1 }}
              className="group luxe-card relative overflow-hidden rounded-[24px]"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1], y: [0, -8, 7, 0] }}
                transition={{ duration: 14 + idx, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image src={plan.image} alt={plan.title} fill unoptimized className="object-cover" />
              </motion.div>
              <div className="relative z-10 bg-gradient-to-t from-black/90 via-black/45 to-black/15 p-6">
                <h3 className="font-display text-2xl text-white">{plan.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#F1FAEE]/80">{plan.subtitle}</p>
                <button
                  type="button"
                  onClick={() => openBooking(plan.title)}
                  className="cta-gold mt-5 px-5 py-2 text-xs"
                >
                  Reserve Your Slot
                </button>
              </div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.24),transparent_60%)] opacity-0 transition duration-500 group-hover:opacity-100" />
            </motion.article>
          ))}
        </div>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
          <Link
            href="#gallery"
            className="cta-gold px-7 py-3 text-center text-xs sm:px-8 sm:text-sm sm:tracking-[0.16em]"
          >
            View Highlights
          </Link>
          <Link
            href="https://youtube.com/@gulabsinghagriform4576"
            target="_blank"
            className="cta-ghost px-7 py-3 text-center text-xs sm:px-8 sm:text-sm sm:tracking-[0.16em]"
          >
            Watch Live Scenes
          </Link>
        </div>
      </motion.div>

      <AnimatePresence>
        {bookingOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[95] flex items-center justify-center bg-black/80 p-4"
          >
            <motion.div
              initial={{ y: 18, opacity: 0 }}
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

              <p className="mt-2 text-sm text-[#B7C9B5]">Selected Plan: {selectedPlan}</p>

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
                  Slot request submitted. Our team will contact you soon.
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
