import Hero from "@/components/Hero";
import About from "@/components/About";
import Locations from "@/components/Locations";
import LatestShoot from "@/components/LatestShoot";
import Gallery from "@/components/Gallery";
import WaterActivities from "@/components/WaterActivities";
import Services from "@/components/Services";
import YouTubeSection from "@/components/YouTubeSection";
import Inquiry from "@/components/Inquiry";
import Testimonials from "@/components/Testimonials";
import MapSection from "@/components/MapSection";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Locations />
      <LatestShoot />
      <Gallery />
      <WaterActivities />
      <Services />
      <YouTubeSection />
      <Testimonials />
      <Inquiry />
      <MapSection />
    </>
  );
}
