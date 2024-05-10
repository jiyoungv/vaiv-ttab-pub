import Link from 'next/link';
import Image from 'next/image';

export interface TabDetailInfoLinkProps {
  data?: string;
}

export default function TabDetailInfoLink({ data }: TabDetailInfoLinkProps) {
  return (
    <div>
      <Link href={data ? data : '/'} target="_blank" className="block">
        <div className="flex items-start gap-5">
          <figure className="flex-shrink-0 overflow-hidden relative w-25 aspect-square rounded-xl">
            <Image 
              src="/images/temp/temp2.jpg"
              fill
              className="object-cover"
              alt=""
            />
          </figure>
          <p className="flex-auto line-clamp-2 text-blue-500 text-sm font-medium underline">
            {data}
          </p>
        </div>
        <div className="mt-2">
          <h6 className="text-slate-700 text-lg font-bold">
            링크 미리보기 제목인 것 같네요
          </h6>
          <p className="text-slate-500 text-sm">
            링크 미리보기 내용인 것 같네요 링크 미리보기 내용인 것 같네요 링크 미리보기 내용인 것 같네요
          </p>
        </div>
      </Link>
    </div>
  );
}