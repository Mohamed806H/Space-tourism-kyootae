function Home() {
  return (
    <section className="home flex flex-col lg:flex-row items-center pt-28 min-h-screen text-center text-white sm:pt-32">
      <div className="home-text text-center flex flex-col items-center lg:items-start lg:text-left lg:mt-104.25 lg:ml-41.25 max-w-112.5 md:max-w-120 w-[68%]">
        <h2 className="text-[80px] sm:text-[144px]  lg:text-7xl font-bellefair uppercase ">
          <span className="font-barlow text-[#D0D6F9] text-[16px] sm:text-[28px]  tracking-[15%] sm:tracking-[4px] mb-6">
            So, you want to travel to
          </span>
          <br />
          Space
        </h2>
        <p className="text-[#D0D6F9] text-[15px] sm:text-[16px]  lg:text-xl font-barlow  mt-6 sm:mt-0 lg:mt-8 mb-12 leading-[180%]">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>

      <button className="explore-button rounded-full shrink-0  w-36 h-36 sm:w-68 sm:h-68   font-bellefair  uppercase bg-white text-black hover:bg-gray-200 hover:scale-110 hover:shadow-lg transition-transform duration-300 mt-29.75 sm:mt-16.5 lg:mt-98.75  lg:ml-25 lg:w-60 lg:h-60 xl:ml-74.5 ">
        <span className="text-[20px] sm:text-[32px]">Explore</span>

      </button>
    </section>
  );
}

export default Home;
