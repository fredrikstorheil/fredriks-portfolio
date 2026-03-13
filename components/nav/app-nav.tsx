"use client";

import { useEffect, useRef, useState } from "react";

import { TabsNav } from "@/components/nav/tabs-nav";

const MOBILE_NAV_MEDIA_QUERY = "(max-width: 1023px)";
const SCROLL_DELTA_THRESHOLD = 2;
const SCROLL_TOP_THRESHOLD = 24;
const HIDE_SCROLL_DISTANCE = 28;
const SHOW_SCROLL_DISTANCE = 20;
const TOGGLE_SUPPRESSION_MS = 260;

export function AppNav() {
  const [isNavTopHidden, setIsNavTopHidden] = useState(false);
  const isMobileNavRef = useRef(false);
  const lastScrollYRef = useRef(0);
  const accumulatedScrollRef = useRef(0);
  const scrollDirectionRef = useRef<1 | -1 | 0>(0);
  const suppressToggleUntilRef = useRef(0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia(MOBILE_NAV_MEDIA_QUERY);
    const legacyMediaQuery = mediaQuery as MediaQueryList & {
      addListener?: (listener: () => void) => void;
      removeListener?: (listener: () => void) => void;
    };

    const syncViewportMode = () => {
      isMobileNavRef.current = mediaQuery.matches;
      lastScrollYRef.current = Math.max(window.scrollY, 0);
      accumulatedScrollRef.current = 0;
      scrollDirectionRef.current = 0;
      suppressToggleUntilRef.current = 0;

      if (!mediaQuery.matches || window.scrollY <= SCROLL_TOP_THRESHOLD) {
        setIsNavTopHidden(false);
      }
    };

    const toggleNavTop = (nextHidden: boolean) => {
      setIsNavTopHidden((currentHidden) => {
        if (currentHidden === nextHidden) {
          return currentHidden;
        }

        suppressToggleUntilRef.current = window.performance.now() + TOGGLE_SUPPRESSION_MS;
        accumulatedScrollRef.current = 0;
        scrollDirectionRef.current = 0;
        return nextHidden;
      });
    };

    const updateNavVisibility = () => {
      frameRef.current = null;

      if (!isMobileNavRef.current) {
        return;
      }

      const currentScrollY = Math.max(window.scrollY, 0);
      const scrollDelta = currentScrollY - lastScrollYRef.current;

      lastScrollYRef.current = currentScrollY;

      if (currentScrollY <= SCROLL_TOP_THRESHOLD) {
        toggleNavTop(false);
        return;
      }

      if (Math.abs(scrollDelta) < SCROLL_DELTA_THRESHOLD) {
        return;
      }

      if (window.performance.now() < suppressToggleUntilRef.current) {
        return;
      }

      const nextDirection = scrollDelta > 0 ? 1 : -1;

      if (scrollDirectionRef.current !== nextDirection) {
        scrollDirectionRef.current = nextDirection;
        accumulatedScrollRef.current = scrollDelta;
      } else {
        accumulatedScrollRef.current += scrollDelta;
      }

      if (nextDirection > 0 && accumulatedScrollRef.current >= HIDE_SCROLL_DISTANCE) {
        toggleNavTop(true);
        return;
      }

      if (nextDirection < 0 && accumulatedScrollRef.current <= -SHOW_SCROLL_DISTANCE) {
        toggleNavTop(false);
      }
    };

    const handleScroll = () => {
      if (!isMobileNavRef.current || frameRef.current !== null) {
        return;
      }

      frameRef.current = window.requestAnimationFrame(updateNavVisibility);
    };

    syncViewportMode();

    window.addEventListener("scroll", handleScroll, { passive: true });
    const supportsMediaQueryEvents = typeof mediaQuery.addEventListener === "function";

    if (supportsMediaQueryEvents) {
      mediaQuery.addEventListener("change", syncViewportMode);
    } else {
      legacyMediaQuery.addListener?.(syncViewportMode);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (supportsMediaQueryEvents) {
        mediaQuery.removeEventListener("change", syncViewportMode);
      } else {
        legacyMediaQuery.removeListener?.(syncViewportMode);
      }

      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <header className="appNav" aria-label="Hovednavigasjon">
      <div className="appNavInner">
        <div className={`appNavTop${isNavTopHidden ? " appNavTopHidden" : ""}`}>
          <p className="appName">Fredrik Storheil</p>
          <p className="appRole">Produktdesigner</p>
        </div>
        <TabsNav />
      </div>
    </header>
  );
}
