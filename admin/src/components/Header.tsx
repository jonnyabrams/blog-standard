import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import {
  BiSolidChevronDownCircle,
  BiSolidChevronUpCircle,
} from "react-icons/bi";
import { useContext, useState } from "react";

import Searchbar from "./Searchbar";
import { AuthContext } from "../context/AuthContext";

interface IHeader {
  toggleNav: () => void;
  closedNav: boolean;
}

const Header = ({ toggleNav, closedNav }: IHeader) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { logout } = useContext(AuthContext);

  const handleDropdownOpen = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const dropdownItem = (title: string, action: () => void, isLast = false) => (
    <div className="hover:text-white hover:bg-[var(--main-blue)]">
      <button onClick={action}>{title}</button>
      {!isLast && <hr />}
    </div>
  );

  return (
    <div className="sticky top-0 bg-white flex justify-between items-center pr-2">
      <div className="flex items-center p-2 space-x-2">
        <button onClick={toggleNav}>
          {closedNav ? (
            <AiOutlineMenuUnfold size={25} />
          ) : (
            <AiOutlineMenuFold size={25} />
          )}
        </button>
        <Searchbar />
      </div>
      <button className="relative" onClick={handleDropdownOpen}>
        {dropdownOpen ? (
          <BiSolidChevronUpCircle size={25} />
        ) : (
          <BiSolidChevronDownCircle size={25} />
        )}
        {dropdownOpen ? (
          <ul className="w-[150px] mt-1 rounded-sm bg-white border border-gray-400 pt-1 absolute top-5 left-[-120px]">
            <li>{dropdownItem("Log Out", logout)}</li>
            <li>{dropdownItem("Log Out", logout, true)}</li>
          </ul>
        ) : null}
      </button>
    </div>
  );
};

export default Header;
