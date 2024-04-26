'use client'
import { useRouter } from 'next/navigation';

import AppLayout from '@/components/domain/AppLayout';

export default function Create() {
  const router = useRouter();

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
              const res = confirm('정보 또는 탭을 생성하시겠습니까?');
              if (res) {
                alert('DEV: 정보 또는 탭 생성');
              }
            }}
            role="link"
          >
            생성
          </button>
        ),
      }}
    >
      Create
    </AppLayout>
  );
}