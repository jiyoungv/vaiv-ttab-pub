import { useState, useCallback } from 'react';

import Label from '@/components/common/Label';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';
import TabInfoSearch from '@/components/domain/tab/TabInfoSearch';
import CreateInfoUndo from '@/components/domain/create/CreateInfoUndo';
import { tempTabSearchData } from '@/utils/tempData';

export interface CreateInfoSearchProps {}

export default function CreateInfoSearch({}: CreateInfoSearchProps) {
  const [keyword, setKeyword] = useState('');

  const onSubmitSearch = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    alert('DEV: 검색하기 & 결과 노출');
  }, []);

  return (
    <div>
      <form onSubmit={onSubmitSearch}>
        <Label>AI 검색</Label>
        <Input 
          value={keyword}
          onChange={((e) => setKeyword(e.target.value))}
          placeholder="AI가 출처와 함께 답변을 제공합니다."
          required
          variant="dark"
          leftIcon="mgc_search_line"
          full
        />
        <div className="mt-2">
          <Button
            type="submit"
            color="teal"
            size="sm"
            round
            full
          >
            AI 검색
          </Button>
        </div>
      </form>
      <div className="py-2.5">
        <TabInfoSearch data={tempTabSearchData} />
      </div>
      {'DEV: 히스토리가 쌓이면?' && (
        <CreateInfoUndo />
      )}
    </div>
  );
}