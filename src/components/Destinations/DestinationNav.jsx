
function DestinationNav({ destinations, currentIndex, onSelect }) {
  return (
    <div className="destination__nav flex justify-center gap-8 mt-8 sm:mt-15 ">
      {destinations.map((item, index) => (
      <button key={item.name} onClick={() => onSelect(index)} className="destination__nav-btn uppercase font-barlow text-[16px] sm:text-[28px] tracking-[0.15em] sm:tracking-[0.25em]" >
          <span className={`pb-2 ${index === currentIndex ? 'border-b-2 border-white' : 'text-gray-400'}`} >{item.name}</span>
      </button>
      ))}
    </div>
  );
}

export default DestinationNav;
