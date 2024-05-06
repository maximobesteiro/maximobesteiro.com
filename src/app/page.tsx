'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import useDeviceSize from '@/hooks/useDeviceSize';
import Particles from '@/components/particles';
import MainTitle from '@/components/mainTitle';

export default function Home() {
  const deviceSize = useDeviceSize();
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

  useEffect(() => {
    if (deviceSize === 'desktop') {
      return;
    }

    const interval = setInterval(() => {
      pulseBrand();
    }, 3500);
    return () => clearInterval(interval);
  }, [deviceSize]);

  const pulseBrand = () => {
    const brand = document.getElementById('brand');

    if (!brand) {
      return;
    }

    const classList = brand.classList;
    const defaultStyles = [
      'font-display',
      'font-bold',
      'text-4xl',
      'sm:text-5xl',
      'md:text-7xl',
      'xl:text-8xl',
    ];
    const glitchStyles = [
      'font-display-glitch',
      'font-normal',
      'text-[31px]/[40px]',
      'sm:text-[41px]/[48px]',
      'md:text-[62px]/[72px]',
      'xl:text-[83px]/[96px]',
    ];

    classList.remove(...defaultStyles);
    classList.add(...glitchStyles);

    setTimeout(() => {
      classList.remove(...glitchStyles);
      classList.add(...defaultStyles);
    }, 150);
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
      {/* <h1
        id="brand"
        className="my-14 font-display text-4xl font-bold sm:text-5xl md:text-7xl xl:my-24 xl:text-8xl"
        onMouseEnter={pulseBrand}
      >
        Máximo Besteiro
      </h1> */}
      <MainTitle cursor={cursor} wrapperRef={wrapperRef} />
      {/* <svg
        viewBox="0 0 100 50"
        className="animate-fade-in border-4 border-solid border-pink-500"
      >
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          className="fill-zinc-100 text-5xl font-bold"
        >
          Some Text
        </text>
      </svg> */}
      <p className="animate-fade-in text-base text-zinc-500">
        Team-driven engineer, always sharpening my skills for stronger results.
      </p>
    </main>
  );
}
