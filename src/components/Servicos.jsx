import DragOwl from "./DragOwl";
import Linha from "./Linha";
import SButton from "./SButton";

const Servicos = () => {
  return (
    <section className="py-[50px] relative w-full min-h-fit" id="servicos">
      <div className="max-w-[1140px] w-full px-15 mx-auto ">
        <h2 className="laranja text-[28px] font-bold mb-[20px] ">
          NOSSOS SERVIÇOS
        </h2>
        <p className="mb-[20px] cinza">
          Sempre pesquisando novidades e tendências de mercado, primamos por
          materiais de alta qualidade, desde a matéria prima até aos
          acabamentos. Dispomos de diversos serviços e soluções sob medida,
          confira:{" "}
        </p>
        <h2 className="text-[22px] cinzaEscuro font-bold relative flex items-center gap-4">
          COMERCIAIS <Linha />
        </h2>
        <div className="w-full z-10 relative cinzaEscuro box-border">
          <div className="relative w-full  overflow-hidden ">
            <DragOwl />
          </div>
          <div className="mt-[30px] items-center justify-center flex">
            <button className="group cursor-pointer select-none">
              <span
                className="bg-[#868686] inline-block w-[40px] h-[4px] group-hover:bg-[#000] transition-all
               opacity-50 my-[5px] mx-[7px] rounded-4xl"
              ></span>
            </button>
            <button className="group cursor-pointer select-none">
              <span
                className="bg-[#868686] inline-block w-[40px] h-[4px] group-hover:bg-[#000] transition-all
               opacity-50 my-[5px] mx-[7px] rounded-4xl"
              ></span>
            </button>
          </div>
          <div className="mt-[50px] flex flex-row justify-center gap-[30px]">
            <SButton txt={"PROJETOS CRIADOS"} color={"branco"} />
            <SButton txt={"SOLICITAR ORÇAMENTO"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicos;
