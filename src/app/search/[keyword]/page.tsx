'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRecoilState } from 'recoil';

import AppLayout from '@/components/domain/AppLayout';
import Toggle from '@/components/common/Toggle';
import Input from '@/components/common/Input';
import SearchResult from '@/components/domain/search/SearchResult';
import SearchResultRAG from '@/components/domain/search/SearchResultRAG';
import { searchTypeState } from '@/states';

export default function SearchResultPage() {
  const [mounted, setMounted] = useState(false);

  const [searchType, setSearchRAG] = useRecoilState(searchTypeState);

  // 첫 로딩시 RAG 토글 off
  useEffect(() => {
    if (mounted) return;
    setSearchRAG('default');
  }, [mounted, setSearchRAG]);

  return (
    <AppLayout 
      navBar={{
        right: (
          <div className="flex-auto relative">
            <Input 
              value="마케팅"
              placeholder="검색어를 입력해주세요."
              leftIcon="mgc_search_line"
              right={(
                <div className="z-10 flex items-center gap-1 relative">
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
            <Link
              href={`${process.env.NEXT_PUBLIC_FRONT_URL}/search`}
              className="absolute top-0 left-0 h-full w-[calc(100%-118px)]"
            ></Link>
          </div>
        ),
      }}
      hideGnb
      bg={searchType === 'default' ? 'dark' : 'default'}
    >
      {searchType === 'default' && (
        <SearchResult />
      )}
      {searchType === 'rag' && (
        <SearchResultRAG />
      )}
    </AppLayout>
  );
}