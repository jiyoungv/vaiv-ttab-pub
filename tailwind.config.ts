import type { Config } from 'tailwindcss';
// import colors from 'tailwindcss/colors';

import variables from './src/styles/variables';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: variables.color,
    fontSize: {
      '6xl': [variables.font.size['6xl'], {
        lineHeight: '1.2',
        letterSpacing: '-0.004em',
      }],
      '6xl-size': variables.font.size['6xl'],
      '5xl': [variables.font.size['5xl'], {
        lineHeight: '1.25',
        letterSpacing: '-0.004em',
      }],
      '5xl-size': variables.font.size['5xl'],
      '4xl': [variables.font.size['4xl'], {
        lineHeight: '1.22222',
        letterSpacing: '-0.004em',
      }],
      '4xl-size': variables.font.size['4xl'],
      '3xl': [variables.font.size['3xl'], {
        lineHeight: '1.25',
        letterSpacing: '-0.004em',
      }],
      '3xl-size': variables.font.size['3xl'],
      '2xl': [variables.font.size['2xl'], {
        lineHeight: '1.33333',
        letterSpacing: '-0.004em',
      }],
      '2xl-size': variables.font.size['2xl'],
      'xl': [variables.font.size['xl'], {
        lineHeight: '1.4',
        letterSpacing: '-0.004em',
      }],
      'xl-size': variables.font.size['xl'],
      'lg': [variables.font.size['lg'], {
        lineHeight: '1.55556',
        letterSpacing: '-0.004em',
      }],
      'lg-size': variables.font.size['lg'],
      'base-read': [variables.font.size['base'], {
        lineHeight: '1.75',
        letterSpacing: '-0.004em',
      }],
      'base': [variables.font.size['base'], {
        lineHeight: '1.5',
        letterSpacing: '-0.004em',
      }],
      'base-size': variables.font.size['base'],
      'sm': [variables.font.size['sm'], {
        lineHeight: '1.42857',
        letterSpacing: '-0.004em',
      }],
      'sm-size': variables.font.size['sm'],
      'xs': [variables.font.size['xs'], {
        lineHeight: '1.33333',
        letterSpacing: '-0.004em',
      }],
      'xs-size': variables.font.size['xs'],
    },
    extend: {
      spacing: {
        '4.5': '1.125rem',
        '7.5': '1.875rem',
        '13': '3.25rem',
        '15': '3.75rem',
        '17': '4.25rem',
        '25': '6.25rem',
      },
      borderRadius: {
        '4xl': '1.75rem',
        '5xl': '3.125rem',
      },
      fontFamily: {
        'en': '"Red Hat Display"',
        'kr': ['"Pretendard Variable"', 'Pretendard'],
        'system': ['-apple-system', 'BlinkMacSystemFont', 'system-ui', 'Roboto', '"Helvetica Neue"', '"Segoe UI"', '"Apple SD Gothic Neo"', '"Noto Sans KR"', '"Malgun Gothic"', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', 'sans-serif'],
      },
      dropShadow: {
        'primary': [
          '0px 4px 6px rgba(244, 63, 94, 0.50)',
          '0px 10px 15px rgba(244, 63, 94, 0.50)',
        ],
        'toggle': [
          '0px 1px 2px rgba(16, 24, 40, 0.06)', 
          '0px 1px 3px rgba(16, 24, 40, 0.10)',
        ],
      },
      transitionDuration: {
        DEFAULT: '200ms',
      },
      lineClamp: {
        10: '10',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};

export default config;