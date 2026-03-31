"use client";

import { motion } from "framer-motion";

export default function MapSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="scene-layer section-shell relative mx-auto w-full max-w-7xl px-6 py-24 lg:px-10"
    >
      <span className="section-kicker">Location</span>
      <h2 className="section-heading">
        Find <span className="accent">Us</span>
      </h2>
      <p className="section-subtext">
        Gulab Singh FLIM City, India - premium shooting destination, event venue, and agri-tourism retreat.
      </p>

      <div className="mt-8 overflow-hidden rounded-2xl border border-[#D4AF37]/30 shadow-[0_16px_44px_rgba(0,0,0,0.4)]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3759.643372968909!2d78.48046217548473!3d19.556918636698416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd267a5fb313fa5%3A0xdc7de073e3b107aa!2sGulab%20Singh%20FLIM%20city!5e0!3m2!1sen!2sin!4v1774870923856!5m2!1sen!2sin"
          className="h-[450px] w-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Gulab Singh FLIM City Map"
        />
      </div>
    </motion.section>
  );
}
