import { NavLink } from "react-router-dom";
import { AiOutlineHome, AiFillFileAdd } from "react-icons/ai";
import { ReactNode } from "react";

interface INavItem {
  to: string;
  text: string;
  icon: ReactNode;
}

const NavItem = ({ to, text, icon }: INavItem) => (
  <NavLink className="flex items-center space-x-2" to={to}>
    {icon} <span>{text}</span>
  </NavLink>
);

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
