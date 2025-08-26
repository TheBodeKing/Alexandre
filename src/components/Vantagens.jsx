import {
  barraImg,
  equipeImg,
  experienciaImg,
  projetosImg,
  qualidadeImg,
  solucoesImg,
} from "../utils";

const Vantagens = () => {
  return (
    <section className="py-[28px] relative w-full mb-[30px] branco text-center">
      <img
        src={barraImg}
        alt="imagem de fundo"
        className="absolute top-0 left-0 h-full w-full "
      />
      <div className="max-w-[1140px] w-full px-[15px] mx-auto relative flex flex-row ">
        <div className="items-center relative w-[250px] flex flex-col justify-center ">
          <img
            src={experienciaImg}
            alt="experiencia"
            className="h-[50px] w-auto  mb-[15px] "
          />
          <p className="leading-[20px] relative">
            MAIS DE 13 ANOS <br />
            <span className="font-bold">DE EXPERIÊNCIA</span>
            <div className="absolute w-[100px] h-[5px] left-1/2 -translate-x-1/2 bottom-[-28px] rounded-sm laranjabg" />
          </p>
        </div>
        <div className="items-center relative w-[250px] flex flex-col justify-center ">
          <img
            src={projetosImg}
            alt="experiencia"
            className="h-[50px] w-auto  mb-[15px] "
          />
          <p className="leading-[20px] relative">
            PROJETOS <br />
            <span className="font-bold">PERSONALIZADOS</span>
            <div className="absolute w-[100px] h-[5px] left-1/2 -translate-x-1/2 bottom-[-28px] rounded-sm laranjabg" />
          </p>
        </div>
        <div className="items-center relative w-[250px] flex flex-col justify-center ">
          <img
            src={qualidadeImg}
            alt="experiencia"
            className="h-[50px] w-auto  mb-[15px] "
          />
          <p className="leading-[20px] relative">
            MATERIAIS <br />
            <span className="font-bold">DE ALTA QUALIDADE</span>
            <div className="absolute w-[100px] h-[5px] left-1/2 -translate-x-1/2 bottom-[-28px] rounded-sm laranjabg" />
          </p>
        </div>
        <div className="items-center relative w-[250px] flex flex-col justify-center ">
          <img
            src={equipeImg}
            alt="experiencia"
            className="h-[50px] w-auto  mb-[15px] "
          />
          <p className="leading-[20px] relative">
            EQUIPE <br />
            <span className="font-bold">QUALIDADE</span>
            <div className="absolute w-[100px] h-[5px] left-1/2 -translate-x-1/2 bottom-[-28px] rounded-sm laranjabg" />
          </p>
        </div>
        <div className="items-center relative w-[250px] flex flex-col justify-center ">
          <img
            src={solucoesImg}
            alt="experiencia"
            className="h-[50px] w-auto  mb-[15px] "
          />
          <p className="leading-[20px] relative">
            SOLUÇÕES <br />
            <span className="font-bold">CRIATIVAS</span>
            <div className="absolute w-[100px] h-[5px] left-1/2 -translate-x-1/2 bottom-[-28px] rounded-sm laranjabg" />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Vantagens;
