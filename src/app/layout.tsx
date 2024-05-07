import type { Metadata } from 'next';
import { ConfigProvider } from 'antd';

import 'mingcute_icon/font/Mingcute.css';
import '@/style/globals.css';
import antdTheme from '@/style/antdTheme';

export const metadata: Metadata = {
  title: 'Ttab',
  description: 'Ttab 입니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConfigProvider theme={antdTheme}>
      <html lang="ko">
        <body>
          <div id="root">{children}</div>
          <div id="portal"></div>
        </body>
      </html>
    </ConfigProvider>
  );
}
