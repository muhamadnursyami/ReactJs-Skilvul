import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"




export default function DetailContact() {
  // ambil url paramsnya
   const  {id} = useParams();
  //  kenapa statenya tidak array, karena data nya itu hanya 1
  // jadi tidak perlu pakai array, hanya butuh object saja
   const [pokemon, setPokemon] = useState({})

   useEffect(() => {
    fetchApiById();
   
   }, [])
   
   async function fetchApiById () {
    // kenapa variable data menggunakan {data} karena agar dapat
    // langsung diambil datanya, nama variabel harus data,
    // jika yang lain maka tidak akan tampil datanya menggunakan {},
    // maka tanda {} harus di hapus jika ingin mendapatkan datanya
    // cuman datanya itu akan berada dalam object lagi, bukan langsung datanya
    // jadi coba lihat datanya di console jika ingin tahu perbedaanya, misalkan nama variabelnya itu
    // const response , ini bisa dan dapat ,cuman perlu menambahkan
    // response.data , untuk mendapatkan data nya, response aja itu masih didalam sebuah
    // object luar dari data nya.
    const {data} = await axios(`https://pokeapi.deno.dev/pokemon/${id}`);
    // console.log(dataPokemon);
    // kedua cara dibawah ini, bisa dipakai.
    setPokemon({...data})
    // setPokemon(data)
   }
  // console di sini untuk debug perbedaan pada penjelasan di atas.
  //  console.log(pokemon)
console.log(pokemon);
  return (
    <div>
      <h3>Name : {pokemon.name}</h3>
      <img src={pokemon.imageUrl} style={{width:"400px"}} />
    </div>
  )
}
