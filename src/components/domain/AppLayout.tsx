import classNames from 'classnames';

import Header from '@/components/domain/Header';
import NavBar, { NavBarProps } from '@/components/domain/NavBar';
import Gnb from '@/components/domain/Gnb';

export interface AppLayoutProps {
  children: React.ReactNode;
  header?: boolean;
  navBar?: NavBarProps; 
  hideGnb?: boolean;
  className?: string;
}

export default function AppLayout({ 
  children, 
  header, 
  navBar, 
  hideGnb,
  className,
}: AppLayoutProps) {
  return (
    <div className={classNames(
      'relative max-w-[var(--mo-max-width)] mx-auto',
      {
        [`${className}`]: className,
      },
    )}>
      {header && (
        <Header />
      )}
      {navBar && (
        <NavBar {...navBar} />
      )}
      {!hideGnb && (
        <Gnb />
      )}
      <main className="relative pt-17 pb-[calc(76px+theme(spacing[4.5])*2)]">
        {children}
      </main>
    </div>
  );
}