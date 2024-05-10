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
        alt="" 
        className="object-cover"
        fill 
        placeholder="blur"
        blurDataURL={blurDataURL}
      />
    </figure>
  );
}