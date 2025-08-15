import React, { useEffect, useRef } from "react";

const Drag = () => {
  const conRef = useRef(null);
  const boxRef = useRef(null);
  const isClicked = useRef(false);
  const coords = useRef({ startX: 0, startY: 0, lastX: 0, lastY: 0 });

  useEffect(() => {
    if (!boxRef.current || !conRef.current) return;

    const box = boxRef.current;
    const con = conRef.current;
    const cor = coords.current;

    const onMouseDown = (e) => {
      if (e.button !== 0) return;
      isClicked.current = true;
      cor.startX = e.clientX;
      cor.startY = e.clientY;
    };

    const onMouseUp = (e) => {
      isClicked.current = false;
      cor.lastX = box.offsetLeft;
      cor.lastY = box.offsetTop;
    };

    const onMouseMove = (e) => {
      if (!isClicked.current) return;

      const nextX = e.clientX - cor.startX + cor.lastX;
      const nextY = e.clientY - cor.startY + cor.lastY;

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
    <div className="items-center">
      <div
        className="w-[800px] h-[800px] relative border border-black overflow-hidden"
        ref={conRef}
      >
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 bg-pink-600 h-[60px] w-[60px] cursor-pointer"
          ref={boxRef}
        ></div>
      </div>
    </div>
  );
};

export default Drag;
