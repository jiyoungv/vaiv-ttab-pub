'use client'
import AppLayout from '@/components/domain/AppLayout';
import TabDetail from '@/components/domain/TabDetail';
import IconButton from '@/components/common/IconButton';

export default function Tab() {
  return (
    <AppLayout
      navBar={{
        right: (
          <div className="flex items-center gap-3">
            <IconButton 
              icon={{
                name: 'mgc_bookmark_line',
                ariaLabel: '즐겨찾기 추가',
              }}
              onClick={() => alert('TODO: 즐겨찾기')}
            />
          </div>
        )
      }}
    >
      <TabDetail />
    </AppLayout>
  );
}