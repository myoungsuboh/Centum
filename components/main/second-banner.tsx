'use client';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination} from 'swiper/modules';
import '@/styles/outerBannerSwiper.css';
import {secondBannerInfo} from '@/mocData/banner-info';

export default function SecondBanner() {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-white">
        <span className="text-xl tracking-tighter tablet:text-2xl pc:text-3xl">쎈텀에만 있는 특별한 일본 어학원</span>
        <div className="my-25 flex flex-col items-center justify-center text-xs tracking-tight tablet:text-md pc:text-xl">
          <span>필리핀에서 일본 어학원과 제휴를 맺어</span>
          <span>일본 학생들과 함께 공부하며 자연스럽게 영어로 대화할 수 있는 환경을 만들었습니다.</span>
          <span>친구도 사귀고 스피킹 실력까지 늘리는 최고의 환경</span>
          <span>쎈텀유학원 현지 매니저가 직접 관리하여 안심하고 유학하세요!</span>
        </div>
      </div>
      <div className="outer-banner relative">
        <div className="swiper-button-prev" />
        <div className="px-50 tablet:px-130 pc:px-170">
          <Swiper
            className="outer-banner"
            modules={[Pagination, Navigation]}
            spaceBetween={10}
            slidesPerView={3}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            parallax={true}
          >
            {secondBannerInfo.map((banner, index) => (
              <SwiperSlide key={index} className="swiperSlide">
                <div className="m-10 flex h-100 items-center justify-center rounded-10 bg-white text-black-50 tablet:h-130 pc:h-200">
                  <h3 className="text-lg font-bold tablet:text-xl pc:text-2xl">{banner.title}</h3>
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
