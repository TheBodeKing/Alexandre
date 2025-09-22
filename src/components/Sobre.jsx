import { useEffect, useRef } from "react";
import { sobreImg } from "../utils";
import DragB from "./DragB";
import Linha from "./Linha";
import SButton from "./SButton";
import gsap from "gsap";

const Sobre = () => {
  const imgRef = useRef();
  const txtRef = useRef();
  const rowRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      imgRef.current,
      {
        y: "100%",
      },
      {
        y: 0,
        duration: 1.5,
        ease: "power3.out",
      }
    );
    gsap.fromTo(
      txtRef.current,
      {
        x: "100%",
      },
      {
        x: 0,
        duration: 1.5,
        ease: "power3.out",
      }
    );
    gsap.fromTo(
      rowRef.current,
      {
        x: "-100%",
      },
      {
        x: 0,
        duration: 1.5,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section
      className="flex flex-col relative pt-[50px] pb-[100px] "
      id="sobre"
    >
      <div className="flex flex-col max-w-[1140px] w-full px-[15px] m-auto">
        <div className="flex flex-row">
          <div ref={imgRef}>
            <DragB
              img={sobreImg}
              alt={"fachada da loja"}
              classImg={
                "shadow-[0_0_10px_1px_#00000054] w-[370px] absolute h-auto left-1/2 top-0 select-none cursor-grab"
              }
              classBox={"w-[580px] h-[370px]"}
            />
          </div>
          <div
            className="max-w-[50%] relative px-[15px] popins cinza"
            ref={txtRef}
          >
            <h2 className="mt-[40px] text-3xl/tight flex font-bold items-center laranja mb-[20px] gap-4">
              QUEM SOMOS <Linha />
            </h2>
            <p className="text-base ">
              A{" "}
              <span className="font-bold">
                FA Estruturas e Comunicação Visual
              </span>{" "}
              atua no mercado de Feira de Santana e região, inovando na produção
              e implantação de projetos de identidade e comunicação visual.
              <br />
              <br />A nossa empresa dispõem de profissionais altamente
              qualificados e equipamentos de última geração, para melhor atender
              às necessidades da sua empresa.
              <br />
              <br />
              Nos orgulhamos em buscar se aprimorar a cada novo trabalho, sempre
              primando pela qualidade e eficiência{" "}
            </p>
          </div>
        </div>
        <div className="flex flex-row w-full" ref={rowRef}>
          <div className="mt-[30px] flex-1 px-[15px] popins ">
            <h3 className="mt-[40px] text-xl laranja mb-[20px] flex items-center gap-4">
              MISSÃO <Linha />
            </h3>
            <p className="cinza text-base">
              Oferecer aos clientes produtos de qualidade, no prazo previsto e
              com competitivos no mercado.
            </p>
          </div>
          <div className="mt-[30px] flex-1 px-[15px] popins ">
            <h3 className="mt-[40px] text-xl laranja mb-[20px] flex items-center gap-4">
              VISÃO <Linha />
            </h3>
            <p className="cinza text-base">
              Ser referência neste segmento pela qualidade dos produtos, pela
              excelência no atendimento.
            </p>
          </div>
          <div className="mt-[30px] flex-1 px-[15px] popins ">
            <h3 className="mt-[40px] text-xl laranja mb-[20px] flex items-center gap-4">
              VALORES <Linha />
            </h3>
            <p className="cinza text-base">
              Pontualidade: respeito ao prazo de entrega. Credibilidade:
              confiança dos clientes e consumidores em relação à pontualidade e
              qualidade.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-[50px] flex justify-center max-w-[100%] relative w-[100%] px-[15px] cinzaEscuro gap-[30px]">
        <SButton txt={"VER SERVIÇOS"} color={"branco"} />
        <SButton txt={"SOLICITAR ORÇAMENTO"} />
      </div>
    </section>
  );
};

export default Sobre;
