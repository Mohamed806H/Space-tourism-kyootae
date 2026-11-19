import CrewDetails from "../components/Crew/CrewDetails.jsx"
import CrewNav from "../components/Crew/CrewNav.jsx"
import CrewPic from "../components/Crew/CrewPic.jsx"
import data from "../data.json"
import { useState } from "react"

function Crew() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentCrew = data.crew[currentIndex];

  return (
    <section className="crew bg-[#0B0D17] bg-[url(/assets/crew/background-crew-mobile.jpg)] md:bg-[url(/assets/crew/background-crew-tablet.jpg)] lg:bg-[url(/assets/crew/background-crew-desktop.jpg)] bg-no-repeat bg-cover bg-center min-h-screen flex flex-col text-white pt-28 sm:pt-32 lg:pt-48">

      {/* Shared container: heading + content, 1110px wide on desktop */}
      <div className="w-full max-w-277.5 mx-auto px-6 xl:px-0 flex-1 flex flex-col">

        <h5 className="uppercase font-barlow text-base sm:text-xl lg:text-[28px] tracking-[0.15em] mb-6 text-center lg:text-left">
          <span className="text-[#D0D6F9]/25 mr-6 font-bold">02</span>
          Meet your crew
        </h5>

        {/* flex-1 + items-end: the picture sits on the bottom of the page at desktop */}
        <section className="crewmain flex-1 flex flex-col items-center lg:flex-row lg:items-end lg:justify-between">

          {/* Left column: text + dots (dots are absolute under the text, out of the flow) */}
          <div className="relative flex flex-col items-center lg:items-start lg:self-start lg:mt-26 lg:w-110 xl:w-111">
            <CrewDetails name={currentCrew.name} role={currentCrew.role} bio={currentCrew.bio} />
            <CrewNav crew={data.crew} onSelect={setCurrentIndex} currentIndex={currentIndex} />
          </div>

          <CrewPic image={currentCrew.images} name={currentCrew.name} />
        </section>

      </div>
    </section>
  );
}

export default Crew;
