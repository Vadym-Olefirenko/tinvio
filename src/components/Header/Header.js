
import React, { useState, useEffect } from 'react';
import { Link, useLocation, NavLink } from "react-router-dom";
import Button from '../Button/Button';
import Burger from './burger.svg';

import './Header.scss';
import Logo from './logo-color.svg';

const Header = () => {
    const [mobileButton, setMobileButton] = useState(false);

    const showMobileButton = () => window.innerWidth <= 767 ? setMobileButton(true) : setMobileButton(false);

    useEffect(() => {
        showMobileButton();
    }, [mobileButton]);

    window.addEventListener('resize', showMobileButton)

    const { pathname } = useLocation();
    return (
        <div className="header">
            <div className="container">
                <nav className="navbar">
                    <div className="logo__box">
                        <Link to="/" className="logo">
                            <img src={Logo} alt="logo" className="main__logo" />
                        </Link>
                    </div>
                    {mobileButton ? (
                        <Link to="/" className="burger">
                            <img src={Burger} alt="menu" className="burger__img" />
                        </Link>
                    ) : (
                            <div className="laptop__navigation">
                                <ul className="nav__list">
                                    <li>
                                        <NavLink
                                            to="/"
                                            isActive={() => ['/'].includes(pathname)}
                                        >
                                            Home
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/supplier"
                                            isActive={() => ['/supplier'].includes(pathname)}
                                        >
                                            Supplier
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink 
                                            to="/about"
                                            isActive={() => ['/about'].includes(pathname)}
                                        >
                                            About
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink 
                                            to="/contact"
                                            isActive={() => ['/contact'].includes(pathname)}
                                        >
                                            Contact
                                        </NavLink>
                                    </li>
                                </ul>

                                <Link to="/">
                                    <Button
                                        buttonText="Get Started"
                                        buttonClassNames="btn btn__transparent nav__btn"
                                    />
                                </Link>
                            </div>
                        )}

                </nav>
            </div>

        </div>
    )
}

export default Header;