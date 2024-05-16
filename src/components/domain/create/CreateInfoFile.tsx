import Label from '@/components/common/Label';
import CreateInfoUploadButton from '@/components/domain/create/CreateInfoUploadButton';
import TabInfoFile from '@/components/domain/tab/TabInfoFile';

export interface CreateInfoFileProps {}

export default function CreateInfoFile({}: CreateInfoFileProps) {
  return (
    <div>
      <form>
        <Label mb="4">문서 또는 파일 업로드</Label>
        <CreateInfoUploadButton width="auto" />
        <TabInfoFile 
          data="파일명은 뭐랄까 파일명은 뭐랄까 파일명은 뭐랄까 파일명은 뭐랄까.pdf"
          onClose={() => alert('DEV: 파일 삭제')}
        />
        <div className="mt-4">
          <small className="text-slate-500 text-xs">
            ※ 파일 첨부는 최대 1개, 총 20MB까지 등록이 가능합니다.
          </small>
        </div>
      </form>
    </div>
  );
}