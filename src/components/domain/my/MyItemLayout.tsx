import classNames from 'classnames';

import Inner from '@/components/common/Inner';

export interface MyItemLayoutProps {
  children: React.ReactNode,
  notHover?: boolean;
}

export default function MyItemLayout({ children, notHover = false }: MyItemLayoutProps) {
  return (
    <div 
      className={classNames(
        'py-6 border-b border-b-slate-200',
        {
          'hover:bg-slate-50': !notHover,
        },
      )}
    >
      <Inner>
        {children}
      </Inner>
    </div> 
  );
}