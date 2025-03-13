'use client';
import React from 'react';
import {PhoneFilled, SearchOutlined} from '@ant-design/icons';
import inquireImg from '@/public/img/inquire.webp';
import Image from 'next/image';
import {useRouter} from 'next/navigation';

const Inquire = () => {
  const router = useRouter();

  const handleMovePage = () => {
    const movePage = process.env.NEXT_PUBLIC_DEFAULT_MOVE_SITE || '/';
    router.push(movePage);
  };

  return (
    <div className="flex flex-col items-center justify-center text-white">
      <Image fill src={inquireImg} alt="inquire-img" />
      <div className="absolute top-50 text-2lg font-bold tracking-tighter tablet:top-70 tablet:text-xl pc:top-90 pc:text-2xl">
        365일, 24시간 언제나 열려있어요.
      </div>
      <span className="absolute top-90 text-2lg font-bold tablet:top-130 tablet:text-xl pc:top-180 pc:text-2xl">
        <PhoneFilled /> 1833-3504
      </span>
      <button
        type="button"
        className="absolute top-130 h-30 w-[30%] rounded-50 bg-blue-100 text-sm font-bold tablet:top-210 tablet:h-40 tablet:text-md pc:top-280 pc:h-50 pc:text-xl"
        onClick={handleMovePage}
      >
        문의하기 <SearchOutlined className="absolute right-[20%] top-9 tablet:top-15 pc:top-18" />
      </button>
    </div>
  );
};

export default Inquire;
