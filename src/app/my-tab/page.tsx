import AppLayout from '@/components/domain/AppLayout';
import TabList from '@/components/domain/tab/TabList';
import Skeleton from '@/components/common/Skeleton';
import NoData from '@/components/common/NoData';
import { tempTabData } from '@/utils/tempData';

export default function MyTab() {
  return (
    <AppLayout
      navBar={{
        title: '마이탭',
      }}
      bg="dark"
    >
      <section>
        TODO: 최근 조회 탭
      </section>
      <section>
        {tempTabData && (
          <TabList data={tempTabData} />
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
