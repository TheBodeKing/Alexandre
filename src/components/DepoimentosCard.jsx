const DepoimentosCard = ({ img, alt, txt }) => {
  return (
    <div
      className="w-[540px] h-[284px] text-justify relative touch-pan-y select-none bg-white 
    cinza py-[20px] px-[50px] rounded-sm overflow-hidden"
    >
      <div className="flex flex-col relative gap-[40px] py-[20px] px-[10px] ">
        <div className="shadow-[0px_0px_10px_1px_#00000054] rounded-sm h-[320px] bg-white ">
          <div className="h-[156px] ">
            <img
              src={img}
              alt={alt}
              className="w-full rounded-sm"
              draggable={false}
            />
          </div>
          <div className="p-[20px] flex flex-col ">
            <h3 className="text-lg mb-[10px] font-bold ">{txt}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepoimentosCard;
