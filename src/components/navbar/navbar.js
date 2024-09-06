import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
import './navbar.css';

function NavBar()
{
    return(
    <section>
        <header>
            <nav className="navbar">
                <img src={Logo} alt="" className="logo"/>
                <p>ARTEM FACTORY</p>
                <div className="menu-icon">
                    <i className="fa-solid fa-bars"></i>
                </div>
            </nav>
        </header>

        <main className="main">
            <section className="menu-items">
                <ul className="menu-items-content">
                    <li><Link to={"/"}>Inicio</Link></li>
                    <li><Link to={"/Products"}>Productos</Link></li>
                    <li><Link to={"/notfound"}>Texturas</Link></li>
                </ul>
                        
                <ul className="menu-items-content">
                    <li><Link to={"/notfound"}>Nosotros</Link></li>
                    <li><Link to={"/Admin"}>Admin</Link></li>
                    <li><Link to={"/notfound"}>Inicio de sesion</Link></li>
                </ul>
            </section>
        </main>
    </section>
    )
};

export default NavBar;