import { Metadata } from 'next';
import { Linkedin, Mail, Github } from 'lucide-react';
import SectionHeader from '@/components/sectionHeader';
import ContactCard from '@/components/contactCard';

export const metadata: Metadata = {
  title: 'Maximo Besteiro | Contact',
};

export default function Page() {
  return (
    <>
      <SectionHeader title="Contact" />
      <div className="flex flex-col gap-8">
        <ContactCard
          icon={<Linkedin />}
          title="LinkedIn"
          value="/maximobesteiro.com"
          link="https://www.linkedin.com/in/maximobesteiro/"
        />
        <ContactCard
          icon={<Mail />}
          title="Email"
          value="hello@maximobesteiro.com"
          link="mailto:hello@maximobesteiro.com"
          openInNewTab={false}
        />
        <ContactCard
          icon={<Github />}
          title="GitHub"
          value="/maximobesteiro.com"
          link="https://github.com/maximobesteiro"
        />
      </div>
    </>
  );
}
