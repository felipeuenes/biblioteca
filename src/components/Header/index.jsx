import { Menu } from '../Menu';
import './style';
import { Container } from './style';
import { IoMdMenu, IoMdClose } from 'react-icons/io'
import { useState } from 'react';




export function Header() {

    const [menuActive, setMenuActive] = useState(false);
    const toggleMenu = () => setMenuActive(!menuActive);


    return(
        <Container>
            <button onClick={toggleMenu}>

                {
                    menuActive ? 
                    <IoMdClose className="menuIcon" /> :
                    <IoMdMenu className="menuIcon" />
                    
                }
           </button>

           <div onClick={toggleMenu}>
            {
                menuActive && <Menu/>
            }
           
        </div>
         



        </Container>    
    )    
}