import { useMemo } from 'react';
import Link from 'next/link';
import classNames from 'classnames';

export interface InternalButtonProps {
  type?: 'button' | 'submit' | 'reset';
  href?: string;
  target?: React.HTMLAttributeAnchorTarget;
  title?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  role?: React.AriaRole;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function InternalButton({
  type = 'button', 
  href, 
  target,
  title,
  disabled,
  onClick, 
  role,
  children,
  className, 
  style,
}: InternalButtonProps) {
  const rootClassName = useMemo(() => classNames(
    {
      [`${disabled}`]: disabled,
      [`${className}`]: className,
    },
  ), [disabled, className]);

  const commonProps = { 
    className: rootClassName,
    title,
    onClick,
    role,
    style,
  };

  return !href ? (
    <button 
      {...commonProps}
      type={type} 
      disabled={disabled}
    >
      {children}
    </button>
  ) : (
    <Link 
      {...commonProps}
      href={href}
      target={target}
    >
      {children}
    </Link>
  );
}