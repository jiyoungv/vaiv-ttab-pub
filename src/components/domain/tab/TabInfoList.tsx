import TabInfo from '@/components/domain/tab/TabInfo';
import { TabInfoData } from '@/types/tab';

export interface TabInfoListProps {
  data?: TabInfoData[];
}

export default function TabInfoList({ data }: TabInfoListProps) {
  return (
    <ul>
      {data?.map((v, i) => (
        <li key={i} className="mb-4 last:mb-0">
          <TabInfo data={v} />
        </li>
      ))}
    </ul>
  );
}