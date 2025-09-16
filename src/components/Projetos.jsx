import Linha from "./Linha";
import ProjetoDrag from "./ProjetoDrag";
import SButton from "./SButton";

const Projetos = () => {
  return (
    <section className="py-[50px]">
      <div className="max-w-[1140px] w-full px-[15px] mx-auto  ">
        <h2 className="cinzaEscuro font-bold text-[28px] mb-[20px] flex items-center gap-4 ">
          PROJETOS REALIZADOS <Linha />
        </h2>
        <p className="mb-[20px] cinza ">
          Ao longo da nossa jornada se apresentam clientes de diversos setores.
          Nosso portfólio está repleto de projetos de fachadas, luminárias,
          totens, letreiros, toldos, revestimentos em ACM, portões, plotagem
          veicular, montagens em geral e etc, confira:{" "}
        </p>
        <ProjetoDrag />
        <div className="mt-[50px] flex flex-row justify-center gap-[30px]">
          <SButton txt={"ver clientes"} color={"branco"} />
          <SButton txt={"solicitar orçamento"} />
        </div>
      </div>
    </section>
  );
};

export default Projetos;
