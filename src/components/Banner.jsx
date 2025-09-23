import { useEffect, useRef, useState } from "react";
import { bannerBtnList, bannerListImg } from "../constants";
import { gsap } from "gsap";
import BannerTxt from "./BannerTxt";

const Banner = () => {
  //criando as referencias e estados
  const banRef = useRef([]);
  const prevRef = useRef(null);
  const [ativo, setAtivo] = useState(0);
  const [primeiro, setPrimeiro] = useState(true);
  const txtHRef = useRef([]);
  const txtPRef = useRef([]);
  const txtARef = useRef([]);
  const [ativoTxt, setAtivoTxt] = useState(true);
  const [antN, setAntN] = useState(0);
  const scaleTweenRef = useRef(null);
  //função que tira o baner antigo e substitui pelo novo
  const inOut = (antigo, novo, xa, xn) => {
    const tl = gsap.timeline({
      defaults: { duration: 0.6, ease: "power2.inOut" },
    });
    tl.fromTo(antigo, { x: 0 }, { x: xa });
    tl.fromTo(novo, { x: xn }, { x: 0 }, "<");
  };
  //função que substitui o texto antigo e substitui pelo novo
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
  //função que interrompe/reseta a mudança de tamanho do banner
  const resetScale = () => {
    if (scaleTweenRef.current) {
      scaleTweenRef.current.kill();
      scaleTweenRef.current = null;
      gsap.set(banRef.current[ativo], { scale: 1 });
    }
  };
  //função que permite automaticamente a mudança de banner
  const runSlideTimer = () => {
    resetScale();
    scaleTweenRef.current = gsap.to(banRef.current[ativo], {
      scale: 1.1,
      duration: 7,
      onComplete: () => {
        gsap.set(banRef.current[ativo], { scale: 1 });
      },
    });
    const nIndex = (ativo + 1) % bannerListImg.length;
    return setTimeout(() => {
      prevRef.current = banRef.current[ativo];
      setAntN(ativo);
      setAtivoTxt(!ativoTxt);
      setAtivo(nIndex);
    }, 7000);
  };
  //Efeito onde é computado qual banner deve ser substituido pelo novo
  useEffect(() => {
    if (!banRef.current[ativo]) return;
    const timer = runSlideTimer();

    if (primeiro) {
      bannerBtnList.forEach((element) => {
        if (element.id !== ativo) {
          gsap.set(banRef.current[element.id], { x: "100%" });
        }
      });
      setPrimeiro(false);

      return () => clearTimeout(timer);
    }
    if (!prevRef.current) return;

    if (ativo > antN) {
      inOut(prevRef.current, banRef.current[ativo], "-100%", "100%");
    } else {
      inOut(prevRef.current, banRef.current[ativo], "100%", "-100%");
    }

    return () => {
      resetScale();
      clearTimeout(timer);
      if (scaleTweenRef.current) {
        scaleTweenRef.current.kill();
      }
    };
  }, [ativo]);
  //Efetio onde é computado qual texto deve ser substituido pelo novo, de acordo com o banner
  useEffect(() => {
    if (!txtHRef.current || !txtPRef.current || !txtARef.current) return;
    if (txtARef.current[0]) {
      gsap.set(txtARef.current[0], { y: 0 }); // dummy set, just triggers reflow
    }

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
    <section className="relative flex min-h-screen h-[830px] mb-[50px] w-full">
      <div className="w-full overflow-hidden h-[830px] relative">
        {bannerListImg.map(({ img, id }) => (
          <div
            key={id}
            ref={(el) => (banRef.current[id] = el)}
            className="absolute top-0 left-0 h-[830px] w-full"
          >
            {
              <img
                src={img}
                alt="banner"
                className="w-full h-full object-cover"
              />
            }
          </div>
        ))}
      </div>
      <div className="min-h-[600px] w-full absolute top-0 left-0">
        <BannerTxt
          txtARef={txtARef}
          txtPRef={txtPRef}
          txtHRef={txtHRef}
          n={0}
        />
        <BannerTxt
          txtARef={txtARef}
          txtPRef={txtPRef}
          txtHRef={txtHRef}
          n={1}
        />
      </div>

      <div className="absolute flex left-1/2 -translate-x-1/2 bottom-14 gap-3 z-10">
        {bannerBtnList.map(({ id }) => (
          <button
            key={id}
            className={`w-5 h-5 laranjabg cursor-pointer rounded-full
              ${id === ativo ? "border-2 border-white box-border" : ""} `}
            onClick={() => {
              resetScale();
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
    </section>
  );
};

export default Banner;
