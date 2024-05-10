import AppLayout from '@/components/domain/AppLayout';
import SupportNotice from '@/components/domain/support/SupportNotice';
import Inner from '@/components/common/Inner';
import Skeleton from '@/components/common/Skeleton';
import NoData from '@/components/common/NoData';
import { tempSupportNoticeData } from '@/utils/tempData';

export default function SupportNoticePage() {
  return (
    <AppLayout
      navBar={{
        title: '공지사항',
      }}
    >
      <section>
        {tempSupportNoticeData && (
          <ul>
            {tempSupportNoticeData.map((data, i) => (
              <li key={i}>
                <SupportNotice data={data} />
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