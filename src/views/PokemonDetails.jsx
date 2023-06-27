import { useParams, useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Loading from "../components/Loading";

const PokemonDetails = () => {
    const params = useParams();
    const navigate = useNavigate();

    const { data, loading, error } = useFetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`);

    return (
        <div className='container'>
            {loading && <Loading />}
            {error && <h1>Error...</h1>}
            {data && (
                <div className='card'>
                    <img src={data.sprites.front_default} alt={data.name} className='card-img-top imgpokemon' />
                    <div className='card-body'>
                        <h1 className='card-title p-3'>{data.name[0].toUpperCase() + data.name.slice(1)}</h1>
                        <h2 className='card-subtitle mb-2 text-muted'>Peso: {data.weight}</h2>
                        <h2 className='card-subtitle mb-2 text-muted'>Altura: {data.height}</h2>
                        <h2 className='card-subtitle mb-2 text-muted'>Habilidades: </h2>
                        <ul className="list-unstyled">
                            {data.abilities.map((ability, index) => (
                                <li key={index}>{ability.ability.name}</li>
                            ))}
                        </ul>
                        <h2 className='card-subtitle mb-2 text-muted'>Movimientos: </h2>
                        <ul className="list-unstyled">
                            {data.moves.slice(0,6).map((move, index) => (
                                <li key={index} >{move.move.name}</li>
                            ))}
                        </ul>
                        <button className='btn btn-primary' onClick={() => navigate('/pokemon')}>Volver</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default PokemonDetails;