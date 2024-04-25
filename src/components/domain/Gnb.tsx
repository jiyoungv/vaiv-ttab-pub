'use client'
import { useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import Icon from '@/components/common/Icon';
import ImgSymbol from '/public/images/symbol.svg';

export interface GnbProps {} 

export default function Gnb({}: GnbProps) {
  const pathname = usePathname();
  const pathnames = useMemo(() => pathname?.split('/'), [pathname]);
  const pathnameDepth1 = useMemo(() => `/${pathnames[1]}`, [pathnames]);

  return (
    <nav className="z-40 fixed bottom-4.5 left-1/2 -translate-x-1/2 w-[89%] max-w-[334px] px-4 py-5 rounded-[100px] bg-white/80 backdrop-blur-sm">
      <ul className="grid grid-cols-5">
        {[
          {
            link: `${process.env.NEXT_PUBLIC_FRONT_URL}`,
            pathname: '/',
            icon: 'mgc_home_2_line',
            label: '홈',
          },
          {
            link: `${process.env.NEXT_PUBLIC_FRONT_URL}/search`,
            pathname: '/search',
            icon: 'mgc_search_line',
            label: '검색',
          },
          {},
          {
            link: `${process.env.NEXT_PUBLIC_FRONT_URL}/my-tab`,
            pathname: '/my-tab',
            icon: 'mgc_layer_line',
            label: '마이탭',
          },
          {
            link: `${process.env.NEXT_PUBLIC_FRONT_URL}/my`,
            pathname: '/my',
            icon: 'mgc_user_1_line',
            label: '마이페이지',
          },
        ].map((v, i) => (
          <li key={i}>
            {v.link && (
              <Link href={v.link} className="group inline-block w-full text-center">
                <Icon 
                  name={v.icon}
                  color={pathnameDepth1 !== v.pathname ? 'text-slate-400': 'text-primary-500'}
                  ariaLabel={v.label}
                  className="group-hover:text-primary-500 group-active:text-primary-500"
                />
              </Link>
            )}
          </li>
        ))}
        <li className="absolute bottom-3 left-1/2 -translate-x-1/2">
          <Link href={`${process.env.NEXT_PUBLIC_FRONT_URL}/create`} className="inline-flex justify-center items-center w-16 aspect-square rounded-full bg-primary-500 drop-shadow-primary">
            <Image src={ImgSymbol} alt="정보 및 탭 생성" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}