
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
export default function CardContact({pokemon}) {
  const navigate = useNavigate();
  function handleKlik () {
    console.log(pokemon.id)
    navigate(`/contact/${pokemon.id}`)
  }
  
  return (
    <div style={{width:"400px", backgroundColor:pokemon.color, borderRadius:"10px"}} onClick={handleKlik}>
        
    <p>{pokemon.name}</p>
    <img src={pokemon.imageUrl} style={{width:"400px"}} />
    </div>
  )
}

CardContact.propTypes  ={
    pokemon: PropTypes.object,
    }