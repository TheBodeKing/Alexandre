import { Menu } from "lucide-react";
import { X } from "lucide-react";
import { logoImg } from "../utils";
import { navList } from "../constants";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const HeaderM = () => {
  const [btn, setBtn] = useState(true);
  const navRef = useRef(null);
  const blurRef = useRef(null);

  useEffect(() => {
    if (!navRef.current || !blurRef.current) return;

    if (!btn) {
      gsap.fromTo(
        navRef.current,
        {
          x: "100%",
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
        }
      );
      gsap.to(blurRef.current, { opacity: 1 });
    } else {
      gsap.fromTo(
        navRef.current,
        {
          x: 0,
          opacity: 1,
        },
        {
          x: "100%",
          opacity: 0,
          duration: 0.5,
        }
      );
      gsap.to(blurRef.current, { opacity: 0 });
    }
  }, [btn]);

  return (
    <div className="lg:hidden">
      <div
        className="bg-[#db5733eb] fixed top-0 bottom-0 right-0 h-screen w-[20%] min-w-[240px] z-20 flex flex-col justify-center "
        ref={navRef}
      >
        <ul className="flex flex-col items-center text-center text-base uppercase h-fit mx-auto font-bold">
          {navList.map(({ nome, id }) => (
            <li key={id} className="text-white mb-[25px] ">
              <a href={`#${id}`}>{nome}</a>
            </li>
          ))}
        </ul>
      </div>
      <button
        className="absolute z-21 p-[15px] right-0 top-10 "
        onClick={() => {
          setBtn(!btn);
        }}
      >
        <span className="w-10 h-6 inline-block relative ">
          {btn ? (
            <Menu
              strokeWidth={2.5}
              color="white"
              size={40}
              className="w-full h-full scale-x-200 scale-y-150"
            />
          ) : (
            <X
              strokeWidth={2}
              color="white"
              size={40}
              className="w-full h-full scale-x-200 scale-y-200"
            />
          )}
        </span>
      </button>
      <nav className="z-10 p-5 absolute w-full top-0 left-0 ">
        <a href="/">
          <img src={logoImg} alt="Logo" className="w-[130px] " />
        </a>
      </nav>
      <div
        className="backdrop-blur-md fixed bottom-0 top-0 h-screen w-screen z-15 pointer-events-none"
        ref={blurRef}
      />
    </div>
  );
};

export default HeaderM;
