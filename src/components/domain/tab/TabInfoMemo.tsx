import classNames from 'classnames';

import { TabInfoCategory } from '@/types/tab';

export interface TabInfoMemoProps {
  category?: TabInfoCategory;
  children?: string;
  className?: string;
}

export default function TabInfoMemo({
  category,
  children,
  className,
}: TabInfoMemoProps) {
  return (
    <div 
      className={classNames(
        'p-3 border-l-2 bg-white shadow-sm',
        {
          'border-l-primary-400': !category,
          'border-l-note-400': category === 'note',
          'border-l-link-400': category === 'link',
          'border-l-search-400': category === 'search',
          'border-l-image-400': category === 'image',
          'border-l-file-400': category === 'file',
          'border-l-report-400': category === 'report',
          [`${className}`]: className,
        },
      )}
    >
      {children && (
        <p className="text-slate-700 text-sm">
          {children}
        </p>
      )}
    </div>
  );
}