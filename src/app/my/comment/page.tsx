import AppLayout from '@/components/domain/AppLayout';
import MyCommentItem from '@/components/domain/my/MyCommentItem';
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
            TODO: loading
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