import classNames from 'classnames';

import Icon from '@/components/common/Icon';
import { TabCategory } from '@/types/tab';
import { tabCategoryIconName, tabCategoryColor } from '@/utils/func';

export interface TabItemIconProps {
  category?: TabCategory;
}

export default function TabItemIcon({
  category = 'note',
}: TabItemIconProps) {
  return (
    <div 
      className={classNames(
        'inline-flex justify-center items-center w-6 aspect-square rounded-full backdrop-blur-[1px]',
        {
          [`bg-${tabCategoryColor(category)}-500/50`]: category,
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