import { useState } from 'react';

import Inner from '@/components/common/Inner';
import Label from '@/components/common/Label';
import Input from '@/components/common/Input';
import TextArea from '@/components/common/TextArea';
import Radio from '@/components/common/Radio';
import CreateTag from '@/components/domain/create/CreateTag';

export interface CreateTabProps {}

export default function CreateTab({}: CreateTabProps) {
  const [title, setTitle] = useState('');

  const [subText, setSubText] = useState('');

  const [privacy, setPrivacy] = useState(true);

  return (
    <article>
      <section className="pt-5 pb-17">
        <Inner>
          <form>
            <div className="mb-4 border-b border-b-slate-200">
              <Label mb="0">제목</Label>
              <div className="py-2.5">
                <Input 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="탭 제목을 입력해주세요."
                  variant="clear"
                />
              </div>
            </div>
            <div>
              <Label mb="0">설명</Label>
              <div className="py-2.5">
                <TextArea 
                  value={subText}
                  onChange={(e) => setSubText(e.target.value)}
                  placeholder="탭 설명을 입력해주세요."
                  autoSize={{ minRows: 6, maxRows: 10 }}
                  variant="clear"
                />
              </div>
            </div>
          </form>
        </Inner>
      </section>
      <CreateTag />
      <section className="py-5 border-b border-b-slate-200">
        <Inner>
          <form>
            <div className="mb-1.5">
              <Radio 
                id="public" 
                name="public" 
                checked={!privacy}
                onChange={(e) => e.target.checked && setPrivacy(false)}
                size="md"
                text="공개 탭으로 설정하기"
              />
            </div>
            <div>
              <Radio 
                id="privacy" 
                name="public" 
                checked={privacy}
                onChange={(e) => e.target.checked && setPrivacy(true)}
                size="md"
                text="비공개 탭으로 설정하기"
              />
            </div>
          </form>
        </Inner>
      </section>
    </article>
  );
}