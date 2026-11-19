function CrewDetails({ name, role, bio }) {
  return (
    <div className="text-center lg:text-left lg:w-full">
      <p className="role mt-16 lg:mt-0 uppercase text-lg lg:text-2xl font-bellefair text-white/50">
        {role}
      </p>
      <h4 className="text-white uppercase mt-2">
        <span className="block text-white text-2xl lg:text-5xl xl:text-[56px] lg:leading-14 xl:leading-16 font-bellefair">{name}</span>
      </h4>
      <p className="bio leading-[180%] text-[15px] lg:text-lg font-barlow text-[#D0D6F9] mx-auto lg:mx-0 w-[86%] sm:w-[60%] lg:w-full mt-6 pb-15 lg:pb-0">
        {bio}
      </p>
    </div>
  )
}

export default CrewDetails
