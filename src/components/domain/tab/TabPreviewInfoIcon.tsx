import classNames from 'classnames';

import Icon from '@/components/common/Icon';
import { TabInfoCategory } from '@/types/tab';
import { tabCategoryIconName } from '@/utils/func';

export interface TabPreviewInfoIconProps {
  category?: TabInfoCategory;
}

export default function TabPreviewInfoIcon({
  category = 'note',
}: TabPreviewInfoIconProps) {
  return (
    <div 
      className={classNames(
        'inline-flex justify-center items-center w-6 aspect-square rounded-full backdrop-blur-[1px]',
        {
          'bg-primary-500/50': !category,
          'bg-note-500/50': category === 'note',
          'bg-link-500/50': category === 'link',
          'bg-search-500/50': category === 'search',
          'bg-image-500/50': category === 'image',
          'bg-file-500/50': category === 'file',
          'bg-report-500/50': category === 'report',
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