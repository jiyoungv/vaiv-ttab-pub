import { useCallback, useState } from 'react';
import classNames from 'classnames';

import Inner from '@/components/common/Inner';
import Icon from '@/components/common/Icon';
import CreateInfoNote from '@/components/domain/create/CreateInfoNote';
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
    <section>
      <div className="py-2.5">
        <Inner>
          <div className="flex justify-between">
            {categoryList.map((v, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCategory(v.category)}
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
                    'mt-1 text-xs',
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
      </div>
      <div className="mt-5">
        <Inner>
          {category === 'note' && <CreateInfoNote />}
        </Inner>
      </div>
      <div>
        TODO: AI bot
      </div>
      <div>
        <p className="text-slate-700 text-base-read font-bold">
          🧐 다른 사람들은 이런 메모들을 자주 하고 있어요.
        </p>
        TODO: 추천
      </div>
      <div>
        TODO: 태그
      </div>
      <div>
        TODO: 탭 선택, 최근 저장한 정보
      </div>
    </section>
  );
}