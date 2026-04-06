import Link from "next/link";

type BrandMarkProps = {
  href?: string;
  compact?: boolean;
};

export default function BrandMark({ href = "#", compact = false }: BrandMarkProps) {
  const content = (
    <div className="group flex items-center gap-3 text-left">
      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D4AF37]/45 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.18),rgba(4,13,10,0.88))] shadow-[0_0_18px_rgba(212,175,55,0.16)] transition-transform duration-300 group-hover:scale-105">
        <span className="font-display text-lg font-semibold tracking-[0.28em] text-[#D4AF37]">GS</span>
      </div>
      <div className="leading-none">
        <p className={`font-display uppercase text-[#D4AF37] ${compact ? "text-xs tracking-[0.36em]" : "text-sm tracking-[0.42em]"}`}>
          Film City
        </p>
        <p className={`mt-1 font-semibold text-white ${compact ? "text-base" : "text-[1.75rem]"}`}>Gulab Singh</p>
      </div>
    </div>
  );

  return (
    <Link href={href} className="inline-flex items-center">
      {content}
    </Link>
  );
}
