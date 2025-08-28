import { museImg } from "../utils";
import Linha from "./Linha";

const Servicos = () => {
  return (
    <section className="py-[50px] relative w-full min-h-fit">
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
        <h2 className="text-[22px] cinzaEscuro font-bold relative ">
          COMERCIAIS <Linha />
        </h2>
        <div className="w-full z-10 relative cinzaEscuro box-border">
          <div className="relative over overflow-hidden">
            <div className="w-[1943px] relative touch-manipulation flex flex-row">
              <div className="w-[277.5px] touch-pan-y ">
                <div className="flex flex-col relative gap-[40px] py-[20px] px-[10px] ">
                  <div className="shadow-[0px_0px_10px_1px_#00000054] rounded-sm h-[320px] bg-white ">
                    <div className="h-[156px] ">
                      <img
                        src={museImg}
                        alt="muse"
                        className="w-full rounded-sm"
                      />
                    </div>
                    <div className="p-[20px] flex flex-col ">
                      <h3 className="text-lg mb-[10px] font-medium ">
                        DESENVOLVIMENTO E IDENTIDADE VISUAL{" "}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[277.5px] touch-pan-y ">
                <div className="flex flex-col relative gap-[40px] py-[20px] px-[10px] ">
                  <div className="shadow-[0px_0px_10px_1px_#00000054] rounded-sm h-[320px] bg-white ">
                    <div className="h-[156px] ">
                      <img
                        src={museImg}
                        alt="muse"
                        className="w-full rounded-sm"
                      />
                    </div>
                    <div className="p-[20px] flex flex-col ">
                      <h3 className="text-lg mb-[10px] font-medium ">
                        DESENVOLVIMENTO E IDENTIDADE VISUAL{" "}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[277.5px] touch-pan-y ">
                <div className="flex flex-col relative gap-[40px] py-[20px] px-[10px] ">
                  <div className="shadow-[0px_0px_10px_1px_#00000054] rounded-sm h-[320px] bg-white ">
                    <div className="h-[156px] ">
                      <img
                        src={museImg}
                        alt="muse"
                        className="w-full rounded-sm"
                      />
                    </div>
                    <div className="p-[20px] flex flex-col ">
                      <h3 className="text-lg mb-[10px] font-medium ">
                        DESENVOLVIMENTO E IDENTIDADE VISUAL{" "}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicos;
