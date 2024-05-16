import { useState } from 'react';
import parse from 'html-react-parser';

import TabInfoSearchOriginButton from '@/components/domain/tab/TabInfoSearchOriginButton';
import { TabInfoSearch as TabInfoSearchType } from '@/types/tab';

export interface TabInfoSearchProps {
  data?: TabInfoSearchType;
  omit?: boolean;
}

export default function TabInfoSearch({ data, omit }: TabInfoSearchProps) {
  const [open, setOpen] = useState(false);
console.log(parse(data?.answer?.text!))
  return (
    <div className="flex flex-col gap-2">
      {data?.question && (
        <section className="flex items-start gap-1">
          <p className="text-search-500 text-lg font-bold">
            Q.
          </p>
          <p className="text-slate-700 text-base-read font-bold">
            {data?.question}
          </p>
        </section>
      )}
      {data?.answer && (
        <section>
          <div className="flex items-start gap-1">
            <p className="text-search-700 text-lg font-bold">
              A.
            </p>
            <div>
              {data?.answer?.text && (
                !omit ? (
                  <p className="text-slate-700 text-base-read font-medium">
                    {parse(data?.answer?.text)}
                  </p>
                ) : (
                  <p className="text-slate-700 text-base-read font-medium">
                    {!open 
                      ? parse(data?.answer?.text?.slice(0, 80))
                      : parse(data?.answer?.text)
                    }
                    {!open ? '... ': ' '}
                    <button 
                      type="button"
                      className="text-slate-400 text-sm font-bold hover:text-slate-600"
                      onClick={() => setOpen(prev => !prev)}
                    >
                      {!open ? '더보기' : '접기'}
                    </button>
                  </p>
                )
              )}
              {data?.answer?.origins && (
                (!omit || (omit && open)) && (
                  <div className="flex flex-col gap-1 mt-2">
                    {data?.answer?.origins.map((v, i) => (
                      <TabInfoSearchOriginButton key={i} number={v.number}>
                        {v.text}
                      </TabInfoSearchOriginButton> 
                    ))}
                  </div>
                )
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}