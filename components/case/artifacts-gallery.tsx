"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

import type { CaseArtifact } from "@/data/project-case";

import { CaseSection } from "@/components/case/case-section";
import { isSvgImage } from "@/lib/image-paths";

type ArtifactsGalleryProps = {
  artifacts: CaseArtifact[];
};

const FOCUSABLE = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

export function ArtifactsGallery({ artifacts }: ArtifactsGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const activeArtifact = useMemo(() => {
    if (activeIndex === null) {
      return null;
    }

    return artifacts[activeIndex] ?? null;
  }, [activeIndex, artifacts]);

  // Focus close button when modal opens; restore trigger focus when it closes
  useEffect(() => {
    if (activeArtifact) {
      const firstFocusable = modalRef.current?.querySelector<HTMLElement>(FOCUSABLE);
      firstFocusable?.focus();
    } else {
      triggerRef.current?.focus();
      triggerRef.current = null;
    }
  }, [activeArtifact]);

  // Escape to close + Tab trap
  useEffect(() => {
    if (!activeArtifact) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
        return;
      }

      if (event.key === "Tab" && modalRef.current) {
        const focusable = Array.from(modalRef.current.querySelectorAll<HTMLElement>(FOCUSABLE));
        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey) {
          if (document.activeElement === first) {
            event.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            event.preventDefault();
            first.focus();
          }
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeArtifact]);

  function openModal(index: number, trigger: HTMLButtonElement) {
    triggerRef.current = trigger;
    setActiveIndex(index);
  }

  if (artifacts.length === 0) {
    return null;
  }

  return (
    <>
      <CaseSection
        title="Artefakter"
        lede="Utvalgte leveranser, skisser og beslutningsunderlag fra arbeidet."
      >
        <div className="artifactsGrid">
          {artifacts.map((artifact, index) => (
            <button
              key={`${artifact.label}-${index}`}
              type="button"
              className="artifactCard"
              onClick={(e) => openModal(index, e.currentTarget)}
            >
              <span className="artifactThumb" aria-hidden="true">
                {artifact.thumbnail ? (
                  <Image
                    src={artifact.thumbnail}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 280px, (min-width: 768px) 33vw, 100vw"
                    unoptimized={isSvgImage(artifact.thumbnail)}
                  />
                ) : (
                  <span className="artifactPlaceholder">Preview</span>
                )}
              </span>
              <span className="artifactMeta">
                <span className="artifactLabel">{artifact.label}</span>
                <span className="artifactType">{artifact.type}</span>
              </span>
            </button>
          ))}
        </div>
      </CaseSection>

      {activeArtifact ? (
        <div
          className="artifactModal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="artifact-modal-title"
          onClick={() => setActiveIndex(null)}
        >
          <div
            ref={modalRef}
            className="artifactModalContent"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="artifactModalClose"
              onClick={() => setActiveIndex(null)}
            >
              Lukk
            </button>

            <h3 id="artifact-modal-title" className="artifactModalTitle">
              {activeArtifact.label}
            </h3>
            <p className="artifactModalType">{activeArtifact.type}</p>

            <div className="artifactModalPreview" aria-hidden="true">
              {activeArtifact.thumbnail ? (
                <Image
                  src={activeArtifact.thumbnail}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 840px, 100vw"
                  unoptimized={isSvgImage(activeArtifact.thumbnail)}
                />
              ) : (
                <span className="artifactPlaceholder">Preview</span>
              )}
            </div>

            <a
              className="artifactModalLink"
              href={activeArtifact.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`Åpne ${activeArtifact.label} (åpnes i ny fane)`}
            >
              Åpne artefakt
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
}
