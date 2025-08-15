import React, { useEffect, useRef } from "react";

const DragA = () => {
  const conRef = useRef(null);
  const boxRef = useRef(null);
  const isClicked = useRef(false);
  const coords = useRef({
    offsetX: 0,
    offsetY: 0,
  });

  useEffect(() => {
    if (!boxRef.current || !conRef.current) return;

    const box = boxRef.current;
    const con = conRef.current;
    const cor = coords.current;

    const centerBox = () => {
      const centerX = (con.clientWidth - box.clientWidth) / 2;
      const centerY = (con.clientHeight - box.clientHeight) / 2;
      box.style.left = `${centerX}px`;
      box.style.top = `${centerY}px`;
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
      box.style.transition = "all 1s ease-out";
      centerBox();
    };

    const onMouseMove = (e) => {
      if (!isClicked.current) return;

      const deltaX = (e.clientX - cor.offsetX) * 0.5;
      const deltaY = (e.clientY - cor.offsetY) * 0.5;

      const nextX = cor.startLeft + deltaX;
      const nextY = cor.startTop + deltaY;

      box.style.top = `${nextY}px`;
      box.style.left = `${nextX}px`;
    };

    box.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    con.addEventListener("mousemove", onMouseMove);

    const cleanup = () => {
      box.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      con.removeEventListener("mousemove", onMouseMove);
    };

    return cleanup;
  }, []);

  return (
    <div className="items-center flex m-auto">
      <div
        className="w-[300px] h-[300px] relative border border-black overflow-hidden m-auto"
        ref={conRef}
      >
        <div
          className="absolute bg-pink-600 h-[60px] w-[60px] cursor-pointer"
          ref={boxRef}
        ></div>
      </div>
    </div>
  );
};

export default DragA;
