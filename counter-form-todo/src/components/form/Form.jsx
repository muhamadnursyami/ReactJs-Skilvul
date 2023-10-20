import { useState } from "react"


export default function Form() {
    
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    
 function handleUsername (event){
    setUserName(event.target.value);
}

function handlerPassword (event){
    
    setPassword(event.target.value);
 }

 function sumbit (event) {
    event.preventDefault();
    console.log(`username : ${userName}`);
    console.log(`password : ${password}`);
    setUserName("");
    setPassword("");
 }
  return (
    <div style={{marginTop :"30px"}}>
        <form>
            <label>username: </label>
        <input type="text" name="username" onChange={handleUsername} value={userName}/>
            <label>password: </label>
        <input type="password" name="password" onChange={handlerPassword} value={password} />
        </form>
        <button onClick={sumbit}>login</button>
    </div>
  )
}
