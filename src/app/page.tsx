'use client'
import { useState } from 'react';
import classNames from 'classnames';

import AppLayout from '@/components/domain/AppLayout';
import TabPreviewList from '@/components/domain/tab/TabPreviewList';
import IconButton from '@/components/common/IconButton';
import Skeleton from '@/components/common/Skeleton';
import NoData from '@/components/common/NoData';
import { tempTabPreviewData } from '@/utils/tempData';

export default function Home() {
  const [tag, setTag] = useState('tag-all');

  return (
    <AppLayout 
      header
      bg="dark"
    >
      <section className="px-4 py-2 bg-white">
        <div className="flex justify-between gap-1">
          <ul className="flex flex-wrap gap-1">
            {[
              { value: 'tag-all', label: '전체' },
              { value: 'tag1', label: '마케팅' },
              { value: 'tag2', label: '기획' },
              { value: 'tag3', label: '부동산' },
            ].map((v, i) => (
              <li key={i}>
                <button
                  type="button"
                  onClick={() => setTag(v.value)}
                  className={classNames(
                    'px-4 py-1 rounded-2xl',
                    {
                      'hover:bg-slate-50': tag !== v.value,
                      'bg-primary-50': tag === v.value,
                    },
                  )}
                >
                  <p
                    className={classNames(
                      'text-sm',
                      {
                        'text-slate-400 font-medium': tag !== v.value,
                        'text-primary-500 font-bold': tag === v.value,
                      },
                    )}
                  >
                    {v.label}
                  </p>
                </button>
              </li>
            ))}
          </ul>
          <IconButton 
            icon={{
              name: 'mgc_settings_5_line',
              color: 'text-slate-500',
              ariaLabel: '추천 탭 태그 설정',
            }}
            onClick={() => alert('TODO: 추천 탭 태그 설정 바텀시트 open')}
          />
        </div>
        TODO: swipe 기능
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