import { logoImg } from "../utils";

const Footer = () => {
  return (
    <footer className="cinza">
      <div className="max-w-[1140px] w-full px-[15px] mx-auto ">
        <div className="py-[50px] px-[30px] text-sm ">
          <div className="flex ">
            <div className="max-w-1/6 flex-1/6 relative w-full px-[15px] ">
              <img
                src={logoImg}
                alt="FA Estruturas"
                className="w-25 align-middle"
              />
            </div>
            <div className="maw-w-1/3 flex-1/3 relative w-full px-[15px]">
              <h4 className="cinzaEscuro text-[16px] uppercase pb-[10px] mb-[15px] font-bold relative ">
                onde estamos{" "}
                <span className="absolute w-[50px] h-[2px] bg-[#db5733] left-0 bottom-0" />
              </h4>
              <p>
                <a
                  href="https://goo.gl/maps/JMpf2Aed28zngmux7"
                  target="_blank"
                  title="Endereço"
                >
                  Rua Capistrano, 84 - Conceição. <br /> Feira de Santana - BA.
                  CEP 44066-036
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
