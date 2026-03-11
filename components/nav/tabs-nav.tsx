"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { projects } from "@/data/projects";
import { Home } from "@/components/icons";

const projectNavIcons: Record<string, string> = {
  "re-source": "/logos/icon-resource.svg",
  "credit-builder": "/logos/icon-credit-builder.svg",
  scoreflow: "/logos/icon-compete.svg",
  "portfolio-insights": "/logos/icon-portfolio-insights.svg",
};

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
          <Home size={24} aria-hidden="true" />
        </span>
        Hjem
      </Link>
      {projects.map((project) => {
        const href = `/projects/${project.slug}`;
        const active = isActive(href);
        const iconSrc = projectNavIcons[project.slug];
        return (
          <Link
            key={project.slug}
            href={href}
            className={`tab${active ? " tabActive" : ""}`}
            aria-current={active ? "page" : undefined}
          >
            {iconSrc ? (
              <span className="tabIcon tabIconProject" aria-hidden="true">
                <Image
                  className="tabProjectIcon"
                  src={iconSrc}
                  alt=""
                  width={24}
                  height={24}
                  aria-hidden="true"
                />
              </span>
            ) : null}
            {project.title}
          </Link>
        );
      })}
    </nav>
  );
}
