import Link from 'next/link';
import type { Projects } from '@content';

const ProjectCard: React.FC<{ project: Projects }> = ({
  project: { title, description, dateFrom, dateTo, slug },
}) => {
  return (
    <Link href={`/projects/${slug}`}>
      <article className="w-full flex flex-col gap-4 border border-zinc-600 hover:border-zinc-100 rounded-2xl p-8 group duration-200">
        <div className="flex gap-2 text-sm text-zinc-400 font-semibold group-hover:text-zinc-200 duration-200">
          <time dateTime={dateFrom}>
            {Intl.DateTimeFormat('en-US', {
              month: 'short',
              year: 'numeric',
            }).format(new Date(dateFrom))}
          </time>
          {dateTo && dateTo === 'present' && ' - Present'}
          {dateTo && dateTo !== 'present' && (
            <>
              <span> - </span>
              <time dateTime={dateTo}>
                {Intl.DateTimeFormat('en-US', {
                  month: 'short',
                  year: 'numeric',
                }).format(new Date(dateTo))}
              </time>
            </>
          )}
        </div>
        <h2 className="text-xl font-bold duration-200 lg:text-3xl text-zinc-400 group-hover:text-white">
          {title}
        </h2>
        <p className="text-sm duration-200 text-zinc-400 group-hover:text-zinc-200">
          {description}
        </p>
      </article>
    </Link>
  );
};

export default ProjectCard;
