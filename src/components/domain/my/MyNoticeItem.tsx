import Link from 'next/link';

import MyItemLayout from '@/components/domain/my/MyItemLayout';
import Icon from '@/components/common/Icon';
import NewIcon from '@/components/common/NewIcon';
import { MyNoticeData } from '@/types/my';

export interface MyNoticeItemProps {
  data: MyNoticeData;
}

export default function MyNoticeItem({ data }: MyNoticeItemProps) {
  return (
    <Link 
      href={data.link}
      className="block w-full"
    >
      <MyItemLayout>
        <div className="flex justify-between items-center gap-4">
          <div>
            <p className="text-slate-700 text-base font-medium">
              {data.title}
              {data.new && (
                <NewIcon />
              )}
            </p>
            <p className="mt-1 text-slate-400 text-xs">
              {data.date}
            </p>
          </div>
          <Icon name="mgc_right_line" color="text-slate-400" />
        </div>
      </MyItemLayout> 
    </Link>
  );
}