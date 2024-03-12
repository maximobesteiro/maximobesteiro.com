import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { useIntersectionObserver } from 'usehooks-ts';

const PageHeader: React.FC = () => {
  const pathname = usePathname();
  const { isIntersecting, ref } = useIntersectionObserver({
    initialIsIntersecting: true,
  });

  return (
    <header ref={ref}>
      <div
        className={`fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b ${
          isIntersecting ? 'border-transparent' : 'border-zinc-800'
        }`}
      >
        <div className="container flex items-center justify-between p-6 mx-auto">
          <Link
            href={pathname.startsWith('/projects/') ? '/projects' : '/'}
            className="duration-200 text-zinc-300 hover:text-zinc-100"
          >
            <ArrowLeft className="w-6 h-6 " />
          </Link>
          {!pathname.startsWith('/projects/') && (
            <nav>
              <ul className="flex gap-8 text-xl">
                <li>
                  <Link
                    href={'/about'}
                    className="duration-200 text-zinc-400 hover:text-zinc-100"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href={'/projects'}
                    className="duration-200 text-zinc-400 hover:text-zinc-100"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href={'/contact'}
                    className="duration-200 text-zinc-400 hover:text-zinc-100"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
