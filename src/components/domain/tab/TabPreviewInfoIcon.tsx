import classNames from 'classnames';

import Icon from '@/components/common/Icon';
import { TabCategory } from '@/types/tab';
import { tabCategoryIconName } from '@/utils/func';

export interface TabPreviewInfoIconProps {
  category?: TabCategory;
}

export default function TabPreviewInfoIcon({
  category = 'note',
}: TabPreviewInfoIconProps) {
  return (
    <div 
      className={classNames(
        'inline-flex justify-center items-center w-6 aspect-square rounded-full backdrop-blur-[1px]',
        {
          'bg-amber-500/50': category === 'note',
          'bg-orange-500/50': category === 'link',
          'bg-teal-500/50': category === 'search',
          'bg-blue-500/50': category === 'image',
          'bg-violet-500/50': category === 'file',
          'bg-primary-500/50': category === 'report',
        },
      )}
    >
      <Icon 
        name={tabCategoryIconName(category)}
        size="text-base-size"
        color="text-white"
      />
    </div>
  );
}