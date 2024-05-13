export interface BadgePreviewProps {}

export default function BadgePreview({}: BadgePreviewProps) {
  return (
    <div>
      <figure className="relative w-20 aspect-square rounded-[20px] bg-slate-100">
      </figure>
      <div className="mt-2 text-center">
        <p className="text-slate-700 text-sm font-medium">
          배지 이름
        </p>
      </div>
    </div>
  );
}