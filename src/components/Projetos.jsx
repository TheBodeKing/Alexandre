import { useEffect, useRef } from "react";
import Linha from "./Linha";
import ProjetoDrag from "./ProjetoDrag";
import SButton from "./SButton";
import gsap from "gsap";

const Projetos = () => {
  const proRef = useRef(null);

  useEffect(() => {
    if (!proRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: proRef.current,
        start: "top bottom",
        once: true,
      },
    });

    tl.fromTo(
      proRef.current,
      {
        opacity: 0,
      },
      { opacity: 1, duration: 1.5 }
    );
  }, []);

  return (
    <section className="py-[50px]" id="projetos">
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
        <div ref={proRef}>
          <ProjetoDrag />
        </div>
        <div className="mt-[50px] flex flex-row justify-center gap-[30px]">
          <SButton txt={"ver clientes"} color={"branco"} link={"#clientes"} />
          <SButton txt={"solicitar orçamento"} link={"#contato"} />
        </div>
      </div>
    </section>
  );
};

export default Projetos;
