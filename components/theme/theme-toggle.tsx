"use client";

import { useEffect, useState } from "react";

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
          <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
            <path
              fill="currentColor"
              d="M21 14.5A8.5 8.5 0 0 1 9.5 3a7 7 0 1 0 11.5 11.5Z"
            />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
            <path
              fill="currentColor"
              d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0-4a1 1 0 0 1 1 1v1.5a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1Zm0 16.5a1 1 0 0 1 1 1V22a1 1 0 1 1-2 0v-1.5a1 1 0 0 1 1-1Zm9-7.5a1 1 0 0 1-1 1h-1.5a1 1 0 1 1 0-2H20a1 1 0 0 1 1 1ZM5.5 12a1 1 0 0 1-1 1H3a1 1 0 1 1 0-2h1.5a1 1 0 0 1 1 1Zm12.4-5.4a1 1 0 0 1 0 1.4l-1.1 1.1a1 1 0 1 1-1.4-1.4l1.1-1.1a1 1 0 0 1 1.4 0ZM8.6 15.3a1 1 0 0 1 0 1.4l-1.1 1.1a1 1 0 0 1-1.4-1.4l1.1-1.1a1 1 0 0 1 1.4 0Zm8.2 1.4a1 1 0 0 1-1.4 0l-1.1-1.1a1 1 0 1 1 1.4-1.4l1.1 1.1a1 1 0 0 1 0 1.4ZM8.6 8.7a1 1 0 0 1-1.4 0L6.1 7.6a1 1 0 1 1 1.4-1.4l1.1 1.1a1 1 0 0 1 0 1.4Z"
            />
          </svg>
        )}
      </span>
    </button>
  );
}
