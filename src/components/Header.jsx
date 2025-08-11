import { navList } from "../constants";
import { logoImg } from "../utils";
import { ReactComponent as InstaIcon } from "../assets/insta.svg";

const Header = () => {
  return (
    <header className="w-full h-full">
      <img src={logoImg} alt="logo" className="w-[50px] h-[50px]" />
      <div>
        <div>
          {navList.map(({ nome, id }) => (
            <div key={id}>{nome}</div>
          ))}
        </div>
        <div>
          <h2>75 3223-8246</h2>
          <div>
            <InstaIcon className="w-6 h-6 fill-gray-500 hover:fill-pink-500 transition-colors duration-300 cursor-pointer" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
