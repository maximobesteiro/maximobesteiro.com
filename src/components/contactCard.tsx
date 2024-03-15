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
      className="w-full flex flex-col items-center gap-4 md:flex-row md:justify-between border border-zinc-600 hover:border-zinc-100 rounded-2xl p-8 group duration-200"
    >
      <div className="flex gap-5 items-center text-sm text-zinc-400 group-hover:text-zinc-100">
        <div className="w-12 h-12 rounded-full flex items-center justify-center border border-zinc-400 group-hover:border-zinc-100 duration-200">
          {icon}
        </div>
        <div className="text-3xl duration-200">{title}</div>
      </div>
      <div className="text-3xl font-bold text-zinc-600 group-hover:text-zinc-100 duration-200">
        {value}
      </div>
    </Link>
  );
};

export default ContactCard;
