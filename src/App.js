import Layout from "./Layout";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {

  // const navigate = useNavigate(); instead of history
  // navigate('/') insted of history.push('/')
  // Switch is replaced with Routes
  return (
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/books" element={<BookList/>}/>

</Routes>
  
)}

export default App;
