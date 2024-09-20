import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
import css from './navbar.module.css';

function NavBar({permissionsGranted})
{
    const [menuButton, setMenuButton] = useState(false);
    const [admin, setAdmin] = useState(false);

    const handleMenuToggle = () => {
        setMenuButton(!menuButton)
    }

    return(
    <section>
        <header>
            <nav className={css.navbar}>
                <img src={Logo} alt="" className={css.logo}/>
                <p>ARTEM FACTORY</p>
                <div className={css.menuIcon} onClick={handleMenuToggle}>
                    <i className="fa-solid fa-bars"></i>
                </div>
            </nav>
        </header>

        <main className={css.main}>
            <section className={`${css.menuItems} ${menuButton ? css.show : ''}`}>
                <ul className={css.menuItemsContent}>
                    <li><Link to={"/"}>Inicio</Link></li>
                    <li><Link to={"/Products"}>Productos</Link></li>
                    <li><Link to={"/notfound"}>Texturas</Link></li>
                </ul>
                        
                <ul className={css.menuItemsContent}>
                    <li><Link to={"/notfound"}>Nosotros</Link></li>
                    <li><Link to={`${permissionsGranted == 'success' ? "/Admin" : "/notAuthorized"}`}>Admin</Link></li>
                    <li><Link to={"/LogIn"}>Inicio de sesion</Link></li>
                </ul>
            </section>
        </main>
    </section>
    )
};

export default NavBar;