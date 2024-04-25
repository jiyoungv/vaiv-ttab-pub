import { useRef, useEffect } from 'react';
import classNames from 'classnames';

export interface InputProps {
  type?: React.HTMLInputTypeAttribute;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  focus?: boolean;
  left?: React.ReactNode;
  right?: React.ReactNode;
  variant?: 'default' | '';
  full?: boolean;
}

export default function Input({
  type = 'text',
  value,
  onChange,
  placeholder,
  focus,
  left,
  right,
  variant = 'default',
  full,

}: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (focus) {
      inputRef?.current?.focus();
    }
  }, [focus]);

  return (
    <div 
      className={classNames(
        'inline-flex justify-between items-center gap-2 px-3 py-2.5',
        {
          'border border-slate-200 rounded-lg bg-white': variant === 'default',
          'w-full': full,
        },
      )}
    >
      <div className="flex-auto flex justify-between items-center gap-2">
        {left && (
          <div className="flex-shrink-0">
            {left}
          </div>
        )}
        <input 
          ref={inputRef}
          type={type} 
          className="flex-auto text-slate-700 text-base-read placeholder:text-slate-400"
          value={value} 
          onChange={onChange}
          placeholder={placeholder}
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