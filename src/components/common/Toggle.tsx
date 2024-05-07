import { useState, useEffect } from 'react';
import classNames from 'classnames';

export interface ToggleProps {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  text?: string;
  supportText?: string;
  children?: React.ReactNode;
  size?: 'sm' | 'md';
}

export default function Toggle({
  checked,
  defaultChecked,
  disabled,
  onChange,
  text,
  supportText,
  children,
  size = 'sm',
}: ToggleProps)  {
  const [mounted, setMounted] = useState(false);

  const [localChecked, setLocalChecked] = useState(checked);

  // defaultChecked
  useEffect(() => {
    if (mounted) return;

    if (defaultChecked) setLocalChecked(true);
    setMounted(true);
  }, [mounted, defaultChecked]);

  useEffect(() => {
    if (!onChange) return;

    if (localChecked) onChange(true);
    else onChange(false);
  }, [onChange, localChecked]);

  return (
    <div 
      className="align-middle inline-flex gap-2 cursor-pointer"
      role="switch" 
      aria-checked={localChecked}
      onClick={() => setLocalChecked(prev => !prev)}
    >
      <div 
        className={classNames(
          'relative rounded-xl',
          {
            'bg-slate-100': !localChecked,
            'bg-primary-500': localChecked,
            'w-9 h-5': size === 'sm',
            'w-11 h-6': size === 'md',
          },
        )}
      >
        <span 
          className={classNames(
            'inline-block absolute top-1/2 -translate-y-1/2 aspect-square rounded-full bg-white drop-shadow-toggle transition-all',
            {
              'left-0.5': !localChecked,
              'left-[calc(100%-theme(spacing[0.5]))] -translate-x-full': localChecked,
              'w-4': size === 'sm',
              'w-5': size === 'md',
            },
          )}
        ></span>
      </div>
      {(text || supportText || children) && (
        <div>
          {text && (
            <p
              className={classNames(
                'font-medium',
                {
                  'text-slate-700': !disabled,
                  'text-slate-200': disabled,
                  'text-sm': size === 'sm',
                  'text-base-read': size === 'md',
                },
              )}
            >
              {text}
            </p>
          )}
          {supportText && (
            <p 
              className={classNames(
                '',
                {
                  'text-slate-600': !disabled,
                  'text-slate-200': disabled,
                  'text-sm': size === 'sm',
                  'text-base-read': size === 'md',
                },
              )}
            >
              {supportText}
            </p>
          )}
          {children}
        </div>
      )}
    </div>
  );
}