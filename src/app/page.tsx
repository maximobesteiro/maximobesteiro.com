'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import Particles from '@/components/particles';
import BrandSvg from '@/components/brandSvg';

export default function Home() {
  const wrapperRef = useRef<HTMLElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    if (!wrapperRef.current) {
      return;
    }

    const rect = wrapperRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    setCursor({ x, y });
  };

  return (
    <main
      className="flex h-screen w-screen flex-col items-center justify-center px-10 text-center"
      ref={wrapperRef}
      onMouseMove={handleMouseMove}
    >
      <nav className="flex animate-fade-in gap-12 text-base text-stone-500 md:gap-20 xl:gap-24">
        <Link className="duration-200 hover:text-stone-300" href={'/about'}>
          About
        </Link>
        <Link className="duration-200 hover:text-zinc-300" href={'/projects'}>
          Projects
        </Link>
        <Link className="duration-200 hover:text-zinc-300" href={'/contact'}>
          Contact
        </Link>
      </nav>
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <BrandSvg cursor={cursor} wrapperRef={wrapperRef} />
      <p className="animate-fade-in text-base text-zinc-500">
        Team-driven engineer, always sharpening my skills for stronger results.
      </p>
    </main>
  );
}
