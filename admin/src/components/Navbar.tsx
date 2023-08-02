import { NavLink } from "react-router-dom";
import { AiOutlineHome, AiFillFileAdd } from "react-icons/ai";
import { ReactNode } from "react";

interface INavItem {
  closed: boolean;
  to: string;
  text: string;
  icon: ReactNode;
}

const NavItem = ({ to, text, icon, closed }: INavItem) => {
  const commonClasses =
    "flex items-center space-x-2 w-full p-2 block whitespace-nowrap";
  const activeClasses = `${commonClasses} bg-blue-500 text-white`;
  const inactiveClasses = `${commonClasses} text-gray-500`;

  return (
    <NavLink
      className={({ isActive }) => (isActive ? activeClasses : inactiveClasses)}
      to={to}
    >
      {icon}{" "}
      {/* just doing "hidden" : "" makes it a bit glitchy so using width & transition */}
      <span
        className={
          closed
            ? "w-0 transition-width overflow-hidden"
            : "w-full transition-width overflow-hidden"
        }
      >
        {text}
      </span>
    </NavLink>
  );
};

const Navbar = ({ closed }: { closed: boolean }) => {
  return (
    <nav>
      <ul>
        <li>
          <NavItem
            closed={closed}
            to="/"
            text="Home"
            icon={<AiOutlineHome size={24} />}
          />
        </li>
        <li>
          <NavItem
            closed={closed}
            to="/create-post"
            text="Create Post"
            icon={<AiFillFileAdd size={24} />}
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
