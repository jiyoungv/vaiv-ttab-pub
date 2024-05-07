import AppLayout from '@/components/domain/AppLayout';
import MyNoticeItem from '@/components/domain/my/MyNoticeItem';
import Inner from '@/components/common/Inner';
import Skeleton from '@/components/common/Skeleton';
import NoData from '@/components/common/NoData';
import { tempMyNoticeData } from '@/utils/tempData';

export default function MyNotice() {
  return (
    <AppLayout
      navBar={{
        title: '공지사항',
      }}
    >
      <section>
        {tempMyNoticeData && (
          <ul>
            {tempMyNoticeData.map((data, i) => (
              <li key={i}>
                <MyNoticeItem data={data} />
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
            text="공지사항이 없습니다."
          />
        )}
      </section>
    </AppLayout>
  );
}