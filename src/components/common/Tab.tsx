import { useState, useEffect, useMemo } from 'react';
import classNames from 'classnames';
import { useRouter } from 'next/navigation';

export interface TabProps {
  list: {
    value: string;
    label: string;
    href?: string;
    onClick?: () => void;
  }[];
  value?: string;
  defaultActiveValue?: string;
  onChange?: (value: string) => void;
}

export default function Tab({
  list,
  value,
  defaultActiveValue,
  onChange,
}: TabProps) {
  const router = useRouter();

  const [mounted, setMounted] = useState(false);

  const [activeValue, setActiveValue] = useState(value || list[0].value);

  // defaultActiveValue
  useEffect(() => {
    if (mounted) return;

    if (defaultActiveValue) setActiveValue(defaultActiveValue);
    setMounted(true);
  }, [mounted, defaultActiveValue]);

  const widthPercent = useMemo(() => (100 / list.length).toFixed(4), [list]);
  const activeIndex = useMemo(() => list.findIndex(v => v.value === activeValue), [list, activeValue]);

  return (
    <div className="z-30 sticky top-17 bg-white" role="tablist">
      <ul className="flex border-b border-b-slate-400">
        {list.map((v, i) => (
          <li 
            key={i}
            style={{
              width: `${widthPercent}%`,
            }}
          >
            <button
              type="button"
              className={classNames(
                'inline-flex justify-center items-center relative w-full h-15 text-base-read cursor-pointer',
                {
                  'text-slate-400 font-medium hover:text-slate-700': v.value !== activeValue,
                  'text-slate-700 font-bold': v.value === activeValue,
                },
              )}
              onClick={() => {
                setActiveValue(v.value);
                if (v.href) router.push(v.href);
                if (v.onClick) v.onClick();
                if (onChange) onChange(v.value);
              }}
              role={v.href ? 'link' : 'button'}
            >
              {v.label}
            </button>
          </li>
        ))}
      </ul>
      <span
        className="inline-block absolute left-0 bottom-0 h-0.5 bg-primary-500 transition-all"
        style={{
          width: `${widthPercent}%`,
          left: `calc(${widthPercent}% * ${activeIndex})`,
        }}
      ></span>
    </div>
  );
}