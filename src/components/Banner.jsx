import { useEffect, useRef, useState } from "react";
import { bannerBtnList, bannerListImg } from "../constants";
import { gsap } from "gsap";

const Banner = () => {
  const banRef = useRef([]);
  const prevRef = useRef(null);
  const [ativo, setAtivo] = useState(0);
  const [primeiro, setPrimeiro] = useState(true);
  const txtHRef = useRef([]);
  const txtPRef = useRef([]);
  const txtARef = useRef([]);
  const [ativoTxt, setAtivoTxt] = useState(true);
  const [antN, setAntN] = useState(0);

  const inOut = (antigo, novo, xa, xn) => {
    const tl = gsap.timeline({
      defaults: { duration: 0.6, ease: "power2.inOut" },
    });
    tl.fromTo(antigo, { x: 0 }, { x: xa });
    tl.fromTo(novo, { x: xn }, { x: 0 }, "<");
  };

  const txtInOut = (antigo, novo, dh, dp) => {
    gsap.killTweensOf([antigo, novo]);
    const tl = gsap.timeline({
      defaults: { ease: "power2.inOut", duration: dh },
    });

    tl.to(antigo, {
      x: "100vw",
      onComplete: () => {
        gsap.set(antigo, { display: "none", zIndex: 0, pointerEvents: "none" });
      },
    });
    gsap.set(novo, { display: dp, zIndex: 100, pointerEvents: "auto" });
    tl.fromTo(novo, { x: "100vw" }, { x: 0 }, "<");
  };

  const runSlideTimer = () => {
    const nIndex = (ativo + 1) % bannerListImg.length;
    return setTimeout(() => {
      prevRef.current = banRef.current[ativo];
      setAntN(ativo);
      setAtivoTxt(!ativoTxt);
      setAtivo(nIndex);
    }, 7000);
  };

  useEffect(() => {
    if (!banRef.current[ativo]) return;

    if (primeiro) {
      bannerBtnList.forEach((element) => {
        if (element.id !== ativo) {
          gsap.set(banRef.current[element.id], { x: "100%" });
        }
      });
      setPrimeiro(false);
      const timer = runSlideTimer();
      return () => clearTimeout(timer);
    }
    if (!prevRef.current) return;

    if (ativo > antN) {
      inOut(prevRef.current, banRef.current[ativo], "-100%", "100%");
    } else {
      inOut(prevRef.current, banRef.current[ativo], "100%", "-100%");
    }

    const timer = runSlideTimer();

    return () => clearTimeout(timer);
  }, [ativo]);

  useEffect(() => {
    if (!txtHRef.current || !txtPRef.current || !txtARef.current) return;

    if (primeiro) {
      gsap.set(txtHRef.current[1], {
        x: "100vw",
        display: "none",
        zIndex: 0,
        pointerEvents: "none",
      });
      gsap.set(txtPRef.current[1], {
        x: "100vw",
        display: "none",
        zIndex: 0,
        pointerEvents: "none",
      });
      gsap.set(txtARef.current[1], {
        x: "100vw",
        display: "none",
        zIndex: 0,
        pointerEvents: "none",
      });

      return;
    }

    if (ativoTxt) {
      txtInOut(txtHRef.current[1], txtHRef.current[0], 1, "block");
      txtInOut(txtPRef.current[1], txtPRef.current[0], 1.2, "block");
      txtInOut(txtARef.current[1], txtARef.current[0], 1.4, "inline-block");
    } else {
      txtInOut(txtHRef.current[0], txtHRef.current[1], 1, "block");
      txtInOut(txtPRef.current[0], txtPRef.current[1], 1.2, "block");
      txtInOut(txtARef.current[0], txtARef.current[1], 1.4, "inline-block");
    }
  }, [ativoTxt]);

  return (
    <section className="relative flex min-h-screen h-[827px] w-full popins">
      <div>
        {bannerListImg.map(({ img, id }) => (
          <div
            key={id}
            ref={(el) => (banRef.current[id] = el)}
            className="absolute top-0 left-0"
          >
            {<img src={img} alt="banner" className="min-h-screen h-[827px]" />}
          </div>
        ))}
      </div>
      <div className="absolute flex left-1/2 -translate-x-1/2 bottom-14 gap-3 z-10">
        {bannerBtnList.map(({ id }) => (
          <button
            key={id}
            className={`w-5 h-5 laranjabg cursor-pointer rounded-full
              ${id === ativo ? "border-2 border-white box-border" : ""} `}
            onClick={() => {
              prevRef.current = banRef.current[ativo];
              setAntN(ativo);
              setAtivo(id);
              if (id !== ativo) {
                setAtivoTxt(!ativoTxt);
              }
            }}
          />
        ))}
      </div>
      <div>
        <div className="absolute top-[40%] branco left-30 ">
          <h1
            className="max-w-[21ch] text-4xl/12"
            ref={(el) => (txtHRef.current[0] = el)}
          >
            ESTRUTURAS E <span className="font-bold">COMUNICAÇÃO VISUAL</span>
          </h1>
          <p
            className="max-w-[48ch] text-left mt-[20px] mb-[10px] text-base/6 font-medium"
            ref={(el) => (txtPRef.current[0] = el)}
          >
            Nos orgulhamos em buscar se aprimorar a cada novo trabalho, sempre
            primando pela <span className="font-bold">qualidade</span>,{" "}
            <span className="font-bold">eficiencia</span>,{" "}
            <span className="font-bold">prazo</span> previstos{" "}
            <span className="font-bold">preços</span> competitivos
          </p>
          <a
            ref={(el) => (txtARef.current[0] = el)}
            className="inline-block py-2 px-7 mt-[20px] bg-gradient-to-r from-[#ef6c46] to-[#fbaf5a]
         rounded-sm shadow-[0_0_22px_3px_rgba(241,106,65,1)] font-bold cursor-pointer"
            onMouseEnter={(e) =>
              gsap.to(e.currentTarget, { scale: 1.05, duration: 0.2 })
            }
            onMouseLeave={(e) =>
              gsap.to(e.currentTarget, { scale: 1, duration: 0.2 })
            }
          >
            SOBRE A FA ESTRUTURAS
          </a>
        </div>
        {/*copia*/}
        <div className="absolute top-[40%] branco left-30">
          <h1
            className="max-w-[21ch] text-4xl/12"
            ref={(el) => (txtHRef.current[1] = el)}
          >
            ESTRUTURAS E <span className="font-bold">COMUNICAÇÃO VISUAL</span>
          </h1>
          <p
            ref={(el) => (txtPRef.current[1] = el)}
            className="max-w-[48ch] text-left mt-[20px] mb-[10px] text-base/6 font-medium"
          >
            Nos orgulhamos em buscar se aprimorar a cada novo trabalho, sempre
            primando pela <span className="font-bold">qualidade</span>,{" "}
            <span className="font-bold">eficiencia</span>,{" "}
            <span className="font-bold">prazo</span> previstos{" "}
            <span className="font-bold">preços</span> competitivos
          </p>
          <a
            ref={(el) => (txtARef.current[1] = el)}
            className="inline-block py-2 px-7 mt-[20px] bg-gradient-to-r from-[#ef6c46] to-[#fbaf5a]
         rounded-sm shadow-[0_0_22px_3px_rgba(241,106,65,1)] font-bold cursor-pointer"
            onMouseEnter={(e) =>
              gsap.to(e.currentTarget, { scale: 1.05, duration: 0.2 })
            }
            onMouseLeave={(e) =>
              gsap.to(e.currentTarget, { scale: 1, duration: 0.2 })
            }
          >
            SOBRE A FA ESTRUTURAS
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
