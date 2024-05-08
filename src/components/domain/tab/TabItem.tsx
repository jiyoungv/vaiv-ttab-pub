'use client'
import Link from 'next/link';
import classNames from 'classnames';

import Inner from '@/components/common/Inner';
import TabItemTile from '@/components/domain/tab/TabItemTile';
import Icon from '@/components/common/Icon';
import BottomSheet from '@/components/common/BottomSheet';
import { TabData } from '@/types/tab';

export interface TabItemProps {
  data: TabData;
}

export default function TabItem({ data }: TabItemProps) {
  return (
    <>
      <article className="bg-white shadow-sm">
        <Link 
          href={`${process.env.NEXT_PUBLIC_FRONT_URL}/tab/${data.id}`} 
          className="block"
        >
          <div className="pt-4 pb-2">
            <Inner>
              <div>
                <h6 className="text-slate-700 text-lg font-bold">
                  타이틀
                </h6>
                <p className="mt-0.5 text-slate-500 text-sm font-medium">
                  서브텍스트가 있다면 이렇게 나오겠지요.
                </p>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <div className="inline-flex items-center gap-1">
                  <p className="text-slate-600 text-sm font-bold">
                    Nickname
                  </p>
                  <p className="px-1 rounded-[50px] bg-slate-100 text-slate-400 text-xs font-medium">
                    +36
                  </p>
                </div>
                <div className="w-px h-3 bg-slate-200"></div>
                <div>
                  <p className="text-slate-400 text-xs font-medium">
                    2024-01-01
                  </p>
                </div>
              </div>
            </Inner>
          </div>
          <div 
            className={classNames(
              'grid gap-1 relative h-[204px]',
              {
                'grid-cols-3 grid-rows-2': data.contents.length === 6,
                'grid-cols-3 grid-rows-1': data.contents.length === 5,
                'grid-cols-2 grid-rows-2': data.contents.length === 4,
                'grid-cols-3': data.contents.length === 3,
                'grid-cols-2': data.contents.length === 2,
                'grid-cols-1': data.contents.length === 1,
              },
            )}
          >
            {data.contents.map((v, i) => (
              <TabItemTile 
                key={i} 
                data={v} 
                dimAmount={(data.contentsRestAmount && i === data.contents.length - 1) ? data.contentsRestAmount : undefined}
              />
            ))}
          </div>
        </Link>
        <div className="py-4">
          <Inner>
            <div className="flex justify-between gap-1">
              <div className="flex items-center gap-2.5">
                <button 
                  type="button"
                  className="inline-flex items-center gap-1"
                  onClick={() => alert('DEV: 좋아요 or 좋아요 취소')}
                >
                  <Icon 
                    name={!data.like ? 'mgc_heart_line' : 'mgc_heart_fill'}
                    color={!data.like ? 'text-slate-700' : 'text-primary-500'}
                  />
                  <p className="text-slate-700 text-sm font-medium leading-none">
                    {data.likeAmount}
                  </p>
                </button>
                <button 
                  type="button"
                  className="inline-flex items-center gap-1"
                  onClick={() => alert('TODO: 댓글 바텀시트 open?')}
                >
                  <Icon name="mgc_message_2_line" />
                  <p className="text-slate-700 text-sm font-medium leading-none">
                    {data.commentAmount}
                  </p>
                </button>
                <div 
                  className="inline-flex items-center gap-1"
                >
                  <Icon name="mgc_eye_2_line" />
                  <p className="text-slate-700 text-sm font-medium leading-none">
                    {data.commentAmount}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <button 
                  type="button"
                  onClick={() => alert('DEV: 북마크 or 북마크 취소')}
                >
                  <Icon name={!data.bookmark ? 'mgc_bookmark_line' : 'mgc_bookmark_fill'} />
                </button>
              </div>
            </div>
          </Inner>
        </div>
      </article>
      <BottomSheet isOpen={true} onClose={() => {}} />
    </>
  );
}