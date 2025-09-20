import { creativaImg, logoImg } from "../utils";
import Face from "./Face";
import Insta from "./Insta";
import Zap from "./Zap";

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
            <div className="maw-w-1/3 flex-1/3 relative w-full px-[15px]">
              <h4 className="cinzaEscuro text-[16px] uppercase pb-[10px] mb-[15px] font-bold relative ">
                central de atendimento{" "}
                <span className="absolute w-[50px] h-[2px] bg-[#db5733] left-0 bottom-0" />
              </h4>
              <p>
                <a href="tel:7532238246" title="Telefone">
                  75 3223-8246 <small></small>
                </a>
                <br />
                <a href="mailto:atendimento@faestruturas.com.br" title="E-mail">
                  atendimento@faestruturas.com.br
                </a>
              </p>
            </div>
            <div className="max-w-1/6 flex-1/6 w-full relative px-[15px]">
              <h4 className="cinzaEscuro text-[16px] uppercase pb-[10px] mb-[15px] font-bold relative ">
                mídias sociais{" "}
                <span className="absolute w-[50px] h-[2px] bg-[#db5733] left-0 bottom-0" />
              </h4>
              <div className="flex relative gap-[10px]">
                <a
                  href="https://www.instagram.com/faestruturasvisuais/"
                  target="_blank"
                >
                  <span class="p-1 border-[#db5733] border-2 rounded-full inline-block group hover:bg-[#db5733] transition-all">
                    <Insta
                      atr={
                        "w-4 h-4 fill-[#db5733] cursor-pointer group-hover:fill-white transition-all "
                      }
                    />
                  </span>
                </a>
                <a
                  href="https://www.facebook.com/faestruturametalica/"
                  target="_blank"
                >
                  <span class="p-1 border-[#db5733] border-2 rounded-full inline-block group hover:bg-[#db5733] transition-all">
                    <Face
                      atr={
                        "w-4 h-4 fill-[#db5733] cursor-pointer group-hover:fill-white transition-all "
                      }
                    />
                  </span>
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=5575981215930&amp;text=Ol%C3%A1,%20venho%20atrav%C3%A9s%20do%20site%20e%20preciso%20de%20atendimento."
                  target="_blank"
                >
                  <span class="p-1 border-[#db5733] border-2 rounded-full inline-block group hover:bg-[#db5733] transition-all">
                    <Zap
                      atr={
                        "w-4 h-4 fill-[#db5733] cursor-pointer group-hover:fill-white transition-all "
                      }
                    />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between border-t-[#eaeaea] border-t-2  py-[30px] ">
          <p className="text-[12px] cinza">
            Copyright © . Todos os direitos reservados.
          </p>
          <a
            href="https://www.creativasites.com.br/"
            target="_blank"
            title="Creativa Sites"
          >
            <img src={creativaImg} alt="Creativa Sites" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
