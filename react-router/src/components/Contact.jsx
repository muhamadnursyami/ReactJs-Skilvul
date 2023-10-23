import { useState } from "react"
import CardContact from "./CardContact"
import { useEffect } from "react"

export default function Contact() {
  const [pokemon, setPokemon] = useState([])

  // fetch api akan di jalankan 1 kali saja
    useEffect(() => {
      fetchApi();
      }, [])
  
      // mengambil data api
    async function fetchApi (){
      const respon = await fetch("https://pokeapi.deno.dev/pokemon?limit=20")
      const data = await respon.json();
      setPokemon(data);
      
    }
    console.log(pokemon);
  return (
    <div>{pokemon.length ===0 ? 
      <div> data loading</div>
    :

    pokemon.map(item =>
        <CardContact key={item.id} pokemon={item}/>
        )
    }</div>
  )
}
