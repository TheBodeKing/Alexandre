import { sobreImg } from "../utils";

const Sobre = () => {
  return (
    <section className="flex flex-col relative h-full w-full items-center py-[50px] px-[100px]">
      <div className="flex flex-row max-w-[1140px] w-full px-[15px] m-auto">
        <img
          src={sobreImg}
          alt="fachada"
          className="w-[370px] h-auto shadow-[0px_0px_10px_1px_#00000054]"
        />
        <div>
          <div>
            <h2>QUEM SOMOS</h2>
            <div className="w-[40px] h-[2px] bg-[#868686]" />
          </div>
          <p>
            A FA Estruturas e Comunicação Visual atua no mercado de Feira de
            Santana e região, inovando na produção e implantação de projetos de
            identidade e comunicação visual.
          </p>
          <p>
            A nossa empresa dispõem de profissionais altamente qualificados e
            equipamentos de última geração, para melhor atender às necessidades
            da sua empresa.{" "}
          </p>
          <p>
            Nos orgulhamos em buscar se aprimorar a cada novo trabalho, sempre
            primando pela qualidade e eficiência{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
