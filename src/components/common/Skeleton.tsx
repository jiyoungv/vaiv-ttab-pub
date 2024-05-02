import classNames from 'classnames';

export interface SkeletonProps {
  width?: string;
  height?: string;
  round?: boolean;
}

export default function Skeleton({
  width = '100%',
  height = '50px',
  round = false,
}: SkeletonProps) {
  return (
    <div
      className={classNames(
        'bg-slate-100 animate-pulse',
        {
          'rounded-lg': !round,
          'flex-shrink-0 aspect-square rounded-full': round,
        },
      )}
      style={{ 
        width: !round ? width : '40px', 
        height: !round ? height : 'auto',
      }}
    ></div>
  );
}