'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import AppLayout from '@/components/domain/AppLayout';
import Tab from '@/components/common/Tab';
import CreateInfo from '@/components/domain/create/CreateInfo';
import CreateTab from '@/components/domain/create/CreateTab';

export default function CreateInfoPage() {
  const router = useRouter();

  const [tab, setTab] = useState('info');

  return (
    <AppLayout
      navBar={{
        hideBack: true,
        left: (
          <button 
            type="button"
            className="text-slate-500 text-base-read font-medium hover:underline"
            onClick={() => {
              const res = confirm('작성을 취소하시겠습니까?\n작성한 내용은 저장되지 않습니다.');
              if (res) {
                router.back();
              }
            }}
            role="link"
          >
            취소
          </button>
        ),
        right: (
          <button 
            type="button"
            className="text-primary-500 text-base-read font-medium hover:underline"
            onClick={() => {
              const res = confirm('정보를 생성하시겠습니까?');
              if (res) {
                alert('DEV: 정보 생성');
              }
            }}
            role="link"
          >
            생성
          </button>
        ),
      }}
      hideGnb
    >
      <Tab 
        list={[
          { value: 'info', label: '정보 생성' },
          { value: 'tab', label: '탭 생성' },
        ]}
        onChange={(value) => setTab(value)}
      />
      {tab === 'info' && <CreateInfo />}
      {tab === 'tab' && <CreateTab />}
    </AppLayout>
  );
}