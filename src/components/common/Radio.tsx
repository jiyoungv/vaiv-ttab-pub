import classNames from 'classnames';

export interface RadioProps {
  id: string;
  name: string;
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
  disabled?: boolean;
  size?: 'sm' | 'md';
  text?: string;
  supportText?: string;
  children?: React.ReactNode;
}

export default function Radio({
  id,
  name,
  checked,
  onChange,
  required,
  disabled,
  size = 'sm',
  text,
  supportText,
  children,
}: RadioProps) { 
  return (
    <div>
      <input 
        type="radio" 
        className="hidden"
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}
        required={required}
        disabled={disabled}
      />
      <label 
        htmlFor={id}
        className={classNames(
          'group inline-flex items-start cursor-pointer',
          {
            'gap-2': size === 'sm',
            'gap-3': size === 'md',
            'pointer-events-none': disabled,
          },
        )}
      >
        <span
          className={classNames(
            'flex-shrink-0 inline-block',
            {
              'py-0.5': size === 'sm',
              'py-1': size === 'md',
            },
          )}
        >
          <i
            className={classNames(
              'align-top inline-flex justify-center items-center aspect-square border rounded-full',
              {
                'border-slate-200 bg-white group-hover:border-primary-500 group-hover:bg-primary-100': !checked && !disabled,
                'border-primary-500 bg-primary-500 group-hover:border-primary-700 group-hover:bg-primary-700': checked && !disabled,
                'border-slate-200 bg-slate-100': disabled,
                'w-4': size === 'sm',
                'w-5': size === 'md',
              },
            )}
          >
            <i 
              className={classNames(
                'flex-shrink-0 aspect-square rounded-full',
                {
                  'hidden group-hover:bg-primary-100': !checked,
                  'inline-block': checked,
                  'bg-white': !disabled,
                  'bg-slate-200': disabled,
                  'w-1.5': size === 'sm',
                  'w-2': size === 'md',
                },
              )}
            ></i>
          </i>
        </span>
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
                    'text-slate-500': !disabled,
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
      </label>
    </div>
  );
}