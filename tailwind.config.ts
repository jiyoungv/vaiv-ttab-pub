import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

import variables from './src/style/variables';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'current': colors.current,
      'transparent': colors.transparent,
      'black': colors.black,
      'white': colors.white,
      // primary
      'slate': colors.slate,
      'primary': colors.rose,
      'error': colors.red,
      'warning': colors.yellow,
      'success': colors.green,
      // palette
      'orange': colors.orange,
      'amber': colors.amber,
      'lime': colors.lime,
      'emerald': colors.emerald,
      'teal': colors.teal,
      'cyan': colors.cyan,
      'blue': colors.blue,
      'indigo': colors.indigo,
      'violet': colors.violet,
      'purple': colors.purple,
      'fuchsia': colors.fuchsia,
      'pink': colors.pink,
      // gray
      'gray': colors.gray,
      'zinc': colors.zinc,
      'neutral': colors.neutral,
      'stone': colors.stone,
    },
    fontSize: {
      '6xl': ['var(--text-6xl)', {
        lineHeight: '1.2',
        letterSpacing: '-0.004em',
      }],
      '6xl-just': 'var(--text-6xl)',
      '5xl': ['var(--text-5xl)', {
        lineHeight: '1.25',
        letterSpacing: '-0.004em',
      }],
      '5xl-just': 'var(--text-5xl)',
      '4xl': ['var(--text-4xl)', {
        lineHeight: '1.22222',
        letterSpacing: '-0.004em',
      }],
      '4xl-just': 'var(--text-4xl)',
      '3xl': ['var(--text-3xl)', {
        lineHeight: '1.25',
        letterSpacing: '-0.004em',
      }],
      '3xl-just': 'var(--text-3xl)',
      '2xl': ['var(--text-2xl)', {
        lineHeight: '1.33333',
        letterSpacing: '-0.004em',
      }],
      '2xl-just': 'var(--text-2xl)',
      'xl': ['var(--text-xl)', {
        lineHeight: '1.4',
        letterSpacing: '-0.004em',
      }],
      'xl-just': 'var(--text-xl)',
      'lg': ['var(--text-lg)', {
        lineHeight: '1.55556',
        letterSpacing: '-0.004em',
      }],
      'lg-just': 'var(--text-lg)',
      'base-read': ['var(--text-base)', {
        lineHeight: '1.75',
        letterSpacing: '-0.004em',
      }],
      'base': ['var(--text-base)', {
        lineHeight: '1.5',
        letterSpacing: '-0.004em',
      }],
      'base-just': 'var(--text-base)',
      'sm': ['var(--text-sm)', {
        lineHeight: '1.42857',
        letterSpacing: '-0.004em',
      }],
      'sm-just': 'var(--text-sm)',
      'xs': ['var(--text-xs)', {
        lineHeight: '1.33333',
        letterSpacing: '-0.004em',
      }],
      'xs-just': 'var(--text-xs)',
    },
    extend: {
      spacing: {
        '4.5': '1.125rem',
        '17': '4.25rem',
      },
      dropShadow: {
        'primary': [
            '0px 4px 6px rgba(244, 63, 94, 0.50)',
            '0px 10px 15px rgba(244, 63, 94, 0.50)'
        ]
      }
    },
  },
  plugins: [],
};
export default config;
