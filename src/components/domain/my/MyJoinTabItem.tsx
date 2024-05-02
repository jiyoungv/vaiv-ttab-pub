'use client'
import Link from 'next/link';

import MyItemLayout from '@/components/domain/my/MyItemLayout';
import Badge from '@/components/common/Badge';
import Icon from '@/components/common/Icon';
import { MyJoinTabData } from '@/types';

export interface MyJoinTabItemProps {
  data: MyJoinTabData;
}

export default function MyJoinTabItem({ data }: MyJoinTabItemProps) {
  return (
    <MyItemLayout>
      <Link 
        href={data.link}
        className="block absolute left-0 top-0 w-full h-full"
      ></Link>
      <div className="flex justify-between items-center gap-2">
        <div>
          <div className="mb-2">
            <Badge 
              color={data.join ? 'success' : 'gray'}
              dot
            >
              {data.join ? '참여중' : '참여대기'}
            </Badge>
          </div>
          <p className="text-slate-700 text-lg font-medium">
            {data.title}
          </p>
          <p className="text-slate-400 text-sm font-medium">
            {data.subText}
          </p>
        </div>
        <button 
          type="button" 
          className="group flex-shrink-0"
          onClick={(e) => {
            const res = confirm('참여를 취소하시겠습니까?');
            if (res) {
              alert('DEV: 탭 참여 취소\n(취소가 맞는건지 확인 필요)');
            }
          }}
        >
          <Icon name="mgc_close_circle_fill" color="text-slate-400 group-hover:text-slate-500" />
        </button>
      </div>
    </MyItemLayout>
  );
}