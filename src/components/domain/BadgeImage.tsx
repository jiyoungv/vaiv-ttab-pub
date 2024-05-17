import Image from 'next/image';

import Icon from '@/components/common/Icon';
import { blurDataURL } from '@/utils/constant';
import { useMemo } from 'react';

export interface BadgeImageProps {
  src?: string;
  locked?: boolean;
  size?: '80px' | '40px' | '100px' | '200px';
}

export default function BadgeImage({ 
  src, 
  locked, 
  size = '80px',
}: BadgeImageProps) {
  const iconSize = useMemo(() => {
    if (size === '80px') return 'text-[28px]';
    if (size === '40px') return 'text-md';
    if (size === '100px') return 'text-3xl-size';
    if (size === '200px') return 'text-6xl-size';
  }, [size]);

  return (
    <figure 
      className="overflow-hidden flex-shrink-0 relative aspect-square"
      style={{
        width: size,
      }}
    >
      {locked ? (
        <div className="inline-flex justify-center items-center w-full h-full rounded-[20px] bg-slate-100">
          <Icon 
            name="mgc_lock_line" 
            color="text-slate-300"
            size={iconSize}
          />
        </div>
      ) : (
        <Image 
          src={src ? src : ''}
          alt="" 
          className="object-cover"
          fill 
          placeholder="blur"
          blurDataURL={blurDataURL}
        />
      )}
    </figure>
  );
}