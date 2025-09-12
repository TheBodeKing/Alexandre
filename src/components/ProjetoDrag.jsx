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

    const onMouseDown = (e) => {
      if (e.button !== 0) return;
      isClicked.current = true;
      box.style.transition = "none";
      cor.offsetX = e.clientX;
      cor.offsetY = e.clientY;
      cor.startLeft = box.offsetLeft;
      cor.startTop = box.offsetTop;
    };

    const onMouseUp = (e) => {
      isClicked.current = false;
      box.style.transition = "all 0.5s ease-out";
      centerBox();
    };

    const onMouseMove = (e) => {
      if (!isClicked.current) return;

      const deltaX = (e.clientX - cor.offsetX) * 0.15;

      const nextX = cor.startLeft + deltaX;

      box.style.left = `${nextX}px`;
    };

    box.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mousemove", onMouseMove);

    const cleanup = () => {
      box.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mousemove", onMouseMove);
    };

    return cleanup;
  }, []);

  return (
    <div className="items-center">
      <div className="w-full relative " ref={conRef}>
        <div className="w-[1110px]  min-h-[1650px] overflow-hidden relative">
          <div
            className="absolute cursor-pointer  select-none"
            ref={boxRef}
            draggable={false}
          >
            <div className="py-[20px] px-[10px] gap-[40px] grid grid-cols-3 w-[1110px]">
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
