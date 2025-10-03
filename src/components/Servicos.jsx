import DragOwl from "./DragOwl";
import Linha from "./Linha";
import SButton from "./SButton";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Servicos = () => {
  const [direction, setDirection] = useState("left");
  const [atEnd, setAtEnd] = useState(false);

  const owlRef = useRef(null);

  useEffect(() => {
    if (!owlRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: owlRef.current,
        start: "top bottom",
        once: true,
      },
    });

    tl.fromTo(
      owlRef.current,
      {
        opacity: 0,
      },
      { opacity: 1, duration: 1.5 }
    );
  }, []);

  return (
    <section
      className="lg:py-[50px] lg:pb-0 pb-10 block relative w-full min-h-fit"
      id="servicos"
    >
      <div className="max-w-[1140px] w-full px-[15px] mx-auto ">
        <h2 className="laranja lg:text-[28px] text-[22px] font-bold mb-5 flex items-center gap-4 ">
          NOSSOS SERVIÇOS <Linha />
        </h2>
        <p className="mb-[20px] cinza">
          Sempre pesquisando novidades e tendências de mercado, primamos por
          materiais de alta qualidade, desde a matéria prima até aos
          acabamentos. Dispomos de diversos serviços e soluções sob medida,
          confira:{" "}
        </p>
        <h2 className="text-[22px] cinzaEscuro font-bold relative flex items-center gap-4">
          COMERCIAIS <Linha />
        </h2>
        <div className="w-full z-10 relative cinzaEscuro box-border">
          <div className="relative w-full overflow-hidden " ref={owlRef}>
            <DragOwl
              direction={direction}
              setDirection={setDirection}
              setAtEnd={setAtEnd}
            />
          </div>
          <div className="mt-[30px] items-center justify-center flex">
            <button
              className="group cursor-pointer select-none"
              onClick={() => {
                setDirection("left");
              }}
            >
              <span
                className={` inline-block w-[40px] h-[4px] group-hover:bg-[#000] transition-all
               opacity-50 my-[5px] mx-[7px] rounded-4xl ${
                 atEnd ? "bg-[#868686]" : "bg-[#000]"
               }`}
              ></span>
            </button>
            <button
              className="group cursor-pointer select-none"
              onClick={() => {
                setDirection("right");
              }}
            >
              <span
                className={` inline-block w-[40px] h-[4px] group-hover:bg-[#000] transition-all
               opacity-50 my-[5px] mx-[7px] rounded-4xl ${
                 atEnd ? "bg-[#000]" : "bg-[#868686]"
               }`}
              ></span>
            </button>
          </div>
          <div className="lg:mt-[50px] mt-[30px] flex-wrap items-center flex lg:flex-row flex-col justify-center gap-[30px]">
            <SButton
              txt={"PROJETOS CRIADOS"}
              color={"branco"}
              link={"#projetos"}
            />
            <SButton txt={"SOLICITAR ORÇAMENTO"} link={"#contato"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicos;
