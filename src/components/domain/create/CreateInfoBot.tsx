import { useState } from 'react';
import Image from 'next/image';

import Inner from '@/components/common/Inner';
import Button from '@/components/common/Button';
import Icon from '@/components/common/Icon';
import ImgAIBot from '/public/images/ai_bot.svg';

export interface CreateInfoBotProps {}

export default function CreateInfoBot({}: CreateInfoBotProps) {
  const [openMessage, setOpenMessage] = useState(true);

  const list = [
    {
      text: '자동완성',
      onClick: () => {
        alert('DEV: 자동완성');
        setOpenMessage(true);
      },
    },
    {
      text: '요약하기',
      onClick: () => {
        alert('DEV: 요약하기');
        setOpenMessage(true);
      },
    },
    {
      text: '출처 찾기',
      onClick: () => {
        alert('DEV: 출처 찾기');
        setOpenMessage(true);
      },
    },
  ];

  return (
    <section className="pb-4">
      <Inner>
        <div className="flex gap-2">
          <div className="flex-shrink-0 pt-0.5">
            <Image src={ImgAIBot} alt="AI Bot" />
          </div>
          {(list && !openMessage) && (
            <div className="flex flex-wrap gap-2">
              {list.map((v, i) => (
                <Button
                  key={i}
                  onClick={v.onClick}
                  color="secondary"
                  size="sm"
                  round
                  style={{
                    borderTopLeftRadius: 0,
                  }}
                >
                  {v.text}
                </Button>
              ))}
            </div>
          )}
          {openMessage && (
            <div className="relative pl-3 pr-7 py-2 rounded-2xl rounded-tl-none bg-slate-700">
              <p className="text-white text-xs font-medium">
                죄송합니다. 제가 도와드릴 수 없는 문장입니다. <br/>
                문장을 좀 더 길게 입력하거나 더 정확하게 입력해주세요.
              </p>
              <div className="absolute top-2 right-2">
                <button
                  type="button"
                  onClick={() => setOpenMessage(false)}
                  className="inline-block"
                >
                  <Icon
                    name="mgc_close_line"
                    color="text-white"
                    size="text-base-size"
                  />
                </button>
              </div>
            </div>
          )}
        </div>
      </Inner>
    </section>
  );
}