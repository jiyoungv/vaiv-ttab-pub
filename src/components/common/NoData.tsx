import classNames from 'classnames';

export interface NoDataProps {
  text?: string;
  height?: string;
  children?: React.ReactNode;
  className?: string;
}

export default function NoData({
  text = 'No Data',
  height = '200px',
  children,
  className,
}: NoDataProps) {
  return (
    <div
      className={classNames(
        'flex justify-center items-center',
        {
          [`${className}`]: className,
        },
      )}
      style={{ height }}
    >
      {text && (
        <p className="text-slate-600 text-base font-medium">
          {text}
        </p>
      )}
      {children}
    </div>
  );
}