import type { Metadata } from 'next';

import 'mingcute_icon/font/Mingcute.css';
import '@/style/globals.css';

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
    <html lang="ko">
      <body>
        <div id="root">{children}</div>
        <div id="portal"></div>
      </body>
    </html>
  );
}
