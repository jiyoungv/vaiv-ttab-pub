import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export interface TabDetailInfoImageProps {
  data?: string[];
}

export default function TabDetailInfoImage({ data }: TabDetailInfoImageProps) {
  return (
    <div>
      <Swiper
        className="h-[375px]"
        slidesPerView={1}
      >
        {data?.map((v, i) => (
          <SwiperSlide key={i}>
            <figure className="relative w-full h-full">
              <Image src={v} fill objectFit="cover" alt="" />
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
      TODO: slide dots
    </div>
  );
}