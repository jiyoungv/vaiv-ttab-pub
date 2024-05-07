import { useMemo } from 'react';
import classNames from 'classnames';

import InternalButton, { InternalButtonProps } from '@/components/common/InternalButton';
import Icon from '@/components/common/Icon';
// import variables from '@/style/variables';

interface ButtonProps extends InternalButtonProps {
  variant?: 'fill' | 'link';
  // variant?: 'fill' | 'soft' | 'line' | 'clear' | 'link';
  color?: 'primary' | 'secondary' | 'cancel' | 'white' | 'teal';
  size?: 'base' | 'xs' | 'sm' | 'lg' | 'xl';
  leftIcon?: string;
  rightIcon?: string;
  icon?: string;
  square?: boolean;
  round?: boolean;
  full?: boolean;
}

export default function Button({ 
  variant = 'fill',
  color = 'primary',
  size = 'base',
  leftIcon,
  rightIcon,
  icon,
  square,
  round,
  full,
  ...props
}: ButtonProps) {
  const rootClassName = useMemo(() => classNames(
    'flex-shrink-0 inline-flex justify-center items-center items-center font-bold transition-all', 
    {
      'border': variant !== 'link',

      // fill > color
      'border-primary-500 bg-primary-500 text-white hover:border-primary-700 hover:bg-primary-700': variant === 'fill' && color === 'primary' && !props.disabled,
      'border-slate-700 bg-slate-700 text-white hover:border-slate-900 hover:bg-slate-900': variant === 'fill' && color === 'secondary' && !props.disabled,
      'border-slate-100 bg-slate-100 text-slate-500 hover:border-slate-300 hover:bg-slate-300': variant === 'fill' && color === 'cancel' && !props.disabled,
      'border-white bg-white text-slate-500 hover:border-white/60 hover:bg-white/60': variant === 'fill' && color === 'white' && !props.disabled,
      'border-teal-500 bg-teal-500 text-white hover:border-teal-700 hover:bg-teal-700': variant === 'fill' && color === 'teal' && !props.disabled,
      'border-slate-200 bg-slate-200 text-white': variant === 'fill' && props.disabled,

      // link > color
      'text-primary-500 hover:text-primary-700': variant === 'link' && color === 'primary' && !props.disabled,
      'text-slate-500 hover:text-slate-700': variant === 'link' && color === 'secondary' && !props.disabled,
      'text-slate-400 hover:text-slate-600': variant === 'link' && color === 'cancel' && !props.disabled,
      'text-white hover:text-white': variant === 'link' && color === 'white' && !props.disabled,
      'text-teal-500 hover:text-teal-700': variant === 'link' && color === 'teal' && !props.disabled,
      'text-slate-200': variant === 'link' && props.disabled,

      // [`border-${color}-500 bg-${color}-500 text-white`]: variant === 'fill' && !props.disabled,
      // [`hover:border-${color}-700 hover:bg-${color}-700`]: variant === 'fill' && !props.disabled,
      // [`border-${color}-500 bg-white text-slate-900`]: variant === 'line' && !props.disabled,
      // [`hover:bg-${color}-100`]: variant === 'line' && !props.disabled,
      // [`border-transparent bg-transparent text-${color}-500`]: variant === 'clear' && !props.disabled,
      // [`hover:bg-${color}-100`]: variant === 'clear' && !props.disabled,

      // size (default)
      'gap-2': size === 'base' || size === 'lg' || size === 'xl',
      'gap-1': size === 'xs' || size === 'sm',

      // padding (not link)
      'px-4.5 py-2.5': size === 'base' && variant !== 'link' && !icon,
      'px-2 py-1': size === 'xs' && variant !== 'link' && !icon,
      'px-3 py-2': size === 'sm' && variant !== 'link' && !icon,
      'px-5 py-3': size === 'lg' && variant !== 'link' && !icon,
      'px-6 py-3.5': size === 'xl' && variant !== 'link' && !icon,

      // size (only icon)
      'p-3': size === 'base' && icon,
      'p-2': size === 'xs' && icon,
      'p-2.5': size === 'sm' && icon,
      'p-3.5': size === 'lg' && icon,
      'p-4': size === 'xl' && icon,

      // radius default
      'rounded-lg': !square && !round,

      // square
      'rounded-none': square,

      // round
      'rounded-3xl': round && size !== 'xl',
      'rounded-4xl': round && size === 'xl',

      // full
      'w-full': full,

      [`${props.className}`]: props.className,
    },
  ), [variant, color, size, icon, square, round, full, props.disabled, props.className]);

  const textSize = useMemo(() => {
    if (size === 'base') return 'text-base-read';
    if (size === 'xs') return 'text-xs';
    if (size === 'sm') return 'text-sm';
    if (size === 'lg') return 'text-base-read';
    if (size === 'xl') return 'text-base-read';
  }, [size]);

  const sideIconSize = useMemo(() => {
    if (size === 'base') return 'text-lg-size';
    if (size === 'xs') return 'text-base-size';
    if (size === 'sm') return 'text-base-size';
    if (size === 'lg') return 'text-xl-size';
    if (size === 'xl') return 'text-xl-size';
  }, [size]);

  const iconSize = useMemo(() => {
    if (size === 'base') return 'text-lg-size';
    if (size === 'xs') return 'text-xs-size';
    if (size === 'sm') return 'text-base-size';
    if (size === 'lg') return 'text-xl-size';
    if (size === 'xl') return 'text-xl-size';
  }, [size]);

  return (
    <InternalButton 
      className={rootClassName}
      {...props}
    >
      {leftIcon && (
        <Icon 
          name={leftIcon}
          size={sideIconSize}
          color="text-current"
        />
      )}
      {icon && (
        <Icon 
          name={icon}
          size={iconSize}
          color="text-current"
        />
      )}
      {props.children && (
        <p className={classNames(
          {
            [`${textSize}`]: textSize,
          },
        )}>
          {props.children}
        </p>
      )}
      {rightIcon && (
        <Icon 
          name={rightIcon}
          size={sideIconSize}
          color="text-current"
        />
      )}
    </InternalButton>
  );
}