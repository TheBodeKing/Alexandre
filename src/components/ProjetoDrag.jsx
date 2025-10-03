import React, { useEffect, useRef } from "react";
import {
  acaiImg,
  alphavilleImg,
  avessoImg,
  bragroImg,
  brasilgasImg,
  chiquinhoImg,
  construpisoImg,
  jatobaImg,
  leoImg,
  mundialImg,
  pergoladoImg,
  pirelliImg,
  voxImg,
} from "../utils";

import ProjetoCard from "./ProjetoCard";

const ProjetoDrag = () => {
  const conRef = useRef(null);
  const boxRef = useRef(null);
  const isClicked = useRef(false);
  const coords = useRef({
    offsetX: 0,
    startLeft: 0,
  });

  useEffect(() => {
    if (!boxRef.current || !conRef.current) return;

    const box = boxRef.current;
    const con = conRef.current;
    const cor = coords.current;

    const centerBox = () => {
      const centerX = (con.clientWidth - box.clientWidth) / 2;
      box.style.left = `${centerX}px`;
    };

    centerBox();

    // ===== MOUSE HANDLERS =====
    const onMouseDown = (e) => {
      if (e.button !== 0) return;
      isClicked.current = true;
      box.style.transition = "none";
      cor.offsetX = e.clientX;
      cor.startLeft = box.offsetLeft;
    };

    const onMouseMove = (e) => {
      if (!isClicked.current) return;
      const deltaX = (e.clientX - cor.offsetX) * 0.15;
      box.style.left = `${cor.startLeft + deltaX}px`;
    };

    const onMouseUp = () => {
      if (!isClicked.current) return;
      isClicked.current = false;
      box.style.transition = "all 0.5s ease-out";
      centerBox();
    };

    // ===== TOUCH HANDLERS =====
    const onTouchStart = (e) => {
      isClicked.current = true;
      box.style.transition = "none";
      cor.offsetX = e.touches[0].clientX;
      cor.startLeft = box.offsetLeft;
    };

    const onTouchMove = (e) => {
      if (!isClicked.current) return;
      const deltaX = (e.touches[0].clientX - cor.offsetX) * 0.15;
      box.style.left = `${cor.startLeft + deltaX}px`;
    };

    const onTouchEnd = () => {
      if (!isClicked.current) return;
      isClicked.current = false;
      box.style.transition = "all 0.5s ease-out";
      centerBox();
    };

    // ===== ADD LISTENERS =====
    box.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mousemove", onMouseMove);

    box.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onTouchEnd);

    // ===== CLEANUP =====
    return () => {
      box.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mousemove", onMouseMove);

      box.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  return (
    <div className="items-center">
      <div className="w-full relative " ref={conRef}>
        <div className="lg:w-[1110px] w-full min-h-[1650px] overflow-hidden relative">
          <div
            className="absolute cursor-pointer select-none"
            ref={boxRef}
            draggable={false}
          >
            <div className="lg:py-[20px] pb-[10px] lg:px-[10px] lg:gap-10 gap-5 grid lg:grid-cols-3 grid-cols-2 lg:w-[1110px] w-full">
              <ProjetoCard
                img={alphavilleImg}
                alt={"alpha"}
                txt={"totens e sinalização"}
                local={"alphaville"}
              />
              <ProjetoCard
                img={bragroImg}
                alt={"bragro"}
                txt={"fachada"}
                local={"br agro"}
              />
              <ProjetoCard
                img={jatobaImg}
                alt={"jatoba"}
                txt={"fachada"}
                local={"jatobá"}
              />
              <ProjetoCard
                img={mundialImg}
                alt={"mundial"}
                txt={"fachada"}
                local={"mundial pisos e blocos"}
              />
              <ProjetoCard
                img={brasilgasImg}
                alt={"brasilgas"}
                txt={"fachada"}
                local={"brasil gás"}
              />
              <ProjetoCard
                img={pirelliImg}
                alt={"pirelli"}
                txt={"toten"}
                local={"pirelli"}
              />
              <ProjetoCard
                img={construpisoImg}
                alt={"construpiso "}
                txt={"fachada"}
                local={"construpiso"}
              />
              <ProjetoCard
                img={avessoImg}
                alt={"aoavesso"}
                txt={"fachada"}
                local={"ao avesso"}
              />
              <ProjetoCard
                img={pergoladoImg}
                alt={"pergolado"}
                txt={"pergolado"}
                local={"pererê"}
              />
              <ProjetoCard
                img={acaiImg}
                alt={"açai fruit show"}
                txt={"fachada"}
                local={"açai fruit show"}
              />
              <ProjetoCard
                img={leoImg}
                alt={"leo"}
                txt={"fachada"}
                local={"léo"}
              />
              <ProjetoCard
                img={voxImg}
                alt={"vox"}
                txt={"letras em chapa"}
                local={"vox imagem"}
              />
              <ProjetoCard
                img={chiquinhoImg}
                alt={"chiquinho"}
                txt={"toldo"}
                local={"chiquinho sorvetes"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjetoDrag;
