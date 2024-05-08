import Image from 'next/image';
import classNames from 'classnames';

import TabItemIcon from '@/components/domain/tab/TabItemIcon';
import { blurDataURL } from '@/utils/constant';
import { TabContentsData } from '@/types/tab';
import { tabCategoryColor } from '@/utils/func';

export interface TabItemTileProps {
  data: TabContentsData;
  dimAmount?: number;
}

export default function TabItemTile({
  data,
  dimAmount,
}: TabItemTileProps) {
  return (
    <div 
      className={classNames(
        'relative min-h-25',
        {
          [`bg-${tabCategoryColor('note')}-50`]: !data.category,
          [`bg-${tabCategoryColor(data.category)}-50`]: data.category,
        },
      )}
    >
      {data.category === 'image' && (
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
      {data.category !== 'image' && (
        <div className="flex justify-center items-center w-full h-full px-3 py-2">
          <div>
            <p className={classNames(
              'text-xs font-medium',
              {
                [`text-${tabCategoryColor('note')}-500`]: !data.category,
                [`text-${tabCategoryColor(data.category)}-500`]: data.category,
              },
            )}>
              {data.text}
              {data.question}
            </p>
            {data.category === 'search' && (
              <p className="text-teal-700 text-xs font-medium">
                {data.answer}
              </p>
            )}
          </div>
        </div>
      )}
      <div className="absolute top-2 right-2">
        <TabItemIcon category={data.category} />
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