import {
  barraImg,
  equipeImg,
  experienciaImg,
  projetosImg,
  qualidadeImg,
  solucoesImg,
} from "../utils";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

const Vantagens = () => {
  const conRef = useRef();
  const boxRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: conRef.current,
        start: "top bottom",
        once: true,
      },
    });
    tl.fromTo(
      boxRef.current,
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
      className="lg:py-7 pt-7 relative w-full mb-[30px] branco text-center"
      ref={conRef}
      id="vantagens"
    >
      <img
        src={barraImg}
        alt="imagem de fundo"
        className="absolute top-0 left-0 h-full w-full object-cover"
      />
      <div
        className="max-w-[1140px] w-full px-[15px] mx-auto relative flex flex-wrap lg:flex-nowrap flex-row justify-around "
        ref={boxRef}
      >
        <div
          className="items-center relative w-[250px] flex flex-col justify-center mb-[30px] 
    basis-1/2 shrink-0 grow-0 lg:mb-0 lg:basis-auto lg:shrink lg:grow"
        >
          <img
            src={experienciaImg}
            alt="experiencia"
            className="h-[50px] w-auto  mb-[15px] "
          />
          <p className="leading-[20px] relative">
            MAIS DE 13 ANOS <br />
            <span className="font-bold">DE EXPERIÊNCIA</span>
            <span className="absolute lg:block hidden w-[100px] h-[5px] left-1/2 -translate-x-1/2 bottom-[-28px] rounded-sm laranjabg" />
          </p>
        </div>
        <div
          className="items-center relative w-[250px] flex flex-col justify-center mb-[30px] 
    basis-1/2 shrink-0 grow-0 lg:mb-0 lg:basis-auto lg:shrink lg:grow"
        >
          <img
            src={projetosImg}
            alt="experiencia"
            className="h-[50px] w-auto  mb-[15px] "
          />
          <p className="leading-[20px] relative">
            PROJETOS <br />
            <span className="font-bold">PERSONALIZADOS</span>
            <span className="absolute lg:block hidden w-[100px] h-[5px] left-1/2 -translate-x-1/2 bottom-[-28px] rounded-sm laranjabg" />
          </p>
        </div>
        <div
          className="items-center relative w-[250px] flex flex-col justify-center mb-[30px] 
    basis-1/2 shrink-0 grow-0 lg:mb-0 lg:basis-auto lg:shrink lg:grow"
        >
          <img
            src={qualidadeImg}
            alt="experiencia"
            className="h-[50px] w-auto  mb-[15px] "
          />
          <p className="leading-[20px] relative">
            MATERIAIS <br />
            <span className="font-bold">DE ALTA QUALIDADE</span>
            <span className="absolute lg:block hidden w-[100px] h-[5px] left-1/2 -translate-x-1/2 bottom-[-28px] rounded-sm laranjabg" />
          </p>
        </div>
        <div
          className="items-center relative w-[250px] flex flex-col justify-center mb-[30px] 
    basis-1/2 shrink-0 grow-0 lg:mb-0 lg:basis-auto lg:shrink lg:grow"
        >
          <img
            src={equipeImg}
            alt="experiencia"
            className="h-[50px] w-auto  mb-[15px] "
          />
          <p className="leading-[20px] relative">
            EQUIPE <br />
            <span className="font-bold">QUALIDADE</span>
            <span className="absolute lg:block hidden w-[100px] h-[5px] left-1/2 -translate-x-1/2 bottom-[-28px] rounded-sm laranjabg" />
          </p>
        </div>
        <div
          className="items-center relative w-[250px] flex flex-col justify-center mb-[30px] 
    basis-1/2 shrink-0 grow-0 lg:mb-0 lg:basis-auto lg:shrink lg:grow"
        >
          <img
            src={solucoesImg}
            alt="experiencia"
            className="h-[50px] w-auto  mb-[15px] "
          />
          <p className="leading-[20px] relative">
            SOLUÇÕES <br />
            <span className="font-bold">CRIATIVAS</span>
            <span className="absolute w-[100px] h-[5px] left-1/2 -translate-x-1/2 bottom-[-28px] rounded-sm laranjabg lg:block hidden" />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Vantagens;
