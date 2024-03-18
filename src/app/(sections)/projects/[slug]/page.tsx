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
          <div className="mt-14 flex justify-center gap-8">
            {project.links.map((link) => (
              <Link
                key={link.type}
                href={link.url}
                className="flex w-fit gap-3 rounded-xl border border-zinc-600 p-3 text-zinc-400 duration-200 hover:border-zinc-100 hover:text-zinc-100"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-lg">{link.type}</span>
                <ExternalLink className="h-6 w-6" />
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
            <div className="mt-6 text-lg text-zinc-400">
              {project.skills?.join(' • ')}
            </div>
          </div>
          <hr className="my-4 border-zinc-600" />
        </>
      )}
      <div
        className="prose prose-zinc prose-invert max-w-none text-zinc-400 prose-hr:border-zinc-800"
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
