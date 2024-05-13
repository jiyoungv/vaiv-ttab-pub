'use client'
import { useState } from 'react';

import AppLayout from '@/components/domain/AppLayout';
import Inner from '@/components/common/Inner';
import BigSelect from '@/components/common/BigSelect';
import TabPreviewList from '@/components/domain/tab/TabPreviewList';
import Skeleton from '@/components/common/Skeleton';
import NoData from '@/components/common/NoData';
import { tempTabPreviewData } from '@/utils/tempData';

export default function MyTabPage() {
  const [select, setSelect] = useState('recent');

  const [view, setView] = useState('card');

  return (
    <AppLayout
      navBar={{
        title: '마이탭',
      }}
      bg="dark"
    >
      <section className="py-2 bg-white">
        <Inner>
          <div className="flex justify-between items-center gap-1">
            <BigSelect 
              list={[
                { value: 'recent', label: '최근 조회 탭(10)' },
                { value: 'join', label: '참여중인 탭(10)' },
                { value: 'bookmark', label: '관심 탭(10)' },
                { value: 'privacy', label: '비공개 탭(10)' },
              ]}
              onChange={(value) => setSelect(value)}
              dim
            />
            <div>
              TODO: 보기 방식
            </div>
          </div>
        </Inner>
      </section>
      <section>
        {tempTabPreviewData && (
          <TabPreviewList data={tempTabPreviewData} />
        )}
        {'DEV: loading' && (
          <div className="flex flex-col gap-3">
            {Array(5).fill('').map((v, i) => (
              <Skeleton key={i} color="white" height="100px" square />
            ))}
          </div>
        )}
        {'DEV: no data' && (
          <NoData
            text="탭이 없습니다."
          />
        )}
      </section>
    </AppLayout>
  );
}
