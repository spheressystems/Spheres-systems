"use client";

import { Theme, type ThemeToggleSize, type ThemeToggleVariant } from "@/components/ui/theme";

interface ThemeToggleProps {
  variant?: ThemeToggleVariant;
  size?: ThemeToggleSize;
  showLabel?: boolean;
  className?: string;
}

export function ThemeToggle({
  variant = "button",
  size = "md",
  showLabel = false,
  className,
}: ThemeToggleProps = {}) {
  return (
    <Theme
      variant={variant}
      size={size}
      showLabel={showLabel}
      themes={["light", "dark"]}
      className={className}
    />
  );
}
