const ProjetoCard = ({ img, alt, txt, local }) => {
  return (
    <div
      className="h-[290px] bg-white shadow-[0_0_10px_1px_#00000054] rounded-sm overflow-hidden
    hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_16px_2px_#00000054]"
    >
      <div className="h-[206px]">
        <a>
          <img
            src={img}
            alt={alt}
            className="h-[206px] w-full object-cover"
            draggable={false}
          />
        </a>
        <div className="p-[20px] flex flex-col uppercase items-center cinzaEscuro mb-[10px] text-lg/tight ">
          <h3 className="mb-[10px] text-center font-medium ">
            <span className="font-bold">{txt}</span>
            <br /> {local}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ProjetoCard;
