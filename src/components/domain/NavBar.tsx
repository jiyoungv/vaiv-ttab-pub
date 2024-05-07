'use client'
import { useRouter } from 'next/navigation';

import HeaderLayout from '@/components/domain/HeaderLayout';
import Inner from '@/components/common/Inner';
import IconButton from '@/components/common/IconButton';

export interface NavBarProps {
  hideBack?: boolean;
  title?: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
}

export default function NavBar({ 
  hideBack, 
  title, 
  left, 
  right,
}: NavBarProps) {
  const router = useRouter();

  return (
    <HeaderLayout>
      <Inner>
        <nav className="flex justify-between items-center gap-1 relative h-full">
          {!hideBack && (
            <IconButton 
              icon={{
                name: 'mgc_left_line',
                size: 'text-3xl-size',
                ariaLabel: '이전으로',
              }}
              role="link"
              onClick={() => router.back()}
            />
          )}
          {left}
          {title && (
            <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-700 text-lg font-bold">
              {title}
            </h1>
          )}
          {right}
        </nav>
      </Inner>
    </HeaderLayout>
  );
}