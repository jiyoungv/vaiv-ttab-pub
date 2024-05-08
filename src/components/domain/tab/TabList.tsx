import TabItem from '@/components/domain/tab/TabItem';
import { TabData } from '@/types/tab';

export interface TabListProps {
  data: TabData[];
}

export default function TabList({ data }: TabListProps) {
  return (
    <ul>
      {data?.map((v, i) => (
        <li key={i} className="mb-4 last:mb-0">
          <TabItem data={v} />
        </li>
      ))}
    </ul>
  );
}