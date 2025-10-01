import SButton from "./SButton";

const BannerTxt = ({ txtHRef, txtPRef, txtARef, n }) => {
  return (
    <div className="absolute top-[56%] w-full text-white  ">
      <div className="max-w-[1140px] w-full px-[15px] mx-auto ">
        <h1
          className="lg:max-w-[21ch] max-w-[15ch] lg:text-4xl/[45px] text-[29px]/[36px] left-0 relative "
          ref={(el) => (txtHRef.current[n] = el)}
        >
          ESTRUTURAS E <span className="font-bold">COMUNICAÇÃO VISUAL</span>
        </h1>
        <p
          className="lg:max-w-[48ch] max-w-[35ch] text-left mt-5 mb-[10px] lg:text-base text-[13px] font-medium"
          ref={(el) => (txtPRef.current[n] = el)}
        >
          Nos orgulhamos em buscar se aprimorar a cada novo trabalho, sempre
          primando pela <span className="font-bold">qualidade</span>,{" "}
          <span className="font-bold">eficiencia</span>,{" "}
          <span className="font-bold">prazo</span> previsto e{" "}
          <span className="font-bold">preços</span> competitivos
        </p>
        <div
          ref={(el) => (txtARef.current[n] = el)}
          className="inline-block mt-6"
        >
          <SButton txt={"sobre a fa estruturas"} link={"#sobre"} />
        </div>
      </div>
    </div>
  );
};

export default BannerTxt;
