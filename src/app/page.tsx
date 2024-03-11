"use client"

import { useEffect } from "react";
import Link from "next/link";
import useDeviceSize from "@/hooks/useDeviceSize";

export default function Home() {
  const deviceSize = useDeviceSize();

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
    const defaultStyles = ['font-display', 'font-bold', 'text-5xl', 'md:text-7xl', 'xl:text-8xl'];
    const glitchStyles = ['font-display-glitch', 'font-normal', 'text-[41px]/[48px]', 'md:text-[56px]/[72px]', 'xl:text-[83px]/[96px]'];
    
    classList.remove(...defaultStyles);
    classList.add(...glitchStyles);

    setTimeout(() => {
      classList.remove(...glitchStyles);
      classList.add(...defaultStyles);
    }, 150);
  };

  return (
    <main className="px-10 flex flex-col w-screen h-screen items-center text-center justify-center">
      <nav className="flex gap-12 animate-fade-in text-lg text-zinc-400 md:gap-20 md:text-2xl xl:text-3xl xl:gap-24">
        <Link className="duration-200 hover:text-zinc-100" href={'/about'}>About</Link>
        <Link className="duration-200 hover:text-zinc-100" href={'/projects'}>Projects</Link>
        <Link className="duration-200 hover:text-zinc-100" href={'/contact'}>Contact</Link>
      </nav>
      <h1 id="brand" className="my-14 text-5xl font-bold font-display md:text-7xl xl:text-8xl xl:my-24" onMouseEnter={pulseBrand}>Máximo Besteiro</h1>
      <p className="text-base text-zinc-400 animate-fade-in md:text-xl xl:text-2xl">Tech-savvy team player, always honing my skills to build better solutions.</p>
    </main>
  );
}
