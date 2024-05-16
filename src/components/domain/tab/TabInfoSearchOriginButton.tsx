import classNames from 'classnames';

export interface TabInfoSearchOriginButtonProps {
  children: React.ReactNode;
  number?: number;
}

export default function TabInfoSearchOriginButton({
  children,
  number = 1,
}: TabInfoSearchOriginButtonProps) {
  return (
    <button
      type="button"
      className={classNames(
        'inline-flex items-center gap-1 p-2 border rounded-lg hover:bg-slate-50',
        {
          'border-primary-400': number === 1,
          'border-teal-500': number === 2,
          'border-blue-500': number === 3,
        },
      )}
      onClick={() => alert('DEV: 답변 상세조회 바텀시트 open?')}
    >
      <p className={classNames(
        'flex-shrink-0 w-4 aspect-square rounded text-white text-xs font-bold',
        {
          'bg-primary-400': number === 1,
          'bg-teal-500': number === 2,
          'bg-blue-500': number === 3,
        },
      )}>
        {number}
      </p>
      <p 
        className={classNames(
          'line-clamp-1 text-sm font-medium',
          {
            'text-primary-400': number === 1,
            'text-teal-500': number === 2,
            'text-blue-500': number === 3,
          },
        )}
      >
        {children}
      </p>
    </button>
  );
}