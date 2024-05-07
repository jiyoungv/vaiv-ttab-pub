export interface HeaderLayoutProps {
  children: React.ReactNode;
}

export default function HeaderLayout({ children }: HeaderLayoutProps) {
  return (
    <header className="z-40 fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[var(--mo-max-width)] h-17 bg-white">
      {children}
    </header>
  );
}