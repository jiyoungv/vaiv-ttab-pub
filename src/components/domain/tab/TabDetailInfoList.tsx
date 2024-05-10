import TabDetailInfo from '@/components/domain/tab/TabDetailInfo';
import { TabDetailInfoData } from '@/types/tab';

export interface TabDetailInfoListProps {
  data?: TabDetailInfoData[];
}

export default function TabDetailInfoList({ data }: TabDetailInfoListProps) {
  return (
    <ul>
      {data?.map((v, i) => (
        <li key={i} className="mb-4 last:mb-0">
          <TabDetailInfo data={v} />
        </li>
      ))}
    </ul>
  );
}