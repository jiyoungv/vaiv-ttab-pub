import Image from 'next/image';

import Icon from '@/components/common/Icon';
import { blurDataURL } from '@/utils/constant';

export interface ProfileThumbnailProps {
  src?: string;
  width?: string;
}

export default function ProfileThumbnail({ src, width = '20px' }: ProfileThumbnailProps) {
  return (
    <figure 
      className="overflow-hidden flex-shrink-0 relative aspect-square rounded-full"
      style={{
        width,
      }}
    >
      {(!src || src === '') ? (
        <div className="inline-flex justify-center items-center w-full h-full bg-slate-50">
          <Icon 
            name="mgc_user_2_line" 
            color="text-slate-400" 
            style={{
              fontSize: `calc(${width} / 2)`,
            }}
          />
        </div>
      ) : (
        <Image 
          src={src} 
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