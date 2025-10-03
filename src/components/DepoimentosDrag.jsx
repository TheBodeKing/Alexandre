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

const DepoimentosDrag = ({ direction, setDirection, setBtnAtv }) => {
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
    box.style.left = "-2280px";

    // cleanup transition after it finishes
    const clearTransition = () => {
      box.style.transition = "";
      box.removeEventListener("transitionend", clearTransition);
    };
    box.addEventListener("transitionend", clearTransition);

    // update the coords so dragging continues correctly
    coords.current.lastX = -2280;
  };

  const meio = () => {
    if (!boxRef.current) return;
    const box = boxRef.current;

    // move smoothly back to start
    box.style.transition = "left 0.3s ease";
    box.style.left = "-1140px";

    // cleanup transition after it finishes
    const clearTransition = () => {
      box.style.transition = "";
      box.removeEventListener("transitionend", clearTransition);
    };
    box.addEventListener("transitionend", clearTransition);

    // update the coords so dragging continues correctly
    coords.current.lastX = -1140;
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

    if (direction === "right") {
      direita();
      setDirection(null); // reset after action
    }
    if (direction === "mid") {
      meio();
      setDirection(null); // reset after action
    }
    if (direction === "left") {
      esquerda();
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

    if (currentLeft >= 2250) {
      setBtnAtv("right");
    } else if (currentLeft >= 1130 && currentLeft < 2250) {
      setBtnAtv("mid");
    } else {
      setBtnAtv("left");
    }

    console.log(currentLeft);
  };

  useEffect(() => {
    if (!boxRef.current || !conRef.current) return;

    const box = boxRef.current;
    const con = conRef.current;
    const cor = coords.current;
    const cardWidth = boxRef.current?.firstElementChild?.offsetWidth + 30 || 0;

    const centerBox = () => {
      box.style.left = "0";
    };
    centerBox();

    // === Helpers for snapping ===
    const snapToCard = () => {
      let snapped = Math.round(box.offsetLeft / cardWidth) * cardWidth;

      const conW = con.clientWidth;
      const boxW = box.clientWidth;
      const minX = Math.min(0, conW - boxW);
      const maxX = Math.max(0, conW - boxW);

      snapped = Math.min(Math.max(snapped, minX), maxX);

      box.style.transition = "left 0.3s ease";
      box.style.left = `${snapped}px`;

      cor.lastX = snapped;

      handlePositionCheck?.(); // only call if you defined this function
    };

    // === Desktop handlers ===
    const onMouseDown = (e) => {
      if (e.button !== 0) return;
      isClicked.current = true;
      box.style.transition = "none";
      cor.startX = e.clientX;
      cor.lastX = box.offsetLeft;
    };

    const onMouseUp = () => {
      isClicked.current = false;
      snapToCard();
    };

    const onMouseMove = (e) => {
      if (!isClicked.current) return;
      box.style.transition = "none";
      const nextX = e.clientX - cor.startX + cor.lastX;

      const conW = con.clientWidth;
      const boxW = box.clientWidth;
      const minX = Math.min(0, conW - boxW);
      const maxX = Math.max(0, conW - boxW);

      box.style.left = `${Math.min(Math.max(nextX, minX), maxX)}px`;
    };

    // === Mobile handlers ===
    const onTouchStart = (e) => {
      isClicked.current = true;
      box.style.transition = "none";
      cor.startX = e.touches[0].clientX;
      cor.lastX = box.offsetLeft;
    };

    const onTouchEnd = () => {
      isClicked.current = false;
      snapToCard();
    };

    const onTouchMove = (e) => {
      if (!isClicked.current) return;
      const nextX = e.touches[0].clientX - cor.startX + cor.lastX;

      const conW = con.clientWidth;
      const boxW = box.clientWidth;
      const minX = Math.min(0, conW - boxW);
      const maxX = Math.max(0, conW - boxW);

      box.style.left = `${Math.min(Math.max(nextX, minX), maxX)}px`;
    };

    // === Attach events ===
    box.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    con.addEventListener("mousemove", onMouseMove);

    box.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd);
    con.addEventListener("touchmove", onTouchMove, { passive: false });

    // === Cleanup ===
    return () => {
      box.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      con.removeEventListener("mousemove", onMouseMove);

      box.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
      con.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  return (
    <div
      className="w-full lg:h-[284px] h-[414px] overflow-hidden
      relative items-center flex mb-[50px] branco"
      ref={conRef}
    >
      <div
        className="lg:w-[3420px] w-[2484px] overflow-hidden lg:h-[284px] h-[414px] absolute top-0 left-0 touch-manipulation 
        select-none gap-[30px] flex flex-row cursor-grab"
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
