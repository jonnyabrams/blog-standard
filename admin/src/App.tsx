import { useState } from "react";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import UpdatePost from "./pages/UpdatePost";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";

const App = () => {
  const [closedNav, setClosedNav] = useState(false);

  const toggleNav = () => {
    setClosedNav(!closedNav);
  };

  const getNavWidth = () => (closedNav ? "w-16" : "w-56");

  return (
    <div className="flex">
      {/* nav section  */}
      <div className={`${getNavWidth()} h-screen bg-red-400 transition-width`}>
        <Navbar />
      </div>

      {/* content section */}
      <div className="flex-1 min-h-screen bg-blue-400">
        <button onClick={toggleNav}>
          {closedNav ? (
            <AiOutlineMenuUnfold size={25} />
          ) : (
            <AiOutlineMenuFold size={25} />
          )}
        </button>

        <div className="max-w-screen-lg mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/update-post" element={<UpdatePost />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
