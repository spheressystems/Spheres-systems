import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";

interface SiteLogoProps {
  href?: string;
  className?: string;
  showWordmark?: boolean;
}

export function SiteLogo({
  href = "/",
  className,
  showWordmark = true,
}: SiteLogoProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 font-serif text-2xl leading-none tracking-tight text-foreground",
        className,
      )}
      aria-label={siteConfig.name}
    >
      <span
        aria-hidden
        className="relative inline-block size-7 rounded-full bg-gradient-to-br from-primary via-chart-2 to-chart-4 shadow-inner shadow-foreground/10 transition-transform duration-500 ease-out group-hover:scale-105"
      >
        <span className="absolute inset-1 rounded-full bg-background/40 backdrop-blur-[1px]" />
        <span className="absolute inset-0 rounded-full ring-1 ring-foreground/10" />
      </span>
      {showWordmark ? (
        <span className="text-[1.35rem]">
          {siteConfig.shortName}
          <span className="text-muted-foreground">{" "}systems</span>
        </span>
      ) : null}
    </Link>
  );
}
