'use client'
import { useState } from 'react';

import Inner from '@/components/common/Inner';
import Badge from '@/components/common/Badge';
import ProfileThumbnail from '@/components/domain/ProfileThumbnail';
import Icon from '@/components/common/Icon';
import CommentBottomSheet from '@/components/domain/bottomsheet/CommentBottomSheet';
import { TabDetailData } from '@/types/tab';

export interface TabDetailHeadProps {
  data?: TabDetailData;
}

export default function TabDetailHead({ data }: TabDetailHeadProps) {
  const [openCommentBottomsheet, setOpenCommentBottomsheet] = useState(false);

  return (
    <>
      <section className="pt-5 py-4 bg-white">
        <Inner>
          <div className="flex items-center gap-2 mb-4">
            {data?.mine && (
              <div className="inline-flex items-center gap-1 px-2 py-0.5 border border-slate-200 rounded-md bg-white">
                <Icon 
                  name={data?.privacy ? 'mgc_lock_line' : 'mgc_unlock_line' }
                  color="text-slate-500" 
                  size="text-base-size" 
                />
                <p className="text-slate-500 text-sm font-medium">
                  {data?.privacy ? '비공개탭' : '공개탭'}
                </p>
              </div>
            )}
            <Badge 
              color={!data?.join ? 'gray' : 'success'}
              dot
            >
              {!data?.join ? '참여대기': '참여중'}
            </Badge>
          </div>
          <div>
            <h1 className="text-slate-700 text-2xl font-bold">
              {data?.title}
            </h1>
            <p className="mt-3 text-slate-500 text-lg">
              {data?.subText}
            </p>
          </div>
          <ul className="flex flex-wrap gap-2 mt-6">
            {data?.keywords.map((v, i) => (
              <li key={i}>
                <Badge size="md">
                  {v}
                </Badge>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mt-5 px-4 py-3 rounded-5xl bg-slate-50">
            <button 
              type="button"
              className="inline-flex items-center gap-1"
              onClick={() => alert('TODO: 탭 참여자 BottomSheet Open')}
            >
              <div className="relative pr-3">
                <div className="inline-block border border-white rounded-full">
                  <ProfileThumbnail src={data?.thumbNail} width="30px" />
                </div>
                <div className="inline-flex justify-center items-center absolute right-0 top-1/2 -translate-y-1/2 w-8 aspect-square border border-white rounded-full bg-slate-800">
                  <p className="text-white text-xs font-me">
                    +{data?.joinAmount}
                  </p>
                </div>
              </div>
              <p className="text-slate-700 text-base-read font-bold">
                {data?.nickname}
              </p>
            </button>
            <div className="flex justify-between gap-1">
              <div className="flex items-center gap-2.5">
                <button 
                  type="button"
                  className="inline-flex items-center gap-1"
                  onClick={() => alert('DEV: 좋아요 or 좋아요 취소')}
                >
                  <Icon 
                    name={!data?.like ? 'mgc_heart_line' : 'mgc_heart_fill'}
                    color={!data?.like ? 'text-slate-400' : 'text-primary-500'}
                    size="text-xl-size"
                  />
                  <p className="text-slate-400 text-sm font-medium leading-none">
                    {data?.likeAmount}
                  </p>
                </button>
                <button 
                  type="button"
                  className="inline-flex items-center gap-1"
                  onClick={() => setOpenCommentBottomsheet(true)}
                >
                  <Icon name="mgc_message_2_line" color="text-slate-400" size="text-xl-size" />
                  <p className="text-slate-400 text-sm font-medium leading-none">
                    {data?.commentAmount}
                  </p>
                </button>
                <div className="inline-flex items-center gap-1">
                  <Icon name="mgc_eye_2_line" color="text-slate-400" size="text-xl-size" />
                  <p className="text-slate-400 text-sm font-medium leading-none">
                    {data?.commentAmount}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Inner>
      </section>
      {/* <CommentBottomSheet isOpen={openCommentBottomsheet} onClose={() => setOpenCommentBottomsheet(false)} /> */}
    </>
  );
}