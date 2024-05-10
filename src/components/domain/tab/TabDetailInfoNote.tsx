export interface TabDetailInfoNoteProps {
  data?: string;
}

export default function TabDetailInfoNote({ data }: TabDetailInfoNoteProps) {
  return (
    <div>
      <p className="text-slate-700 text-base-read font-medium">
        {data}
      </p>
    </div>
  );
}