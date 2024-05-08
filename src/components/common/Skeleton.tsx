import classNames from 'classnames';

export interface SkeletonProps {
  width?: string;
  height?: string;
  round?: boolean;
  square?: boolean;
  color?: 'default' | 'white';
}

export default function Skeleton({
  width = '100%',
  height = '50px',
  round,
  square,
  color = 'default',
}: SkeletonProps) {
  return (
    <div
      className={classNames(
        'animate-pulse',
        {
          'rounded-lg': !round && !square,
          'flex-shrink-0 aspect-square rounded-full': round,
          'bg-slate-100': color === 'default',
          'bg-white': color === 'white',
        },
      )}
      style={{ 
        width: !round ? width : '40px', 
        height: !round ? height : 'auto',
      }}
    ></div>
  );
}