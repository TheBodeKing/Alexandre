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

    //when user clicks
    const onMouseDown = (e) => {
      //prevent the right mouse button from clicking
      if (e.button !== 0) return;
      //fires up the boolean variable that tells if it's clicked
      isClicked.current = true;
      //updates the current position of the cube based on the position of the mouse
      cor.startX = e.clientX;

      // also save the current box position!
      cor.lastX = box.offsetLeft;

      // disable transition while dragging
      box.style.transition = "none";
    };

    //when the user stops clicking
    const onMouseUp = (e) => {
      //tells the boolean variable that the click ended
      isClicked.current = false;

      // Round the current offsetLeft to the nearest "card slot"
      let snapped = Math.round(box.offsetLeft / cardWidth) * cardWidth;
      // Respect the container boundaries (so it doesn’t slide out of view)
      const conW = con.clientWidth;
      const boxW = box.clientWidth;
      const minX = Math.min(0, conW - boxW);
      const maxX = Math.max(0, conW - boxW);

      // Clamp snapped value
      snapped = Math.min(Math.max(snapped, minX), maxX);

      // Move box to snapped position
      box.style.left = `${snapped}px`;

      // re-enable smooth transition only for snap
      box.style.transition = "left 0.3s ease";
      box.style.left = `${snapped}px`;

      // Update lastX for correct drag math next time
      cor.lastX = snapped;

      const clearTransition = () => {
        boxRef.current.style.transition = "";
        boxRef.current.removeEventListener("transitionend", clearTransition);

        //update state once the box has finished moving
        handlePositionCheck();
      };

      boxRef.current.addEventListener("transitionend", clearTransition);
      handlePositionCheck();
    };

    //when the mouse starts moving
    const onMouseMove = (e) => {
      //only matters if the user clicked, so mouse move only counts if also mouse down
      if (!isClicked.current) return;

      // calculate new position: current mouse delta + last saved box position
      const nextX = e.clientX - cor.startX + cor.lastX;

      const conW = con.clientWidth;
      const boxW = box.clientWidth;
      // If box is wider, minX is negative and maxX is 0.
      // If box is narrower, minX is 0 and maxX is positive.
      const minX = Math.min(0, conW - boxW);
      const maxX = Math.max(0, conW - boxW);

      // clamp value
      const clampedX = Math.min(Math.max(nextX, minX), maxX);

      // update the box position on screen
      box.style.left = `${clampedX}px`;
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
