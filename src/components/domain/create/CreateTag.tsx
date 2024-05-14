import { useState, useCallback } from 'react'

import Inner from '@/components/common/Inner';
import Icon from '@/components/common/Icon';
import Input from '@/components/common/Input';
import IconButton from '@/components/common/IconButton';
import Button from '@/components/common/Button';
import Badge from '@/components/common/Badge';

export interface CreateTagProps {}

export default function CreateTag({}: CreateTagProps) {
  const [tag, setTag] = useState('');

  const [tagList, setTagList] = useState<Set<string>>(new Set());

  const onSubmitAddTag = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    
    const newState = new Set(tagList);
    newState.add(tag);
    setTagList(newState);
    setTag('');
  }, [tagList, tag]);

  return (
    <section className="py-4 bg-slate-100">
      <Inner>
        <form onSubmit={onSubmitAddTag}>  
          <div className="flex justify-between gap-1">
            <div className="flex-auto flex items-start gap-2">
              <div className="flex-shrink-0">
                <Icon name="mgc_tag_line" color="text-slate-500" />
              </div>
              <div className="flex-auto max-w-[300px]">
                <Input 
                  value={tag}
                  onChange={(e) => setTag(e.target.value)}
                  placeholder="태그를 입력 후 추가해주세요.(15자 이내)"
                  required
                  variant="clear"
                  full
                />
              </div>
            </div>
            <IconButton 
              type="submit"
              icon={{
                name: 'mgc_add_line',
                color: 'text-slate-500',
                size: 'text-xl-size',
              }}
            />
          </div>
        </form>
        {(tagList && tagList.size !== 0) && (
          <ul className="flex flex-wrap gap-1 mt-4">
            {Array.from(tagList).map((v, i) => (
              <li key={i}>
                <Badge 
                  size="md" 
                  onClose={() => {
                    const newState = new Set(tagList);
                    newState.delete(v);
                    setTagList(newState);
                  }}
                >
                  {v}
                </Badge>
              </li>
            ))}
          </ul>
        )}
        <div className="flex justify-end mt-4">
          <Button
            onClick={() => {
              const newState = new Set(tagList);
              newState.add('DEV: 추천태그');
              setTagList(newState);
            }}
            color="slate"
            size="xs"
            rightIcon="mgc_sparkles_fill"
            round
          >
            태그 자동 생성
          </Button>
        </div>
      </Inner>
    </section>
  );
}