import Image from 'next/image';

import { blurDataURL } from '@/utils/constant';

export interface ProfileThumbnailProps {
  src?: string;
  width?: string;
}

export default function ProfileThumbnail({ src = '', width = '20px' }: ProfileThumbnailProps) {
  return (
    <figure 
      className="overflow-hidden flex-shrink-0 relative aspect-square rounded-full"
      style={{
        width,
      }}
    >
      <Image 
        src={src} 
        fill 
        style={{ objectFit: 'cover' }} 
        alt="" 
        placeholder="blur"
        blurDataURL={blurDataURL}
      />
    </figure>
  );
}