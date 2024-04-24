import Image from 'next/image';
import Link from 'next/link';

import Inner from '@/components/common/Inner';
import logo_svg from '/public/images/logo.svg';

interface HeaderProps {};

export default function Header({}: HeaderProps) {
  return (
    <header className="z-40 fixed top-0 left-0 w-full h-17 bg-white">
      <Inner>
        <nav className="flex justify-between items-center h-full">
          <Link href={`${process.env.NEXT_PUBLIC_FRONT_URL}`}>
            <Image src={logo_svg} alt="Ttab Home" />
          </Link>
          <Link href={`${process.env.NEXT_PUBLIC_FRONT_URL}/notification`} className="relative">
            <i className="mgc_notification_line text-slate-700 text-[24px]" aria-label="알람 페이지"></i>
            <p className="inline-flex justify-center items-center absolute -top-1 -right-0.5 w-4 aspect-square rounded-full bg-error-500 text-white text-xs">
              1
            </p>
          </Link>
        </nav>
      </Inner>
    </header>
  );
}