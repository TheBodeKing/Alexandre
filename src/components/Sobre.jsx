import { useEffect, useRef } from "react";
import { sobreImg } from "../utils";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DragB from "./DragB";
import Linha from "./Linha";
import SButton from "./SButton";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const Sobre = () => {
  const imgRef = useRef();
  const txtRef = useRef();
  const rowRef = useRef();
  const boxRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: boxRef.current,
        start: "top bottom", // when section is 80% down from top of viewport
        once: true, // only happens once
      },
    });
    const elements = rowRef.current.children;
    tl.fromTo(
      imgRef.current,
      { y: "100%" },
      { y: 0, duration: 1.5, ease: "power3.out" }
    )
      .fromTo(
        txtRef.current,
        { x: "100%" },
        { x: 0, duration: 1.5, ease: "power3.out" },
        "-=1.5"
      )
      .fromTo(
        elements,
        {
          opacity: 0,
          y: 30,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.3,
          ease: "power2.out",
        },
        "-=1"
      );
  }, []);

  return (
    <section
      className="flex flex-col relative lg:pt-[50px] lg:pb-[100px] pb-[40px] items-center"
      id="sobre"
      ref={boxRef}
    >
      <div className="grid-cols-2 grid-rows-[auto_fit-content(auto)] grid max-w-[1140px] w-full px-[15px] m-auto">
        {/* Imagem */}
        <div
          ref={imgRef}
          className="order-3 lg:order-1 col-span-2 lg:col-span-1"
        >
          <DragB
            img={sobreImg}
            alt={"fachada da loja"}
            classImg={
              "shadow-[0_0_10px_1px_#00000054] w-[370px] absolute h-auto left-1/2 top-0 select-none cursor-grab"
            }
            classBox={"w-[580px] h-[370px]"}
          />
        </div>
        {/* Quem Somos */}
        <div
          className="relative px-[8px] w-full popins cinza order-1 lg:order-2 col-span-2 lg:col-span-1"
          ref={txtRef}
        >
          <h2 className="lg:mt-10 mt-5 text-[22px] lg:text-3xl/tight flex font-bold items-center laranja mb-[20px] gap-4">
            QUEM SOMOS <Linha />
          </h2>
          <p className="text-base ">
            A{" "}
            <span className="font-bold">
              FA Estruturas e Comunicação Visual
            </span>{" "}
            atua no mercado de Feira de Santana e região, inovando na produção e
            implantação de projetos de identidade e comunicação visual.
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
        {/* Texto */}
        <div
          className="col-span-2 order-2 lg:order-3  flex flex-col lg:flex-row w-full"
          ref={rowRef}
        >
          <div className="lg:mt-[30px] flex-1 lg:px-[15px] px-[8px] popins ">
            <h3 className="lg:mt-10 mt-5 lg:text-xl text-[22px] laranja lg:mb-5 mb-[10px] flex items-center gap-4">
              MISSÃO <Linha />
            </h3>
            <p className="cinza text-base">
              Oferecer aos clientes produtos de qualidade, no prazo previsto e
              com competitivos no mercado.
            </p>
          </div>
          <div className="lg:mt-[30px] flex-1 lg:px-[15px] px-[8px] popins ">
            <h3 className="lg:mt-10 mt-5 lg:text-xl text-[22px] laranja lg:mb-5 mb-[10px] flex items-center gap-4">
              VISÃO <Linha />
            </h3>
            <p className="cinza text-base">
              Ser referência neste segmento pela qualidade dos produtos, pela
              excelência no atendimento.
            </p>
          </div>
          <div className="lg:mt-[30px] flex-1 lg:px-[15px] px-[8px] popins ">
            <h3 className="lg:mt-10 mt-5 lg:text-xl text-[22px] laranja lg:mb-5 mb-[10px] flex items-center gap-4">
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
      <div className="lg:mt-[50px] mt-[30px] w-full flex flex-wrap flex-col lg:flex-row items-center justify-center max-w-[100%] relative px-[15px] cinzaEscuro gap-[30px]">
        <SButton txt={"VER SERVIÇOS"} color={"branco"} link={"#servicos"} />
        <SButton txt={"SOLICITAR ORÇAMENTO"} link={"#contato"} />
      </div>
    </section>
  );
};

export default Sobre;
