function TechnologyPic({ images, name }) {
  return (
    <div className="technology__image order-first lg:order-last w-full h-64.5 sm:h-89.25 lg:w-120 lg:h-125 xl:w-152 xl:h-150 lg:shrink-0 mt-8 lg:mt-0">
      <picture>
        {/* Desktop uses the portrait image, mobile/tablet use the landscape one */}
        <source media="(min-width: 1024px)" srcSet={images?.portrait} />
        <img src={images?.landscape} alt={name} className="w-full h-full object-cover" />
      </picture>
    </div>
  )
}

export default TechnologyPic;
