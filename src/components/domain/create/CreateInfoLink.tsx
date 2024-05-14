import { useState } from 'react';

import Label from '@/components/common/Label';
import TextArea from '@/components/common/TextArea';
import Button from '@/components/common/Button';
import TabDetailInfoLink from '@/components/domain/tab/TabDetailInfoLink';

export interface CreateInfoLinkProps {}

export default function CreateInfoLink({}: CreateInfoLinkProps) {
  const [note, setNote] = useState('');

  return (
    <div>
      <form>
        <Label>내용</Label>
        <TextArea 
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="URL을 입력해주세요."
          variant="clear"
          autoSize={{ minRows: 6, maxRows: 10 }}
        />
      </form>
      <TabDetailInfoLink data="https://www.vaiv.kr/" />
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