import Nav from 'react-bootstrap/Nav';
import pokeimg from '../assets/pointer.png'
import { NavLink } from 'react-router-dom';
import './nav.css'


function Header() {
    return (
        <Nav className='nav'>
            <Nav.Item className='d-flex'>
                <img src={pokeimg} alt="pokeimg" className='pokeimg' />
                <Nav.Link as={NavLink} to='/' >Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={NavLink} to='/Pokemon'>Pokemones</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default Header;