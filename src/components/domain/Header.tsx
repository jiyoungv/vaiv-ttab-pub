import Image from 'next/image';
import Link from 'next/link';

import HeaderLayout from '@/components/domain/HeaderLayout';
import Inner from '@/components/common/Inner';
import IconButton from '@/components/common/IconButton';
import ImgLogo from '/public/images/logo.svg';

export interface HeaderProps {};

export default function Header({}: HeaderProps) {
  return (
    <HeaderLayout>
      <Inner>
        <nav className="flex justify-between items-center gap-1 h-full">
          <Link href={`${process.env.NEXT_PUBLIC_FRONT_URL}`}>
            <Image src={ImgLogo} alt="Ttab Home" />
          </Link>
          <div className="relative">
            <IconButton 
              icon={{
                name: 'mgc_notification_line',
                ariaLabel: '알림',
              }}
              href={`${process.env.NEXT_PUBLIC_FRONT_URL}/notification`}
            />
            <p className="inline-flex justify-center items-center absolute -top-1 -right-0.5 w-4 aspect-square rounded-full bg-error-500 text-white text-xs">
              1
            </p>
          </div>
        </nav>
      </Inner>
    </HeaderLayout>
  );
}