import Link from "next/link";
import BrandMark from "@/components/BrandMark";

export default function Footer() {
  return (
    <footer className="mx-2 mb-2 rounded-[2rem] border border-[#D4AF37]/20 bg-[#040D0A]/85 px-6 py-12 lg:mx-4 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
        <div>
          <BrandMark href="#" />
          <p className="mt-3 max-w-xs text-sm text-[#F1FAEE]/70">
            Gulab Singh Film City is where cinema, celebrations, and nature come together in one iconic destination.
          </p>
        </div>

        <div>
          <h3 className="text-sm uppercase tracking-[0.14em] text-[#D4AF37]">Quick Links</h3>
          <div className="mt-3 flex flex-col gap-2 text-sm text-[#F1FAEE]/78">
            <Link href="#about" className="hover:text-[#D4AF37]">About</Link>
            <Link href="#locations" className="hover:text-[#D4AF37]">Locations</Link>
            <Link href="#services" className="hover:text-[#D4AF37]">Services</Link>
            <Link href="#inquiry" className="hover:text-[#D4AF37]">Inquiry</Link>
          </div>
        </div>

        <div>
          <h3 className="text-sm uppercase tracking-[0.14em] text-[#D4AF37]">Contact</h3>
          <p className="mt-3 text-sm text-[#F1FAEE]/78">Phone: +91 00000 00000</p>
          <p className="text-sm text-[#F1FAEE]/78">Email: hello@gulabsinghflimcity.com</p>
          <Link
            href="https://youtube.com/@gulabsinghagriform4576"
            target="_blank"
            className="mt-1 block text-sm text-[#D4AF37] hover:underline"
          >
            YouTube: @gulabsinghagriform4576
          </Link>
          <p className="mt-3 text-xs text-[#F1FAEE]/55">Open for shoots, events, and bookings all year.</p>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-[#D4AF37]/10 pt-5 text-xs text-[#F1FAEE]/55">
        © {new Date().getFullYear()} Gulab Singh Film City. All rights reserved.
      </div>
    </footer>
  );
}
