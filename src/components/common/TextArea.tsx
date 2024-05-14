import React from 'react';
import { Input } from 'antd';
import classNames from 'classnames';

const AntdTextArea = Input.TextArea;

export interface TextAreaProps {
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  autoSize?: {
    minRows?: number;
    maxRows?: number;
  } | boolean;
  placeholder?: string;
  required?: boolean;
  maxLength?: number;
  disabled?: boolean;
  readOnly?: boolean;
  error?: boolean;
  variant?: 'default' | 'clear';
}

export default function TextArea({
  value, 
  onChange, 
  autoSize, 
  placeholder, 
  required,
  maxLength, 
  disabled, 
  readOnly,
  error,
  variant = 'default',
}: TextAreaProps) { 
  return (
    <AntdTextArea
      className={classNames(
        'scrollbar-mini text-base-read focus:border-primary-500 focus:shadow-none',
        {
          'px-3.5 py-2.5 hover:border-slate-200': variant === 'default',
          'p-0 border-none rounded-none': variant === 'clear',
        },
      )}
      value={value}
      onChange={onChange}
      autoSize={autoSize}
      placeholder={placeholder}
      required={required}
      maxLength={maxLength}
      disabled={disabled}
      readOnly={readOnly}
      status={error ? 'error' : ''}
      style={{ resize: 'none' }}
    />
  );
}