function DestinationDetails({ description, name }) {
  return (
    <section className="destination__details lg:flex lg:justify-items-start items-start">
      <div>
        <h1 className="text-[56px] sm:text-[80px] font-bellefair uppercase mt-6">
{name}
        </h1>
        <p className="text-[15px] max-w-81.75 sm:max-w-128.5 sm:text-base w-full text-center leading-[180%] mt-4">
{description}
        </p>
      </div>
      <hr  className="text-white/25 mt-6"/>
    </section>
  );
}

export default DestinationDetails;
