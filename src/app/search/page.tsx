'use client'
import { useCallback, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useRecoilState } from 'recoil';

import AppLayout from '@/components/domain/AppLayout';
import Inner from '@/components/common/Inner';
import Input from '@/components/common/Input';
import Toggle from '@/components/common/Toggle';
import RecentSearchItem from '@/components/domain/search/RecentSearchItem';
import Skeleton from '@/components/common/Skeleton';
import NoData from '@/components/common/NoData';
import { searchTypeState } from '@/states';
import { tempRecentSearchData } from '@/utils/tempData';

export default function SearchPage() {
  const router = useRouter();

  const [mounted, setMounted] = useState(false);

  const [keyword, setKeyword] = useState('');

  const [searchType, setSearchRAG] = useRecoilState(searchTypeState);

  // 첫 로딩시 RAG 토글 off
  useEffect(() => {
    if (mounted) return;
    setSearchRAG('default');
  }, [mounted, setSearchRAG]);

  const onSubmitSearch = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    alert('DEV: 검색하기');
    router.push(`${process.env.NEXT_PUBLIC_FRONT_URL}/search/${keyword}`);
  }, [router, keyword]);

  return (
    <AppLayout 
      navBar={{
        right: (
          <form className="flex-auto" onSubmit={onSubmitSearch}>
            <Input 
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="검색어를 입력해주세요."
              autoFocus
              required
              leftIcon="mgc_search_line"
              right={(
                <div className="flex items-center gap-1">
                  <p className="text-slate-500 text-xs font-bold">
                    RAG검색
                  </p>
                  <Toggle 
                    size="md" 
                    onChange={(checked) => setSearchRAG(!checked ? 'default' : 'rag')}
                  />
                </div>
              )}
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
            {tempRecentSearchData && (
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
            )}
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
              {Array(5).fill('').map((v, i) => (
                <Skeleton key={i} />
              ))}
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