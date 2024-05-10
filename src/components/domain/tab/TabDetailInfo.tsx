import { useMemo } from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import Inner from '@/components/common/Inner';
import Badge from '@/components/common/Badge';
import Icon from '@/components/common/Icon';
import DropDown from '@/components/common/DropDown';
import ProfileThumbnail from '@/components/domain/ProfileThumbnail';
import TabDetailInfoNote from '@/components/domain/tab/TabDetailInfoNote';
import TabDetailInfoLink from '@/components/domain/tab/TabDetailInfoLink';
import TabDetailInfoSearch from '@/components/domain/tab/TabDetailInfoSearch';
import TabDetailInfoImage from '@/components/domain/tab/TabDetailInfoImage';
import TabDetailInfoFile from '@/components/domain/tab/TabDetailInfoFile';
import TabDetailInfoMemo from '@/components/domain/tab/TabDetailInfoMemo';
import { TabDetailInfoData } from '@/types/tab';

export interface TabDetailInfoProps {
  data?: TabDetailInfoData;
}

export default function TabDetailInfo({ data }: TabDetailInfoProps) {
  const dropDownList = useMemo(() => {
    const listOfWriter = [
      { 
        value: 'share', 
        label: '정보 공유', 
        icon: 'mgc_share_forward_line',
        onClick: () => alert('DEV: 정보 공유'),
      },
      { 
        value: 'edit', 
        label: '정보 수정', 
        icon: 'mgc_edit_2_line',
        onClick: () => alert('DEV: 정보 수정'),
      },
      { 
        value: 'add-memo', 
        label: '메모 달기', 
        icon: 'mgc_notebook_line',
        onClick: () => alert('DEV: 메모 달기'),
      },
      { 
        value: 'move-to-tab', 
        label: '탭으로 이동', 
        icon: 'mgc_transfer_3_line',
        onClick: () => alert('DEV: 탭으로 이동'),
      },
      { 
        value: 'copy-to-tab', 
        label: '탭으로 복사', 
        icon: 'mgc_copy_2_line',
        onClick: () => alert('DEV: 탭으로 복사'),
      },
      { 
        value: 'delete', 
        label: '삭제', 
        icon: 'mgc_delete_2_line',
        onClick: () => {
          const res = confirm('정말 삭제하시겠습니까?');
          if (res) {
            alert('DEV: 삭제');
          }
        },
      },
    ];

    const listOfReader = [
      { 
        value: 'share', 
        label: '정보 공유', 
        icon: 'mgc_share_forward_line',
        onClick: () => alert('DEV: 정보 공유'),
      },
      { 
        value: 'copy-to-tab', 
        label: '탭으로 복사', 
        icon: 'mgc_copy_2_line',
        onClick: () => alert('DEV: 탭으로 복사'),
      },
    ];

    if ('DEV: 정보 작성자') return listOfWriter;
    if ('DEV: 정보 조회자') return listOfReader;
    return listOfReader;
  }, []);

  return (
    <article
      className={classNames(
        'shadow-sm',
        {
          'bg-primary-50': !data?.category,
          'bg-note-50': data?.category === 'note',
          'bg-link-50': data?.category === 'link',
          'bg-search-50': data?.category === 'search',
          'bg-image-50': data?.category === 'image',
          'bg-file-50': data?.category === 'file',
          'bg-report-50': data?.category === 'report',
        },
      )}
    >
      <section className="py-4">
        <Inner>
          <div className="flex justify-between items-center gap-1">
            <Link href={`${process.env.NEXT_PUBLIC_FRONT_URL}/profile/${data?.nickname}`}>
              <div className="inline-flex items-center gap-2">
                <ProfileThumbnail src={data?.thumbNail} width="36px" />
                <div>
                  <p className="text-slate-700 text-base-read font-bold">
                    {data?.nickname}
                  </p>
                  <p className="text-slate-400 text-xs font-medium">
                    {data?.date}
                  </p>
                </div>
              </div>
            </Link>
            <DropDown list={dropDownList} />
          </div>
        </Inner> 
      </section>
      <section className="pb-4">
        <Inner>
          {(data?.category === 'note' && data?.contents?.note) && (
            <TabDetailInfoNote data={data?.contents?.note} />
          )}
          {(data?.category === 'link' && data?.contents?.link) && (
            <TabDetailInfoLink data={data?.contents?.link} />
          )}
          {(data?.category === 'search' && data?.contents?.search) && (
            <TabDetailInfoSearch data={data?.contents?.search} />
          )}
          {(data?.category === 'file' && data?.contents?.file) && (
            <TabDetailInfoFile data={data?.contents?.file} />
          )}
        </Inner>
        {(data?.category === 'image' && data?.contents?.images) && (
          <TabDetailInfoImage data={data?.contents?.images} />
        )}
      </section>
      <section className="pb-4">
        <Inner>
          <TabDetailInfoMemo category={data?.category}>
            {data?.memo}
          </TabDetailInfoMemo>
          <ul className="flex flex-wrap gap-2 mt-4">
            {data?.keywords.map((v, i) => (
              <li key={i}>
                <Badge>
                  {v}
                </Badge>
              </li>
            ))}
          </ul>
        </Inner>
      </section>
      <section className="py-4 bg-white">
        <Inner>
          <div className="flex items-center gap-2.5">
            <button 
              type="button"
              className="inline-flex items-center gap-1"
              onClick={() => alert('DEV: 좋아요 or 좋아요 취소')}
            >
              <Icon 
                name={!data?.like ? 'mgc_heart_line' : 'mgc_heart_fill'}
                color={!data?.like ? 'text-slate-700' : 'text-primary-500'}
              />
              <p className="text-slate-700 text-sm font-medium leading-none">
                {data?.likeAmount}
              </p>
            </button>
            <button 
              type="button"
              className="inline-flex items-center gap-1"
              onClick={() => alert('TODO: 댓글 바텀시트 open')}
            >
              <Icon name="mgc_message_2_line" />
              <p className="text-slate-700 text-sm font-medium leading-none">
                {data?.commentAmount}
              </p>
            </button>
            <div className="inline-flex items-center gap-1">
              <Icon name="mgc_eye_2_line" />
              <p className="text-slate-700 text-sm font-medium leading-none">
                {data?.commentAmount}
              </p>
            </div>
          </div>
        </Inner>
      </section>
    </article>
  );
}