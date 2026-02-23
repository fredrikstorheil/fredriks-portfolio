"use client";

import { useEffect, useMemo, useState } from "react";

import type { CaseArtifact } from "@/data/project-case";

import { CaseSection } from "@/components/case/case-section";

type ArtifactsGalleryProps = {
  artifacts: CaseArtifact[];
};

export function ArtifactsGallery({ artifacts }: ArtifactsGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeArtifact = useMemo(() => {
    if (activeIndex === null) {
      return null;
    }

    return artifacts[activeIndex] ?? null;
  }, [activeIndex, artifacts]);

  useEffect(() => {
    if (!activeArtifact) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeArtifact]);

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
              onClick={() => setActiveIndex(index)}
            >
              <span className="artifactThumb" aria-hidden="true">
                {artifact.thumbnail ? (
                  <img src={artifact.thumbnail} alt="" loading="lazy" />
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
                <img src={activeArtifact.thumbnail} alt="" loading="lazy" />
              ) : (
                <span className="artifactPlaceholder">Preview</span>
              )}
            </div>

            <a
              className="artifactModalLink"
              href={activeArtifact.href}
              target="_blank"
              rel="noreferrer"
            >
              Apne artefakt
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
}
