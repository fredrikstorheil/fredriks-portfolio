"use client";

import Image from "next/image";
import { type CSSProperties, useCallback, useEffect, useId, useMemo, useState } from "react";
import { createPortal } from "react-dom";

import { isSvgImage } from "@/lib/image-paths";

type JourneySketchScreen = {
  title: string;
  caption?: string;
  frameAspectRatio?: string;
  frameWidth?: string;
  imageSrc?: string;
  imageAlt?: string;
};

type JourneySketchItem = {
  step: number;
  title: string;
  caption?: string;
  screens: JourneySketchScreen[];
};

type JourneySketchBoardProps = {
  items: JourneySketchItem[];
  ariaLabel?: string;
  showItemHeader?: boolean;
  showScreenMeta?: boolean;
  showScreenIndex?: boolean;
  disableRailScroll?: boolean;
  stretchScreens?: boolean;
};

export function JourneySketchBoard({
  items,
  ariaLabel = "Skisseboard for de fem hovedreisene",
  showItemHeader = true,
  showScreenMeta = true,
  showScreenIndex = true,
  disableRailScroll = false,
  stretchScreens = false,
}: JourneySketchBoardProps) {
  const dialogTitleId = useId();
  const [activeSlide, setActiveSlide] = useState<{
    itemIndex: number;
    screenIndex: number;
  } | null>(null);

  const activeFlow = useMemo(() => {
    if (!activeSlide) {
      return null;
    }

    return items[activeSlide.itemIndex] ?? null;
  }, [activeSlide, items]);

  const activeScreen = useMemo(() => {
    if (!activeSlide || !activeFlow) {
      return null;
    }

    return activeFlow.screens[activeSlide.screenIndex] ?? null;
  }, [activeFlow, activeSlide]);

  const openSlide = (itemIndex: number, screenIndex: number) => {
    const item = items[itemIndex];
    const screen = item?.screens[screenIndex];

    if (!item || !screen || !screen.imageSrc) {
      return;
    }

    setActiveSlide({ itemIndex, screenIndex });
  };

  const closeSlide = useCallback(() => {
    setActiveSlide(null);
  }, []);

  const goToPrevious = useCallback(() => {
    if (!activeSlide || !activeFlow) {
      return;
    }

    const totalScreens = activeFlow.screens.length;
    const previousIndex = (activeSlide.screenIndex - 1 + totalScreens) % totalScreens;

    setActiveSlide({
      itemIndex: activeSlide.itemIndex,
      screenIndex: previousIndex,
    });
  }, [activeFlow, activeSlide]);

  const goToNext = useCallback(() => {
    if (!activeSlide || !activeFlow) {
      return;
    }

    const totalScreens = activeFlow.screens.length;
    const nextIndex = (activeSlide.screenIndex + 1) % totalScreens;

    setActiveSlide({
      itemIndex: activeSlide.itemIndex,
      screenIndex: nextIndex,
    });
  }, [activeFlow, activeSlide]);

  useEffect(() => {
    if (!activeSlide) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveSlide(null);
      }

      if (event.key === "ArrowLeft") {
        goToPrevious();
      }

      if (event.key === "ArrowRight") {
        goToNext();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [activeSlide, goToNext, goToPrevious]);

  return (
    <section className="journeySketchBoard" aria-label={ariaLabel}>
      <div className="journeySketchGrid">
        {items.map((item, itemIndex) => (
          <article key={`${item.step}-${item.title}`} className="journeySketchCard">
            {showItemHeader ? (
              <header className="journeySketchHeader">
                <span className="journeySketchStep">{item.step}</span>
                <h4 className="journeySketchTitle">{item.title}</h4>
              </header>
            ) : null}

            {item.caption ? (
              <p className="journeySketchCaption">
                <span className="journeySketchCaptionLabel"></span> {item.caption}
              </p>
            ) : null}

            <div
              className={`journeySketchRail${disableRailScroll ? " journeySketchRailNoScroll" : ""}`}
            >
              {item.screens.map((screen, screenIndex) => (
                <div
                  key={`${item.step}-${screen.title}-${screenIndex}`}
                  className={`journeySketchRailItem${stretchScreens ? " journeySketchRailItemStretch" : ""}`}
                >
                  <div
                    className={`journeySketchScreen${stretchScreens ? " journeySketchScreenStretch" : ""}`}
                    style={
                      screen.frameWidth
                        ? ({
                            "--journey-sketch-screen-width": screen.frameWidth,
                          } as CSSProperties)
                        : undefined
                    }
                  >
                    {showScreenMeta ? (
                      <div className="journeySketchScreenMeta">
                        {showScreenIndex ? (
                          <span className="journeySketchScreenIndex">
                            Skjerm {screenIndex + 1}
                          </span>
                        ) : null}
                        <p className="journeySketchScreenLabel">{screen.title}</p>
                        {screen.caption ? (
                          <p className="journeySketchScreenCaption">{screen.caption}</p>
                        ) : null}
                      </div>
                    ) : null}

                    {screen.imageSrc
                      ? (
                          <button
                            type="button"
                            className="journeySketchFrameButton"
                            onClick={() => openSlide(itemIndex, screenIndex)}
                            aria-label={`Åpne ${item.title} - ${screen.title} i galleri`}
                          >
                            <div
                              className="journeySketchFrame"
                              style={
                                screen.frameAspectRatio
                                  ? ({
                                      "--journey-sketch-frame-ratio": screen.frameAspectRatio,
                                    } as CSSProperties)
                                  : undefined
                              }
                            >
                              <Image
                                src={screen.imageSrc}
                                alt={screen.imageAlt ?? `${item.title} - ${screen.title}`}
                                fill
                                sizes="(min-width: 1024px) 280px, (min-width: 768px) 220px, 70vw"
                                unoptimized={isSvgImage(screen.imageSrc)}
                              />
                            </div>
                          </button>
                        )
                      : (
                          <div className="journeySketchFrame" aria-hidden="true">
                            <div className="journeySketchPlaceholder" aria-hidden="true">
                              Last opp mobilskisse
                            </div>
                          </div>
                        )}
                  </div>

                  {screenIndex < item.screens.length - 1
                    ? (
                        <svg
                          className="journeySketchArrow"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          focusable="false"
                        >
                          <path d="M5 12h14m0 0-4-4m4 4-4 4" />
                        </svg>
                      )
                    : null}
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>

      {activeSlide && activeFlow && activeScreen && activeScreen.imageSrc
        ? createPortal(
            <div className="journeySketchLightbox" role="presentation">
              <button
                type="button"
                className="journeySketchLightboxBackdrop"
                onClick={closeSlide}
                aria-label="Lukk galleri"
              />
              <div
                className="journeySketchLightboxDialog"
                role="dialog"
                aria-modal="true"
                aria-labelledby={dialogTitleId}
              >
                <header className="journeySketchLightboxHeader">
                  <div className="journeySketchLightboxMeta">
                    <p id={dialogTitleId} className="journeySketchLightboxTitle">
                      {activeFlow.step}. {activeFlow.title}
                    </p>
                    <p className="journeySketchLightboxSubtitle">
                      {activeScreen.title} · {activeSlide.screenIndex + 1}/{activeFlow.screens.length}
                    </p>
                  </div>
                  <button
                    type="button"
                    className="journeySketchLightboxClose"
                    onClick={closeSlide}
                    aria-label="Lukk galleri"
                  >
                    Lukk
                  </button>
                </header>

                <div className="journeySketchLightboxStage">
                  <button
                    type="button"
                    className="journeySketchLightboxNav journeySketchLightboxNavPrevious"
                    onClick={goToPrevious}
                    aria-label="Forrige skjerm"
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <path d="M15 5 8 12l7 7" />
                    </svg>
                  </button>

                  <figure className="journeySketchLightboxFigure">
                    <div className="journeySketchLightboxImage">
                      <Image
                        src={activeScreen.imageSrc}
                        alt={activeScreen.imageAlt ?? `${activeFlow.title} - ${activeScreen.title}`}
                        fill
                        sizes="100vw"
                        unoptimized={isSvgImage(activeScreen.imageSrc)}
                      />
                    </div>
                    {activeScreen.caption ?? activeFlow.caption ? (
                      <figcaption className="journeySketchLightboxCaption">
                        {activeScreen.caption ?? activeFlow.caption}
                      </figcaption>
                    ) : null}
                  </figure>

                  <button
                    type="button"
                    className="journeySketchLightboxNav journeySketchLightboxNavNext"
                    onClick={goToNext}
                    aria-label="Neste skjerm"
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <path d="m9 5 7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>,
            document.body
          )
        : null}

      <p className="srOnly">
        Seksjonen inneholder flyter med flere skisseplassholdere: {items
          .map((item) => item.title)
          .join(", ")}.
        Hver flyt har flere skisser med pil mellom hvert steg i flyten.
      </p>
      <p className="srOnly">
        Flyter: {items
          .map((item) => `${item.title} (${item.screens.length} skisser)`)
          .join(", ")}
        . Trykk på en skisse for å åpne gallerivisning med forrige og neste.
      </p>
    </section>
  );
}
