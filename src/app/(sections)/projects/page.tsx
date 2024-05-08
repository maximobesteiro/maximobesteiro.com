import { Metadata } from 'next';
import { projects } from '@content';
import SectionHeader from '@/components/sectionHeader';
import ProjectCard from '@/components/projectCard';

export const metadata: Metadata = {
  title: 'Maximo Besteiro | Projects',
};

export default function Page() {
  const sorted = projects
    .filter((project) => project.published)
    .sort(
      (a, b) =>
        new Date(b.dateFrom ?? Number.POSITIVE_INFINITY).getTime() -
        new Date(a.dateFrom ?? Number.POSITIVE_INFINITY).getTime(),
    );

  return (
    <>
      <SectionHeader
        title="Projects"
        subtitle="Most of the projects are from work and some are on my own time."
      />
      <hr className="border-stone-800" />
      <div className="flex flex-col gap-8">
        {sorted.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </>
  );
}
