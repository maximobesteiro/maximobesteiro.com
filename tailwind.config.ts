import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-outfit)', ...defaultTheme.fontFamily.sans],
        display: ['var(--font-rubik)'],
        'display-glitch': ['var(--font-rubik-glitch)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-in-out forwards',
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0%',
          },
          '100%': {
            opacity: '100%',
          },
        },
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      typography: ({ theme }: { theme: any }) => ({
        zinc: {
          css: {
            '--tw-prose-invert-headings': theme('colors.zinc[300]'),
            '--tw-prose-invert-links': theme('colors.zinc[300]'),
            '--tw-prose-invert-bold': theme('colors.zinc[300]'),
            '--tw-prose-invert-kbd': theme('colors.zinc[300]'),
            '--tw-prose-invert-code': theme('colors.zinc[300]'),
            '--tw-prose-invert-quotes': theme('colors.zinc[300]'),
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-debug-screens'),
  ],
};

export default config;
