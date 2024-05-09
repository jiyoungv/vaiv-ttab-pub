'use client'
import AppLayout from '@/components/domain/AppLayout';
import TabDetail from '@/components/domain/tab/TabDetail';
import IconButton from '@/components/common/IconButton';
import Inner from '@/components/common/Inner';
import Skeleton from '@/components/common/Skeleton';
import NoData from '@/components/common/NoData';
import { tempTabDetailData } from '@/utils/tempData';

export default function TabDetailPage() {
  return (
    <AppLayout
      navBar={{
        right: (
          <div className="flex items-center gap-3">
            <IconButton 
              icon={{
                name: !tempTabDetailData?.bookmark ? 'mgc_bookmark_line' : 'mgc_bookmark_fill',
                ariaLabel: !tempTabDetailData?.bookmark ? '관심탭 추가' : '관심탭 취소',
              }}
              onClick={() => alert('DEV: 관심탭 추가 or 관심탭 취소')}
            />
            <IconButton 
              icon={{
                name: 'mgc_more_2_line',
                ariaLabel: '더보기',
              }}
              onClick={() => alert('TODO: Dropdown Menu Open')}
            />
          </div>
        )
      }}
      bg="dark"
    >
      {tempTabDetailData && (
        <TabDetail data={tempTabDetailData} />
      )}
      {'DEV: loading' && (
        <div className="bg-slate-100">
          <div className="py-4 bg-white">
            <Inner>
              <div className="flex flex-col gap-3">
                <Skeleton width="50%" />
                <Skeleton width="80%" />
                <div className="flex gap-1">
                  {Array(4).fill('').map((v, i) => (
                    <Skeleton key={i} width="60px" height="30px" />
                  ))}
                </div>
                <Skeleton />
              </div>
            </Inner>
          </div>
          <div className="flex flex-col gap-3 mt-3">
            {Array(3).fill('').map((v, i) => (
              <Skeleton key={i} color="white" height="150px" square />
            ))}
          </div>
        </div>
      )}
      {'DEV: no data' && (
        <NoData
          text="데이터가 없습니다."
        />
      )}
    </AppLayout>
  );
}