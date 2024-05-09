import Link from 'next/link';

import MyContentLayout from '@/components/domain/my/MyContentLayout';
import { MyCommentData } from '@/types/my';

export interface MyCommentProps {
  data: MyCommentData;
}

export default function MyComment({ data }: MyCommentProps) {
  return (
    <Link 
      href={data?.link}
      className="block w-full"
    >
      <MyContentLayout>
        <div>
          <p className="text-slate-700 text-base font-medium">
            {data?.comment}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2 mt-2">
          <div className="inline-flex items-center gap-2">
            <p className="text-slate-400 text-xs font-medium">
              {data?.date}
            </p>
            <p className="text-slate-400 text-xs font-medium">
              {data?.time}
            </p>
          </div>
          <div className="w-px h-2.5 bg-slate-200"></div>
          <p className="text-slate-400 text-xs font-medium">
            {data?.tabName}
          </p>
        </div>
      </MyContentLayout>
    </Link>
  );
}