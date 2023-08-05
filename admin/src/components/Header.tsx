import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { BiSolidLogOutCircle } from "react-icons/bi";
import { useContext, useState, useEffect, useRef } from "react";

import Searchbar from "./Searchbar";
import { AuthContext } from "../context/AuthContext";

interface IHeader {
  toggleNav: () => void;
  closedNav: boolean;
}

interface IDropdownItem {
  icon: React.ReactNode;
  title: string;
  action: () => void;
}

const DropdownItem = ({ icon, title, action }: IDropdownItem) => (
  <div className="flex w-[200px] pl-12 items-center py-2 hover:bg-[var(--main-blue)] hover:text-white">
    {icon}
    <li className="pl-2" onClick={action}>
      {title}
    </li>
  </div>
);

const Header = ({ toggleNav, closedNav }: IHeader) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { logout, currentUser } = useContext(AuthContext);

  // close dropdown on outside click
  let dropdownMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let handleOutsideClick = (e: Event) => {
      if (
        // is clicked element outside of dropdown container?
        !dropdownMenuRef!.current!.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);

    // cleanup
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="sticky top-0 bg-white flex justify-between items-center">
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
      <div ref={dropdownMenuRef}>
        <img
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="w-[50px] h-[50px] p-1 rounded-full cursor-pointer"
          src="default-profile-pic.jpeg"
          alt=""
        />
        {dropdownOpen && (
          <div
            className="absolute flex flex-col items-center top-[50px] right-[0px] bg-white rounded-sm py-10 w-[200px] border border-gray-400"
          >
            <span className="text-2xl font-bold pb-4">
              {currentUser?.user.username}
            </span>
            <ul>
              <DropdownItem
                title="Log Out"
                icon={<BiSolidLogOutCircle />}
                action={logout}
              />
              <DropdownItem
                title="Log Out"
                icon={<BiSolidLogOutCircle />}
                action={logout}
              />
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
