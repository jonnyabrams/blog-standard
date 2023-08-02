import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/create-post">Create Post</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
