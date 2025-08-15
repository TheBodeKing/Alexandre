import { useRef } from "react";
import { zapImg } from "../utils";
import { gsap } from "gsap";

const Zap = () => {
  const msgRef = useRef();

  const clickHandler = () => {
    gsap.set(msgRef.current, {
      display: "none",
    });
  };

  return (
    <section id="zap" className="fixed bottom-10 left-10 z-[999]">
      <div className="flex flex-row gap-5">
        <p
          ref={msgRef}
          className="py-2 pl-5 pr-10 flex relative bg-white text-gray-500 
          text-lg rounded-xl justify-center items-center"
        >
          <button
            className="absolute top-0 right-3 text-2xl hover:text-gray-700 cursor-pointer"
            onClick={clickHandler}
          >
            x
          </button>
          Fale conosco no zap!
        </p>
        <a
          href="https://wa.me/557599116033"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={zapImg}
            alt="Logo do whatsapp"
            className="w-[70px] h-[70px] inline hover:shadow-[5px_8px_8px_rgba(37,211,102,0.6)]
             hover:-translate-y-2 transition-all duration-600 cursor-pointer rounded-full"
          />
        </a>
      </div>
    </section>
  );
};

export default Zap;
