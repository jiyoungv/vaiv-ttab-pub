'use client'
import { useState } from 'react';

import AppLayout from '@/components/domain/AppLayout';
import Inner from '@/components/common/Inner';
import BadgeImage from '@/components/domain/BadgeImage';
import BadgeList from '@/components/domain/BadgeList';
import Skeleton from '@/components/common/Skeleton';
import NoData from '@/components/common/NoData';
import BadgeGetModal from '@/components/domain/BadgeGetModal';
import { tempBadgeData } from '@/utils/tempData';

export default function MyBadgePage() {
  const [openBadgeGetModal, setOpenBadgeGetModal] = useState(true);

  return (
    <>
      <AppLayout
        navBar={{
          title: '활동 배지',
        }}
        pb="0"
      >
        <section className="py-7 bg-slate-50">
          <Inner>
            <div className="mb-7 text-center">
              <h2 className="text-slate-700 text-lg font-bold">
                나의 대표 배지
              </h2>
              <p className="mt-2 text-slate-500 text-sm">
                회원님의 프로필 정보와 함께 표시되는 배지입니다. <br/>
                배지를 획득하여 활동 내역을 다른 사람들에게 알려보세요.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="text-center">
                <BadgeImage src="/images/badge_beginner.png" size="100px" />
                <p className="text-slate-700 text-sm font-bold">
                  비기너
                </p>
              </div>
            </div>
          </Inner>
        </section>
        <section className="bg-slate-50">
          <div className="pt-4 pb-[var(--main-padding-bottom)] rounded-[20px] rounded-bl-none rounded-br-none bg-white shadow-[0px_-2px_20px_0px_rgba(0,0,0,0.04)]">
            <div className="px-10">
              <div className="mb-4 text-center">
                <h3 className="text-slate-700 text-lg font-bold">
                  획득한 배지
                </h3>
              </div>
              {tempBadgeData && (
                <BadgeList data={tempBadgeData} mine />
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
          </div>
        </section>
      </AppLayout>
      {openBadgeGetModal && (
        <BadgeGetModal onClose={() => setOpenBadgeGetModal(false)} />
      )}
    </>
  );
}