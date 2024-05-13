import classNames from 'classnames';

export interface IconProps {
  name?: string;
  color?: string;
  size?: string;
  style?: React.CSSProperties;
  ariaLabel?: string;
  className?: string;
}

export default function Icon({
  name = 'mgc_heart_line', 
  color = 'text-slate-700', 
  size = 'text-2xl-size', 
  style,
  ariaLabel,
  className,
}: IconProps) {
  return (
    <i 
      className={classNames(
        'inline-block align-middle relative',
        {
          [`${name}`]: name,
          [`${color}`]: color,
          [`${size}`]: size,
          [`${className}`]: className,
        },
      )}
      style={style}
      aria-label={ariaLabel}
    ></i>
  );
}