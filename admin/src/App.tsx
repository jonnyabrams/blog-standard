import { useState } from "react";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";

import "./App.css";

const App = () => {
  const [closedNav, setClosedNav] = useState(false);

  const toggleNav = () => {
    setClosedNav(!closedNav);
  };

  const getNavWidth = () => (closedNav ? "w-16" : "w-56");

  return (
    <div className="flex">
      {/* nav section  */}
      <div
        className={`${getNavWidth()} h-screen bg-red-400 transition-width`}
      ></div>

      {/* content section */}
      <div className="flex-1 min-h-screen bg-blue-400">
        <button onClick={toggleNav}>
          {closedNav ? (
            <AiOutlineMenuUnfold size={25} />
          ) : (
            <AiOutlineMenuFold size={25} />
          )}
        </button>
      </div>
    </div>
  );
};

export default App;
