import Image from 'next/image';

import Icon from '@/components/common/Icon';
import { blurDataURL } from '@/utils/constant';

export interface CreateInfoImagePreviewProps {
  src: string;
  onClose?: () => void;
  width?: string;
  height?: string;
}

export default function CreateInfoImagePreview({
  src = '',
  onClose,
  width = 'auto',
  height = '106px',
}: CreateInfoImagePreviewProps) {
  return (
    <div 
      className="overflow-hidden relative border border-slate-200 rounded-xl"
      style={{ width, height }}
    >
      <figure className="relative w-full h-full">
        <Image 
          src={src} 
          alt="" 
          className="object-cover"
          fill 
          placeholder="blur"
          blurDataURL={blurDataURL}
        />
      </figure>
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          className="inline-flex justify-center items-center absolute top-1 right-1 w-5 aspect-square rounded-full bg-slate-50 hover:bg-slate-200"
        >
          <Icon 
            name="mgc_close_fill" 
            size="text-xs-size" 
            ariaLabel="삭제"
          />
        </button>
      )}
    </div>
  );
}