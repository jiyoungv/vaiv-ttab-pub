import Inner from '@/components/common/Inner';
import TabHead from '@/components/domain/tab/TabHead';
import TabInfoList from '@/components/domain/tab/TabInfoList';
import { TabData } from '@/types/tab';

export interface TabProps {
  data?: TabData;
}

export default function Tab({ data }: TabProps) {
  return (
    <>
      <TabHead data={data} />
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
          <TabInfoList data={data?.infos} />
        )}
      </section>
    </>
  );
}