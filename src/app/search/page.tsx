'use client'
import { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';

import AppLayout from '@/components/domain/AppLayout';
import Inner from '@/components/common/Inner';
import Input from '@/components/common/Input';
import RecentSearchItem from '@/components/domain/RecentSearchItem';
import Skeleton from '@/components/common/Skeleton';
import NoData from '@/components/common/NoData';
import { tempRecentSearchData } from '@/utils/tempData';

export default function Search() {
  const router = useRouter();

  const [keyword, setKeyword] = useState('');

  const onSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    alert('DEV: 검색하기');
    router.push(`${process.env.NEXT_PUBLIC_FRONT_URL}/search/${keyword}`);
  }, [router, keyword]);

  return (
    <AppLayout 
      navBar={{
        right: (
          <form className="flex-auto" onSubmit={onSubmit}>
            <Input 
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="검색어를 입력해주세요."
              autoFocus
              required
              leftIcon="mgc_search_line"
              variant="dark"
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
              className="text-slate-500 text-sm font-medium hover:underline"
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
            <div className="flex flex-col gap-3">
              <Skeleton />
              <Skeleton />
              <Skeleton />
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