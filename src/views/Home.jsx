import pokebola from '../assets/Poké_Ball_icon.svg.png'

const Home = () => {
    return (
        <div className="container">
            <img src={pokebola} alt="pokebola"/>
            <h1>Bienvenid@!!</h1>
            <h2>Esta es una aplicación que consume la API de Pokemon</h2>
            <h3>Para ver los pokemones disponibles, haz click en la opción "Pokemones" del menú</h3>

        </div>
    )
}

export default Home