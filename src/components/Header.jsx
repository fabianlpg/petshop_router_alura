import image from "../assets/img/doguito.svg"
import "../assets/css/componentes/header.css"
import { Link } from "react-router-dom"
import { AiFillHome } from "react-icons/ai";


const Header = () => {
    return (
        <header className="header container">
            <div className="menu-hamburguer">
                <span className="menu-hamburguer__icon"></span>
            </div>
            <div className="header-container">
                <Link to="/" className="flex flex--center">
                    <img className="header__logo" src={image} alt="doguito" />
                    <h1 className="header__title">Petshop</h1>
                </Link>
            </div>
            <nav className="menu-header">
                <ul className="menu-items">
                    <li>
                        <Link className="menu-item menu-item--entrar" to="/login">
                            Entrar
                        </Link>
                    </li>
                    <li>
                        <Link className="menu-item" to="/">
                            <AiFillHome style={{ color: "#0071EA" }} />
                        </Link>
                    </li>
                    <li>
                        <Link className="menu-item" to="/posts">Posts</Link>
                    </li>
                    <li>
                        <Link className="menu-item" to="/prodcutos">Productos</Link>
                    </li>
                    <li>
                        <Link className="menu-item" to="/sobre">Sobre</Link>
                    </li>
                </ul>
            </nav>
            <div className="menu-header-background"></div>
        </header>
    )
}

export default Header;