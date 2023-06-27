import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Header from './components/Nav'
import Pokemon from './views/Pokemon.jsx'
import Home from './views/Home'
import PokemonDetails from './views/PokemonDetails'
import Footer from './components/Footer'


function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pokemon' element={<Pokemon />} />
          <Route path='/pokemon/:name' element={<PokemonDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
