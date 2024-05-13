'use client'
import { useState } from 'react';

import AppLayout from '@/components/domain/AppLayout';
import Inner from '@/components/common/Inner';
import ProfileThumbnail from '@/components/domain/ProfileThumbnail';
import Badge from '@/components/common/Badge';
import Button from '@/components/common/Button';
import Tab from '@/components/common/Tab';
import TabPreviewList from '@/components/domain/tab/TabPreviewList';
import BadgePreviewList from '@/components/domain/BadgePreviewList';
import Skeleton from '@/components/common/Skeleton';
import NoData from '@/components/common/NoData';
import { tempTabPreviewData } from '@/utils/tempData';

export default function UserDetailPage() {
  const [tab, setTab] = useState('tab');

  return (
    <AppLayout 
      navBar={{
        title: '프로필',
      }}
    >
      <section className="pt-8 pb-7.5 bg-slate-100">
        <Inner>
          <div className="flex justify-center mb-4">
            <div className="relative">
              <ProfileThumbnail src="/images/temp/temp1.jpg" width="100px" />
              <div className="absolute bottom-0 right-0 w-8 aspect-square rounded-full bg-white text-xs">
                TODO: 배지
              </div>
            </div>
          </div>
          <div className="mb-2 text-center">
            <h1 className="text-slate-700 text-2xl font-bold">
              탭유저1
            </h1>
            <p className="mt-2 text-slate-500 text-base font-medium">
              일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔
            </p>
          </div>
          <div className="flex flew-wrap justify-center gap-2 mb-5">
            <Badge color="cyan" size="md">
              여행계획
            </Badge>
            <Badge color="violet" size="md">
              국내여행
            </Badge>
            <Badge color="blue" size="md">
              여행계획
            </Badge>
          </div>
          <div className="flex justify-between items-center px-10">
            <div className="text-center">
              <p className="text-slate-700 text-2xl font-bold">
                {13333}
              </p>
              <p className="text-slate-400 text-sm font-medium">
                탭
              </p>
            </div>
            <div className="w-px h-8 bg-slate-300"></div>
            <div className="group text-center">
              <p className="text-slate-700 text-2xl font-bold">
                {Number(1000).toLocaleString()}
              </p>
              <p className="text-slate-400 text-sm font-medium">
                팔로워
              </p>
            </div>
            <div className="w-px h-8 bg-slate-300"></div>
            <div className="text-center">
              <p className="text-slate-700 text-2xl font-bold">
                1.1k?
              </p>
              <p className="text-slate-400 text-sm font-medium">
                팔로잉
              </p>
            </div>
          </div>
          <div className="mt-5">
            <Button
              color="primary"
              round
              full
              shadow
            >
              {'DEV: 팔로우 X' ? '팔로우' : '팔로잉 해제'}
            </Button>
          </div>
        </Inner>
      </section>
      <section>
        <Tab 
          list={[
            { value: 'tab', label: '탭' },
            { value: 'badge', label: '활동배지' },
          ]}
          onChange={(value) => setTab(value)}
        />
        <div>
          {tab === 'tab' && (
            <div>
              {tempTabPreviewData && (
                <TabPreviewList data={tempTabPreviewData} />
              )}
              {'DEV: loading' && (
                <div className="flex flex-col gap-3">
                  {Array(5).fill('').map((v, i) => (
                    <Skeleton key={i} height="100px" square />
                  ))}
                </div>
              )}
              {'DEV: no data' && (
                <NoData
                  text="탭이 없습니다."
                />
              )}
            </div>
          )}
          {tab === 'badge' && (
            <div className="mt-5 px-10">
              {'DEV: data' && (
                <BadgePreviewList />
              )}
              {'DEV: loading' && (
                <div className="flex justify-between">
                  {Array(3).fill('').map((v, i) => (
                    <Skeleton key={i} width="80px" height="110px" />
                  ))}
                </div>
              )}
              {'DEV: no data' && (
                <NoData
                  text="배지가 없습니다."
                />
              )}
            </div>
          )}
        </div>
      </section>
    </AppLayout>
  );
}