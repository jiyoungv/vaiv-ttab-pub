'use client'
import { useCallback, useMemo, useState } from 'react';
import classNames from 'classnames';

import AppLayout from '@/components/domain/AppLayout';
import Inner from '@/components/common/Inner';
import Input from '@/components/common/Input';
import SupportFAQ from '@/components/domain/support/SupportFAQ';
import Skeleton from '@/components/common/Skeleton';
import NoData from '@/components/common/NoData';
import { faqCategorys, faqData } from '@/utils/constant';

export default function SupportFAQPage() {
  const [keyword, setKeyword] = useState('');

  const onSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    alert('DEV: 검색하기');
  }, []);

  const [activeTab, setActiveTab] = useState('category-all');

  const tabClassName = useCallback((value: string) => classNames(
    'inline-block align-top px-4 py-2 border rounded-lg text-sm font-medium',
    {
      'border-slate-200 text-slate-500': activeTab !== value,
      'border-slate-800 bg-slate-800 text-white': activeTab === value,
    },
  ), [activeTab]);

  const filteredData = useMemo(() => {
    if (activeTab === 'category-all') return faqData;

    return faqData.filter(v => v.category === activeTab);
  }, [activeTab]);

  return (
    <AppLayout
      navBar={{
        title: '자주 묻는 질문',
      }}
    >
      <section>
        <form onSubmit={onSubmit} className="mt-5">
          <Inner>
            <Input 
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="궁금하신 내용을 입력해주세요"
              required
              leftIcon="mgc_search_line"
              variant="dark"
              full 
            />
          </Inner>
        </form>
        TODO: tab slide 기능
        {filteredData && (
          <>
            <ul className="flex gap-1 my-6">
              <li>
                <button 
                  type="button"
                  className={tabClassName('category-all')}
                  onClick={() => setActiveTab('category-all')}
                >
                  전체
                </button>
              </li>
              {faqCategorys.map((v, i) => (
                <li key={i}>
                  <button 
                    type="button"
                    className={tabClassName(v.value)}
                    onClick={() => setActiveTab(v.value)}
                  >
                    {v.label}
                  </button>
                </li>
              ))}
            </ul>
            <div>
              {filteredData.map((data, i) => (
                <SupportFAQ key={i} data={data} />
              ))}
            </div>
          </>
        )}
        {'DEV: loading' && (
          <div>
            <Inner>
              <div className="flex flex-col gap-3">
                {Array(5).fill('').map((v, i) => (
                  <Skeleton key={i} />
                ))}
              </div>
            </Inner>
          </div>
        )}
        {'DEV: no data' && (
          <NoData
            text="검색하신 내용이 없습니다."
          />
        )}
      </section>
    </AppLayout>
  );
}