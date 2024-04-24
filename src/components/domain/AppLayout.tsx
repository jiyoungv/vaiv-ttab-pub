import Header from '@/components/domain/Header';
import NavBar, { NavBarProps } from '@/components/domain/NavBar';

interface AppLayoutProps {
  children: React.ReactNode;
  header?: boolean;
  navBar?: NavBarProps; 
}

export default function AppLayout({ children, header = false, navBar }: AppLayoutProps) {
  return (
    <div className="max-w-[800px] mx-auto">
      {header && (
        <Header />
      )}
      {navBar && (
        <NavBar {...navBar} />
      )}
      <main className="pt-17">
        {children}
      </main>
    </div>
  );
}