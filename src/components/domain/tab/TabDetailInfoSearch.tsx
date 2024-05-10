import { useMemo, useState } from 'react';

export interface TabDetailInfoSearchProps {
  data?: {
    question?: string;
    answer?: string;
  };
}

export default function TabDetailInfoSearch({ data }: TabDetailInfoSearchProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-1">
      {data?.question && (
        <div className="flex items-start gap-1">
          <p className="text-search-500 text-lg font-bold">
            Q.
          </p>
          <p className="text-slate-700 text-base-read font-bold">
            {data?.question}
          </p>
        </div>
      )}
      {data?.answer && (
        <div className="flex items-start gap-1">
          <p className="text-search-700 text-lg font-bold">
            A.
          </p>
          <p className="text-slate-700 text-base-read font-medium">
            {!open ? data?.answer?.slice(0, 100) : data?.answer}
            {!open ? '... ': ' '}
            <button 
              type="button"
              className="text-slate-400 text-sm font-bold hover:text-slate-600"
              onClick={() => setOpen(prev => !prev)}
            >
              {!open ? '더보기' : '접기'}
            </button>
          </p>
        </div>
      )}
    </div>
  );
}