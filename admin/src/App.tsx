import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./pages/HomePaginate";
import CreatePost from "./pages/CreatePost";
import UpdatePost from "./pages/UpdatePost";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import HomeInfinite from "./pages/HomeInfinite";
import HomePaginate from "./pages/HomePaginate";

const App = () => {
  const [closedNav, setClosedNav] = useState(false);
  const [infiniteScroll, setInfiniteScroll] = useState(false);

  const toggleNav = () => {
    setClosedNav(!closedNav);
  };

  const getNavWidth = () => (closedNav ? "w-16" : "w-56");

  return (
    <div className="flex">
      <Navbar
        closed={closedNav}
        getNavWidth={getNavWidth}
        infiniteScroll={infiniteScroll}
        setInfiniteScroll={setInfiniteScroll}
      />

      {/* content section */}
      <div className="flex-1 min-h-screen">
        <Header toggleNav={toggleNav} closedNav={closedNav} />

        <div className="max-w-screen-lg mx-auto">
          <Routes>
            <Route
              path="/"
              element={infiniteScroll ? <HomeInfinite /> : <HomePaginate />}
            />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/update-post/:slug" element={<UpdatePost />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
