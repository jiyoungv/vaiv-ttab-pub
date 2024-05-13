import { useState } from 'react';

import Inner from '@/components/common/Inner';
import TabPreviewList from '@/components/domain/tab/TabPreviewList';
import Radio from '@/components/common/Radio';
import Skeleton from '@/components/common/Skeleton';
import NoData from '@/components/common/NoData';
import { tempTabPreviewData } from '@/utils/tempData';

export interface SearchResultProps {}

export default function SearchResult({}: SearchResultProps) {
  const [sort, setSort] = useState('sort1');

  return (
    <section>
      {tempTabPreviewData && (
        <>
          <div className="bg-white">
            <Inner>
              <div className="flex justify-between items-center gap-1 py-3">
                <button 
                  type="button"
                  className="text-slate-500 text-sm font-bold hover:underline"
                  onClick={() => alert('TODO: 검색 옵션 바텀 시트 open')}
                >  
                  검색 옵션
                </button>
                <div className="inline-flex gap-2">
                  {[
                    { id: 'sort1', text: '정확도순' },
                    { id: 'sort2', text: '최신순' },
                  ].map((v, i) => (
                    <Radio 
                      key={i}
                      id={v.id}
                      name="sort" 
                      text={v.text}
                      checked={sort === v.id} 
                      onChange={(e) => e.target.checked && setSort(v.id)} 
                    />
                  ))}
                </div>
              </div>
            </Inner>
          </div>
          <TabPreviewList data={tempTabPreviewData} />
        </>
      )}
      {'DEV: loading' && (
        <div className="flex flex-col gap-3 mt-3">
          {Array(5).fill('').map((v, i) => (
            <Skeleton key={i} color="white" height="100px" square />
          ))}
        </div>
      )}
      {'DEV: no data' && (
        <NoData
          text="검색 결과가 없습니다."
        />
      )}
    </section>
  );
}