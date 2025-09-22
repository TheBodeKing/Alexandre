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
      className="w-full h-fit p-[30px] absolute top-0 left-0 branco z-10 "
      ref={headRef}
    >
      <div className="flex justify-between items-center max-w-[1140px] w-full px-[15px] mx-auto ">
        <a href="/">
          <img
            src={logoImg}
            alt="logo"
            className="w-[185px] h-[127px] cursor-pointer "
          />
        </a>
        <div className="flex flex-col">
          <div className="flex justify-end mb-10 mt-7 ">
            <a
              href="tel:7532238246"
              className="text-[15px] ml-10 uppercase cursor-pointer hover:text-[#db5733] transition-all"
            >
              75 3223-8246
            </a>
            <div className="ml-[30px] flex">
              <a
                href="https://www.instagram.com/faestruturasvisuais/"
                target="_blank"
                className="ml-[15px] text-[15px]"
              >
                <Insta
                  atr={
                    "w-4 h-4 fill-white cursor-pointer hover:fill-[#db5733] transition-all"
                  }
                />
              </a>
              <a
                href="https://www.facebook.com/faestruturametalica/"
                target="_blank"
                className="ml-[15px] text-[15px]"
              >
                <Face
                  atr={
                    "w-4 h-4 fill-white cursor-pointer hover:fill-[#db5733] transition-all"
                  }
                />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=557532238246&text=Ol%C3%A1,%20venho%20atrav%C3%A9s%20do%20site%20e%20preciso%20de%20atendimento."
                target="_blank"
                className="ml-[15px] text-[15px]"
              >
                <Zap
                  atr={
                    "w-4 h-4 fill-white cursor-pointer hover:fill-[#db5733] transition-all"
                  }
                />
              </a>
            </div>
          </div>
          <ul className="flex text-[18px]">
            {navList.map(({ nome, id }) => (
              <li
                key={id}
                className="cursor-pointer hover:text-[#db5733] transition-all ml-10 "
              >
                <a href={`#${id}`}>{nome}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
