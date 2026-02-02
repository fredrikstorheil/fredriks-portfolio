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

  return (
    <div className="projectPage">
      <div className="projectContent">
        <h1 className="projectPageTitle">{project.title}</h1>

        <figure
          className={`projectMainPhoto projectMedia-${project.slug}`}
          role="img"
          aria-label={`${project.title} hovedbilde`}
        >
          <img
            className="projectMediaLogo projectMediaLogo--main"
            src={project.logo}
            alt=""
            aria-hidden="true"
            loading="lazy"
          />
        </figure>

        <p className="projectBodyText">{project.subtitle}</p>

        {[
          ...(project.context ?? []),
          ...(project.role ?? []),
          ...(project.process ?? []),
          ...(project.outcome ?? []),
        ].map((text, idx) => (
          <section key={idx} className="projectBlock">
            <div className="projectPhoto" aria-hidden="true">
              <span className="projectPhotoLabel">Bilde</span>
            </div>
            <p className="projectBodyText">{text}</p>
          </section>
        ))}
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}
