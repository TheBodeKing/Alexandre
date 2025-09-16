import { depoimentosbgImg } from "../utils";
import DepoimentosDrag from "./DepoimentosDrag";
import Linha from "./Linha";
import SeguradoraDrag from "./SeguradoraDrag";

const Depoimentos = () => {
  return (
    <section className="pt-[100px] pb-[120px] relative ">
      <img
        src={depoimentosbgImg}
        alt="fundo depoimentos"
        className="absolute object-cover top-0 left-0 z-0"
      />
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
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;
