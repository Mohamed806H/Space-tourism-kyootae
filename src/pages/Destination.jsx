import DestinationImage from "../components/Destinations/DestinationImage";
import DestinationDetails from "../components/Destinations/DestinationDetails"
import DestinationNav from "../components/Destinations/DestinationNav";
import DestinationStats from "../components/Destinations/DestinationStats";
import { useState,useEffect } from "react";
import data from "../data.json"
function Destination() {
  // this use effect make all images preload
  useEffect(() => {
    data.destinations.forEach((destination) => {
      const img = new Image();
      img.src = destination.images.png
      img.src = destination.images.webp
    })
  })
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentDestination = data.destinations[currentIndex];
  return (
    <section className = "destination flex flex-col items-center  pt-28 min-h-screen text-center  text-white/25% sm:pt-32" >
      <h5 className="uppercase shrink-0 w-full sm:mr-90 font-barlow sm:mt-6 md:mr-110 lg:mr-195 text-base sm:text-xl mb-6 tracking-[0.15em]">
        <span className=" text-[#D0D6F9]/25 mr-6  sm:text-xl   font-bold ">
          01
        </span>
        Pick your destination
      </h5>
      <div className="destination__container lg:flex ">
        <div className="planet-img">
        <DestinationImage image={currentDestination.images} name={currentDestination.name} />
        </div>
        <div className="planet-details">

        <DestinationNav destinations={data.destinations} currentIndex={currentIndex} onSelect={setCurrentIndex} />
        <DestinationDetails description={currentDestination.description} name={currentDestination.name} />
        <DestinationStats distance={currentDestination.distance} travel={currentDestination.travel } />
        </div>
      </div>



    </section>
  );
}

export default Destination;
