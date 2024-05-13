import type { Metadata } from 'next';
import { ConfigProvider } from 'antd';

import 'mingcute_icon/font/Mingcute.css';
import '@/styles/globals.css';
import antdTheme from '@/styles/antdTheme';
import RecoilWrapper from '@/components/domain/RecoilWrapper';

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
      <RecoilWrapper>
        <html lang="ko">
          <body>
            <div id="root">{children}</div>
            <div id="portal"></div>
          </body>
        </html>
      </RecoilWrapper>
    </ConfigProvider>
  );
}
