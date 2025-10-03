const ProjetoCard = ({ img, alt, txt, local }) => {
  return (
    <div
      className="lg:h-[290px] h-[200px] bg-white shadow-[0_0_10px_1px_#00000054] rounded-sm overflow-hidden
    hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_16px_2px_#00000054]"
    >
      <div className="lg:h-[206px] h-fit">
        <a>
          <img
            src={img}
            alt={alt}
            className="lg:h-[206px] h-[100px] w-full object-cover"
            draggable={false}
          />
        </a>
        <div className="py-[20px] lg:p[10px] flex flex-col uppercase items-center cinzaEscuro lg:px-[10px] lg:text-lg/tight text-[15px]/tight">
          <h3 className="mb-[10px]  text-center font-medium ">
            <span className="font-bold">{txt}</span>
            <br /> {local}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ProjetoCard;
