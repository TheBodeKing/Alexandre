const DragOwlCard = ({ img, alt, txt }) => {
  return (
    <div className="w-[277.5px] touch-pan-y ">
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

export default DragOwlCard;
