import type { ThemeConfig } from 'antd';

import variables from '@/styles/variables';

const antdTheme: ThemeConfig = {
  token: {
    colorPrimary: variables.color.primary[500],
    colorSuccess: variables.color.success[500],
    colorError: variables.color.error[500],
    colorWarning: variables.color.warning[500],
    colorTextBase: variables.color.slate[700],
    colorBorder: variables.color.slate[200],
    colorTextPlaceholder: variables.color.slate[400],
    colorTextDisabled: variables.color.slate[400],
    colorBgContainerDisabled: variables.color.slate[100],
    fontFamily: `'Red Hat Display', 'Pretendard Variable', Pretendard, system-ui, sans-serif`,
    borderRadius: 8,
  },
};

export default antdTheme;