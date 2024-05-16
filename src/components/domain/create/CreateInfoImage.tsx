import { useState } from 'react';

import Label from '@/components/common/Label';
import CreateInfoImagePreview from '@/components/domain/create/CreateInfoImagePreview';
import CreateInfoUploadButton from '@/components/domain/create/CreateInfoUploadButton';
import CreateInfoUndo from '@/components/domain/create/CreateInfoUndo';

export interface CreateInfoImageProps {}

export default function CreateInfoImage({}: CreateInfoImageProps) {
  const [imageList, setImageList] = useState<string[]>(['/images/temp/temp1.jpg', '/images/temp/temp2.jpg', '/images/temp/temp3.png', '/images/temp/temp4.jpg']);

  return (
    <div>
      <form>
        <Label mb="4">사진 또는 이미지 업로드</Label>
        <div className="grid grid-cols-3 gap-3">
          {imageList.map((v, i) => (
            <CreateInfoImagePreview 
              key={i} 
              src={v} 
              onClose={() => {
                const newState = [...imageList];
                newState.splice(i, 1);
                setImageList(newState);
              }}
            />
          ))}
          <CreateInfoUploadButton width="auto" />
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
        <CreateInfoUndo />
      )}
    </div>
  );
}