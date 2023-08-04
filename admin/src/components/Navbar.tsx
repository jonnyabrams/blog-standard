import { NavLink, useLocation } from "react-router-dom";
import { AiFillHome, AiFillFileAdd } from "react-icons/ai";
import { ReactNode } from "react";

interface INavbar {
  closed: boolean;
  getNavWidth: () => string;
  infiniteScroll: boolean;
  setInfiniteScroll: React.Dispatch<React.SetStateAction<boolean>>;
}
interface INavItem {
  closed: boolean;
  to: string;
  text: string;
  icon: ReactNode;
}

const NavItem = ({ to, text, icon, closed }: INavItem) => {
  const commonClasses =
    "flex items-center space-x-2 w-full p-2 block whitespace-nowrap";
  const activeClasses = `${commonClasses} font-bold`;
  const inactiveClasses = `${commonClasses} text-gray-400`;

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

const activeTextStyles = "text-blue-500 font-bold";

const Navbar = ({
  closed,
  getNavWidth,
  infiniteScroll,
  setInfiniteScroll,
}: INavbar) => {
  const location = useLocation();

  return (
    <div
      className={`${getNavWidth()} min-h-screen transition-width border border-r`}
    >
      <div className="sticky top-0">
        <nav>
          <div className="p-3">
            <img className="w-14" src="bs-logo.png" alt="" />
          </div>
          <ul>
            <li>
              <NavItem
                closed={closed}
                to="/"
                text="Home"
                icon={<AiFillHome size={24} />}
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
        {!closed && location.pathname === "/" && (
          <div className="flex flex-col pt-10 pl-4 space-y-4 transition-width">
            <span
              className={`${
                !infiniteScroll ? activeTextStyles : ""
              } cursor-pointer text-sm transition-width overflow-hidden`}
              onClick={() => setInfiniteScroll(false)}
            >
              · Paginated View
            </span>
            <span
              className={`${
                infiniteScroll ? activeTextStyles : ""
              } cursor-pointer text-sm transition-width overflow-hidden`}
              onClick={() => setInfiniteScroll(true)}
            >
              · Infinite Scroll
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
