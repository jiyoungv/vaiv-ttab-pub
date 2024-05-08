import { TabCategory } from '@/types/tab';

export const tabCategoryIconName = (category: TabCategory) => {
  if (category === 'note') return 'mgc_edit_4_line';
  if (category === 'link') return 'mgc_link_2_line';
  if (category === 'search') return 'mgc_list_search_line';
  if (category === 'image') return 'mgc_pic_line';
  if (category === 'file') return 'mgc_box_2_line';
  if (category === 'report') return 'mgc_report_forms_line';
};

export const tabCategoryColor = (category: TabCategory) => {
  if (category === 'note') return 'amber';
  if (category === 'link') return 'orange';
  if (category === 'search') return 'teal';
  if (category === 'image') return 'blue';
  if (category === 'file') return 'violet';
  if (category === 'report') return 'primary';
};