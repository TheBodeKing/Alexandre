import { useEffect, useState } from "react";
import Linha from "./Linha";
import SButton from "./SButton";
import { homemImg } from "../utils";

const Contato = () => {
  const [nUm, setNUm] = useState(0);
  const [nDois, setNDois] = useState(0);
  const [res, setRes] = useState(0);

  useEffect(() => {
    const randomN = () => Math.floor(Math.random() * 10) + 1;

    const a = randomN();
    const b = randomN();

    setNUm(a);
    setNDois(b);
    setRes(a + b);
  }, []);

  return (
    <section className="py-[50px] relative">
      <div className="max-w-[1110px] relative w-full px-[15px] mx-auto ">
        <h2 className="uppercase laranja text-[28px] font-bold mb-5 gap-4 items-center flex">
          entre em contato <Linha />
        </h2>
        <p className="mb-4 cinza">
          Estamos prontos e ansiosos para lhe atender. <br /> Preencha o
          formulário ao lado e nos conte sua necessidade.
        </p>
        <form>
          <div className="flex flex-wrap gap-[30px] mb-4">
            <div className="w-5/12 max-w-5/12">
              <div className="relative mb-4 ">
                <input
                  className="rounded-sm h-[45px] px-5 w-full bg-white text-black focus:border-[#717477]
                  border border-[#ced4da] focus:ring-4 focus:ring-blue-200 outline-none"
                  type="text"
                  name="nome"
                  placeholder="Seu nome"
                  aria-required="true"
                />
              </div>
              <div className="relative mb-4 ">
                <input
                  className="rounded-sm h-[45px] px-5 w-full bg-white text-black focus:border-[#717477]
                  border border-[#ced4da] focus:ring-4 focus:ring-blue-200 outline-none"
                  type="text"
                  name="telefone"
                  placeholder="Telefone"
                  aria-required="true"
                />
              </div>
              <div className="relative mb-4 ">
                <input
                  className="rounded-sm h-[45px] px-5 w-full bg-white text-black focus:border-[#717477]
                  border border-[#ced4da] focus:ring-4 focus:ring-blue-200 outline-none"
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  aria-required="true"
                />
              </div>
              <div className="relative flex items-center mb-4 gap-[10px]">
                <div className="flex-3 relative">
                  <input
                    className="rounded-sm h-[45px] px-5 w-full bg-white text-black focus:border-[#717477]
                  border border-[#ced4da] focus:ring-4 focus:ring-blue-200 outline-none"
                    type="text"
                    name="cidade"
                    placeholder="Cidade"
                    aria-required="true"
                  />
                </div>
                <div className="flex-2 relative">
                  <select
                    className="rounded-sm h-[45px] px-5 w-full bg-white text-[#495057] focus:border-[#717477]
                  border border-[#ced4da] focus:ring-4 focus:ring-blue-200 outline-none"
                    type="text"
                    name="cidade"
                    placeholder="Cidade"
                    aria-required="true"
                  >
                    <option disabled="" selected="">
                      Estado
                    </option>
                    <option value="AC">Acre</option>
                    <option value="AL">Alagoas</option>
                    <option value="AP">Amapá</option>
                    <option value="AM">Amazonas</option>
                    <option value="BA">Bahia</option>
                    <option value="CE">Ceará</option>
                    <option value="DF">Distrito Federal</option>
                    <option value="ES">Espirito Santo</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="w-5/12 max-w-5/12">
              <div className="relative ">
                <textarea
                  className="rounded-sm h-[133px] py-[10px] px-5 w-full bg-white 
                  text-black focus:border-[#717477] mb-4
                  border border-[#ced4da] focus:ring-4 focus:ring-blue-200 outline-none 
                  overflow-auto resize-y align-top"
                  name="mensagem"
                  placeholder="Mensagem"
                  aria-required="true"
                />
                <div className="relative mb-4 cinza">
                  <div className="mb-[10px] ">
                    <p>
                      Informe o resultado da soma ao lado:{" "}
                      <span className="font-bold">
                        {" "}
                        {nUm} + {nDois}{" "}
                      </span>
                    </p>
                  </div>
                  <input
                    className="rounded-sm h-[45px] px-5 w-full bg-white text-black focus:border-[#717477]
                  border border-[#ced4da] focus:ring-4 focus:ring-blue-200 outline-none"
                    type="text"
                    name="capUser"
                    required=""
                    aria-required="true"
                  />
                </div>
              </div>
            </div>
          </div>
          <SButton txt={"Solicitar Orçamento"} />
        </form>
        <img
          src={homemImg}
          alt="Homem"
          className="absolute -bottom-3/5 -right-3/20 -z-1"
        />
      </div>
    </section>
  );
};

export default Contato;
