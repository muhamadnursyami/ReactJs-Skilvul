import { useState } from "react"
import About from "./components/About"
import Contact from "./components/Contact"
// import Error from "./components/Error"
import Home from "./components/Home"
import Profile from "./components/Profile"

import { Routes,Route,Link, Navigate  } from 'react-router-dom'
import Login from "./components/Login"
function App() {
  // Kenapa state login ini harus berada di app,
  // kenapa tidak di component login, karena  ini berguna
  // untuk mengecek status apakah suatu halaman itu harus login atau tidak 
  // seperti contoh dibawah pada routing profile, 
  // halaman profile harus login terlebih dahulu jika ingin di akses, jika tidak
  // maka akan di alihkan kehalaman login.
  // state login ini di props kemudian di kasih data nya kedalam component login
  // ketika user sudah login, maka dari component login akan merubah data state login
  // false menjadi true.
  // yang di props itu fungsi setIslogin bukan nilai isLogin,
  // karena untuk merubah state login itu perlu fungsi setIsLogin.
  const [isLogin, setIsLogin] = useState(false);
  console.log(`isLogin ${isLogin}`);
  return (
    <>
    <ul>
      <li>
        <Link to={`/`}>
        Home
        </Link>
      
        </li>
      <li><Link to={`/about`}>
      About
        </Link></li>
      <li>
      <Link to={`/contact`}>
      Contact
        </Link></li>
      <li><Link to={`/profile`}>
      Profile
        </Link></li>
      <li><Link to={`/login`}>
      Login
        </Link></li>
    </ul>
    <Routes>
      <Route path="/" element={<Home/>}/> 
      <Route path="/about" element={<About/>}/> 
      <Route path="/contact" element={<Contact/>}/> 
      <Route path="/profile" element={isLogin ? <Profile/> : <Navigate to={`/login`}/>}/> 
      <Route path="/login" element={<Login isLogin={setIsLogin}/>}/> 
      {/* <Route path="/*" element={<Error/>}/>  */}

    </Routes>
    </>
  )
}

export default App
