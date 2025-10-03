import { useEffect, useRef } from "react";
import {
  coberturasImg,
  envelopamentoImg,
  fachadaImg,
  impressaoImg,
  luminososImg,
  museImg,
  totensImg,
} from "../utils";
import DragOwlCard from "./DragOwlCard";

const DragOwl = ({ direction, setDirection, setAtEnd }) => {
  const conRef = useRef(null);
  const boxRef = useRef(null);
  const isClicked = useRef(false);
  const coords = useRef({
    //starting position of the cube
    startX: 0,
    //last position of the cube on mouse up
    lastX: 0,
  });

  const direita = () => {
    if (!boxRef.current) return;
    const box = boxRef.current;

    // move smoothly back to start
    box.style.transition = "left 0.3s ease";
    box.style.left = "-832.5px";

    // cleanup transition after it finishes
    const clearTransition = () => {
      box.style.transition = "";
      box.removeEventListener("transitionend", clearTransition);
    };
    box.addEventListener("transitionend", clearTransition);

    // update the coords so dragging continues correctly
    coords.current.lastX = -832.5;
  };

  const esquerda = () => {
    if (!boxRef.current) return;
    const box = boxRef.current;

    // move smoothly back to start
    box.style.transition = "left 0.3s ease";
    box.style.left = "0px";

    // cleanup transition after it finishes
    const clearTransition = () => {
      box.style.transition = "";
      box.removeEventListener("transitionend", clearTransition);
    };
    box.addEventListener("transitionend", clearTransition);

    // update the coords so dragging continues correctly
    coords.current.lastX = 0;
  };

  useEffect(() => {
    if (!direction) return;

    if (direction === "left") {
      esquerda();
      setDirection(null); // reset after action
    }
    if (direction === "right") {
      direita();
      setDirection(null); // reset after action
    }
  }, [direction]);

  const handlePositionCheck = () => {
    if (!boxRef.current) return;

    const box = boxRef.current;
    const totalWidth = box.scrollWidth; // full width of all cards
    const visibleWidth = box.parentElement.offsetWidth; // width of the container
    const maxLeft = totalWidth - visibleWidth;

    // coords.current.lastX is the offset you’ve applied with "left"
    const currentLeft = Math.abs(coords.current.lastX);

    setAtEnd(currentLeft >= maxLeft - 5);
  };

  useEffect(() => {
    handlePositionCheck();
  }, [coords.current.lastX]);

  useEffect(() => {
    //cheking if the reference exists
    if (!boxRef.current || !conRef.current) return;

    const box = boxRef.current;
    const con = conRef.current;
    const cor = coords.current;
    const cardWidth = 277.5;

    const centerBox = () => {
      box.style.left = 0;
    };
    centerBox();

    const startDrag = (clientX) => {
      isClicked.current = true;
      cor.startX = clientX;
      cor.lastX = box.offsetLeft;
      box.style.transition = "none";
    };

    const endDrag = () => {
      isClicked.current = false;

      let snapped = Math.round(box.offsetLeft / cardWidth) * cardWidth;
      const conW = con.clientWidth;
      const boxW = box.clientWidth;
      const minX = Math.min(0, conW - boxW);
      const maxX = Math.max(0, conW - boxW);

      snapped = Math.min(Math.max(snapped, minX), maxX);

      box.style.transition = "left 0.3s ease";
      box.style.left = `${snapped}px`;

      cor.lastX = snapped;

      const clearTransition = () => {
        box.style.transition = "";
        box.removeEventListener("transitionend", clearTransition);
        handlePositionCheck();
      };
      box.addEventListener("transitionend", clearTransition);
    };

    const moveDrag = (clientX) => {
      if (!isClicked.current) return;

      const nextX = clientX - cor.startX + cor.lastX;

      const conW = con.clientWidth;
      const boxW = box.clientWidth;
      const minX = Math.min(0, conW - boxW);
      const maxX = Math.max(0, conW - boxW);

      const clampedX = Math.min(Math.max(nextX, minX), maxX);
      box.style.left = `${clampedX}px`;
    };

    //when user clicks
    const onMouseDown = (e) => {
      //prevent the right mouse button from clicking
      if (e.button !== 0) return;
      startDrag(e.clientX);
    };

    //when the user stops clicking

    const onMouseUp = () => endDrag();
    const onMouseMove = (e) => moveDrag(e.clientX);

    const onTouchStart = (e) => {
      if (e.touches.length > 1) return; // ignore multi-touch
      startDrag(e.touches[0].clientX);
    };

    const onTouchEnd = () => endDrag();
    const onTouchMove = (e) => {
      if (!isClicked.current) return;
      moveDrag(e.touches[0].clientX);
    };

    //adding the events to it's respectivbes boxes
    box.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    con.addEventListener("mousemove", onMouseMove);

    box.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd);
    con.addEventListener("touchmove", onTouchMove, { passive: false });
    //setting the cleanup of the events of said boxes
    const cleanup = () => {
      box.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      con.removeEventListener("mousemove", onMouseMove);
      box.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
      con.removeEventListener("touchmove", onTouchMove);
    };
    //triggering the cleanup
    return cleanup;
  }, []);

  return (
    <div className="items-center">
      <div
        className="w-full min-h-[360px] relative overflow-hidden"
        ref={conRef}
      >
        <div
          className="absolute cursor-grab select-none"
          ref={boxRef}
          draggable={false}
        >
          <div className="w-[1943px] relative touch-manipulation flex flex-row">
            <DragOwlCard
              img={museImg}
              alt={"Desenvolvimento de identidade visual"}
              txt={"DESENVOLVIMENTO DE IDENTIDADE VISUAL"}
            />
            <DragOwlCard
              img={envelopamentoImg}
              alt={"ENVELOPAMENTO E ADESIVASÃO"}
              txt={"ENVELOPAMENTO E ADESIVASÃO"}
            />
            <DragOwlCard
              img={coberturasImg}
              alt={"COBERTURAS E ESTRUTURAS METALICAS"}
              txt={"COBERTURAS E ESTRUTURAS METALICAS"}
            />
            <DragOwlCard
              img={impressaoImg}
              alt={"IMPRESSÃO DIGITAL"}
              txt={"IMPRESSÃO DIGITAL"}
            />
            <DragOwlCard
              img={totensImg}
              alt={"TOTENS E SINALIZAÇÃO EXTERNA E INTERNA"}
              txt={"TOTENS E SINALIZAÇÃO EXTERNA E INTERNA"}
            />
            <DragOwlCard
              img={fachadaImg}
              alt={"FACHADAS E REVESTIMENTO EM ACM"}
              txt={"FACHADAS E REVESTIMENTO EM ACM"}
            />
            <DragOwlCard
              img={luminososImg}
              alt={"LUMINOSOS E LETRAS EM CHAPA/INOX"}
              txt={"LUMINOSOS E LETRAS EM CHAPA/INOX"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DragOwl;
