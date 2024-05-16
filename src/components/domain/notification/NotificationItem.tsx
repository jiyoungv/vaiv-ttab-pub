import Link from 'next/link';

import ProfileThumbnail from '@/components/domain/ProfileThumbnail';
import { notificationMessage } from '@/utils/constant';
import { NotificationData } from '@/types';

export interface NotificationItemProps {
  data: NotificationData;
}

export default function NotificationItem({ data }: NotificationItemProps) {
  return (
    <article>
      <Link href={data?.link}>
        <div className="group flex items-start gap-3 relative px-3.5">
          {data?.unchecked && (
            <i className="inline-block absolute left-0 top-4 w-2 aspect-square rounded-full bg-primary-500" aria-label="확인하지 않은 알림"></i>
          )}
          <ProfileThumbnail src={data?.image} size="40px" />
          <div>
            <p className="text-slate-700 text-base group-hover:underline">
              <b className="font-bold">{data?.nickname}</b>
              {data?.requestJoin && notificationMessage.requestJoin} 
              {data?.like && notificationMessage.like} 
              {data?.comment && notificationMessage.comment} 
              {data?.report && notificationMessage.report} 
              {' '}
              <span className="inline-block text-blue-500 text-sm group-hover:underline">
                {data?.ttabName}
              </span>
            </p>
            <p className="mt-1 text-slate-400 text-xs">
              {data?.date}
            </p>
          </div>
        </div>
      </Link>
    </article>
  );
}