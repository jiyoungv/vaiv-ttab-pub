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
      '6xl': [variables.text['6xl'], {
        lineHeight: '1.2',
        letterSpacing: '-0.004em',
      }],
      '6xl-just': variables.text['6xl'],
      '5xl': [variables.text['5xl'], {
        lineHeight: '1.25',
        letterSpacing: '-0.004em',
      }],
      '5xl-just': variables.text['5xl'],
      '4xl': [variables.text['4xl'], {
        lineHeight: '1.22222',
        letterSpacing: '-0.004em',
      }],
      '4xl-just': variables.text['4xl'],
      '3xl': [variables.text['3xl'], {
        lineHeight: '1.25',
        letterSpacing: '-0.004em',
      }],
      '3xl-just': variables.text['3xl'],
      '2xl': [variables.text['2xl'], {
        lineHeight: '1.33333',
        letterSpacing: '-0.004em',
      }],
      '2xl-just': variables.text['2xl'],
      'xl': [variables.text['xl'], {
        lineHeight: '1.4',
        letterSpacing: '-0.004em',
      }],
      'xl-just': variables.text['xl'],
      'lg': [variables.text['lg'], {
        lineHeight: '1.55556',
        letterSpacing: '-0.004em',
      }],
      'lg-just': variables.text['lg'],
      'base-read': [variables.text['base'], {
        lineHeight: '1.75',
        letterSpacing: '-0.004em',
      }],
      'base': [variables.text['base'], {
        lineHeight: '1.5',
        letterSpacing: '-0.004em',
      }],
      'base-just': variables.text['base'],
      'sm': [variables.text['sm'], {
        lineHeight: '1.42857',
        letterSpacing: '-0.004em',
      }],
      'sm-just': variables.text['sm'],
      'xs': [variables.text['xs'], {
        lineHeight: '1.33333',
        letterSpacing: '-0.004em',
      }],
      'xs-just': variables.text['xs'],
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
