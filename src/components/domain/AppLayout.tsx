import classNames from 'classnames';

import Header from '@/components/domain/Header';
import NavBar, { NavBarProps } from '@/components/domain/NavBar';
import Gnb from '@/components/domain/Gnb';

export interface AppLayoutProps {
  children: React.ReactNode;
  header?: boolean;
  navBar?: NavBarProps; 
  hideGnb?: boolean;
  bg?: 'default' | 'dark';
  pb?: 'default' | '0';
  className?: string;
}

export default function AppLayout({ 
  children, 
  header, 
  navBar, 
  hideGnb,
  bg = 'default',
  pb = 'default',
  className,
}: AppLayoutProps) {
  return (
    <div className={classNames(
      'overflow-clip relative max-w-[var(--mo-max-width)] mx-auto',
      {
        'bg-slate-100': bg === 'dark',
        [`${className}`]: className,
      },
    )}>
      {header ? (
        <Header />
      ) : (
        <NavBar {...navBar} />
      )}
      {!hideGnb && (
        <Gnb />
      )}
      <main className={classNames(
        'relative min-h-screen pt-17',
        {
          'pb-[var(--main-padding-bottom)]': pb === 'default',
        },
      )}>
        {children}
      </main>
    </div>
  );
}