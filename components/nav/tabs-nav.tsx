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
      <Link href="/" className={`tab${isActive("/") ? " tabActive" : ""}`}>
        Hjem
      </Link>
      {projects.map((project) => {
        const href = `/projects/${project.slug}`;
        return (
          <Link
            key={project.slug}
            href={href}
            className={`tab${isActive(href) ? " tabActive" : ""}`}
          >
            {project.title}
          </Link>
        );
      })}
    </nav>
  );
}
