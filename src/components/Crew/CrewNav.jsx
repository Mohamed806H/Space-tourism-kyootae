function CrewNav({ crew, onSelect, currentIndex }) {
  return (
    <div className="crew__nav flex justify-center gap-8 mt-6 sm:mt-15 lg:absolute lg:top-full lg:left-0 lg:mt-20 lg:justify-start lg:gap-6">
      {crew.map((item, index) => (
        <button
          key={item.name}
          onClick={() => onSelect(index)}
          aria-label={`Show ${item.name}`}
          className={`rounded-full w-2.5 h-2.5 lg:w-3.75 lg:h-3.75 transition-colors hover:bg-white/60 ${
            index === currentIndex ? "bg-white" : "bg-gray-400"
          }`}
        />
      ))}
    </div>
  )
}

export default CrewNav;
