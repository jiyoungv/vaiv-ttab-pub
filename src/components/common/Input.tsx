import { useRef, useState, useEffect } from 'react';
import classNames from 'classnames';

import Icon from '@/components/common/Icon';

export interface InputProps {
  type?: React.HTMLInputTypeAttribute;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  required?: boolean;
  maxLength?: number;
  focus?: boolean;
  error?: boolean;
  variant?: 'default' | 'dark';
  full?: boolean;
  leftIcon?: string; 
  left?: React.ReactNode;
  right?: React.ReactNode;
}

export default function Input({
  type = 'text',
  value,
  onChange,
  placeholder,
  required,
  maxLength,
  focus,
  error,
  variant = 'default',
  full,
  leftIcon = 'mgc_search_line',
  left,
  right,

}: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [focusState, setFocusState] = useState<boolean | undefined>();

  useEffect(() => {
    if (focus) {
      setFocusState(true);
      inputRef?.current?.focus();
    }
  }, [focus]);

  return (
    <div 
      className={classNames(
        'inline-flex justify-between items-center gap-2 px-3 py-2.5 border',
        {
          'border-error-500': error,
          'border-slate-200 rounded-lg bg-white': variant === 'default',
          'border-slate-50 rounded-[50px] bg-slate-50': variant === 'dark',
          'w-full': full,
          'border-slate-500': focusState,
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
            'flex-auto text-slate-700 text-base-read placeholder:text-slate-400 focus:outline-none',
            {
              'bg-white': variant === 'default',
              'bg-slate-50': variant === 'dark',
            },
          )}
          value={value} 
          onChange={onChange}
          onFocus={() => setFocusState(true)}
          onBlur={() => setFocusState(false)}
          placeholder={placeholder}
          required={required}
          maxLength={maxLength}
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