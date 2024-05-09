import Link from 'next/link';

import MyContentLayout from '@/components/domain/my/MyContentLayout';
import Icon from '@/components/common/Icon';
import NewIcon from '@/components/common/NewIcon';
import { MyNoticeData } from '@/types/my';

export interface MyNoticeProps {
  data: MyNoticeData;
}

export default function MyNotice({ data }: MyNoticeProps) {
  return (
    <Link 
      href={data?.link}
      className="block w-full"
    >
      <MyContentLayout>
        <div className="flex justify-between items-center gap-4">
          <div>
            <p className="text-slate-700 text-base font-medium">
              {data?.title}
              {data?.new && (
                <NewIcon />
              )}
            </p>
            <p className="mt-1 text-slate-400 text-xs">
              {data?.date}
            </p>
          </div>
          <Icon name="mgc_right_line" color="text-slate-400" />
        </div>
      </MyContentLayout> 
    </Link>
  );
}