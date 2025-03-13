import MainBanner from '@/components/main/main-banner';
import SecondBanner from '@/components/main/second-banner';
import SearchClass from '@/components/main/search-class';
import ThirdBanner from '@/components/main/third-banner';
import Question from '@/components/main/question';
import Inquire from '@/components/main/inquire';

const Home = () => {
  return (
    <>
      <div className="bg-[rgba(250, 251, 252, 1)] w-full overflow-hidden">
        <section className="relative mb-1 h-350 tablet:h-420 pc:h-560">
          <MainBanner />
        </section>
        <section className="relative h-350 bg-black-50 py-50 tablet:h-430 pc:h-560">
          <SecondBanner />
        </section>
        <section className="relative h-520 bg-white py-20 tablet:h-430 tablet:py-30 pc:h-560 pc:py-50">
          <SearchClass />
        </section>
        <section className="h-350 bg-black-50 py-50 tablet:h-400 pc:h-500">
          <ThirdBanner />
        </section>
        <section className="h-150 tablet:h-200 pc:h-250">
          <Question />
        </section>
        <section className="relative h-200 py-50 tablet:h-300 pc:h-400">
          <Inquire />
        </section>
      </div>
    </>
  );
};

export default Home;
