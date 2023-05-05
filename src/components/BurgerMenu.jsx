import { stack as Menu } from 'react-burger-menu'
import "../assets/css/componentes/burgermenu.css"
import { Link } from "react-router-dom"
import { useState } from 'react'


const BurgerMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleStateChange = (state) => {
        setMenuOpen(state.isOpen);
    }

    const closeMenu = () => {
        setMenuOpen(false);
    }

    return (
        <div>
            <Menu
                isOpen={menuOpen}
                onStateChange={(state) => handleStateChange(state)}
                width={"280px"}

            >
                <Link className="menu-item" to="/login" onClick={() => closeMenu()}>Entrar</Link >
                <Link className="menu-item" to="/" onClick={() => closeMenu()}>Home</Link>
                <Link className="menu-item" to="/posts" onClick={() => closeMenu()}>Posts</Link>
                <Link className="menu-item" to="/productos" onClick={() => closeMenu()}>Productos</Link>
                <Link className="menu-item" to="/sobre" onClick={() => closeMenu()}>Sobre</Link>
            </Menu>
        </div>
    )
}

export default BurgerMenu;
