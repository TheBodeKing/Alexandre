import { useEffect, useRef } from "react";
import { zapImg } from "../utils";
import { gsap } from "gsap";

const ZapC = () => {
  const msgRef = useRef();

  const clickHandler = () => {
    gsap.set(msgRef.current, {
      display: "none",
    });
  };

  useEffect(() => {
    gsap.fromTo(
      msgRef.current,
      {
        y: "100%",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        delay: 1,
      }
    );
  }, []);

  return (
    <section id="zap" className="fixed bottom-10 left-10 z-[999]">
      <div className="flex flex-row-reverse gap-5">
        <p
          ref={msgRef}
          className="py-2 pl-5 pr-10 flex relative bg-white text-gray-500 w-[260px]
          text-[16px] rounded-xl justify-center items-center ubuntu"
        >
          <button
            className="absolute top-0 right-3 text-2xl hover:text-gray-700 cursor-pointer"
            onClick={clickHandler}
          >
            x
          </button>
          Olá! Vamos iniciar uma conversa pelo WhatsApp?
        </p>
        <a
          href="https://wa.me/557599116033"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={zapImg}
            alt="Logo do whatsapp"
            className="w-[64px] h-[64px] inline hover:shadow-[5px_8px_8px_rgba(37,211,102,0.6)]
             hover:-translate-y-2 transition-all duration-600 cursor-pointer rounded-full"
          />
        </a>
      </div>
    </section>
  );
};

export default ZapC;
