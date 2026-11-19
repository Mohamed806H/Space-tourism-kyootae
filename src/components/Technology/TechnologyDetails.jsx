function TechnologyDetails({ name, description }) {
  return (
    <div className="text-center lg:text-left mt-10 lg:mt-0 lg:w-96 xl:w-122">
      <p className="uppercase font-bellefair text-sm sm:text-xl lg:text-2xl xl:text-[28px] text-white/50">
        The terminology…
      </p>
      <h4 className="uppercase font-bellefair text-white text-2xl sm:text-[40px] lg:text-4xl xl:text-[56px] mt-4">
        {name}
      </h4>
      <p className="font-barlow leading-[180%] text-[15px] sm:text-base lg:text-lg text-[#D0D6F9] mt-3 lg:mt-6 mx-auto lg:mx-0 w-[87%] sm:w-120 lg:w-full pb-15 lg:pb-0">
        {description}
      </p>
    </div>
  )
}

export default TechnologyDetails;
