import classNames from 'classnames';

export interface LabelProps {
  children: React.ReactNode;
  htmlFor?: string;
  mb?: 'default' | '0' | '4';
}

export default function Label({
  children,
  htmlFor,
  mb = 'default',
}: LabelProps) {
  return (
    <div 
      className={classNames(
        {
          'mb-1.5': mb === 'default',
          '': mb === '0',
          'mb-4': mb === '4',
        },
      )}
    > 
      <label htmlFor={htmlFor} className="text-slate-500 text-sm font-medium">
        {children}
      </label>
    </div>
  );
}