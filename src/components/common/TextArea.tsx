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
}: TextAreaProps) { 
  return (
    <AntdTextArea
      className={classNames(
        'scrollbar-mini px-3.5 py-2.5 text-base-read hover:border-slate-200 focus:border-primary-500 focus:shadow-none',
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