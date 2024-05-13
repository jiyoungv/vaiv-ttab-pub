import BadgePreview from '@/components/domain/BadgePreview';

export interface BadgePreviewListProps {}

export default function BadgePreviewList({}: BadgePreviewListProps) {
  return (
    <div className="grid grid-cols-3 gap-y-8">
      {Array(5).fill('').map((v, i) => (
        <div key={i} className="inline-flex [&:nth-child(3n-1)]:justify-center [&:nth-child(3n)]:justify-end">
          <BadgePreview />
        </div>
      ))}
    </div>
  );
}