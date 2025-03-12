'use client';
import {searchClassList} from '@/mocData/search-class-info';
import {DoubleRightOutlined} from '@ant-design/icons';
import {useRouter} from 'next/navigation';

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
        <div className="flex flex-row flex-wrap justify-center gap-20 tablet:h-250 pc:h-300">
          {searchClassList.map(dt => {
            return (
              <div className="relative flex w-235 flex-col rounded-5 bg-purple-200 p-20 tablet:w-150 pc:w-200" key={`search-class-${dt.key}`}>
                <span className="font-semibold tablet:mb-5 tablet:text-lg pc:mb-10 pc:text-xl">{dt.title}</span>
                <span className="text-sm font-medium tablet:text-md pc:text-lg">{dt.subtitle}</span>
                <button
                  type="button"
                  className="absolute bottom-20 left-20 rounded-4 bg-purple-500 p-15 text-sm text-white tablet:p-10"
                  onClick={() => handleMovePage(dt.href)}
                >
                  둘러보기
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <div className="my-10 flex flex-row justify-end tablet:pr-30 pc:pr-70">
        <button type="button" className="gap-10 text-2xl font-semibold">
          더 많은 어학원 알아보기 <DoubleRightOutlined />
        </button>
      </div>
    </>
  );
}
