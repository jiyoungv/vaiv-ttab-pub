import TabDetailInfo from '@/components/domain/tab/TabDetailInfo';
import { TabDetailInfoData } from '@/types/tab';

export interface TabDetailInfoListProps {
  data?: TabDetailInfoData[];
}

export default function TabDetailInfoList({ data }: TabDetailInfoListProps) {
  return (
    <ul>
      TabDetailInfoList
      {data?.map((v, i) => (
        <li key={i}>
          <TabDetailInfo data={v} />
        </li>
      ))}
    </ul>
  );
}