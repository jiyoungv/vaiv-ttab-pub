'use client'
import Link from 'next/link';
import Image from 'next/image';

import AppLayout from '@/components/domain/AppLayout';
import Inner from '@/components/common/Inner';
import { blurDataURL, notificationMessage } from '@/constants';
import { tempNotificationData } from '@/utils/tempData';

export default function Notification() {
  return (
    <AppLayout
      navBar={{
        title: '알람',
        right: (
          <button 
            type="button"
            className="text-slate-500 text-sm font-medium hover:text-slate-700 active:text-slate-700"
            onClick={() => {
              const res = confirm('알람을 전체 삭제하시겠습니까?');
              if (res) {
                alert('DEV: 알람 전체삭제');
              }
            }}
          >
            전체삭제
          </button>
        ),
      }}
    >
      <section>
        <Inner>
          <div className="mb-5">
            <p className="text-slate-500 text-sm font-medium">최근 30일</p>
          </div>
          {tempNotificationData 
            ? (
              <ul>
                {tempNotificationData.map((data, i) => (
                  <li key={i} className="mb-5 last:mb-0">
                    <Link href={data.src}>
                      <div className="flex items-start gap-3 relative px-3.5">
                        {data.unchecked && (
                          <i className="inline-block absolute left-0 top-4 w-2 aspect-square rounded-full bg-primary-500" aria-label="확인하지 않은 알람"></i>
                        )}
                        <figure className="overflow-hidden flex-shrink-0 relative w-10 aspect-square rounded-full">
                          <Image 
                            src={data.image} 
                            fill 
                            style={{ objectFit: 'cover' }} 
                            alt="" 
                            placeholder="blur"
                            blurDataURL={blurDataURL}
                          />
                        </figure>
                        <div>
                          <p className="text-slate-700 text-base">
                            <b className="font-bold">{data.nickname}</b>
                            {data.requestJoin && notificationMessage.requestJoin} 
                            {data.like && notificationMessage.like} 
                            {data.comment && notificationMessage.comment} 
                            {data.report && notificationMessage.report} 
                            <span className="inline-block text-blue-500 text-sm">
                              {data.ttabName}
                            </span>
                          </p>
                          <p className="mt-1 text-slate-400 text-xs">
                            {data.date}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            )
            : (
              <div>
                최근 알람이 없습니다.
              </div>
            )
          }
        </Inner>
      </section>
    </AppLayout>
  );
}