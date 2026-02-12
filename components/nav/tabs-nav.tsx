"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { projects } from "@/data/projects";
import { Home } from "@/components/icons";

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
          <Home size={16} aria-hidden="true" />
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
