import Header from '@/components/domain/Header';
import NavBar, { NavBarProps } from '@/components/domain/NavBar';
import Gnb from '@/components/domain/Gnb';

export interface AppLayoutProps {
  children: React.ReactNode;
  header?: boolean;
  navBar?: NavBarProps; 
  hideGnb?: boolean;
}

export default function AppLayout({ children, header = false, navBar, hideGnb = false }: AppLayoutProps) {
  return (
    <div className="relative max-w-[var(--mo-max-width)] mx-auto">
      {header && (
        <Header />
      )}
      {navBar && (
        <NavBar {...navBar} />
      )}
      <main className="pt-17">
        {children}
      </main>
      {!hideGnb && (
        <Gnb />
      )}
    </div>
  );
}