import { notFound } from 'next/navigation';
import { projects } from '@content';

interface ProjectProps {
  params: {
    slug: string;
  };
}

function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export default function ProjectPage({ params }: ProjectProps) {
  const project = getProjectBySlug(params.slug);

  if (project == null) {
    notFound();
  }

  return (
    <article className="prose dark:prose-invert py-6">
      <header>
        <h1 className="mb-2">{project.title}</h1>
        {project.description && (
          <p className="mt-0 text-xl text-slate-700 dark:text-slate-200">
            {project.description}
          </p>
        )}
      </header>
      <hr className="my-4" />
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: project.content }}
      ></div>
    </article>
  );
}

export function generateMetadata({ params }: ProjectProps) {
  const project = getProjectBySlug(params.slug);

  if (project == null) {
    return {};
  }

  return {
    title: `Maximo Besteiro | ${project.meta?.title || project.title}`,
    description: project.meta?.description || project.description,
  };
}

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}
