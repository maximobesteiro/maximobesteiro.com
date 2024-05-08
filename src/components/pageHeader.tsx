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
        className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur duration-200 ${
          isIntersecting ? 'border-transparent' : 'border-stone-800'
        }`}
      >
        <div className="container mx-auto flex items-center justify-between p-6">
          <Link
            href={pathname.startsWith('/projects/') ? '/projects' : '/'}
            className="text-stone-300 duration-200 hover:text-stone-100"
          >
            <ArrowLeft className="h-6 w-6" />
          </Link>
          {!pathname.startsWith('/projects/') && (
            <nav>
              <ul className="flex gap-8">
                <li>
                  <Link
                    href={'/about'}
                    className="text-stone-400 duration-200 hover:text-stone-100"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href={'/projects'}
                    className="text-stone-400 duration-200 hover:text-stone-100"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href={'/contact'}
                    className="text-stone-400 duration-200 hover:text-stone-100"
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
