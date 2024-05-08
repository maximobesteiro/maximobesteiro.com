import { useEffect, useRef, useState, type RefObject } from 'react';
import { detectTouchscreen } from '@/utils/clientUtils';

interface BrandSvgProps {
  cursor: {
    x: number;
    y: number;
  };
  wrapperRef: RefObject<HTMLElement>;
  isTouchScreen?: boolean;
}

const BrandSvg = ({ cursor, wrapperRef }: BrandSvgProps) => {
  const [gradientCenter, setGradientCenter] = useState({
    cx: '0%',
    cy: '0%',
  });

  const animationRef = useRef<number | null>(null);
  const direction = useRef<number>(1);
  const position = useRef<number>(5);
  const isAnimating = useRef<boolean>(true);

  useEffect(() => {
    if (detectTouchscreen()) {
      const animate = () => {
        if (isAnimating.current) {
          position.current += 1 * direction.current;

          if (position.current >= 95 || position.current <= 5) {
            direction.current *= -1; // Reverse direction
          }

          // If back at the starting point, pause the animation
          if (position.current === 5) {
            isAnimating.current = false;
            setTimeout(() => {
              isAnimating.current = true;
              animate();
            }, 5000); // Pause for 5 seconds before restarting the animation
            return;
          }

          // Update the gradient center
          setGradientCenter({
            cx: `${position.current}%`,
            cy: `${50 + 20 * Math.sin(position.current / 20)}%`, // Sine wave for vertical movement
          });

          // Continue the animation
          animationRef.current = requestAnimationFrame(animate);
        }
      };

      // Start the animation
      animate();

      // Cleanup function to cancel the animation when the component unmounts
      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    }
  }, []);

  useEffect(() => {
    if (wrapperRef.current && cursor.x !== null && cursor.y !== null) {
      const wrapperRect = wrapperRef.current.getBoundingClientRect();
      const cx = (cursor.x / wrapperRect.width) * 100;
      const cy = (cursor.y / wrapperRect.height) * 100;
      setGradientCenter({ cx: `${cx}%`, cy: `${cy}%` });
    }
  }, [cursor, wrapperRef]);

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
            id="brandGradient1"
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
          stroke="url(#brandGradient1)"
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
            id="brandGradient2"
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
          stroke="url(#brandGradient2)"
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

export default BrandSvg;
