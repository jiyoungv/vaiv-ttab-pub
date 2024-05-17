import classNames from 'classnames';

import BadgeImage from '@/components/domain/BadgeImage';
import { BadgeData } from '@/types';

export interface BadgeItemProps {
  data?: BadgeData;
  mine?: boolean;
}

export default function BadgeItem({ data, mine }: BadgeItemProps) {
  return (
    <article>
      <button 
        type="button"
        className={classNames(
          {
            'pointer-events-none': !mine,
          },
        )}
        onClick={() => {
          if (mine) {
            alert('TODO: 배지 상세보기 바텀시트 open');
          }
        }}
      >
        <BadgeImage 
          src={data?.image ? data?.image : ''} 
          locked={data?.locked} 
          size="80px"
        />
        <div className="mt-2 text-center">
          <p 
            className={classNames(
              'text-sm font-medium',
              {
                'text-slate-300': data?.locked,
                'text-slate-700': !data?.locked,
              },
            )}
          >
            {data?.name ? data?.name : '배지 이름'}
          </p>
        </div>
      </button>
    </article>
  );
}