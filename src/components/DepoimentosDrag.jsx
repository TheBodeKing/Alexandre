import { useEffect, useRef } from "react";
import DepoimentosCard from "./DepoimentosCard";

const DepoimentosDrag = () => {
  const conRef = useRef(null);
  const boxRef = useRef(null);
  const isClicked = useRef(false);
  const coords = useRef({
    //starting position of the cube
    startX: 0,
    //last position of the cube on mouse up
    lastX: 0,
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
      cor.lastX = box.offsetLeft;
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
      className="items-center flex w-full mb-[50px] branco relative"
      ref={conRef}
    >
      <div
        className="w-[3420px] overflow-hidden min-h-[284px] absolute top-0 left-0
        touch-manipulation cursor-pointer select-none gap-[30px] flex flex-row"
        ref={boxRef}
        draggable={false}
      >
        <DepoimentosCard />
      </div>
    </div>
  );
};

export default DepoimentosDrag;
