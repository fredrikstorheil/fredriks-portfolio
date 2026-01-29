import { notFound } from "next/navigation";

import { getProjectBySlug, projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const sections = [
    { title: "Kontekst", items: project.context },
    { title: "Rolle", items: project.role },
    { title: "Prosess", items: project.process },
    { title: "Resultat", items: project.outcome },
  ];

  return (
    <article className="projectDetail">
      <header className="projectDetailHeader">
        <h1 className="projectDetailTitle">{project.title}</h1>
        <p className="projectDetailSubtitle">{project.subtitle}</p>
      </header>

      {sections.map((section) => (
        <section key={section.title} className="projectDetailSection">
          <h2 className="projectDetailHeading">{section.title}</h2>
          <ul className="projectDetailList">
            {section.items.map((item) => (
              <li key={item} className="projectDetailListItem">
                {item}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </article>
  );
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}
