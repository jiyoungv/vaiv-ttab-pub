import classNames from 'classnames';

interface InnerProps {
  children: React.ReactNode;
  variant?: 'default' | 'narrow';
  className?: string;
}

export default function Inner({ 
  children, 
  variant = 'default', 
  className,
}: InnerProps) {
  return (
    <div 
      className={classNames(
        'realtive h-full mx-auto',
        {
          'px-4': variant === 'default',
          'px-6': variant === 'narrow',
          [`${className}`]: className,
        },
      )}
    >
      {children}
    </div>
  );
}