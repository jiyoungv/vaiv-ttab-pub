import Image from 'next/image';
import classNames from 'classnames';

import TabPreviewInfoIcon from '@/components/domain/tab/TabPreviewInfoIcon';
import { blurDataURL } from '@/utils/constant';
import { TabPreviewInfoData } from '@/types/tab';

export interface TabPreviewInfoProps {
  data: TabPreviewInfoData;
  dimAmount?: number;
}

export default function TabPreview({
  data,
  dimAmount,
}: TabPreviewInfoProps) {
  return (
    <div 
      className={classNames(
        'relative min-h-25',
        {
          'bg-amber-50': data?.category === 'note',
          'bg-orange-50': data?.category === 'link',
          'bg-teal-50': data?.category === 'search',
          'bg-blue-50': data?.category === 'image',
          'bg-violet-50': data?.category === 'file',
          'bg-primary-50': data?.category === 'report' || !data?.category,
        },
      )}
    >
      {data?.category !== 'image' ? (
        <div className="flex justify-center items-center w-full h-full px-3 py-2">
          <div>
            <p className={classNames(
              'text-xs font-medium',
              {
                'text-amber-500': data?.category === 'note',
                'text-orange-500': data?.category === 'link',
                'text-teal-500': data?.category === 'search',
                // 'text-blue-500': data?.category === 'image',
                'text-violet-500': data?.category === 'file',
                'text-primary-500': data?.category === 'report' || !data?.category,
              },
            )}>
              {data?.text}
              {data?.question}
            </p>
            {data?.category === 'search' && (
              <p className="text-teal-700 text-xs font-medium">
                {data?.answer}
              </p>
            )}
          </div>
        </div>
      ) : (
        <figure className="relative w-full h-full">
          <Image 
            src={data?.src ? data?.src : ''}
            fill 
            style={{ objectFit: 'cover' }} 
            alt="" 
            placeholder="blur"
            blurDataURL={blurDataURL}
          />
        </figure>
      )}
      <div className="absolute top-2 right-2">
        <TabPreviewInfoIcon category={data?.category} />
      </div>
      {dimAmount && (
        <div className="flex justify-center items-center absolute bottom-0 right-0 w-full h-full bg-black/80">
          <p className="text-white text-xl font-medium">
            +{dimAmount}
          </p>
        </div>
      )}
    </div>
  );
}