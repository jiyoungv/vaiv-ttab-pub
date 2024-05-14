import { useState } from 'react';

import Label from '@/components/common/Label';
import TextArea from '@/components/common/TextArea';
import Button from '@/components/common/Button';

export interface CreateInfoNoteProps {}

export default function CreateInfoNote({}: CreateInfoNoteProps) {
  const [note, setNote] = useState('');

  return (
    <div>
      <form>
        <Label>내용</Label>
        <TextArea 
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="간단한 입력 후에 AI로 메모를 완성해보세요."
          variant="clear"
          autoSize={{ minRows: 6, maxRows: 10 }}
        />
      </form>
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