'use client'
import { useState } from 'react';

import AppLayout from '@/components/domain/AppLayout';
import SwipeTab from '@/components/common/SwipeTab';
import TabPreviewList from '@/components/domain/tab/TabPreviewList';
import Skeleton from '@/components/common/Skeleton';
import NoData from '@/components/common/NoData';
import { tempTabPreviewData } from '@/utils/tempData';
import DevModal from '@/components/domain/DevModal';

export default function Home() {
  const [openDevModal, setOpenDevModal] = useState(true);

  return (
    <AppLayout 
      header
      bg="dark"
    >
      <section>
        <SwipeTab 
          list={[
            { value: '', label: '' },
          ]} 
        />
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
      {openDevModal && <DevModal onClose={() => setOpenDevModal(false)} />}
    </AppLayout>
  );
}