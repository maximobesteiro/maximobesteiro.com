import useDeviceSize from '@/hooks/useDeviceSize';
import { useEffect, useState, type RefObject } from 'react';

interface MainTitleProps {
  cursor: {
    x: number;
    y: number;
  };
  wrapperRef: RefObject<HTMLElement>;
}

const viewBoxSizes = {
  mobile: {
    width: 92,
    height: 35,
  },
  tablet: {
    width: 192,
    height: 27,
  },
  desktop: {
    width: 192,
    height: 27,
  },
};

const MainTitle = ({ cursor, wrapperRef }: MainTitleProps) => {
  const deviceSize = useDeviceSize();
  const [viewBox, setViewBox] = useState(viewBoxSizes[deviceSize]);
  const [gradientCenter, setGradientCenter] = useState({
    cx: '50%',
    cy: '50%',
  });

  useEffect(() => {
    if (wrapperRef.current && cursor.x !== null && cursor.y !== null) {
      const wrapperRect = wrapperRef.current.getBoundingClientRect();
      const cx = (cursor.x / wrapperRect.width) * 100;
      const cy = (cursor.y / wrapperRect.height) * 100 + 20;
      setGradientCenter({ cx: `${cx}%`, cy: `${cy}%` });
    }
  }, [cursor, wrapperRef]);

  useEffect(() => {
    if (deviceSize !== 'desktop') {
      console.log('Animating gradient...');
    }
    setViewBox(viewBoxSizes[deviceSize]);
  }, [deviceSize]);

  return (
    <svg
      viewBox={`0 0 ${viewBox.width} ${viewBox.height}`}
      preserveAspectRatio="xMinYMin meet"
      xmlns="http://www.w3.org/2000/svg"
      className="h-max w-max stroke-zinc-300 pb-8 lg:w-2/3"
    >
      <defs>
        <radialGradient
          id="emeraldGradientr"
          gradientUnits="userSpaceOnUse"
          r="10%"
          cx={gradientCenter.cx}
          cy={gradientCenter.cy}
        >
          {true && <stop offset="0%" stopColor="#dbaa39" />}
          <stop offset="100%" stopColor="#4a463b" />
        </radialGradient>
      </defs>
      <text
        className="hidden fill-zinc-100 stroke-[0.3] font-sans text-2xl font-black md:block"
        style={{ fillOpacity: 0.03 }}
        x="0"
        y="95%"
        stroke="url(#emeraldGradientr)"
      >
        Máximo Besteiro
      </text>
      <text
        className="block fill-zinc-100 stroke-[0.3] font-sans text-lg font-black md:hidden"
        style={{ fillOpacity: 0.03 }}
        stroke="url(#emeraldGradientr)"
      >
        <tspan x="0" y="95%">
          Máximo
        </tspan>
        <tspan x="0" y="200%">
          Besteiro
        </tspan>
      </text>
    </svg>
  );
};

export default MainTitle;
