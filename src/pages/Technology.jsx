import TechnologyDetails from "../components/Technology/TechnologyDetails.jsx"
import TechnologyNav from "../components/Technology/TechnologyNav.jsx"
import TechnologyPic from "../components/Technology/TechnologyPic.jsx"
import data from "../data.json"
import { useState } from "react"

function Technology() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentTech = data.technology[currentIndex];

  return (
    <section className="technology bg-[#0B0D17] bg-[url(/assets/technology/background-technology-mobile.jpg)] md:bg-[url(/assets/technology/background-technology-tablet.jpg)] lg:bg-[url(/assets/technology/background-technology-desktop.jpg)] bg-no-repeat bg-cover bg-center min-h-screen flex flex-col text-white pt-28 sm:pt-32 lg:pt-48">

      {/* Heading lives in the same 1110px container used on the Crew page */}
      <div className="w-full max-w-277.5 mx-auto px-6 md:mt-6 xl:px-0">
        <h5 className="uppercase font-barlow text-base sm:text-xl lg:text-[28px] tracking-[0.15em] mb-6 text-center lg:text-left">
          <span className="text-[#D0D6F9]/25 mr-6 font-bold">03</span>
          Space launch 101
        </h5>
      </div>

      {/* Full-width row: the picture is flush with the right edge of the screen at desktop */}
      <section className="techmain flex-1 flex flex-col items-center lg:flex-row lg:items-center lg:justify-between lg:pb-14">

        {/* Mobile/tablet: picture first. Desktop: picture goes to the right (order-last) */}

        {/* Left group: numbers + text. Its left edge lines up with the heading */}
        <div className="flex flex-col items-center lg:flex-row lg:items-center lg:gap-10 xl:gap-16 lg:ml-[max(1.5rem,calc((100%-69.375rem)/2))]">
          <TechnologyNav items={data.technology} onSelect={setCurrentIndex} currentIndex={currentIndex} />
          <TechnologyDetails name={currentTech.name} description={currentTech.description} />
        </div>

        <TechnologyPic images={currentTech.images} name={currentTech.name} />
      </section>
    </section>
  );
}

export default Technology;
