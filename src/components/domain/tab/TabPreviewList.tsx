import TabItem from '@/components/domain/tab/TabPreview';
import { TabPreviewData } from '@/types/tab';

export interface TabPreviewListProps {
  data: TabPreviewData[];
}

export default function TabPreviewList({ data }: TabPreviewListProps) {
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