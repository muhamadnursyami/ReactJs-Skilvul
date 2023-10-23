import { useState } from "react";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
export default function Login({isLogin}) {
  const navigate = useNavigate();
  const [inputan, setInputan] = useState({
    username :"",
    password :""
  });

  function handleInput (event){
    setInputan({...inputan, [event.target.name] : event.target.value})
  }
  function handleSubmit (event){
    event.preventDefault();
    if(inputan.username == "" || inputan.password == ""){
      console.log("mohon di isi");
    }
    else{
      isLogin(true);
      console.log("berhasil login, beralih ke halaman contact");
      navigate(`/contact`);
    }
  }
  return (
    <div>
      <form>
        <label>username</label>
        <input type="text" name="username" onChange={handleInput} value={inputan.username}/>
        <label >password</label>
        <input type="password" name="password" onChange={handleInput} value={inputan.password}/>
        <button type="submit" onClick={handleSubmit}>Login</button>
      </form>
    </div>
  )
}

Login.propTypes = {
  isLogin : PropTypes.func,
}