import AppLayout from '@/components/domain/AppLayout';
import MyNoticeItem from '@/components/domain/my/MyNoticeItem';
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
            TODO: loading
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