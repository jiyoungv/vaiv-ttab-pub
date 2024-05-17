import classNames from 'classnames';

import TabItem from '@/components/domain/tab/TabPreview';
import { TabPreviewData, TabView } from '@/types/tab';

export interface TabPreviewListProps {
  data: TabPreviewData[];
  view?: TabView;
}

export default function TabPreviewList({ data, view = 'default' }: TabPreviewListProps) {
  return (
    <ul>
      {data?.map((v, i) => (
        <li 
          key={i} 
          className={classNames(
            {
              'mb-4 last:mb-0': view === 'default',
            },
          )}
        >
          <TabItem data={v} view={view} />
        </li>
      ))}
    </ul>
  );
}