const SButton = ({ txt, color, ext, link }) => {
  return (
    <a
      href={link}
      className={`py-[8px] px-[25px] inline-block font-bold cursor-pointer rounded-sm uppercase transition-all duration-500 ${
        color === "branco"
          ? "bg-white shadow-[0_0_20px_4px_rgba(0,0,0,0.4)] cinzaEscuro hover:shadow-[0_0_30px_6px_rgba(0,0,0,0.6)]"
          : "bg-gradient-to-r from-[#ef6c46] to-[#fbaf5a] shadow-[0_0_22px_3px_rgba(241,106,65,0.8)] branco hover:shadow-[0_0_34px_6px_rgba(241,106,65,1)]"
      } ${ext}`}
    >
      {txt}
    </a>
  );
};

export default SButton;
