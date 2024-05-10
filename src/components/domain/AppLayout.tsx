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
  className?: string;
}

export default function AppLayout({ 
  children, 
  header, 
  navBar, 
  hideGnb,
  bg = 'default',
  className,
}: AppLayoutProps) {
  return (
    <div className={classNames(
      'relative max-w-[var(--mo-max-width)] mx-auto',
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
      <main className="relative min-h-screen pt-17 pb-[calc(76px+theme(spacing[4.5]))]">
        {children}
      </main>
    </div>
  );
}