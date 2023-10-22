import PropTypes from 'prop-types';
function CardPokemon({pokemon}) {
  
  return (
      <div style={{width:"400px", backgroundColor:pokemon.color, borderRadius:"10px"}}>
        
        <p>{pokemon.name}</p>
        <img src={pokemon.imageUrl} style={{width:"400px"}} />
        </div>
  )
}
CardPokemon.propTypes  ={
pokemon: PropTypes.object,
}
export default CardPokemon;