'use client';
import {useRouter} from 'next/navigation';
import {DoubleRightOutlined} from '@ant-design/icons';
import {searchClassList} from '@/mocData/search-class-info';

export default function SearchClass() {
  const router = useRouter();

  const handleMovePage = (path: string) => {
    router.push(path);
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center text-black-50">
        <span className="text-xl tablet:text-2xl pc:text-3xl">당신의 학습 스타일에 딱 맞는 맞춤형 연수</span>
        <div className="flex flex-col py-10 text-xs tracking-tight tablet:py-10 tablet:text-md pc:py-25 pc:text-xl">
          <span>원하는 목표와 학습 방식에 따라 완벽한 프로그램을 선택하세요!</span>
        </div>
        <div className="flex h-350 flex-row flex-wrap justify-center gap-20 tablet:h-250 pc:h-300">
          {searchClassList.map(dt => {
            return (
              <div className="relative flex w-[40%] flex-col rounded-5 bg-purple-200 p-20 tablet:w-[20%] pc:w-[20%]" key={`search-class-${dt.key}`}>
                <span className="text-xs font-semibold tablet:mb-5 tablet:text-md pc:mb-10 pc:text-2lg">{dt.title}</span>
                <span className="text-2xs font-medium tablet:text-xs pc:text-md">{dt.subtitle}</span>
                <button
                  type="button"
                  className="text-2xs absolute bottom-20 left-20 w-60 rounded-4 bg-purple-500 p-5 text-white tablet:w-70 tablet:p-10 tablet:text-xs pc:w-90 pc:text-lg"
                  onClick={() => handleMovePage(dt.href)}
                >
                  둘러보기
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <div className="absolute bottom-0 right-[10%] mb-20 flex flex-row justify-end tablet:right-[7%] pc:right-[8%]">
        <button type="button" className="gap-10 text-2lg font-semibold tablet:text-xl pc:text-2xl">
          더 많은 어학원 알아보기 <DoubleRightOutlined />
        </button>
      </div>
    </>
  );
}
