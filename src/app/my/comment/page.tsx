import AppLayout from '@/components/domain/AppLayout';
import MyCommentItem from '@/components/domain/my/MyCommentItem';
import Inner from '@/components/common/Inner';
import Skeleton from '@/components/common/Skeleton';
import NoData from '@/components/common/NoData';
import { tempMyCommentData } from '@/utils/tempData';

export default function MyComment() {
  return (
    <AppLayout
      navBar={{
        title: '내 댓글',
      }}
    >
      <section>
        {tempMyCommentData && (
          <ul>
            {tempMyCommentData.map((data, i) => (
              <li key={i}>
                <MyCommentItem data={data} />
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
            text="내 댓글이 없습니다."
          />
        )}
      </section>
    </AppLayout>
  );
}