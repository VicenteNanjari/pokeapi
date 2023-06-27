import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Loading from "../components/Loading";


const Pokemon = () => {
    const { data, loading, error } = useFetch(`https://pokeapi.co/api/v2/pokemon/`);
    const [pokemon, setPokemon] = useState(null);
    const navigate = useNavigate();
    
    if (error) return <h1>Error...</h1>;

    const handleChange = (pokemon) => {
        navigate(`/pokemon/${pokemon}`);
    }

    
    return (
        <div className='container'>
            {loading && <Loading />}
            <h1 className='text-center'>Selecciona un pokemon</h1>
            <select className='form-select' onChange={ (e) =>setPokemon(e.target.value)}>
                <option value=''>Selecciona un pokemon</option>
                {data?.results.map((pokemon, index) => (
                    <option key={index} value={pokemon.name}>{pokemon.name}</option>
                ))}
            </select>
            {pokemon && handleChange(pokemon)}
        </div>

    );
}

export default Pokemon;