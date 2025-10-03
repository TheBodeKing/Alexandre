import React, { useEffect, useRef } from "react";

const DragB = ({ img, alt, classImg, classBox }) => {
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
      box.style.transition = "all 1s ease-out";
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
    <div className="items-center flex lg:m-auto mt-[30px] px-[15px]">
      <div
        className={`${classBox} relative  overflow-hidden m-auto`}
        ref={conRef}
      >
        <img
          ref={boxRef}
          src={img}
          alt={alt}
          draggable={false}
          className={classImg}
        />
      </div>
    </div>
  );
};

export default DragB;
