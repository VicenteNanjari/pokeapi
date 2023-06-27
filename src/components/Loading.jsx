import pokebola from '../assets/Poké_Ball_icon.svg.png'

const Loading = () => {
    return (
        <div className="pokemon">
            <img src={pokebola} alt="pokebola" className='cargando'/>
        </div>
    )
}

export default Loading
