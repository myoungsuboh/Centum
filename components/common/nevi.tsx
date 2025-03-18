'use client';
import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import hamburger from '@/public/icon/hamburger-menu.svg';
import Menu from '@/components/menu';
import {SearchOutlined} from '@ant-design/icons';
import {usePathname, useRouter} from 'next/navigation';
import {mainStore} from '@/service/store/mainStore';
import logo from '@/public/img/logo.png';

const NavCategory = [
  {key: 1, title: '쎈텀유학', value: '/studyAbroad'},
  {key: 2, title: '필리핀 어학연수', value: '/'},
  {key: 3, title: '학원 정보', value: '/'},
  {key: 4, title: '프로모션', value: '/promotions'},
  {key: 5, title: '상담 문의', value: '/inquiry'},
  {key: 6, title: '게시판', value: '/'},
];

interface isScrolledType {
  isScrolled: boolean;
}

const Nevi = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const {device, setDevice} = mainStore();

  // Navi 하단에 그림자 표시
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Device 타입별 반응형 적용
  useEffect(() => {
    const checkMobile = () => {
      const checkDevice = window.innerWidth <= 743;
      setDevice(checkDevice ? 'mobile' : 'windows');
      return checkDevice;
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, [setDevice]);

  return <>{device === 'mobile' ? <MobileNavi isScrolled={isScrolled} /> : <PCNavi isScrolled={isScrolled} />}</>;
};

const MobileNavi = (isScrolled: isScrolledType) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sticky left-0 top-0 h-50 w-full content-center items-center ${isScrolled && 'bg-white shadow-md'} z-20`}>
      <div className="mx-50 flex flex-row items-center justify-between">
        <Link href="/" className="relative">
          <Image src={logo} className="h-30 w-100" alt="logo" />
        </Link>
        <div className="relative h-30 w-30" onClick={handleHamburgerClick}>
          {!isOpen ? (
            <Image src={hamburger} fill alt="hamburger" />
          ) : (
            <button className="border-0 text-2xl font-bold shadow-none" onClick={handleHamburgerClick}>
              ✕
            </button>
          )}
        </div>
        <div
          className={`fixed right-0 top-50 flex h-screen w-full transform flex-col items-center gap-10 bg-white shadow-md transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <Menu />
        </div>
      </div>
    </div>
  );
};

const PCNavi = (isScrolled: isScrolledType) => {
  const router = useRouter();
  const pathName = usePathname();

  const handleSearch = () => {
    console.log('search language school');
  };

  const handleMovePage = (value: string) => {
    router.push(`${value}`);
  };

  return (
    <>
      <div className={`flex h-50 w-full items-center justify-center bg-purple-500`}>
        <span className="text-white">●필리핀 세부 전문 유학원 ●</span>
      </div>
      {pathName !== '/signin' && (
        <div className={`sticky left-0 top-0 h-150 w-full content-center items-center ${isScrolled && 'bg-white shadow-md'} z-20`}>
          <div className="flex w-full flex-col">
            <div className="mx-100 my-20 flex flex-row items-center justify-between">
              <div className="flex flex-row gap-20">
                <Link href="/" className="relative">
                  <Image src={logo} className="h-50 w-100 pc:w-150" alt="logo" />
                </Link>
                <div className="relative">
                  <input
                    type="text"
                    className="h-40 w-250 rounded-5 bg-gray-100 pl-15 pr-50 text-sm text-black-50 placeholder-black-50 focus:border-transparent focus:outline-none focus:ring-0 pc:w-400 pc:text-md"
                    placeholder='원하는 "어학원"을 검색해보세요'
                    onChange={handleSearch}
                  />
                  <SearchOutlined className="absolute right-10 top-12" />
                </div>
              </div>
              <button
                className="h-40 w-140 rounded-5 border-none bg-purple-400 px-10 text-sm text-white pc:w-150 pc:text-md"
                onClick={() => router.push('/signin')}
              >
                로그인 및 회원가입
              </button>
            </div>
            <div className="flex flex-row justify-center gap-50">
              {NavCategory.map(dt => (
                <button type="button" key={dt.key} className="text-lg font-semibold" onClick={() => handleMovePage(dt.value)}>
                  {dt.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Nevi;
