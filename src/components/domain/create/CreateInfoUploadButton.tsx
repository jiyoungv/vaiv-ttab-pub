import Icon from '@/components/common/Icon';

export interface CreateInfoUploadButtonProps {
  width?: string;
  height?: string;
}

export default function CreateInfoUploadButton({
  width = 'auto',
  height = '106px',
}: CreateInfoUploadButtonProps) {
  return (
    <div style={{ width, height }}>
      <input type="file" id="file" className="hidden" />
      <label 
        htmlFor="file" 
        className="inline-flex justify-center items-center w-full h-full border border-slate-200 rounded-xl hover:bg-slate-50"
        role="button"
      >
        <Icon 
          name="mgc_add_line"
          color="text-slate-500"
          size="text-xl-size"
          ariaLabel="업로드"
        />
      </label>
    </div>
  );
}