import Link from 'next/link';

import MyItemLayout from '@/components/domain/my/MyItemLayout';
import { MyCommentData } from '@/types/my';

export interface MyCommentItemProps {
  data: MyCommentData;
}

export default function MyCommentItem({ data }: MyCommentItemProps) {
  return (
    <Link 
      href={data.link}
      className="block w-full"
    >
      <MyItemLayout>
        <div>
          <p className="text-slate-700 text-base font-medium">
            {data.comment}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2 mt-2">
          <div className="inline-flex items-center gap-2">
            <p className="text-slate-400 text-xs font-medium">
              {data.date}
            </p>
            <p className="text-slate-400 text-xs font-medium">
              {data.time}
            </p>
          </div>
          <div className="w-px h-2.5 bg-slate-200"></div>
          <p className="text-slate-400 text-xs font-medium">
            {data.tabName}
          </p>
        </div>
      </MyItemLayout>
    </Link>
  );
}