import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

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
      '6xl': ['60px', {
        lineHeight: '1.2',
        letterSpacing: '-0.004em',
      }],
      '5xl': ['48px', {
        lineHeight: '1.25',
        letterSpacing: '-0.004em',
      }],
      '4xl': ['36px', {
        lineHeight: '1.22222',
        letterSpacing: '-0.004em',
      }],
      '3xl': ['32px', {
        lineHeight: '1.25',
        letterSpacing: '-0.004em',
      }],
      '2xl': ['24px', {
        lineHeight: '1.33333',
        letterSpacing: '-0.004em',
      }],
      'xl': ['20px', {
        lineHeight: '1.4',
        letterSpacing: '-0.004em',
      }],
      'lg': ['18px', {
        lineHeight: '1.55556',
        letterSpacing: '-0.004em',
      }],
      'base-read': ['16px', {
        lineHeight: '1.75',
        letterSpacing: '-0.004em',
      }],
      'base': ['16px', {
        lineHeight: '1.5',
        letterSpacing: '-0.004em',
      }],
      'sm': ['14px', {
        lineHeight: '1.42857',
        letterSpacing: '-0.004em',
      }],
      'xs': ['12px', {
        lineHeight: '1.33333',
        letterSpacing: '-0.004em',
      }],
    },
    extend: {
      spacing: {
        '17': '4.25rem',
      },
    },
  },
  plugins: [],
};
export default config;
