import MainBanner from '@/components/main/main-banner';
import SearchClass from '@/components/main/search-class';
import SecondBanner from '@/components/main/second-banner';

const Home = () => {
  return (
    <>
      <div className="bg-[rgba(250, 251, 252, 1)] w-full overflow-hidden">
        <section className="relative mb-1 h-350 tablet:h-420 pc:h-560">
          <MainBanner />
        </section>
        <section className="relative h-350 bg-black-50 py-50 tablet:h-420 pc:h-560">
          <SecondBanner />
        </section>
        <section className="h-350 bg-white py-50 tablet:h-420 pc:h-560">
          <SearchClass />
        </section>
      </div>
    </>
  );
};

export default Home;
