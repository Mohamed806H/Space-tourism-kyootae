function TechnologyNav({ items, onSelect, currentIndex }) {
  return (
    <div className="technology__nav flex gap-4 mt-8 lg:mt-0 lg:flex-col lg:gap-8">
      {items.map((item, index) => (
        <button
          key={item.name}
          onClick={() => onSelect(index)}
          aria-label={`Show ${item.name}`}
          aria-current={index === currentIndex}
          className={`grid place-items-center rounded-full border font-bellefair transition-colors
            w-10 h-10 text-base
            sm:w-14 sm:h-14 sm:text-2xl
            lg:w-16 lg:h-16
            xl:w-20 xl:h-20 xl:text-[32px]
            ${index === currentIndex
              ? "bg-white text-[#0B0D17] border-white"
              : "border-white/25 text-white hover:border-white"}`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  )
}

export default TechnologyNav;
