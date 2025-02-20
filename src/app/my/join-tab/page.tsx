import AppLayout from '@/components/domain/AppLayout';
import MyJoinTab from '@/components/domain/my/MyJoinTab';
import Inner from '@/components/common/Inner';
import Skeleton from '@/components/common/Skeleton';
import NoData from '@/components/common/NoData';
import { tempMyJoinTabData } from '@/utils/tempData';

export default function MyJoinTabPage() {
  return (
    <AppLayout
      navBar={{
        title: '탭 참여 신청',
      }}
    >
      <section>
        {tempMyJoinTabData && (
          <ul>
            {tempMyJoinTabData.map((data, i) => (
              <li key={i}>
                <MyJoinTab data={data} />
              </li>
            ))}
          </ul>
        )}
        {'DEV: loading' && (
          <div>
            <Inner>
              <div className="flex flex-col gap-3">
                {Array(5).fill('').map((v, i) => (
                  <Skeleton key={i} />
                ))}
              </div>
            </Inner>
          </div>
        )}
        {'DEV: no data' && (
          <NoData
            text="참여 신청한 탭이 없습니다."
          />
        )}
      </section>
    </AppLayout>
  );
}