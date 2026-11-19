
function DestinationImage({ image, name }) {
  return (
    <div className=" mt-5.25 lg:mt-15 destination__image w-37.5 h-37.5 mx-auto sm:w-75 sm:h-75 lg:w-120 lg:h-120 lg:mr-15.5 ">
      <img src={image?.png} alt={name} className="w-full h-full"/>
    </div>
  );
}

export default DestinationImage;
