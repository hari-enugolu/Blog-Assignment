import React from "react";
import Header from "./Components/Header";
import { Route, Routes } from "react-router-dom";
import Auth from "./Components/Auth";
import Blogs from "./Components/Blogs";
import UserBlog from "./Components/UserBlog";
import BlogDetail from "./Components/BlogDetail";
import AddBlog from "./Components/AddBlog";
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/auth" element={<Auth />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/blogs/add" element={<AddBlog />}></Route>
        <Route path="/myBlogs" element={<UserBlog />}></Route>
        <Route path="/myBlogs/id:" element={<BlogDetail />}></Route>
      </Routes>
    </>
  );
}

export default App;
