'use client';
import Image from 'next/image';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination} from 'swiper/modules';
import {FireTwoTone} from '@ant-design/icons';
import '@/styles/outerBannerSwiper.css';
import {thirdBannerInfo} from '@/mocData/banner-info';

export default function ThirdBanner() {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-white">
        <span className="text-xl tracking-tighter tablet:text-2xl pc:text-3xl">
          세부 최적의 학원 위치를 확인하세요! <FireTwoTone />
        </span>
        <div className="my-25 flex flex-col items-center justify-center text-xs tracking-tight tablet:text-md pc:text-xl">
          <span>필리핀 어학연수의 중심, 세부는 아름다운 휴양지이자</span>
          <span>안전한 교육 환경을 갖춘 세부는 학습과 생활의 완벽한 조화를 제공합니다.</span>
        </div>
      </div>
      <div className="outer-banner relative">
        <div className="swiper-button-prev" />
        <div className="px-70 tablet:px-130 pc:px-170">
          <Swiper
            className="outer-banner"
            modules={[Pagination, Navigation]}
            spaceBetween={10}
            slidesPerView={2}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            parallax={true}
          >
            {thirdBannerInfo.map(banner => (
              <SwiperSlide key={banner.img} className="swiperSlide">
                <div className="m-10 flex h-100 bg-white text-black-50 tablet:h-130 pc:h-200">
                  <Image className="rounded-10" fill alt={`${banner.alt}`} src={banner.img} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-button-next" />
        </div>
      </div>
    </>
  );
}
