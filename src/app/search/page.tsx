'use client'
import { useCallback, useState } from 'react';

import AppLayout from '@/components/domain/AppLayout';
import Inner from '@/components/common/Inner';
import Input from '@/components/common/Input';
import RecentSearchItem from '@/components/domain/RecentSearchItem';
import Icon from '@/components/common/Icon';
import NoData from '@/components/common/NoData';
import { tempRecentSearchData } from '@/utils/tempData';

export default function Search() {
  const [keyword, setKeyword] = useState('');

  const onSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();

    alert('DEV: 검색하기');
  }, []);

  return (
    <AppLayout 
      navBar={{
        right: (
          <form className="flex-auto" onSubmit={onSubmit}>
            <Input 
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="검색어를 입력해주세요."
              left={<Icon name="mgc_search_line" color="text-slate-500" size="text-xl" />}
              focus
              full 
            />
          </form>
        ),
      }}
      hideGnb
    >
      <section className="pt-4">
        <Inner>
          <div className="flex justify-between items-center gap-1 mb-5">
            <p className="text-slate-700 text-base-read font-bold">
              최근 검색어
            </p>
            <button 
              type="button"
              className="text-slate-500 text-sm font-medium hover:underline active:underline"
              onClick={() => {
                const res = confirm('최근 검색어를 전체 삭제하시겠습니까?');
                if (res) {
                  alert('DEV: 최근 검색어 전체 삭제');
                }
              }}
            >
              전체 삭제
            </button>
          </div>
          {tempRecentSearchData && (
            <ul>
              {tempRecentSearchData.map((data, i) => (
                <li key={i} className="mb-3 last:mb-0">
                  <RecentSearchItem data={data} />
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
              text="최근 검색어가 없습니다."
            />
          )}
        </Inner>
      </section>
    </AppLayout>
  );
}