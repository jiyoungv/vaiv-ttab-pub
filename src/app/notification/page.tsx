'use client'
import AppLayout from '@/components/domain/AppLayout';
import Inner from '@/components/common/Inner';
import NotificationItem from '@/components/domain/NotificationItem';
import NoData from '@/components/common/NoData';
import { tempNotificationData } from '@/utils/tempData';

export default function Notification() {
  return (
    <AppLayout
      navBar={{
        title: '알림',
        right: (
          <button 
            type="button"
            className="text-slate-500 text-sm font-medium hover:underline active:underline"
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
              TODO: loading
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