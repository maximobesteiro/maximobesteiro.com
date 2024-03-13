import { Metadata } from 'next';
import Link from 'next/link';
import { projects } from '@content';
import SectionHeader from '@/components/sectionHeader';

export const metadata: Metadata = {
  title: 'Projects',
};

export default function Page() {
  return (
    <>
      <SectionHeader
        title="Projects"
        subtitle="Most of the projects are from work and some are on my own time."
      />
      <div className="w-full h-px bg-zinc-800"></div>
      {projects.map((project) => (
        <article
          key={project.slug}
          className={project.featured ? 'bg-slate-300' : ''}
        >
          <Link href={project.permalink}>
            <h2> ---------- {project.title}</h2>
          </Link>
          <p>{project.skills?.join(', ')}</p>
        </article>
      ))}
    </>
  );
}
