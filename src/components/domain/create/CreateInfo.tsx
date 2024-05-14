import { useCallback, useState } from 'react';
import classNames from 'classnames';

import Inner from '@/components/common/Inner';
import Icon from '@/components/common/Icon';
import CreateInfoNote from '@/components/domain/create/CreateInfoNote';
import CreateInfoLink from '@/components/domain/create/CreateInfoLink';
import CreateInfoSearch from '@/components/domain/create/CreateInfoSearch';
import CreateInfoImage from '@/components/domain/create/CreateInfoImage';
import CreateInfoBot from '@/components/domain/create/CreateInfoBot';
import CreateInfoRecommend from '@/components/domain/create/CreateInfoRecommend';
import CreateTag from '@/components/domain/create/CreateTag';
import { tabCategoryIconName } from '@/utils/func';
import { TabCategory } from '@/types/tab';

const categoryList: { category: TabCategory; label: string; }[] = [
  { category: 'note', label: '노트' },
  { category: 'link', label: '링크' },
  { category: 'search', label: 'AI 검색' },
  { category: 'image', label: '이미지' },
  { category: 'file', label: '문서/파일' },
];

export interface CreateInfoProps {}

export default function CreateInfo({}: CreateInfoProps) {
  const [category, setCategory] = useState('note');
  
  const activeCategory = useCallback((localCategory: TabCategory) => localCategory === category, [category]);

  return (
    <article>
      <section className="py-2.5">
        <Inner>
          <div className="flex justify-between">
            {categoryList.map((v, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCategory(v.category)}
                className="group"
              >
                <figure 
                  className={classNames(
                    'inline-flex justify-center items-center w-13 aspect-square rounded-full',
                    {
                      'bg-slate-50 text-slate-400': !category || !activeCategory(v.category),
                      'bg-note-50 text-note-500': category === 'note' && activeCategory(v.category),
                      'bg-link-50 text-link-500': category === 'link' && activeCategory(v.category),
                      'bg-search-50 text-search-500': category === 'search' && activeCategory(v.category),
                      'bg-image-50 text-image-500': category === 'image' && activeCategory(v.category),
                      'bg-file-50 text-file-500': category === 'file' && activeCategory(v.category),
                      'bg-report-50 text-report-500': category === 'report' && activeCategory(v.category),
                    },
                  )}
                >
                  <Icon 
                    name={tabCategoryIconName(v.category)}
                    color="text-current"
                    size="text-[28px]"
                  />
                </figure>
                <p 
                  className={classNames(
                    'mt-1 text-xs group-hover:font-bold',
                    {
                      'text-slate-500': !activeCategory(v.category),
                      'text-slate-700 font-bold': activeCategory(v.category),
                    },
                  )}
                >
                  {v.label}
                </p>
              </button>
            ))}
          </div>
        </Inner>
      </section>
      <section className="pt-5 pb-4">
        <Inner>
          {category === 'note' && (
            <CreateInfoNote />
          )}
          {category === 'link' && (
            <CreateInfoLink />
          )}
          {category === 'search' && (
            <CreateInfoSearch />
          )}
          {category === 'image' && (
            <CreateInfoImage />
          )}
          {/* {category === 'file' && (
          )} */}
        </Inner>
      </section>
      <CreateInfoBot />
      <CreateInfoRecommend />
      <CreateTag />
      <section>
        {[
          { 
            title: '탭 선택',
            sub: '미분류 탭',
            onClick: () => {
              alert('TODO: 탭 선택 바텀시트 open')
            },
          },
          { 
            title: '최근 저장한 정보',
            onClick: () => {
              alert('TODO: 탭 선택 바텀시트 open')
            },
          },
        ].map((v, i) => (
          <button 
            key={i}
            type="button"
            className="flex justify-between items-center gap-1 px-3.5 py-4 w-full border-b border-b-slate-200 last:border-b-0 hover:bg-slate-50"
            onClick={v.onClick}
          >
            <div className="flex-auto text-left">
              <p className="text-slate-900 text-base-read font-medium">
                {v.title}
              </p>
            </div>
            <div className="flex-shrink-0 flex items-center gap-2">
              {v.sub && (
                <p className="text-slate-500 text-base-read">
                  {v.sub}
                </p>
              )}
              <Icon name="mgc_right_line" size="text-xl-size" />
            </div>
          </button>
        ))}
      </section>
    </article>
  );
}