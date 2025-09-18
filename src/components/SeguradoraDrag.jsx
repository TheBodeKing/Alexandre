import React, { useEffect, useRef } from "react";
import SeguradoraCard from "./SeguradoraCard";
import {
  alphavilleLogoImg,
  analiseLogoImg,
  autoglassLogoImg,
  bahiaLogoImg,
  belasLogoImg,
  belvedreLogoImg,
  casaLogoImg,
  casteloLogoImg,
  cerqueiraLogoImg,
  clameveLogoImg,
  cocaLogoImg,
  colegioLogoImg,
  copLogoImg,
  draLogoImg,
  farmaciaLogoImg,
  fckLogoImg,
  gbarbosaLogoImg,
  gerdauLogoImg,
  indaiaLogoImg,
  ladeLogoImg,
  leoLogoImg,
  maskateLogoImg,
  mirasolLogoImg,
  mrpoloLogoImg,
  mrvLogoImg,
  msmenezesLogoImg,
  nacionalLogoImg,
  oficinaLogoImg,
  oralLogoImg,
  perereLogoImg,
  sbLogoImg,
} from "../utils";

const SeguradoraDrag = () => {
  const conRef = useRef(null);
  const boxRef = useRef(null);
  const isClicked = useRef(false);
  const coords = useRef({
    offsetX: 0,
  });

  useEffect(() => {
    //cheking if the reference exists
    if (!boxRef.current || !conRef.current) return;

    const box = boxRef.current;
    const con = conRef.current;
    const cor = coords.current;

    const centerBox = () => {
      const centerX = (con.clientWidth - box.clientWidth) / 2;
      box.style.left = `${centerX}px`;
    };
    centerBox();

    //when user clicks
    const onMouseDown = (e) => {
      //prevent the right mouse button from clicking
      if (e.button !== 0) return;
      //fires up the boolean variable that tells if it's clicked
      isClicked.current = true;
      box.style.transition = "none";
      cor.offsetX = e.clientX;
      cor.startLeft = box.offsetLeft;
    };

    //when the user stops clicking
    const onMouseUp = (e) => {
      isClicked.current = false;
      box.style.transition = "all 1s ease-out";
      centerBox();
    };

    //when the mouse starts moving
    const onMouseMove = (e) => {
      //only matters if the user clicked, so mouse move only counts if also mouse down
      if (!isClicked.current) return;
      const deltaX = (e.clientX - cor.offsetX) * 0.15;

      const nextX = cor.startLeft + deltaX;

      box.style.left = `${nextX}px`;
    };

    //adding the events to it's respectivbes boxes
    box.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    con.addEventListener("mousemove", onMouseMove);

    //setting the cleanup of the events of said boxes
    const cleanup = () => {
      box.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      con.removeEventListener("mousemove", onMouseMove);
    };
    //triggering the cleanup
    return cleanup;
  }, []);

  return (
    <div
      className="w-[1110px] min-h-[700px] overflow-hidden 
        relative items-center flex rounded-sm z-10 "
      ref={conRef}
    >
      <div
        className="w-[1110px] overflow-hidden min-h-[700px]
       absolute top-0 left-0 touch-manipulation touch-pan-y cursor-pointer
        select-none p-[50px] bg-white z-10 rounded-sm
           flex  justify-center flex-wrap"
        ref={boxRef}
        draggable={false}
      >
        <SeguradoraCard img={alphavilleLogoImg} alt={"alphaville"} />
        <SeguradoraCard img={analiseLogoImg} alt={"alphaville"} />
        <SeguradoraCard img={autoglassLogoImg} alt={"alphaville"} />
        <SeguradoraCard img={bahiaLogoImg} alt={"alphaville"} />
        <SeguradoraCard img={belasLogoImg} alt={"alphaville"} />
        <SeguradoraCard img={belvedreLogoImg} alt={"alphaville"} />
        <SeguradoraCard img={casaLogoImg} alt={"alphaville"} />
        <SeguradoraCard img={casteloLogoImg} alt={"alphaville"} />
        <SeguradoraCard img={cerqueiraLogoImg} alt={"alphaville"} />
        <SeguradoraCard img={clameveLogoImg} alt={"alphaville"} />
        <SeguradoraCard img={cocaLogoImg} alt={"alphaville"} />
        <SeguradoraCard img={colegioLogoImg} alt={"alphaville"} />
        <SeguradoraCard img={copLogoImg} alt={"alphaville"} />
        <SeguradoraCard img={draLogoImg} alt={"alphaville"} />
        <SeguradoraCard img={farmaciaLogoImg} alt={"alphaville"} />
        <SeguradoraCard img={fckLogoImg} alt={"alphaville"} />
        <SeguradoraCard img={gbarbosaLogoImg} alt={"alphaville"} />
        <SeguradoraCard img={gerdauLogoImg} alt={"alphaville"} />
        <SeguradoraCard img={indaiaLogoImg} alt={"alphaville"} />
        <SeguradoraCard img={ladeLogoImg} alt={"alphaville"} />
        <SeguradoraCard img={leoLogoImg} alt={"alphaville"} />
        <SeguradoraCard img={maskateLogoImg} alt={"alphaville"} />
        <SeguradoraCard img={mirasolLogoImg} alt={"alphaville"} />
        <SeguradoraCard img={mrpoloLogoImg} alt={"alphaville"} />
        <SeguradoraCard img={mrvLogoImg} alt={"alphaville"} />
        <SeguradoraCard img={msmenezesLogoImg} alt={"alphaville"} />
        <SeguradoraCard img={nacionalLogoImg} alt={"alphaville"} />
        <SeguradoraCard img={oficinaLogoImg} alt={"alphaville"} />
        <SeguradoraCard img={oralLogoImg} alt={"alphaville"} />
        <SeguradoraCard img={perereLogoImg} alt={"alphaville"} />
        <SeguradoraCard img={sbLogoImg} alt={"alphaville"} />
      </div>
    </div>
  );
};

export default SeguradoraDrag;
