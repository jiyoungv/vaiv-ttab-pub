'use client'
import Link from 'next/link';
import classNames from 'classnames';

import Inner from '@/components/common/Inner';
import TabPreviewInfo from '@/components/domain/tab/TabPreviewInfo';
import Icon from '@/components/common/Icon';
import { TabPreviewData, TabView } from '@/types/tab';

export interface TabPreviewProps {
  data: TabPreviewData;
  view?: TabView;
}

export default function TabPreview({ data, view = 'default' }: TabPreviewProps) {
  const defaultEl = (
    <article className="relative bg-white shadow-sm">
      <Link 
        href={`${process.env.NEXT_PUBLIC_FRONT_URL}/tab/${data?.id}`} 
        className="z-10 block absolute top-0 left-0 w-full h-full"
      ></Link>
      <section className="relative pt-4 pb-2">
        <Inner>
          <div>
            <h6 className="text-slate-700 text-lg font-bold">
              {data.title}
            </h6>
            <p className="mt-0.5 text-slate-500 text-sm font-medium">
              {data.subText}
            </p>
          </div>
          <div className="flex items-center gap-3 mt-3">
            <div className="inline-flex items-center gap-1">
              <p className="text-slate-600 text-sm font-bold">
                {data.nickname}
              </p>
              <p className="px-1 rounded-5xl bg-slate-100 text-slate-400 text-xs font-medium">
                +{data.joinAmount}
              </p>
            </div>
            <div className="w-px h-3 bg-slate-200"></div>
            <div>
              <p className="text-slate-400 text-xs font-medium">
                {data.date}
              </p>
            </div>
          </div>
        </Inner>
      </section>
      {data?.infos.length !== 5 ? (
        <section 
          className={classNames(
            'grid gap-1 relative h-[204px]',
            {
              'grid-cols-3 grid-rows-2': data?.infos.length === 6,
              'grid-cols-2 grid-rows-2': data?.infos.length === 4,
              'grid-cols-3': data?.infos.length === 3,
              'grid-cols-2': data?.infos.length === 2,
              'grid-cols-1': data?.infos.length === 1,
            },
          )}
        >
          {data?.infos.map((v, i) => (
            <TabPreviewInfo 
              key={i} 
              data={v} 
              dimAmount={(data?.infosRestAmount && i === data?.infos.length - 1) ? data?.infosRestAmount : undefined}
              maxLine={data?.infos?.length > 3 ? 5 : 10}
            />
          ))}
        </section>
      ) : (
        <section className='grid grid-cols-1 grid-rows-2 gap-1 relative h-[204px]'>
          <div className='grid grid-cols-3 gap-1'>
            {data?.infos.slice(0, 3).map((v, i) => (
              <TabPreviewInfo 
                key={i} 
                data={v}
                maxLine={5}
              />
            ))}
          </div>
          <div className='grid grid-cols-2 gap-1'>
            {data?.infos.slice(3, 5).map((v, i) => (
              <TabPreviewInfo 
                key={i} 
                data={v}
              />
            ))}
          </div>
        </section>
      )}
      <section className="relative py-4">
        <Inner>
          <div className="flex justify-between gap-1">
            <div className="flex items-center gap-2.5">
              <div className="inline-flex items-center gap-1">
                <Icon 
                  name={!data?.like ? 'mgc_heart_line' : 'mgc_heart_fill'}
                  color={!data?.like ? 'text-slate-700' : 'text-primary-500'}
                />
                <p className="text-slate-700 text-sm font-medium leading-none">
                  {data?.likeAmount}
                </p>
              </div>
              <div className="inline-flex items-center gap-1">
                <Icon name="mgc_message_2_line" />
                <p className="text-slate-700 text-sm font-medium leading-none">
                  {data?.commentAmount}
                </p>
              </div>
              <div className="inline-flex items-center gap-1">
                <Icon name="mgc_eye_2_line" />
                <p className="text-slate-700 text-sm font-medium leading-none">
                  {data?.commentAmount}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <button 
                type="button"
                onClick={() => alert('DEV: 관심탭 추가 or 관심탭 취소?')}
                className="z-20 relative"
              >
                <Icon 
                  name={!data?.bookmark ? 'mgc_bookmark_line' : 'mgc_bookmark_fill'} 
                  ariaLabel={!data?.bookmark ? '관심탭 추가' : '관심탭 취소'} 
                />
              </button>
            </div>
          </div>
        </Inner>
      </section>
    </article>
  );

  const listEl = (
    <article className="border-b border-b-slate-200 bg-white">
      <Link 
        href={`${process.env.NEXT_PUBLIC_FRONT_URL}/tab/${data?.id}`} 
        className="block py-6"
      >
        <Inner>
          <h6 className="text-slate-700 text-lg font-medium">
            {data.title}
          </h6>
          <p className="text-slate-400 text-sm font-medium">
            {data.subText}
          </p>
        </Inner>
      </Link>
    </article>
  );

  return view === 'default' ? defaultEl : listEl;
}