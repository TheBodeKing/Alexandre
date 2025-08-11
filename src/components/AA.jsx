import { logoImg } from "../utils";
import { navList } from "../constants";
import { InstaIcon } from "../assets/insta.svg";

const AA = () => {
  return (
    <div>
      <img src={logoImg} alt="logo" className="w-[50px] h-[50px]" />
      <div>
        {navList.map(({ nome, id }) => (
          <div key={id}>{nome}</div>
        ))}
      </div>
      <div>
        <InstaIcon className="w-6 h-6 fill-gray-500 hover:fill-pink-500 transition-colors duration-300 cursor-pointer" />
      </div>
    </div>
  );
};

export default AA;
