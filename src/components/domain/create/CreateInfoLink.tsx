import { useState } from 'react';

import Label from '@/components/common/Label';
import TextArea from '@/components/common/TextArea';
import TabInfoLink from '@/components/domain/tab/TabInfoLink';
import CreateInfoUndo from '@/components/domain/create/CreateInfoUndo';

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
      <TabInfoLink data="https://www.vaiv.kr/" />
      {'DEV: 히스토리가 쌓이면?' && (
        <CreateInfoUndo />
      )}
    </div>
  );
}