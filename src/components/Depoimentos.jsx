import { depoimentosbgImg } from "../utils";
import DepoimentosDrag from "./DepoimentosDrag";
import Linha from "./Linha";
import SeguradoraDrag from "./SeguradoraDrag";
import SButton from "./SButton";

const Depoimentos = () => {
  return (
    <section
      className={`pt-[100px] pb-[120px] relative bg-cover bg-center bg-fixed`}
      style={{ backgroundImage: `url(${depoimentosbgImg})` }}
    >
      <div className="max-w-[1140px] w-full px-[15px] m-auto z-10 relative">
        <h2 className="uppercase branco text-[28px] font-bold mb-[20px] flex items-center gap-4">
          depoimentos <Linha />
        </h2>
        <DepoimentosDrag />
        <div className="mt-[30px] items-center justify-center flex z-10">
          <button className="group cursor-pointer select-none">
            <span
              className="bg-[#db5733] inline-block w-[40px] h-[4px] group-hover:opacity-100 transition-all
               opacity-50 my-[5px] mx-[7px] rounded-4xl"
            ></span>
          </button>
          <button className="group cursor-pointer select-none">
            <span
              className="bg-[#db5733] inline-block w-[40px] h-[4px] group-hover:opacity-100 transition-all
               opacity-50 my-[5px] mx-[7px] rounded-4xl"
            ></span>
          </button>
          <button className="group cursor-pointer select-none">
            <span
              className="bg-[#db5733] inline-block w-[40px] h-[4px] group-hover:opacity-100 transition-all
               opacity-50 my-[5px] mx-[7px] rounded-4xl"
            ></span>
          </button>
        </div>
        <div className="z-10">
          <h2 className="branco text-[28px] font-bold mb-[20px] flex items-center gap-4">
            CLIENTES <Linha />
          </h2>
          <SeguradoraDrag />
          <div className="mt-[50px] flex justify-center">
            <SButton txt={"solicitar orçamento"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;
