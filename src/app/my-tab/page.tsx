import AppLayout from '@/components/domain/AppLayout';
import TabPreviewList from '@/components/domain/tab/TabPreviewList';
import Skeleton from '@/components/common/Skeleton';
import NoData from '@/components/common/NoData';
import { tempTabPreviewData } from '@/utils/tempData';

export default function MyTabPage() {
  return (
    <AppLayout
      navBar={{
        title: '마이탭',
      }}
      bg="dark"
    >
      <section>
        TODO: 탭 select, 보기 방식
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
