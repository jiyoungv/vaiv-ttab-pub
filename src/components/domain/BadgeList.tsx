import { useMemo } from 'react';

import BadgeItem from '@/components/domain/BadgeItem';
import { BadgeData } from '@/types';

export interface BadgeListProps {
  data?: BadgeData[];
  mine?: boolean;
}

export default function BadgeList({ data, mine }: BadgeListProps) {
  const filterList = useMemo(() => {
    if (mine) return data;
    return data?.filter((v) => !v.locked);
  }, [mine, data]);

  return (
    <ul className="grid grid-cols-3 gap-y-8">
      {filterList?.map((v, i) => (
        <li key={i} className="inline-flex [&:nth-child(3n-1)]:justify-center [&:nth-child(3n)]:justify-end">
          <BadgeItem data={v} mine={mine} />
        </li>
      ))}
    </ul>
  );
}