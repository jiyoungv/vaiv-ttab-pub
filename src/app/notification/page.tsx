'use client'
import { useState } from 'react';

import AppLayout from '@/components/domain/AppLayout';
import Inner from '@/components/common/Inner';
import Tab from '@/components/common/Tab';
import NotificationItem from '@/components/domain/notification/NotificationItem';
import Skeleton from '@/components/common/Skeleton';
import NoData from '@/components/common/NoData';
import { tempNotificationData } from '@/utils/tempData';

export default function Notification() {
  const [tab, setTab] = useState('all');

  return (
    <AppLayout
      navBar={{
        title: '알림',
        right: (
          <button 
            type="button"
            className="text-slate-500 text-sm font-medium hover:underline"
            onClick={() => {
              const res = confirm('최근 30일 알림을 전체 삭제하시겠습니까?');
              if (res) {
                alert('DEV: 최근 30일 알림 전체삭제');
              }
            }}
          >
            전체 삭제
          </button>
        ),
      }}
    >
      {tempNotificationData && (
        <section className="relative mb-4">
          <Tab 
            list={[
              { value: 'all', label: '전체' },
              { value: 'join-tab', label: '참여탭' },
              { value: 'like-tab', label: '관심탭' },
              { value: 'follow', label: '팔로우' },
            ]}
            onChange={(activeValue) => setTab(activeValue)}
          />
        </section>
      )}
      <section>
        <Inner>
          <div className="mb-5">
            <p className="text-slate-500 text-sm font-medium">최근 30일</p>
          </div>
          {tempNotificationData && (
            <ul>
              {tempNotificationData.map((data, i) => (
                <li key={i} className="mb-5 last:mb-0">
                  <NotificationItem data={data} />
                </li>
              ))}
            </ul>
          )}
          {'DEV: loading' && (
            <div>
              <Inner>
                <div className="flex flex-col gap-3">
                  {Array(5).fill('').map((v, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Skeleton round />
                      <Skeleton />
                    </div>
                  ))}
                </div>
              </Inner>
            </div>
          )}
          {'DEV: no data' && (
            <NoData
              text="최근 알림 내역이 없습니다."
            />
          )}
        </Inner>
      </section>
    </AppLayout>
  );
}