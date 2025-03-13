'use client';
import Image from 'next/image';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Navigation, Pagination} from 'swiper/modules';
import {mainBannerInfo} from '@/mocData/banner-info';
import '@/styles/innerBannerSwiper.css';
import {mainStore} from '@/service/store/mainStore';

export default function MainBanner() {
  const {device} = mainStore();
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
      navigation={device !== 'mobile'}
    >
      {mainBannerInfo.map(banner => (
        <SwiperSlide key={banner.key}>
          <div className="relative flex h-full w-full items-center bg-center bg-no-repeat">
            <Image src={banner.img} alt={'main-banner-img'} fill style={{objectFit: 'cover'}} priority />
            <div className="absolute left-70 top-100 flex flex-col text-black-50 tablet:left-130 tablet:top-130 pc:left-150 pc:top-200">
              {banner.title.map((bnTitle, idx) => {
                return (
                  <span className="mb-5 text-xl font-bold tablet:text-2xl pc:text-3xl" key={`main-banner-title-key-${idx}`}>
                    {bnTitle}
                  </span>
                );
              })}
              <span className="my-20 text-lg font-semibold tablet:text-2lg pc:text-xl">{banner.subtitle}</span>
              <button type="button" className="w-120 rounded-50 bg-black-200 p-5 text-md font-normal text-white">
                더 알아보기
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
