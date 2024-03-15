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
      <div className="flex flex-col-reverse items-center md:flex md:flex-row md:items-start gap-8 border border-zinc-600 p-8 rounded-2xl">
        <div className="space-y-3 text-zinc-400 text-lg">
          <p>
            I´m a Full Stack engineer, leader and mentor. I have a strong
            background in web development, with extensive experience in both
            front-end and back-end technologies. I have a passion for clean
            code, scalable architecture, and building high-quality software.
          </p>
          <p>
            I believe that technology can create a better world, and I´m driven
            by the potential to build products that have a real impact on
            people´s lives. Whether I´m leading a project or guiding a junior
            developer, I strive to create a collaborative and supportive
            environment where everyone can thrive.
          </p>
          <p>
            Outside of work, you can find me experimenting with the latest
            JavaScript frameworks, exploring the world, or trying out new song
            on my guitar.
          </p>
        </div>
        <Image
          src={profilePicture}
          alt="me"
          className="rounded-2xl opacity-85 w-1/3 h-fit max-h-96"
        />
      </div>
      <a
        href="/Maximo_Besteiro_CV_en.pdf"
        className="flex gap-3 w-fit text-zinc-400 hover:text-zinc-100 duration-200"
        download="Maximo_Besteiro_CV_en.pdf"
      >
        <Download className="w-6 h-6" />
        <span>See my resume</span>
      </a>
    </>
  );
}
