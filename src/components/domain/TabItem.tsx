import classNames from 'classnames';

import Inner from '@/components/common/Inner';

export interface TabItemProps {}

export default function TabItem({}: TabItemProps) {
  return (
    <article>
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
          'grid grid-cols-3 gap-1',
          {

          },
        )}
      >
        <div className="flex justify-center items-center relative h-25 px-3 py-2">
          <div>
            <p>내용</p>
          </div>
          <span className="inline-flex justify-center items-center absolute right-0 top-0">
            icon
          </span>
        </div>
      </div>
    </article>
  );
}