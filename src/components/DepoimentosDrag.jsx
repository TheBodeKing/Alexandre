import { useEffect, useRef } from "react";
import DepoimentosCard from "./DepoimentosCard";
import {
  casaCardImg,
  cerqueiraCardImg,
  copCardImg,
  msCardImg,
  perereCardImg,
  voxCardImg,
} from "../utils";
import {
  casaCardTxt,
  cerqueiraCardTxt,
  copCardTxt,
  MsCardTxt,
  perereCardTxt,
  voxCardTxt,
} from "../constants";

const DepoimentosDrag = ({ direction, setDirection, setAtEnd, setAtMid }) => {
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

  const meio = () => {
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

  useEffect(() => {
    //cheking if the reference exists
    if (!boxRef.current || !conRef.current) return;

    const box = boxRef.current;
    const con = conRef.current;
    const cor = coords.current;
    const cardWidth = 570;

    const centerBox = () => {
      box.style.left = "0";
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
    };

    //when the user stops clicking
    const onMouseUp = (e) => {
      //tells the boolean variable that the click ended
      isClicked.current = false;
      //updates the last saved position of the cube based on where the mouse was when released
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
    <div
      className="w-full min-h-[284px] overflow-hidden
      relative items-center flex   
      mb-[50px] branco  "
      ref={conRef}
    >
      <div
        className="w-[3420px] overflow-hidden min-h-[284px] 
        absolute top-0 left-0
        touch-manipulation cursor-grab 
        select-none gap-[30px] flex flex-row"
        ref={boxRef}
        draggable={false}
      >
        <DepoimentosCard
          img={voxCardImg}
          alt={"Vox"}
          txt={voxCardTxt}
          nome={"VOX Imagens"}
        />
        <DepoimentosCard
          img={copCardImg}
          alt={"COP"}
          txt={copCardTxt}
          nome={"COP - Centro Odontológico do Povo"}
        />
        <DepoimentosCard
          img={msCardImg}
          alt={"MS"}
          txt={MsCardTxt}
          nome={"MS Menezes"}
        />
        <DepoimentosCard
          img={perereCardImg}
          alt={"Perere"}
          txt={perereCardTxt}
          nome={"Pererê"}
        />
        <DepoimentosCard
          img={casaCardImg}
          alt={"Casa"}
          txt={casaCardTxt}
          nome={"Casa do Pintor"}
        />
        <DepoimentosCard
          img={cerqueiraCardImg}
          alt={"Cerqueira"}
          txt={cerqueiraCardTxt}
          nome={"Cerqueira Home Center"}
        />
      </div>
    </div>
  );
};

export default DepoimentosDrag;
