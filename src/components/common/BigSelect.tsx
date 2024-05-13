import { useState, useEffect } from 'react';
import classNames from 'classnames';

import Icon from '@/components/common/Icon';

export interface BigSelectProps {
  list: {
    value: string;
    label: string;
  }[];
  value?: string;
  defaultActiveValue?: string;
  onChange?: (value: string) => void;
  dim?: boolean;
}

export default function BigSelect({
  list,
  value,
  defaultActiveValue,
  onChange,
  dim,
}: BigSelectProps) {
  const [mounted, setMounted] = useState(false);

  const [activeValue, setActiveValue] = useState(value || list[0].value);

  // defaultActiveValue
  useEffect(() => {
    if (mounted) return;

    if (defaultActiveValue) setActiveValue(defaultActiveValue);
    setMounted(true);
  }, [mounted, defaultActiveValue]);

  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button 
        type="button"
        className="inline-flex items-start pb-1.5 border-b-2 border-b-slate-700 hover:"
        onClick={() => setOpen(true)}
      >
        <p className="text-slate-700 text-2xl font-bold">
          {list.filter((v) => v.value === activeValue)[0].label}
        </p>
        <Icon name="mgc_down_small_fill" size="text-3xl-size" />
      </button>
      {(dim && open) && (
        <div 
          className="z-50 fixed top-0 left-0 right-0 bottom-0 bg-black/40" 
          onClick={() => setOpen(false)}
        ></div>
      )}
      {open && (
        <aside className="z-50 absolute top-full left-0 w-max mt-1 py-2 border border-slate-50 rounded-xl bg-white shadow-xl">
          <ul>
            {list.map((v, i) => (
              <li key={i}>
                <button
                  type="button"
                  className={classNames(
                    'w-full px-5 py-2.5 text-base-read text-left hover:bg-slate-50',
                    {
                      'text-slate-400 font-medium': activeValue !== v.value,
                      'text-slate-700 font-bold': activeValue === v.value,
                    },
                  )}
                  onClick={() => {
                    setActiveValue(v.value);
                    setOpen(false);
                    if (onChange) onChange(v.value);
                  }}
                >
                  {v.label}
                </button>
              </li>
            ))}
          </ul>
        </aside>
      )}
    </div>
  );
}