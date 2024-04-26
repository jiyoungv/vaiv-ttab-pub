import AppLayout from '@/components/domain/AppLayout';
import MyItemLayout from '@/components/domain/my/MyItemLayout';
import Inner from '@/components/common/Inner';
import NewIcon from '@/components/common/NewIcon';
import { tempMyNoticeDetailData } from '@/utils/tempData';

export default function MyNotice() {
  return (
    <AppLayout
      navBar={{
        title: '공지사항'
      }}
    >
      <section>
        <MyItemLayout notHover>
          <h2 className="text-slate-700 text-lg font-bold">
            {tempMyNoticeDetailData.title}
            {tempMyNoticeDetailData.new && (
              <NewIcon />
            )}
          </h2>
          <p className="mt-2 text-slate-400 text-xs">
            {tempMyNoticeDetailData.date}
          </p>
        </MyItemLayout>
        <div className="py-7">
          <Inner>
            <p className="text-slate-700 text-base font-medium whitespace-pre-wrap">
              {tempMyNoticeDetailData.text}
            </p>
          </Inner>
        </div>
      </section>
    </AppLayout>
  );
}