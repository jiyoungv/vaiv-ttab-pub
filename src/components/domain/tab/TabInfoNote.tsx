import { TabInfoNote as TabInfoNoteType } from '@/types/tab';

export interface TabInfoNoteProps {
  data?: TabInfoNoteType;
}

export default function TabInfoNote({ data }: TabInfoNoteProps) {
  return (
    <div>
      <p className="text-slate-700 text-base-read font-medium">
        {data}
      </p>
    </div>
  );
}