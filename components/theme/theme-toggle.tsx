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

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const stored = localStorage.getItem(storageKey);
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    if (stored === "light" || stored === "dark") {
      setTheme(stored);
      document.documentElement.setAttribute("data-theme", stored);
    } else {
      setTheme(media.matches ? "dark" : "light");
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
