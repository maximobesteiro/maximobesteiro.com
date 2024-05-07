import useDeviceSize from '@/hooks/useDeviceSize';
import { useEffect, useState, type RefObject } from 'react';

interface MainTitleProps {
  cursor: {
    x: number;
    y: number;
  };
  wrapperRef: RefObject<HTMLElement>;
}

const MainTitle = ({ cursor, wrapperRef }: MainTitleProps) => {
  const deviceSize = useDeviceSize();
  const [gradientCenter, setGradientCenter] = useState({
    cx: '50%',
    cy: '50%',
  });

  useEffect(() => {
    if (wrapperRef.current && cursor.x !== null && cursor.y !== null) {
      const wrapperRect = wrapperRef.current.getBoundingClientRect();
      const cx = (cursor.x / wrapperRect.width) * 100;
      const cy = (cursor.y / wrapperRect.height) * 100;
      setGradientCenter({ cx: `${cx}%`, cy: `${cy}%` });
    }
  }, [cursor, wrapperRef]);

  useEffect(() => {
    if (deviceSize !== 'desktop') {
      console.log('Animating gradient...');
    }
  }, [deviceSize]);

  return (
    <>
      <svg
        viewBox="0 0 192 27"
        preserveAspectRatio="xMinYMin meet"
        xmlns="http://www.w3.org/2000/svg"
        className="hidden h-max  w-max stroke-zinc-300 pb-8 md:block lg:w-2/3"
      >
        <defs>
          <radialGradient
            id="emeraldGradientr"
            gradientUnits="userSpaceOnUse"
            r="12%"
            cx={gradientCenter.cx}
            cy={gradientCenter.cy}
          >
            {true && <stop offset="0%" stopColor="#dbaa39" />}
            <stop offset="100%" stopColor="#4a463b" />
          </radialGradient>
        </defs>
        <text
          className="fill-zinc-100 stroke-[0.3] font-sans text-2xl font-black"
          style={{ fillOpacity: 0.03 }}
          x="0"
          y="95%"
          stroke="url(#emeraldGradientr)"
        >
          Máximo Besteiro
        </text>
      </svg>

      <svg
        viewBox="0 0 72 35"
        preserveAspectRatio="xMinYMin meet"
        xmlns="http://www.w3.org/2000/svg"
        className="block h-max w-2/3 stroke-zinc-300 py-4 md:hidden lg:w-2/3"
      >
        <defs>
          <radialGradient
            id="emeraldGradientr2"
            gradientUnits="userSpaceOnUse"
            r="25%"
            cx={gradientCenter.cx}
            cy={gradientCenter.cy}
          >
            {true && <stop offset="0%" stopColor="#dbaa39" />}
            <stop offset="100%" stopColor="#4a463b" />
          </radialGradient>
        </defs>
        <text
          className="block fill-zinc-100 stroke-[0.3] font-sans text-lg font-black md:hidden"
          style={{ fillOpacity: 0.03 }}
          stroke="url(#emeraldGradientr2)"
        >
          <tspan x="2" y="15">
            Máximo
          </tspan>
          <tspan x="0" y="32">
            Besteiro
          </tspan>
        </text>
      </svg>
    </>
  );
};

export default MainTitle;
