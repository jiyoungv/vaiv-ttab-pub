import colors from 'tailwindcss/colors';

// TODO: 변수 정리 예정
const variables = {
  color: {
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
  font: {
    family: '',
    size: {
      '6xl': '60px',
      '5xl': '48px',
      '4xl': '36px',
      '3xl': '32px',
      '2xl': '24px',
      'xl': '20px',
      'lg': '18px',
      'base': '16px',
      'sm': '14px',
      'xs': '12px',
    },
  },
  layout: {
    moMaxWidth: '600px',
  },
};

export default variables;