import Link from 'next/link';

import Icon from '@/components/common/Icon';
import { TabInfoFile as TabInfoFileType } from '@/types/tab';

export interface TabInfoFileProps {
  data?: TabInfoFileType;
  onClose?: () => void;
}

export default function TabInfoFile({ data, onClose }: TabInfoFileProps) {
  return (
    <div className="group relative">
      <Link 
        href="/files/temp_file.pdf" 
        target="_blank"
        // download // DEV: 다운로드 시 활성화
        className="z-10 block absolute top-0 left-0 w-full h-full"
      ></Link>
      <div className="flex justify-between items-center gap-2 px-4 py-3 rounded-xl bg-file-500 group-hover:bg-file-700">
        <div className="flex-auto flex items-center gap-2">
          <Icon name="mgc_box_2_line" color="text-white" />
          <p className="text-white text-base-read font-medium">
            {data}
          </p>
        </div>
        {onClose && (
          <button 
            type="button"
            className="z-20 flex-shrink-0 inline-flex justify-center items-center relative w-5 aspect-square rounded-full bg-slate-50"
            onClick={onClose}
          >
            <Icon 
              name="mgc_close_fill" 
              size="text-xs-size" 
              ariaLabel="삭제"
            />
          </button>
        )}
      </div>
    </div>
  );
}