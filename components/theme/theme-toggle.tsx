"use client";

import { useEffect, useState } from "react";

import { Moon, Sun } from "@/components/icons";

const storageKey = "theme";

type Theme = "light" | "dark";

function getSystemTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function getInitialTheme(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  const stored = localStorage.getItem(storageKey);
  if (stored === "light" || stored === "dark") {
    return stored;
  }

  return getSystemTheme();
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const stored = localStorage.getItem(storageKey);
    if (stored === "light" || stored === "dark") {
      document.documentElement.setAttribute("data-theme", stored);
    } else {
      document.documentElement.removeAttribute("data-theme");
    }

    const handleChange = (event: MediaQueryListEvent) => {
      const current = localStorage.getItem(storageKey);
      if (current === "light" || current === "dark") {
        return;
      }
      setTheme(event.matches ? "dark" : "light");
    };

    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem(storageKey, next);
    document.documentElement.setAttribute("data-theme", next);
  };

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className={`themeToggle${isDark ? " themeToggle--dark" : ""}`}
      aria-pressed={isDark}
      aria-label="Bytt mellom lys og mørk modus"
      onClick={toggleTheme}
    >
      <span className="themeToggleThumb" aria-hidden="true">
        {isDark ? (
          <Moon size={14} aria-hidden="true" />
        ) : (
          <Sun size={14} aria-hidden="true" />
        )}
      </span>
    </button>
  );
}
