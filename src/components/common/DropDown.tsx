import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import IconButton from '@/components/common/IconButton';
import Icon from './Icon';

export interface DropDownProps {
  list: {
    value: string;
    label: string;
    icon?: string;
    href?: string;
    onClick?: () => void;
  }[];
  trigger?: React.ReactNode;
  position?: 'bottom-right' | 'bottom' | 'bottom-left';
}

export default function DropDown({
  list = [{ value: 'menu1', label: 'menu1', icon: 'mgc_settings_5_line' }],
  trigger,
  position = 'bottom-right',
}: DropDownProps) {
  const dropdownRef = useRef<any>(null);

  const [open, setOpen] = useState(false);

  // 외부 영역 클릭 시 닫기
  useEffect(() => {
    const handler = (e: {target: any}) => {
      if (open && (!dropdownRef?.current?.contains(e.target))) setOpen(false);
    };
    document.addEventListener('click', handler);
    
    return () => document.removeEventListener('click', handler);
  }, [open, dropdownRef]);

  return (
    <div className="relative">
      {!trigger ? (
        <IconButton 
          icon={{
            name: 'mgc_more_2_line',
            ariaLabel: '드롭다운 메뉴',
          }} 
          onClick={() => setOpen(true)}
        />
      ): (
        <button
          type="button"
          onClick={() => setOpen(true)}
        >
          {trigger}
        </button>
      )}
      {open && (
        <aside
          ref={dropdownRef}
          className={classNames(
            'z-10 absolute top-full w-max min-w-3 min-h-3 mt-2',
            {
              'right-0': position === 'bottom-right',
              'left-1/2 -translate-x-1/2': position === 'bottom',
              'left-0': position === 'bottom-left',
            },
          )}
        >
          <ul className="overflow-hidden py-2 border border-slate-50 rounded-xl bg-white shadow-xl">
            {list.map((v, i) => (
              <li key={i}>
                {v.href ? (
                  <Link
                    href={v.href}
                    className="flex items-center gap-2 px-6 py-2.5"
                    onClick={() => {
                      setOpen(false);
                      if (v.onClick) v.onClick();
                    }}
                  >
                    {v.icon && (
                      <Icon name={v.icon} className="-m-1" />
                    )}
                    <p className="text-slate-700 text-base-read font-medium">
                      {v.label}
                    </p>
                  </Link>
                ) : (
                  <button
                    type="button"
                    className="flex items-center gap-2 w-full px-6 py-2.5 hover:bg-slate-50"
                    onClick={() => {
                      setOpen(false);
                      if (v.onClick) v.onClick();
                    }}
                  >
                    {v.icon && (
                      <Icon name={v.icon} className="-ml-1" />
                    )}
                    <p className="text-slate-700 text-base-read font-medium">
                      {v.label}
                    </p>
                  </button>
                )}
              </li>
            ))}
          </ul>
        </aside>
      )}
    </div>
  );
}