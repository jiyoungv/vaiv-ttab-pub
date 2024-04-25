import classNames from 'classnames';

export interface IconProps {
  name?: string;
  color?: string;
  size?: string;
  ariaLabel?: string;
  className?: string;
}

export default function Icon({
  name = 'mgc_heart_line', 
  color = 'text-slate-700', 
  size = 'text-2xl-just', 
  ariaLabel,
  className,
}: IconProps) {
  return (
    <i 
      className={classNames(
        'inline-block align-top relative',
        {
          [`${name}`]: name,
          [`${color}`]: color,
          [`${size}`]: size,
          [`${className}`]: className,
        },
      )}
      aria-label={ariaLabel}
    ></i>
  );
}