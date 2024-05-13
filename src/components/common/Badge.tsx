import { useMemo } from 'react';
import classNames from 'classnames';

import IconButton from '@/components/common/IconButton';

export interface BadgeProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  size?: 'sm' | 'md' | 'lg';
  color?: 'gray' | 'primary' | 'error' | 'warning' | 'success' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'pink';
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
    if (color === 'cyan') return 'bg-cyan-50';
    if (color === 'sky') return 'bg-sky-50';
    if (color === 'blue') return 'bg-blue-50';
    if (color === 'indigo') return 'bg-indigo-50';
    if (color === 'violet') return 'bg-violet-50';
    if (color === 'purple') return 'bg-purple-50';
    if (color === 'pink') return 'bg-pink-50';
  }, [color]);

  const textColor = useMemo(() => {
    if (color === 'gray') return 'text-slate-700';
    if (color === 'primary') return 'text-primary-700';
    if (color === 'error') return 'text-error-700';
    if (color === 'warning') return 'text-warning-700';
    if (color === 'success') return 'text-success-700';
    if (color === 'cyan') return 'text-cyan-700';
    if (color === 'sky') return 'text-sky-700';
    if (color === 'blue') return 'text-blue-700';
    if (color === 'indigo') return 'text-indigo-700';
    if (color === 'violet') return 'text-violet-700';
    if (color === 'purple') return 'text-purple-700';
    if (color === 'pink') return 'text-pink-700';
  }, [color]);

  const iconBGColor = useMemo(() => {
    if (color === 'gray') return 'bg-slate-500';
    if (color === 'primary') return 'bg-primary-500';
    if (color === 'error') return 'bg-error-500';
    if (color === 'warning') return 'bg-warning-500';
    if (color === 'success') return 'bg-success-500';
    if (color === 'cyan') return 'bg-cyan-500';
    if (color === 'sky') return 'bg-sky-500';
    if (color === 'blue') return 'bg-blue-500';
    if (color === 'indigo') return 'bg-indigo-500';
    if (color === 'violet') return 'bg-violet-500';
    if (color === 'purple') return 'bg-purple-500';
    if (color === 'pink') return 'bg-pink-500';
  }, [color]);

  const iconTextColor = useMemo(() => {
    if (color === 'gray') return 'text-slate-500';
    if (color === 'primary') return 'text-primary-500';
    if (color === 'error') return 'text-error-500';
    if (color === 'warning') return 'text-warning-500';
    if (color === 'success') return 'text-success-500';
    if (color === 'cyan') return 'text-cyan-500';
    if (color === 'sky') return 'text-sky-500';
    if (color === 'blue') return 'text-blue-500';
    if (color === 'indigo') return 'text-indigo-500';
    if (color === 'violet') return 'text-violet-500';
    if (color === 'purple') return 'text-purple-500';
    if (color === 'pink') return 'text-pink-500';
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