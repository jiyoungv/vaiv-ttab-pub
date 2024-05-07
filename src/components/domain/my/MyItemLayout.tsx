import classNames from 'classnames';

import Inner from '@/components/common/Inner';

export interface MyItemLayoutProps {
  children: React.ReactNode,
  notBorder?: boolean;
  notHover?: boolean;
}

export default function MyItemLayout({ 
  children, 
  notBorder, 
  notHover, 
}: MyItemLayoutProps) {
  return (
    <div 
      className={classNames(
        'relative py-6',
        {
          'border-b border-b-slate-200': !notBorder,
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