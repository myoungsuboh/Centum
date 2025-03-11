'use client';
import Image from 'next/image';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Navigation, Pagination} from 'swiper/modules';
import {mainBanners} from '@/mocData/banner-info';
import '@/styles/innerBtnSwiper.css';

export default function MainBanner() {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      autoplay={{delay: 3000, disableOnInteraction: true, waitForTransition: true}}
      className="h-full w-full"
      pagination={{
        clickable: true,
        renderBullet: (index, className) => {
          return `<span class="${className} custom-bullet "></span>`;
        },
      }}
      navigation={true}
    >
      {mainBanners.map((banner, index) => (
        <SwiperSlide key={index}>
          <div className="relative flex h-full w-full items-center bg-center bg-no-repeat">
            <Image src={banner.img} alt={banner.title} fill style={{objectFit: 'cover'}} priority />
            <div className="absolute left-90 ml-6 text-white tablet:ml-32 pc:left-40 pc:ml-80">
              <h3 className="mb-2 text-2xl font-bold tablet:text-3xl pc:text-6xl">{banner.title}</h3>
              <h2 className="text-lg font-semibold tablet:text-2xl">{banner.subtitle}</h2>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
