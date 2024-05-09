import Inner from '@/components/common/Inner';
import TabDetailHead from '@/components/domain/tab/TabDetailHead';
import TabDetailInfoList from '@/components/domain/tab/TabDetailInfoList';
import Skeleton from '@/components/common/Skeleton';
import NoData from '@/components/common/NoData';
import { TabDetailData } from '@/types/tab';

export interface TabDetailProps {
  data?: TabDetailData;
}

export default function TabDetail({ data }: TabDetailProps) {
  return (
    <>
      <TabDetailHead data={data} />
      <section>
        <div className="pt-4 pb-2">
          <Inner>
            <div className="flex justify-between items-center gap-1">
              <div>
                TODO: 정렬옵션
              </div>
              <div className="flex items-center gap-1">
                <p className="text-slate-600 text-xs">
                  Update
                </p>
                <p className="text-slate-600 text-xs font-bold">
                  2024-01-01
                </p>
              </div>
            </div>
          </Inner>
        </div>
        {data?.infos && (
          <TabDetailInfoList data={data?.infos} />
        )}
      </section>
    </>
  );
}