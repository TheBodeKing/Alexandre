import { useEffect, useRef } from "react";
import { navList } from "../constants";
import { logoImg } from "../utils";
import { gsap } from "gsap";
import Face from "./Face";
import Insta from "./Insta";
import Zap from "./Zap";

const Header = () => {
  const headRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      headRef.current,
      {
        opacity: 0,
        y: "-100%",
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <header
      className="w-full h-fit p-8 branco flex flex-row absolute top-0 left-0 z-10
    justify-center gap-20 opacity-0 popins"
      ref={headRef}
    >
      <img
        src={logoImg}
        alt="logo"
        className="w-[185px] h-[127px] cursor-pointer"
      />
      <div className="flex flex-col-reverse">
        <div className="flex flex-row gap-9  text-lg mb-1">
          {navList.map(({ nome, id }) => (
            <div
              key={id}
              className="cursor-pointer hover:text-[#db5733] transition-all"
            >
              {nome}
            </div>
          ))}
        </div>
        <div className="flex flex-row justify-end items-center mb-12 gap-12 ">
          <h2 className="cursor-pointer hover:text-[#db5733] transition-all  text-base">
            75 3223-8246
          </h2>
          <div className="flex flex-row gap-4">
            <Insta
              atr={
                "w-4 h-4 fill-white cursor-pointer hover:fill-[#db5733] transition-all"
              }
            />
            <Face
              atr={
                "w-4 h-4 fill-white cursor-pointer hover:fill-[#db5733] transition-all"
              }
            />
            <Zap
              atr={
                "w-4 h-4 fill-white cursor-pointer hover:fill-[#db5733] transition-all"
              }
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
