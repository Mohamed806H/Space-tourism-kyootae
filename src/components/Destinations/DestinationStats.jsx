function DestinationStats({ distance, travel }) {
  return (

    <div className="destination__stats flex flex-col sm:flex-row justify-center gap-8 sm:gap-17.5 mt-8 sm:mt-15">
      <div className="destination__stats-item">
        <h3 className="text-[14px] uppercase sm:text-[16px] text-[#D0D6F9] tracking-[2.36px] sm:tracking-[2.7px] mb-2">
          Avg. Distance
        </h3>
        <p className="text-[28px] sm:text-[32px] uppercase font-bellefair">{distance}</p>
      </div>
      <div className="destination__stats-item">
        <h3 className="text-[14px] uppercase sm:text-[16px] text-[#D0D6F9] tracking-[2.36px] sm:tracking-[2.7px] mb-2">
          Est. Travel Time
        </h3>
        <p className="text-[28px] uppercase sm:text-[32px] font-bellefair">{travel}</p>
      </div>
    </div>
    )
}
export default DestinationStats;
