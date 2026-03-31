"use client";

import { Fish, Sailboat, Waves, PartyPopper, Droplets, Milestone } from "lucide-react";
import { motion } from "framer-motion";

const activities = [
  { title: "Olympic Swimming Pool", description: "Competition-grade pool for shoots and leisure.", icon: Waves },
  { title: "Boat Rides", description: "Scenic water routes with cinematic backdrops.", icon: Sailboat },
  { title: "Water Games", description: "Curated family and team experiences in water zones.", icon: Droplets },
  { title: "Lakeside Events", description: "Host unforgettable evenings beside the water.", icon: PartyPopper },
  { title: "Fishing Zones", description: "Peaceful fishing corners in naturally shaded areas.", icon: Fish },
  { title: "Infinity Edge Pool", description: "Luxury edge pool with dramatic horizon views.", icon: Milestone }
];

export default function WaterActivities() {
  return (
    <section className="scene-layer section-shell relative overflow-hidden bg-gradient-to-b from-[#040D0A] via-[#081C15] to-[#040D0A] px-6 py-24 lg:px-10">
      <div className="water-ripple" />
      <div className="relative mx-auto max-w-7xl">
        <span className="section-kicker">Experiences</span>
        <h2 className="section-heading">
          Water &amp; <span className="accent">Recreation</span>
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity, idx) => {
            const Icon = activity.icon;
            return (
              <motion.article
                key={activity.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="group luxe-card rounded-2xl p-6"
              >
                <Icon className="h-7 w-7 text-[#D4AF37]" />
                <h3 className="mt-4 text-xl font-semibold text-[#F1FAEE]">{activity.title}</h3>
                <p className="mt-2 text-sm text-[#F1FAEE]/70">{activity.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
