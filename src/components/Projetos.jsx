import { alphavilleImg } from "../utils";
import Linha from "./Linha";
import ProjetoCard from "./ProjetoCard";

const Projetos = () => {
  return (
    <section className="py-[50px]">
      <div className="max-w-[1140px] w-full px-[15px] mx-auto  ">
        <h2 className="cinzaEscuro font-bold text-[28px] mb-[20px] ">
          PROJETOS REALIZADOS <Linha />
        </h2>
        <p className="mb-[20px] cinza ">
          Ao longo da nossa jornada se apresentam clientes de diversos setores.
          Nosso portfólio está repleto de projetos de fachadas, luminárias,
          totens, letreiros, toldos, revestimentos em ACM, portões, plotagem
          veicular, montagens em geral e etc, confira:{" "}
        </p>
        <div className="w-100% relative ">
          <div className="relative overflow-hidden ">
            <div className="w-[1110px] relative">
              <div className="w-[1110px] select-none relative ">
                <div className="py-[20px] px-[10px] gap-[40px] grid grid-cols-3 ">
                  <ProjetoCard
                    img={alphavilleImg}
                    alt={"alpha"}
                    txt={"totens e sinalização"}
                    local={"alphaville"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projetos;
