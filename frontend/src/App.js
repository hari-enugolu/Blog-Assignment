import Header from "./components/Header.js";
import Blogs from "./components/Blogs.js";
import UserBlogs from "./components/UserBlogs.js";
import BlogDetail from "./components/BlogDetail.js";
import AddBlog from "./components/AddBlog.js";

import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "./components/Auth.js";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store";
import AdminPage from "./components/AdminPage.js";

function App() {
  const dispath = useDispatch();

  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);
  useEffect(() => {
    if (localStorage.getItem("userId")) {
      dispath(authActions.login());
    }
  }, [dispath]);
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          {!isLoggedIn ? (
            <Route path="/auth" element={<Auth />} />
          ) : (
            <>
              <Route path="/admin" element={<AdminPage />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blogs/add" element={<AddBlog />} />
              <Route path="/myBlogs" element={<UserBlogs />} />
              <Route path="/myBlogs/:id" element={<BlogDetail />} />
            </>
          )}
          ;
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
