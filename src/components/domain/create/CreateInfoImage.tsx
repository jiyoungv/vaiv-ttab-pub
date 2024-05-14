import Label from '@/components/common/Label';
import Button from '@/components/common/Button';

export interface CreateInfoImageProps {}

export default function CreateInfoImage({}: CreateInfoImageProps) {
  return (
    <div>
      <form>
        <Label mb="4">사진 또는 이미지 업로드</Label>
        <div className="flex flex-wrap gap-3">
          TODO: 이미지 등록
        </div>
        <div className="mt-4">
          <small className="text-slate-500 text-xs">
            ※ 파일 첨부는 최대 6장, 총 20MB까지 등록이 가능합니다.
          </small>
        </div>
      </form>
      <div className="mt-4">
        <p className="min-h-17 text-slate-700 text-base-read font-medium">
          그라데이션, 아트, 기하학, 미술, (DEV: 추출 텍스트)
        </p>
      </div>
      {'DEV: 히스토리가 쌓이면?' && (
        <div className="flex justify-end mt-1">
          <Button
            onClick={() => alert('DEV: 내용 되돌리기')}
            color="cancel"
            icon="mgc_back_line"
            round
          />
        </div>
      )}
    </div>
  );
}