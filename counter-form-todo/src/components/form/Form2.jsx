import { useState } from "react"


export default function Form2() {
    
    const [form, setForm] = useState({
        userName : "",
        password : ""
    });
   
    
 function handleForm (event){
    setForm({...form, [event.target.name]: event.target.value})
    
}

 function sumbit (event) {
    event.preventDefault();
   console.log(form.userName);
   console.log(form.password);
    setForm({userName :"", password:""});
 }
  return (
    <div style={{marginTop :"30px"}}>
        <form>
            <label>username: </label>
        <input type="text" name="userName" onChange={handleForm} value={form.userName}/>
            <label>password: </label>
        <input type="password" name="password" onChange={handleForm} value={form.password} />
        </form>
        <button onClick={sumbit}>login</button>
    </div>
  )
}
