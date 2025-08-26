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
      </div>
    </section>
  );
};

export default Servicos;
