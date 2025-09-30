import { depoimentosbgImg } from "../utils";
import DepoimentosDrag from "./DepoimentosDrag";
import Linha from "./Linha";
import SeguradoraDrag from "./SeguradoraDrag";
import SButton from "./SButton";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Depoimentos = () => {
  const [direction, setDirection] = useState("left");
  const [btnAtv, setBtnAtv] = useState("left");
  const depRef = useRef();
  const segRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: depRef.current,
        start: "top bottom",
        once: true,
      },
    });

    tl.fromTo(
      depRef.current,
      {
        x: "-100%",
      },
      {
        x: 0,
        duration: 1,
      }
    ).fromTo(
      segRef.current,
      {
        y: "100%",
      },
      {
        y: 0,
        duration: 1,
      },
      "-=1"
    );
  }, []);

  return (
    <section
      className={`pt-[100px] pb-[120px] relative bg-cover bg-center bg-fixed`}
      style={{ backgroundImage: `url(${depoimentosbgImg})` }}
      id="depoimentos"
    >
      <div className="max-w-[1140px] w-full px-[15px] m-auto z-10 relative">
        <h2 className="uppercase branco text-[28px] font-bold mb-[20px] flex items-center gap-4">
          depoimentos <Linha />
        </h2>
        <div ref={depRef}>
          <DepoimentosDrag
            direction={direction}
            setDirection={setDirection}
            setBtnAtv={setBtnAtv}
          />
        </div>
        <div className="mt-[30px] items-center justify-center flex z-10">
          <button
            className="group cursor-pointer select-none"
            onClick={() => {
              setDirection("left");
              setBtnAtv("left");
            }}
          >
            <span
              className={`bg-[#db5733] inline-block w-[40px] h-[4px] group-hover:opacity-100 transition-all
                my-[5px] mx-[7px] rounded-4xl ${
                  btnAtv === "left" ? "opacity-100" : "opacity-50"
                }`}
            ></span>
          </button>
          <button
            className="group cursor-pointer select-none"
            onClick={() => {
              setDirection("mid");
              setBtnAtv("mid");
            }}
          >
            <span
              className={` inline-block w-[40px] h-[4px] group-hover:opacity-100 transition-all bg-[#db5733]
                my-[5px] mx-[7px] rounded-4xl ${
                  btnAtv === "mid" ? "opacity-100" : "opacity-50"
                }`}
            ></span>
          </button>
          <button
            className="group cursor-pointer select-none"
            onClick={() => {
              setDirection("right");
              setBtnAtv("right");
            }}
          >
            <span
              className={` inline-block w-[40px] h-[4px] group-hover:opacity-100 transition-all bg-[#db5733]
               my-[5px] mx-[7px] rounded-4xl ${
                 btnAtv === "right" ? "opacity-100" : "opacity-50"
               }`}
            ></span>
          </button>
        </div>
        <div className="z-10" id="clientes">
          <h2 className="branco text-[28px] font-bold mb-[20px] flex items-center gap-4">
            CLIENTES <Linha />
          </h2>
          <div className="h-fit w-fit overflow-hidden">
            <div ref={segRef}>
              <SeguradoraDrag />
            </div>
          </div>
          <div className="mt-[50px] flex justify-center">
            <SButton txt={"solicitar orçamento"} link={"#contato"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;
