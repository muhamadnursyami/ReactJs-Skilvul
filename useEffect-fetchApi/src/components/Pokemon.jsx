import { useEffect } from "react";
import CardPokemon from "./CardPokemon"
import { useState } from "react";



function Pokemon() {
  
  const [pokemon, setPokemon] = useState([])
  const [inputan, setInputan] = useState("")
  const [dataFilter, setDataFilter] = useState([])

  // fetch api akan di jalankan 1 kali saja
  useEffect(() => {
  fetchApi();
  }, [])
  
  // inputan harus dirender setiap saat saat ada perubahan atau ada yang di input
  useEffect(()=>{
      // looping filter berdasarkan name, tulisakn lowercase dan data name harus mengandung data yang sama
      // dengan inputan
    const filter = pokemon.filter((item) => item.name.toLowerCase().includes(inputan));
    // tambahkan kedalam state dataFilter agar kita bisa menggunakan data search
    setDataFilter(filter);
    // inputan sebagai pematik/ pemicu, jika inputan ada perubahan atau nilai pada form maka akan dirender setiap saat.
  },[inputan])
  
  // mengambil data api
  async function fetchApi (){
    const respon = await fetch("https://pokeapi.deno.dev/pokemon?limit=20")
    const data = await respon.json();
    setPokemon(data);
    setDataFilter(data);
  }
// handle input change
 function handleInput(event){
  setInputan(event.target.value)
 }

  return (
    <div>
      <form>
        <input type="text"  value={inputan} onChange={handleInput} />
      </form>
       {/* pada saat website di render maka tampil data loading
          jika selesai, maka akan check data,
          data pokemon harus sama dengan filter, supaya
          dapat di cari datanya jadi harus di samakan duplikasi ibaratnya , jika ada maka tampilkan, di tidak ada : message.
          data pokemon hanya untuk awalnya saja dan data filter untuk pencarian.
          awalnya data akan di cek pada pokemon
          kemudain masuk ke step data di ambil dari filter,
          dan ditampilkan di website, ketika form input diisi maka
          akan berjalan filter di useEffeect, berdasarkan data
          pokemon dengan inputan. kemudian data setFilter
          akan di perbaharui yang awalnya itu semua pokemon menjadi
          data yang di temukan.
       */}
      {pokemon.length ===0 ? 
        <div> data loading</div>
      :
        dataFilter.length === 0 ? 
        <div> Data tidak ditemukan </div> :
        dataFilter.map(item =>
          <CardPokemon key={item.id} pokemon={item}/>
          )
      }
    </div>
  )
}

export default Pokemon