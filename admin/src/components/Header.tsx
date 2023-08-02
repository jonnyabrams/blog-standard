import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";

import Searchbar from "./Searchbar";

interface IHeader {
  toggleNav: any;
  closedNav: boolean;
}

const Header = ({ toggleNav, closedNav }: IHeader) => {
  return (
    <div className="sticky top-0">
      <div className="flex items-center p-2">
        <button onClick={toggleNav}>
          {closedNav ? (
            <AiOutlineMenuUnfold size={25} />
          ) : (
            <AiOutlineMenuFold size={25} />
          )}
        </button>
        <Searchbar />
      </div>
    </div>
  );
};

export default Header;
