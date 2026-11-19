function CrewPic({ image, name }) {
  return (
    <div className="crew__image mt-9 lg:mt-0 w-[72%] sm:w-[58%] sm:h-135 lg:w-125 lg:h-156 xl:w-142 xl:h-178 lg:shrink-0 mx-auto lg:mx-0">
      <img
        src={image?.png}
        alt={name}
        className="w-full h-full object-contain object-bottom mask-fade-b"
      />
    </div>
  )
}

export default CrewPic
