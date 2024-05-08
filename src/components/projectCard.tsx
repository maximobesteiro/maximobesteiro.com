import Link from 'next/link';
import type { Projects } from '@content';

const ProjectCard: React.FC<{ project: Projects }> = ({
  project: { title, description, dateFrom, dateTo, slug },
}) => {
  return (
    <Link href={`/projects/${slug}`}>
      <article className="group flex w-full flex-col gap-4 rounded-2xl border border-stone-600 p-8 duration-200 hover:border-stone-100">
        <div className="flex gap-2 text-sm font-semibold text-stone-400 duration-200 group-hover:text-stone-200">
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
        <h2 className="text-2xl font-bold text-stone-400 duration-200 group-hover:text-white lg:text-3xl">
          {title}
        </h2>
        <p className="text-sm text-stone-400 duration-200 group-hover:text-stone-200">
          {description}
        </p>
      </article>
    </Link>
  );
};

export default ProjectCard;
