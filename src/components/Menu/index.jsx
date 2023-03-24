import './style'
import { Container } from './style'
import { Link, NavLink } from 'react-router-dom'


export function Menu(){

    


    return(
        <Container>
            <nav>

            <ul>
             <NavLink to='/'> <li>INÍCIO</li></NavLink>
             
               <NavLink to='/reserva'> <li>RESERVA</li></NavLink>
                <NavLink to='/lista'><li>LISTA DE LIVROS</li></NavLink>
               
            </ul>

            </nav>

        </Container>
    )
}


