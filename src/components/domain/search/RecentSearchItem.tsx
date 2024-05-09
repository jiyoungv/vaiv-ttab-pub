import Link from 'next/link';

import Icon from '@/components/common/Icon';
import IconButton from '@/components/common/IconButton';
import { RecentSearchData } from '@/types';

export interface RecentSearchItemProps {
  data: RecentSearchData;
}

export default function RecentSearchItem({ data }: RecentSearchItemProps) {
  return (
    <article className="flex justify-between items-center gap-3">
      <Link 
        href={data?.link}
        className="group inline-flex items-center gap-2"
      >
        <Icon 
          name="mgc_time_line"
          color="text-slate-400"
          size="text-xl-size"
          className="flex-shrink-0"
        />
        <p className="text-slate-700 text-base-read font-medium group-hover:underline active-hover:underline">
          {data?.keyword}
        </p>
      </Link>
      <button 
        type="button"
      >
        <IconButton
          icon={{
            name: "mgc_close_line",
            color: "text-slate-500",
            size: "text-base-size",
            className: "flex-shrink-0",
          }}
          onClick={() => alert('DEV: 검색어 삭제')}
        />
      </button>
    </article>
  );
}