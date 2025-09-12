import { depoimentosbgImg } from "../utils";
import DepoimentosDrag from "./DepoimentosDrag";
import Linha from "./Linha";

const Depoimentos = () => {
  return (
    <section className="pt-[100px] pb-[120px] relative ">
      <img
        src={depoimentosbgImg}
        alt="fundo depoimentos"
        className="absolute object-cover top-0 left-0 z-0"
      />
      <div className="max-w-[1140px] w-full px-[15px] m-auto z-10 relative">
        <h2 className="uppercase branco text-[28px] font-bold mb-[20px] ">
          depoimentos <Linha />
        </h2>
        <DepoimentosDrag />
      </div>
    </section>
  );
};

export default Depoimentos;
