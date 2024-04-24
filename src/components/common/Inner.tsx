import classNames from 'classnames';

interface InnerProps {
  children: React.ReactNode;
  variant?: 'default' | 'narrow';
}

export default function Inner({ children, variant = 'default' }: InnerProps) {
  return (
    <div 
      className={classNames(
        'realtive h-full mx-auto',
        {
          'px-4': variant === 'default',
          'px-6': variant === 'narrow',
        },
      )}
    >
      {children}
    </div>
  );
}