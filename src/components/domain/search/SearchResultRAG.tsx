import Image from 'next/image';

import Inner from '@/components/common/Inner';
import Button from '@/components/common/Button';
import Skeleton from '@/components/common/Skeleton';
import NoData from '@/components/common/NoData';
import { tempTabPreviewData } from '@/utils/tempData';
import ImgAIBot from '/public/images/ai_bot.svg';

export interface SearchResultRAGProps {}

export default function SearchResultRAG({}: SearchResultRAGProps) {
  return (
    <section>
      <div className="mb-5 py-2 bg-slate-700 text-center">
        <p className="text-white text-sm font-medium">
          RAG검색이란 AI가 탭의 자료를 근거로 답변을 생성합니다.
        </p>
      </div>
      <div>
        <Inner>
          {tempTabPreviewData && (
            <div>
              <div className="flex items-start gap-2">
                <figure className="flex-shrink-0">
                  <Image src={ImgAIBot} alt="AI Bot" />
                </figure>
                <div className="flex-auto px-3 py-2 rounded-2xl rounded-tl-none bg-slate-50">
                  <p className="text-slate-700 text-base-read font-medium">
                    마케터는 브랜드 매니저로 불리기도 하며, 브랜드와 관련된 모든 일을 맡아서 진행합니다. 
                    그들은 트렌드 분석, 시장조사, 브랜드 콘셉트 기획, 인플루언서 협찬, SNS관리, 
                    제품 기획, 광고 기획, 소비자 반응 체크, 이벤트 프로모션 기획, 상세페이지 제작 등 다양한 일들을 합니다. 
                    마케터로서의 역할을 수행하기 위해서는 트렌드에 대한 민감함, 
                    기획력과 창의력, 브랜드에 대한 이해도, 비즈니스적 마인드 등이 요구됩니다.<span className="text-primary-500">[1]</span>
                    점차적으로 기술이 발달하면서 마케터의 역할은 더욱 세분화되고 전문화되고 있으며, 
                    AI와의 협업을 통해 더욱 전문적이고 효과적인 마케팅 전략을 구현하는 것이 중요해지고 있습니다.<span className="text-blue-500">[3]</span>
                    마케터는 제품이나 서비스의 브랜드 가치를 향상시키고 소비자들의 관심을 끌어내는 데 주력하며, 
                    디자인 검토도 수행합니다. 마케터는 제품, 서비스, 브랜드 등을 홍보하고 판매하는 역할을 합니다.<span className="text-teal-500">[2]</span>
                  </p>
                </div>
              </div>
              <div className="mt-5">
                <Button
                  onClick={() => alert('TODO: AI가 참조한 탭보기 바텀시트 open')}
                  rightIcon="mgc_arrow_right_line"
                  round
                  full
                >
                  AI가 참조한 탭보기
                </Button>
              </div>
            </div>
          )}
          {'DEV: loading' && (
            <div className="flex items-start gap-2">
              <Skeleton width="34px" height="34px" round />
              <Skeleton height="300px" />
            </div>
          )}
          {'DEV: no data' && (
            <NoData
              text="RAG검색 결과가 없습니다."
            />
          )}
        </Inner>
      </div>
    </section>
  );
}