import { useMemo } from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import Icon, { IconProps } from '@/components/common/Icon';

interface IconButtonProps {
  icon?: IconProps;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  role?: React.AriaRole;
  children?: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
  target?: React.HTMLAttributeAnchorTarget;
}

export default function IconButton({ 
  icon, 
  onClick, 
  role,
  children,
  className, 
  type = 'button', 
  href, 
  target,
}: IconButtonProps) {
  const rootClassName = useMemo(() => classNames(
    'inline-block relative before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:hidden before:w-[calc(100%+4px)] before:h-[calc(100%+4px)] before:rounded-lg before:bg-slate-100 hover:before:block', 
    {
      [`${className}`]: className,
    },
  ), [className]);

  return href ? (
    <Link 
      className={rootClassName}
      onClick={onClick}
      role={role}
      href={href}
      target={target}
    >
      <Icon {...icon} />
      {children}
    </Link>
  ) : (
    <button 
      className={rootClassName}
      onClick={onClick}
      role={role}
      type={type} 
    >
      <Icon {...icon} />
      {children}
    </button>
  );
}