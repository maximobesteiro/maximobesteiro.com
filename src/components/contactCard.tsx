import Link from 'next/link';
import { ReactNode } from 'react';

interface ContactCardProps {
  icon: ReactNode;
  title: string;
  value: string;
  link: string;
  openInNewTab?: boolean;
}

const ContactCard: React.FC<ContactCardProps> = ({
  icon,
  title,
  value,
  link,
  openInNewTab = true,
}) => {
  return (
    <Link
      href={link}
      target={openInNewTab ? '_blank' : '_self'}
      rel="noopener noreferrer"
      className="group flex w-full flex-col items-center gap-4 rounded-2xl border border-stone-600 p-8 duration-200 hover:border-yellow-500 md:flex-row md:justify-between"
    >
      <div className="flex items-center gap-5 text-sm text-stone-400 group-hover:text-stone-100">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-400 duration-200 group-hover:border-stone-100 md:h-12 md:w-12">
          {icon}
        </div>
        <div className="text-2xl duration-200 md:text-3xl">{title}</div>
      </div>
      <div className="text-2xl font-bold text-stone-600 duration-200 group-hover:text-stone-100 md:text-3xl">
        {value}
      </div>
    </Link>
  );
};

export default ContactCard;
