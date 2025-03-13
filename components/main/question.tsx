import React from 'react';
import Image from 'next/image';
import lavender from '@/public/img/lavender.webp';
import lilac from '@/public/img/lilac.webp';
import charcoal from '@/public/img/charcoal.webp';

const Question = () => {
  return (
    <div className="flex flex-row">
      <div className="relative h-250 w-[50%]">
        <Image src={lavender} fill alt="left-question-image" />
        <div className="absolute left-[15%] top-[15%] flex w-full flex-col text-left text-2lg font-bold text-black-50 tablet:top-[20%] tablet:text-2xl pc:top-[25%] pc:text-3xl">
          <span className="">필리핀 어학연수를</span>
          <span className="">쎈텀에서 선택해야 하는</span>
          <span className="">이유!</span>
        </div>
      </div>
      <div className="flex w-[50%] flex-col">
        <div className="relative h-[30%] tablet:h-[40%] pc:h-[50%]">
          <Image src={lilac} fill alt="right-question-first-image" />
          <div className="absolute left-[10%] top-[40%] flex w-full flex-col text-left text-2lg font-bold text-white tablet:left-[20%] tablet:text-xl pc:left-[25%] pc:text-2xl">
            <span className="">왜 필리핀 어학연수인가?</span>
          </div>
        </div>
        <div className="relative h-[30%] tablet:h-[40%] pc:h-[50%]">
          <Image src={charcoal} fill alt="right-question-second-image" />
          <div className="absolute left-[10%] top-[40%] flex w-full flex-col text-left text-2lg font-bold text-white tablet:left-[20%] tablet:text-xl pc:left-[25%] pc:text-2xl">
            <span className="">왜 쎈텀인가?</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
