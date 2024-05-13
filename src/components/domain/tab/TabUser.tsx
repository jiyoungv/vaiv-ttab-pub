import Link from 'next/link';

import ProfileThumbnail from '@/components/domain/ProfileThumbnail';

export interface TabUserProps {
  data?: {
    thumbnail: string;
    nickname: string;
    link?: string;
  };
}

export default function TabUser({ data }: TabUserProps) {
  return (
    <div className="flex items-center gap-2 relative">
      <ProfileThumbnail src={data?.thumbnail} width="40px" />
      <p className="text-slate-700 text-base-read font-medium">
        {data?.nickname}
      </p>
      {data?.link && (
        <Link
          href={data.link}
          className="absolute top-0 left-0 bottom-0 right-0"
        ></Link>
      )}
    </div>
  );
}