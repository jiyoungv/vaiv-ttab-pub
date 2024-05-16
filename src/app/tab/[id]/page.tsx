'use client'
import { useMemo } from 'react';

import AppLayout from '@/components/domain/AppLayout';
import Tab from '@/components/domain/tab/Tab';
import IconButton from '@/components/common/IconButton';
import DropDown from '@/components/common/DropDown';
import Inner from '@/components/common/Inner';
import Skeleton from '@/components/common/Skeleton';
import NoData from '@/components/common/NoData';
import { tempTabData } from '@/utils/tempData';

export default function TabPage() {
  const dropDownList = useMemo(() => {
    const listOfOwner = [
      { 
        value: 'share', 
        label: '탭 공유', 
        icon: 'mgc_share_forward_line',
        onClick: () => alert('DEV: 탭 공유'),
      },
      { 
        value: 'edit', 
        label: '탭 수정', 
        icon: 'mgc_edit_2_line',
        onClick: () => alert('DEV: 탭 수정'),
      },
      { 
        value: 'setting', 
        label: '탭 설정', 
        icon: 'mgc_settings_5_line',
        onClick: () => alert('DEV: 탭 설정'),
      },
      { 
        value: 'delete', 
        label: '탭 삭제', 
        icon: 'mgc_delete_2_line',
        onClick: () => {
          const res = confirm('정말 삭제하시겠습니까?');
          if (res) {
            alert('DEV: 탭 삭제');
          }
        },
      },
    ];

    const listOfNotJoiner = [
      { 
        value: 'share', 
        label: '탭 공유', 
        icon: 'mgc_share_forward_line',
        onClick: () => alert('DEV: 탭 공유'),
      },
      { 
        value: 'join', 
        label: '탭 참여', 
        icon: 'mgc_enter_door_line',
        onClick: () => alert('DEV: 탭 참여'),
      },
      { 
        value: 'report', 
        label: '탭 신고', 
        icon: 'mgc_report_line',
        onClick: () => alert('DEV: 탭 신고'),
      },
    ];

    const listOfJoiner = [
      { 
        value: 'share', 
        label: '탭 공유', 
        icon: 'mgc_share_forward_line',
        onClick: () => alert('DEV: 탭 공유'),
      },
      { 
        value: 'out', 
        label: '탭 나가기', 
        icon: 'mgc_exit_door_line',
        onClick: () => alert('DEV: 탭 나가기'),
      },
      { 
        value: 'report', 
        label: '탭 신고', 
        icon: 'mgc_report_line',
        onClick: () => alert('DEV: 탭 신고'),
      },
    ];

    if ('DEV: 탭 주인') return listOfOwner;
    if ('DEV: 탭 미참여자') return listOfNotJoiner;
    if ('DEV: 탭 참여자') return listOfJoiner;
    return listOfNotJoiner;
  }, []);

  return (
    <AppLayout
      navBar={{
        right: (
          <div className="flex items-center gap-3">
            <IconButton 
              icon={{
                name: !tempTabData?.bookmark ? 'mgc_bookmark_line' : 'mgc_bookmark_fill',
                ariaLabel: !tempTabData?.bookmark ? '관심탭 추가' : '관심탭 취소',
              }}
              onClick={() => alert('DEV: 관심탭 추가 or 관심탭 취소')}
            />
            <DropDown list={dropDownList} />
          </div>
        )
      }}
      bg="dark"
    >
      {tempTabData && (
        <Tab data={tempTabData} />
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