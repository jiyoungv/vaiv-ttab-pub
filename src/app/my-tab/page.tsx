'use client'
import { useState } from 'react';
import classNames from 'classnames';

import AppLayout from '@/components/domain/AppLayout';
import Inner from '@/components/common/Inner';
import Icon from '@/components/common/Icon';
import BigSelect from '@/components/common/BigSelect';
import TabPreviewList from '@/components/domain/tab/TabPreviewList';
import Skeleton from '@/components/common/Skeleton';
import NoData from '@/components/common/NoData';
import { tempTabPreviewData } from '@/utils/tempData';
import { TabView } from '@/types/tab';

const viewList: { 
  value: TabView; 
  icon: string;
}[] = [
  { value: 'default', icon: 'mgc_layout_grid_fill' },
  { value: 'list', icon: 'mgc_list_check_line' },
];

export default function MyTabPage() {
  const [select, setSelect] = useState('recent');

  const [view, setView] = useState<TabView>('default');

  return (
    <AppLayout
      navBar={{
        title: '마이탭',
      }}
      bg={view === 'default' ? 'dark' : 'default'}
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
            <div className="flex gap-1">
              {viewList.map((v, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setView(v.value)}
                  className={classNames(
                    'p-1 border hover:bg-slate-50', 
                    {
                      'border-slate-200': view !== v.value,
                      'border-slate-700': view === v.value,
                    },
                  )}
                >
                  <Icon 
                    name={v.icon}
                    color={view !== v.value ? 'text-slate-400' : 'text-slate-700'}
                  />
                </button>
              ))}
            </div>
          </div>
        </Inner>
      </section>
      <section>
        {tempTabPreviewData && (
          <TabPreviewList data={tempTabPreviewData} view={view} />
        )}
        {'DEV: loading' && (
          <div className="flex flex-col gap-3">
            {Array(5).fill('').map((v, i) => (
              <Skeleton key={i} color={view === 'default' ? 'white' : 'default'} height="100px" square />
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
