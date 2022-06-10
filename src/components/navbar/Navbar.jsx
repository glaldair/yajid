import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import NavIcons from './NavIcons'
import logo from '../../assets/img/logo/logo.png';

const Navbar = () => {
    
    

    // Cuando se haga scroll en la página el navbar cambiará su backgroundColor, su color de letra y su padding

    const [navbar, setNavbar] = useState({
        backgroundColor: 'transparent',
        color: 'white',
        padding: '1rem 0.5rem'
    });

    const handleScroll = () => {
        if(window.scrollY > 50) {
            setNavbar({
                backgroundColor: '#fff',
                color: '#000',
                padding: '0'
            })
        } else {
            setNavbar({
                backgroundColor: 'transparent',
                color: 'white',
                padding: '1rem 0.5rem'
            })
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);


    return (
        <>
            <nav className="navbar" id="navbar" style={navbar}>
                <div className="navbar__container">
                    <div className="navbar__logo">
                        <Link className="navbar__logo-link" to="/">
                            <div className="navbar__logo-imagen">
                                <img className="navbar__logo-img" src={logo} alt="Super Yajid" />
                            </div>
                            <div className="navbar__logo-text">
                                <h1 className="navbar__logo-title">Super Yajid</h1>
                            </div>
                        </Link>
                    </div>

                    <div className="navbar__links">
                        <ul className="navbar__links-list">
                            <li className="navbar__links-item">
                                <Link className="navbar__links-link" to="/productos"> Productos </Link>
                            </li>
                            <li className="navbar__links-item">
                                <Link className="navbar__links-link" to="/productos/paquetes"> Paquetes </Link>
                            </li>
                            <li className="navbar__links-item">
                                <Link className="navbar__links-link" to="/nosotros"> Nosotros </Link>
                            </li>
                            <li className="navbar__links-item">
                                <Link className="navbar__links-link" to="/contacto"> Contacto </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="navbar__icons">
                        <NavIcons />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;