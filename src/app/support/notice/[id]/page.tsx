import AppLayout from '@/components/domain/AppLayout';
import MyContentLayout from '@/components/domain/my/MyContentLayout';
import Inner from '@/components/common/Inner';
import NewIcon from '@/components/common/NewIcon';
import { tempSupportNoticeDetailData } from '@/utils/tempData';

export default function SupportNoticeDetailPage() {
  return (
    <AppLayout
      navBar={{
        title: '공지사항'
      }}
    >
      <section>
        <MyContentLayout notHover>
          <h2 className="text-slate-700 text-lg font-bold">
            {tempSupportNoticeDetailData.title}
            {tempSupportNoticeDetailData.new && (
              <NewIcon />
            )}
          </h2>
          <p className="mt-2 text-slate-400 text-xs">
            {tempSupportNoticeDetailData.date}
          </p>
        </MyContentLayout>
        <div className="py-7">
          <Inner>
            <p className="text-slate-700 text-base font-medium whitespace-pre-wrap">
              {tempSupportNoticeDetailData.text}
            </p>
          </Inner>
        </div>
      </section>
    </AppLayout>
  );
}