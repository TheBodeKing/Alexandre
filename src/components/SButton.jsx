import { gsap } from "gsap";

const SButton = ({ txt, color, ext }) => {
  return (
    <a
      className={`py-[8px] px-[25px]  font-bold cursor-pointer rounded-sm uppercase ${
        color === "branco"
          ? "bg-white shadow-[0_0_20px_4px_rgba(0,0,0,0.4)] cinzaEscuro"
          : "bg-gradient-to-r from-[#ef6c46] to-[#fbaf5a] shadow-[0_0_22px_3px_rgba(241,106,65,1)] branco"
      } ${ext}`}
      onMouseEnter={(e) =>
        gsap.to(e.currentTarget, { scale: 1.05, duration: 0.2 })
      }
      onMouseLeave={(e) =>
        gsap.to(e.currentTarget, { scale: 1, duration: 0.2 })
      }
    >
      {txt}
    </a>
  );
};

export default SButton;
