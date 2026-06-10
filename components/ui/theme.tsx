"use client";

import * as React from "react";
import { motion } from "motion/react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";

export type Theme = "light" | "dark";
export type ThemeToggleVariant = "button" | "switch";
export type ThemeToggleSize = "sm" | "md" | "lg";

interface ThemeProps {
  variant?: ThemeToggleVariant;
  size?: ThemeToggleSize;
  showLabel?: boolean;
  themes?: Theme[];
  className?: string;
}

const themeIcons: Record<Theme, typeof Sun> = {
  light: Sun,
  dark: Moon,
};

const themeLabels: Record<Theme, string> = {
  light: "Claro",
  dark: "Oscuro",
};

const sizeClasses: Record<ThemeToggleSize, string> = {
  sm: "h-8 px-2 text-xs",
  md: "h-10 px-3 text-sm",
  lg: "h-12 px-4 text-base",
};

const iconSizes: Record<ThemeToggleSize, number> = {
  sm: 14,
  md: 16,
  lg: 20,
};

function isTheme(value: unknown, themes: Theme[]): value is Theme {
  return typeof value === "string" && themes.includes(value as Theme);
}

export function Theme({
  variant = "button",
  size = "md",
  showLabel = false,
  themes = ["light", "dark"],
  className,
}: ThemeProps) {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const applyTheme = React.useCallback(
    (next: Theme) => {
      if (typeof document === "undefined") {
        setTheme(next);
        return;
      }
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      const supportsViewTransitions =
        "startViewTransition" in document &&
        typeof (
          document as Document & {
            startViewTransition?: (cb: () => void) => unknown;
          }
        ).startViewTransition === "function";

      if (reduceMotion || !supportsViewTransitions) {
        setTheme(next);
        return;
      }

      (
        document as Document & {
          startViewTransition: (cb: () => void) => unknown;
        }
      ).startViewTransition(() => {
        setTheme(next);
      });
    },
    [setTheme],
  );

  if (!mounted) {
    return (
      <span
        aria-hidden
        className={cn(
          "inline-block rounded-lg",
          variant === "switch"
            ? size === "sm"
              ? "h-6 w-11"
              : size === "md"
                ? "h-7 w-13"
                : "h-8 w-15"
            : sizeClasses[size],
          className,
        )}
      />
    );
  }

  const active: Theme = isTheme(theme, themes)
    ? theme
    : isTheme(resolvedTheme, themes)
      ? resolvedTheme
      : themes[0];

  if (variant === "switch") {
    const isLight = active === "light";
    const trackSize =
      size === "sm" ? "h-6 w-11" : size === "md" ? "h-7 w-13" : "h-8 w-15";
    const knobSize =
      size === "sm" ? "h-4 w-4" : size === "md" ? "h-5 w-5" : "h-6 w-6";
    const knobOffset = isLight ? 2 : size === "sm" ? 24 : size === "md" ? 26 : 30;
    const iconSize = size === "sm" ? 10 : size === "md" ? 12 : 14;

    return (
      <motion.button
        type="button"
        onClick={() => applyTheme(isLight ? "dark" : "light")}
        aria-label={isLight ? "Activar tema oscuro" : "Activar tema claro"}
        className={cn(
          "relative inline-flex items-center rounded-full border-2 border-border bg-muted transition-colors",
          trackSize,
          className,
        )}
      >
        <motion.span
          className={cn(
            "inline-flex items-center justify-center rounded-full bg-foreground text-background shadow-md",
            knobSize,
          )}
          animate={{ x: knobOffset }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        >
          <motion.span
            key={active}
            initial={{ rotate: -180, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="inline-flex"
          >
            {isLight ? (
              <Sun size={iconSize} className="text-yellow-500" />
            ) : (
              <Moon size={iconSize} className="text-slate-300" />
            )}
          </motion.span>
        </motion.span>
      </motion.button>
    );
  }

  const nextTheme = themes[(themes.indexOf(active) + 1) % themes.length];
  const Icon = themeIcons[active];

  return (
    <motion.button
      type="button"
      onClick={() => applyTheme(nextTheme)}
      aria-label={`Cambiar a tema ${themeLabels[nextTheme].toLowerCase()}`}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg border transition-colors",
        "border-border bg-card text-foreground hover:bg-muted",
        sizeClasses[size],
        className,
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.span
        key={active}
        initial={{ rotate: -180, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="inline-flex"
      >
        <Icon size={iconSizes[size]} />
      </motion.span>
      {showLabel && <span className="font-medium">{themeLabels[active]}</span>}
    </motion.button>
  );
}
