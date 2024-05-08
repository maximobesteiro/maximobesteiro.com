import { Metadata } from 'next';
import Image from 'next/image';
import { Download } from 'lucide-react';
import SectionHeader from '@/components/sectionHeader';
import profilePicture from './me.jpg';

export const metadata: Metadata = {
  title: 'Maximo Besteiro | About',
};

export default function Page() {
  return (
    <>
      <SectionHeader title="About me" />
      <div className="flex flex-col-reverse items-center gap-8 rounded-2xl border border-stone-600 p-8 md:flex md:flex-row md:items-start">
        <div className="space-y-3 text-lg text-stone-400">
          <p>
            I have a strong background in web development, with extensive
            experience in both front-end and back-end technologies. I have a
            passion for clean code, scalable architecture, and building
            high-quality software.
          </p>
          <p>
            I’m driven by the potential to build products that have a real
            impact on people’s lives. Whether I’m leading a project or guiding a
            junior developer, I strive to create a collaborative and supportive
            environments where everyone can thrive.
          </p>
          <p>
            Outside of work, I enjoy chess, hiking in new landscapes, and
            playing guitar.
          </p>
        </div>
        {/* Container to enforce square shape */}
        <div className="sm:min-w-auto relative aspect-square w-1/2 min-w-60 sm:h-1/2">
          <Image
            src={profilePicture}
            alt="me"
            layout="fill"
            objectFit="cover"
            objectPosition="50% 80%"
            className="rounded-2xl opacity-85"
          />
        </div>
      </div>
      <a
        href="/Maximo_Besteiro_CV_en.pdf"
        className="flex w-fit gap-3 text-stone-400 duration-200 hover:text-stone-100"
        download="Maximo_Besteiro_CV_en.pdf"
      >
        <Download className="h-6 w-6" />
        <span>See my resume</span>
      </a>
    </>
  );
}
