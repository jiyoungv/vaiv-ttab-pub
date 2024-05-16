import { useState } from 'react';

import Label from '@/components/common/Label';
import TextArea from '@/components/common/TextArea';
import CreateInfoUndo from '@/components/domain/create/CreateInfoUndo';

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
        <CreateInfoUndo />
      )}
    </div>
  );
}