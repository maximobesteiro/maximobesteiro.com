import { notFound } from 'next/navigation';
import { ExternalLink } from 'lucide-react';
import { projects } from '@content';
import Link from 'next/link';

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
    <article className="space-y-10 md:space-y-14">
      <header className="text-center">
        <h2 className="text-4xl font-bold text-zinc-100">{project.title}</h2>
        {project.description && (
          <p className="mt-6 text-lg text-zinc-400">{project.description}</p>
        )}
        {project.links && (
          <div className="flex gap-8 mt-14 justify-center">
            {project.links.map((link) => (
              <Link
                key={link.type}
                href={link.url}
                className="flex gap-3 w-fit border border-zinc-600 p-3 rounded-xl text-zinc-400 hover:border-zinc-100 hover:text-zinc-100 duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-lg">{link.type}</span>
                <ExternalLink className="w-6 h-6" />
              </Link>
            ))}
          </div>
        )}
      </header>
      <hr className="my-4 border-zinc-600" />
      {project.skills && (
        <>
          <div>
            <h3 className="text-2xl font-bold">Skills Involved</h3>
            <div className="mt-6 text-zinc-400 text-lg">
              {project.skills?.join(' • ')}
            </div>
          </div>
          <hr className="my-4 border-zinc-600" />
        </>
      )}
      <div
        className="prose prose-invert prose-zinc prose-hr:border-zinc-800 text-zinc-400 max-w-none"
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
