import { useState } from "react"

export default function Todolist() {
   
    const [inputan, setInputan] = useState("");
    const [tugasDitambahkan, setTugasDitambahkan] = useState([{
      id:1 ,
      task :"makan"
    }]);
    
    console.log(tugasDitambahkan);
  function handleInputan (event) {
    setInputan(event.target.value);
  }  
  function handleSubmit (event) {
    event.preventDefault();
    let data = {
      id : tugasDitambahkan[tugasDitambahkan.length-1].id+1,
      task :inputan
    }

    setTugasDitambahkan([...tugasDitambahkan, data])
  }  
  function handleDelete (id) {
    console.log(`handle didelete ${id}` );
    const hapus = tugasDitambahkan.filter((item) => item.id !== id);
    setTugasDitambahkan(hapus);
  } 
  return (
    <div style={{marginTop: "30px"}}>
        <form>
            <label>Tugas</label>
            <input type="text" onChange={handleInputan} value={inputan} />
            <button type="submit" onClick={handleSubmit}>+</button>
        </form>
        <div>{tugasDitambahkan.map((item) =>{
         return(
          
          
          <div key={item.id} style={{ marginTop:"30px" ,backgroundColor:"pink", display: "flex", justifyContent:"center"}}>
            <p>{item.task} </p>
            <button onClick={() => handleDelete(item.id)}>X</button>
           </div>
          
         )
           
          
        })}</div>
    </div>
  )
}
