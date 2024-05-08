import { useState } from 'react';
import classNames from 'classnames';

import MyItemLayout from '@/components/domain/my/MyItemLayout';
import Inner from '@/components/common/Inner';
import Icon from '@/components/common/Icon';
import Accordion from '@/components/common/Accordion';
import { faqCategorys } from '@/utils/constant';
import { MyFAQData } from '@/types/my';

const getFAQCategoryLabel = (value: string): string => faqCategorys.filter(v => v.value === value)[0].label;

export interface MyFAQItemProps {
  data: MyFAQData;
}

export default function MyFAQItem({ data }: MyFAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <Accordion
      className="border-b border-b-slate-200"
      onChange={(open) => setOpen(open)}
      title={(
        <MyItemLayout
          notBorder
          notHover
        >
          <div className="flex justify-between items-center gap-2">
            <div>
              <p className="mb-1 text-primary-500 text-xs font-medium">
                {getFAQCategoryLabel(data.category)}
              </p>
              <p className="text-slate-700 text-base font-bold">
                {data.title}
              </p>
            </div>
            <div className={classNames(
              'transition-transform',
              {
                '-rotate-180': open,
              },
            )}>
              <Icon name="mgc_down_line" color="text-slate-400" />
            </div>
          </div>
        </MyItemLayout>
      )}
      panel={(
        <div className="py-6 bg-slate-50">
          <Inner>
            <p className="text-slate-500 text-base font-medium">
              {data.description}
            </p>
          </Inner>
        </div>
      )}
    />
  );
}