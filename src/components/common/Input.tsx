import { useRef, useState, useEffect } from 'react';
import classNames from 'classnames';

import Icon from '@/components/common/Icon';

export interface InputProps {
  type?: React.HTMLInputTypeAttribute;
  value?: string;
  placeholder?: string;
  required?: boolean;
  maxLength?: number;
  disabled?: boolean;
  readOnly?: boolean;
  error?: boolean;
  autoFocus?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  variant?: 'default' | 'dark' | 'clear';
  full?: boolean;
  leftIcon?: string; 
  left?: React.ReactNode;
  right?: React.ReactNode;
}

export default function Input({
  type = 'text',
  value,
  placeholder,
  required,
  maxLength,
  disabled,
  readOnly,
  error,
  autoFocus,
  onChange,
  variant = 'default',
  full,
  leftIcon, // eg. leftIcon="mgc_search_line"
  left,
  right,

}: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [focus, setFocus] = useState<boolean | undefined>();

  useEffect(() => {
    if (autoFocus) {
      setFocus(true);
      inputRef?.current?.focus();
    }
  }, [autoFocus]);

  return (
    <div 
      className={classNames(
        'inline-flex justify-between items-center gap-2',
        {
          'rounded-lg': variant === 'default',
          'border-slate-200': variant === 'default' && !focus,
          'bg-white': variant === 'default' && !disabled,

          'rounded-5xl': variant === 'dark',
          'border-slate-50': variant === 'dark' && !focus,
          'bg-slate-50': variant === 'dark' && !disabled,

          'px-3 py-2.5 border': variant !== 'clear',
          'bg-transparent': variant === 'clear',

          'bg-slate-100': disabled,
          'border-error-500': error,
          'border-primary-500': focus,
          'w-full': full,
        },
      )}
    >
      <div className="flex-auto flex justify-between items-center gap-2">
        {(left || leftIcon) && (
          <div className="flex-shrink-0">
            {left}
            {leftIcon && (
              <Icon name={leftIcon} color="text-slate-500" size="text-xl" />
            )}
          </div>
        )}
        <input 
          ref={inputRef}
          type={type} 
          className={classNames(
            'flex-auto text-base-read font-medium placeholder:text-slate-400 focus:outline-none',
            {
              'text-slate-700': !disabled,
              'bg-white': variant === 'default' && !disabled,
              'bg-slate-50': variant === 'dark' && !disabled,
              'bg-transparent': variant === 'clear' && !disabled,
              'bg-slate-100 text-slate-400': disabled,
            },
          )}
          value={value} 
          onChange={onChange}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          placeholder={placeholder}
          required={required}
          maxLength={maxLength}
          disabled={disabled}
          readOnly={readOnly}
        />
      </div>
      {right && (
        <div className="flex-shrink-0">
          {right}
        </div>
      )}
    </div>
  );
}