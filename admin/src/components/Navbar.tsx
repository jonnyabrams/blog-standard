import { NavLink } from "react-router-dom";
import { AiOutlineHome, AiFillFileAdd } from "react-icons/ai";
import { ReactNode } from "react";

interface INavItem {
  to: string;
  text: string;
  icon: ReactNode;
}

const NavItem = ({ to, text, icon }: INavItem) => {
  const commonClasses = "flex items-center space-x-2 w-full p-2 block";
  const activeClasses = `${commonClasses} bg-blue-500 text-white`;
  const inactiveClasses = `${commonClasses} text-gray-500`;

  return (
    <NavLink
      className={({ isActive }) => (isActive ? activeClasses : inactiveClasses)}
      to={to}
    >
      {icon} <span>{text}</span>
    </NavLink>
  );
};

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavItem to="/" text="Home" icon={<AiOutlineHome size={24} />} />
        </li>
        <li>
          <NavItem
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
