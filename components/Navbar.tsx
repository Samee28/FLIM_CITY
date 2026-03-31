"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Locations", href: "#locations" },
  { label: "Gallery", href: "#gallery" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#inquiry" }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#about");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    links.forEach((link) => {
      const section = document.querySelector(link.href);
      if (!section) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActive(link.href);
            }
          });
        },
        {
          threshold: 0.45,
          rootMargin: "-30% 0px -45% 0px"
        }
      );

      observer.observe(section);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-[#D4AF37]/25 bg-[#081C15]/72 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-10">
        <Link href="#" className="group flex items-center gap-2 font-display text-lg tracking-[0.2em] text-[#D4AF37] sm:text-xl">
          <span className="h-2 w-2 rounded-full bg-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.9)] transition-transform duration-300 group-hover:scale-125" />
          GSFC
        </Link>

        <div className="hidden items-center gap-2 rounded-full border border-[#2D6A4F]/55 bg-black/25 p-2 backdrop-blur md:flex">
          {links.map((link) => (
            <motion.div key={link.href} className="relative">
              {active === link.href && (
                <motion.span
                  layoutId="activeNavPill"
                  transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  className="absolute inset-0 rounded-full border border-[#D4AF37]/65 bg-[#1B4332]/75 shadow-[0_0_18px_rgba(212,175,55,0.35)]"
                />
              )}
              <Link
                href={link.href}
                className={`relative z-10 rounded-full px-4 py-2 text-xs uppercase tracking-[0.16em] transition ${
                  active === link.href
                    ? "text-[#F8E7BA]"
                    : "text-[#F1FAEE]/85 hover:bg-[#1B4332]/55 hover:text-[#D4AF37]"
                }`}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </div>

        <button
          className="rounded-full border border-[#D4AF37]/35 bg-black/35 p-2.5 backdrop-blur md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6 text-[#F1FAEE]" /> : <Menu className="h-6 w-6 text-[#F1FAEE]" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="border-b border-[#D4AF37]/20 bg-[#040D0A]/95 px-4 pb-5 sm:px-6 sm:pb-6 md:hidden"
          >
            <div className="flex flex-col gap-2 rounded-2xl border border-[#2D6A4F]/60 bg-[#081C15]/70 p-3.5 backdrop-blur">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-3 py-2 text-sm uppercase tracking-[0.14em] transition ${
                    active === link.href
                      ? "bg-[#1B4332]/70 text-[#D4AF37]"
                      : "text-[#F1FAEE]/80 hover:bg-[#1B4332]/55 hover:text-[#D4AF37]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
