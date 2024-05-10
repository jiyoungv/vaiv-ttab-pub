import { useMemo } from 'react';
import classNames from 'classnames';

import IconButton from '@/components/common/IconButton';

export interface BadgeProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  size?: 'sm' | 'md' | 'lg';
  color?: 'gray' | 'primary' | 'error' | 'warning' | 'success';
  notBlend?: boolean;
  dot?: boolean;
  closeButton?: boolean;
  left?: React.ReactNode;
  right?: React.ReactNode;
}

export default function Badge({
  children,
  onClick,
  size = 'sm',
  color = 'gray',
  notBlend,
  dot,
  closeButton,
  left,
  right,
}: BadgeProps) { 
  const bgColor = useMemo(() => {
    if (color === 'gray') return 'bg-slate-100';
    if (color === 'primary') return 'bg-primary-50';
    if (color === 'error') return 'bg-error-50';
    if (color === 'warning') return 'bg-warning-50';
    if (color === 'success') return 'bg-success-50';
  }, [color]);

  const textColor = useMemo(() => {
    if (color === 'gray') return 'text-slate-700';
    if (color === 'primary') return 'text-primary-700';
    if (color === 'error') return 'text-error-700';
    if (color === 'warning') return 'text-warning-700';
    if (color === 'success') return 'text-success-700';
  }, [color]);

  const iconBGColor = useMemo(() => {
    if (color === 'gray') return 'bg-slate-500';
    if (color === 'primary') return 'bg-primary-500';
    if (color === 'error') return 'bg-error-500';
    if (color === 'warning') return 'bg-warning-500';
    if (color === 'success') return 'bg-success-500';
  }, [color]);

  const iconTextColor = useMemo(() => {
    if (color === 'gray') return 'text-slate-500';
    if (color === 'primary') return 'text-primary-500';
    if (color === 'error') return 'text-error-500';
    if (color === 'warning') return 'text-warning-500';
    if (color === 'success') return 'text-success-500';
  }, [color]);

  return (
    <div 
      className={classNames(
        'inline-flex items-center rounded-2xl',
        {
          'px-2 py-0.5': size === 'sm',
          'px-2.5 py-0.5': size === 'md',
          'px-3 py-1': size === 'lg',
          [`${bgColor}`]: color,
          [`${textColor}`]: color,
          'mix-blend-multiply': !notBlend,
        },
      )}
      onClick={onClick}
    >
      {dot && (
        <span className="inline-flex justify-center items-center w-2 aspect-square -ml-0.5 mr-1.5">
          <i 
            className={classNames(
              'inline-block w-1.5 aspect-square rounded-full',
              {
                [`${iconBGColor}`]: color,
              },
            )}
          ></i>
        </span>
      )}
      {left}
      {children && (
        <p 
          className={classNames(
            'font-medium',
            {
              'text-xs': size === 'sm',
              'text-sm': size === 'md' || size === 'lg',
            },
          )}
        >
          {children}
        </p>
      )}
      {right}
      {closeButton && (
        <IconButton 
          className="ml-1"
          icon={{
            name: 'mgc_close_fill',
            size: 'text-xs-size',
            color: `${iconTextColor}`,
          }}
        />
      )}
    </div>
  );
}