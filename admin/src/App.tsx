import { useContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import CreatePost from "./pages/CreatePost";
import UpdatePost from "./pages/UpdatePost";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import HomeInfinite from "./pages/HomeInfinite";
import HomePaginate from "./pages/HomePaginate";
import AuthModal from "./components/AuthModal";
import { AuthContext } from "./context/AuthContext";

const App = () => {
  const [closedNav, setClosedNav] = useState(false);
  const [infiniteScroll, setInfiniteScroll] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const toggleNav = () => {
    setClosedNav(!closedNav);
  };

  const getNavWidth = () => (closedNav ? "w-16" : "w-56");

  return (
    <>
      <ToastContainer
        toastStyle={{
          color: "white",
          backgroundColor: "var(--main-blue)",
        }}
        autoClose={3000}
        hideProgressBar
      />
      {!currentUser && <AuthModal />}
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
    </>
  );
};

export default App;
