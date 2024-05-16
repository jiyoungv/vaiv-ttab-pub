import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { TabInfoImage as TabInfoImageType } from '@/types/tab';

export interface TabInfoImageProps {
  data?: TabInfoImageType;
}

export default function TabInfoImage({ data }: TabInfoImageProps) {
  return (
    <div>
      <Swiper
        className="tab-image-swiper h-[375px]"
        slidesPerView={1}
        autoHeight={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        loop={true}
      >
        {data?.map((v, i) => (
          <SwiperSlide key={i}>
            <figure>
              <img src={v} className="w-full" alt="" />
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}