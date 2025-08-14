import { useRef, useState, useEffect } from "react";
import { sobreImg } from "../utils";

const Container = () => {
  const containerRef = useRef(null);
  const imgRef = useRef(null);

  const [offsetX, setOffsetX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const startOffset = useRef(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    startX.current = e.clientX;
    startOffset.current = offsetX;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const container = containerRef.current;
    const img = imgRef.current;
    if (!container || !img) return;

    const dx = e.clientX - startX.current;
    let newOffset = startOffset.current + dx;

    const maxOffset = (container.offsetWidth - img.offsetWidth) / 2;
    const minOffset = -maxOffset;

    newOffset = Math.max(minOffset, Math.min(maxOffset, newOffset));
    setOffsetX(newOffset);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setOffsetX(0);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      className="w-[400px] h-[300px] overflow-hidden border relative p-90 m-auto"
    >
      <img
        ref={imgRef}
        src={sobreImg}
        alt="draggable"
        draggable={false}
        onMouseDown={handleMouseDown}
        className="absolute top-0 w-[300px] h-[300px]"
        style={{ left: `${offsetX}px`, cursor: "grab" }}
      />
    </div>
  );
};

export default Container;
