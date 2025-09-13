import { Quote } from "lucide-react";

const DepoimentosCard = ({ img, alt, txt, nome }) => {
  return (
    <div
      className="w-[540px] h-[284px] text-justify relative touch-pan-y select-none bg-white 
    cinza py-[20px] px-[50px] rounded-sm overflow-hidden"
    >
      <Quote
        className="laranja absolute top-[23px] left-[26px] scale-y-[-1] scale-x-[-1] fill-current"
        size={16}
        strokeWidth={1.5}
      />
      <Quote
        className="laranja absolute bottom-[20px] right-[25px] fill-current"
        size={16}
        strokeWidth={1.5}
      />
      <div className="pb-[10px] text-justify">{txt}</div>
      <div className="border-t-[2px] border-[#e3e3e3] pt-[10px] flex items-center cinza flex-row">
        <img
          src={img}
          alt={alt}
          className="block mr-[10px] w-[50px] rounded-full "
        />
        <p>{nome}</p>
      </div>
    </div>
  );
};

export default DepoimentosCard;
