"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { projects } from "@/data/projects";

export function TabsNav() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <nav className="tabNav" aria-label="Prosjektnavigasjon">
      <Link
        href="/"
        className={`tab${isActive("/") ? " tabActive" : ""}`}
        aria-current={isActive("/") ? "page" : undefined}
      >
        <span className="tabIcon" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="16" height="16" focusable="false">
            <path
              d="M4 10.5L12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5Z"
              fill="currentColor"
            />
          </svg>
        </span>
        Hjem
      </Link>
      <span className="tabDivider" aria-hidden="true" />
      {projects.map((project) => {
        const href = `/projects/${project.slug}`;
        const active = isActive(href);
        return (
          <Link
            key={project.slug}
            href={href}
            className={`tab${active ? " tabActive" : ""}`}
            aria-current={active ? "page" : undefined}
          >
            {project.title}
          </Link>
        );
      })}
    </nav>
  );
}
