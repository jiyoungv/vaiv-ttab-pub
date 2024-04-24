'use client'
import { useRouter } from 'next/navigation';

import Inner from '@/components/common/Inner';

export interface NavBarProps {
  hideBack?: boolean;
  title?: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
}

export default function NavBar({ hideBack = false, title, left, right }: NavBarProps) {
  const router = useRouter();

  return (
    <header className="z-40 fixed top-0 left-0 w-full h-17 bg-white">
      <Inner>
        <nav className="flex justify-between items-center relative h-full">
          {!hideBack && (
            <button 
              type="button"
              onClick={() => router.back()}
              className="flex-shrink-0"
              role="link"
            >
              <i className="mgc_left_line text-[32px] text-slate-700" aria-label="이전 페이지"></i>
            </button>
          )}
          {left}
          {title && (
            <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-700 text-lg font-bold">
              {title}
            </p>
          )}
          {right}
        </nav>
      </Inner>
    </header>
  );
}