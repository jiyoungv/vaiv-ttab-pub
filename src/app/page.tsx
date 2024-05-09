import AppLayout from '@/components/domain/AppLayout';
import SwipeTab from '@/components/common/SwipeTab';
import TabPreviewList from '@/components/domain/tab/TabPreviewList';
import Skeleton from '@/components/common/Skeleton';
import NoData from '@/components/common/NoData';
import { tempTabPreviewData } from '@/utils/tempData';

export default function Home() {
  return (
    <AppLayout 
      header
      bg="dark"
    >
      <section>
        <SwipeTab />
      </section>
      <section>
        {tempTabPreviewData && (
          <TabPreviewList data={tempTabPreviewData} />
        )}
        {'DEV: loading' && (
          <div className="flex flex-col gap-3">
            {Array(5).fill('').map((v, i) => (
              <Skeleton key={i} color="white" height="100px" square />
            ))}
          </div>
        )}
        {'DEV: no data' && (
          <NoData
            text="탭이 없습니다."
          />
        )}
      </section>
    </AppLayout>
  );
}