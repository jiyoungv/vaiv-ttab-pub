import Image from 'next/image';
import classNames from 'classnames';

import TabPreviewInfoIcon from '@/components/domain/tab/TabPreviewInfoIcon';
import { blurDataURL } from '@/utils/constant';
import { TabPreviewInfoData } from '@/types/tab';

export interface TabPreviewInfoProps {
  data: TabPreviewInfoData;
  maxLine?: 5 | 10;
  dimAmount?: number;
}

export default function TabPreview({
  data,
  maxLine = 5,
  dimAmount,
}: TabPreviewInfoProps) {
  return (
    <div 
      className={classNames(
        'relative min-h-25',
        {
          'bg-primary-50': !data?.category,
          'bg-note-50': data?.category === 'note',
          'bg-link-50': data?.category === 'link',
          'bg-search-50': data?.category === 'search',
          'bg-image-50': data?.category === 'image',
          'bg-file-50': data?.category === 'file',
          'bg-report-50': data?.category === 'report',
        },
      )}
    >
      {data?.category !== 'image' ? (
        <div className="flex justify-center items-center w-full h-full px-3 py-2">
          <div className={classNames(
            {
              'line-clamp-5': maxLine === 5,
              'line-clamp-10': maxLine === 10,
            },
          )}>
            <p className={classNames(
              'text-xs font-medium',
              {
                'text-primary-500': !data?.category,
                'text-note-500': data?.category === 'note',
                'text-link-500': data?.category === 'link',
                'text-search-500': data?.category === 'search',
                // 'text-image-500': data?.category === 'image',
                'text-file-500': data?.category === 'file',
                'text-report-500': data?.category === 'report',
              },
            )}>
              {data?.note}
              {data?.link}
              {data?.search?.question && `Q. ${data?.search?.question}`}
              {data?.file}
              {data?.report}
            </p>
            {(data?.category === 'search' && data?.search?.answer) && (
              <p className="text-search-700 text-xs font-medium">
                A. {data?.search?.answer}
              </p>
            )}
          </div>
        </div>
      ) : (
        <figure className="relative w-full h-full">
          <Image 
            src={data?.image ? data?.image : ''}
            alt="" 
            className="object-cover"
            fill 
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