import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.scss';
import LogoWhite from './logoWhite.png';
import Insta from './insta.png';
import LinkedIn from './linkedin.png';
import AppStore from './appStoreBadge.png';
import GoogleStore from './googlePlayBadge.png';


function Footer() {
    return (
        <footer className="footer">
            <div className="container__special">
                <div className="footer__content">

                    <Link to="/">
                        <img src={LogoWhite} alt="logo" className="foot__logo" />
                    </Link>


                    <nav className="footer__nav">
                        <ul className="footer__nav--list">
                            <li>
                                <Link to="/">
                                    Home
                            </Link>
                            </li>
                            <li>
                                <Link to="/supplier">
                                    Supplier
                            </Link>
                            </li>
                            <li>
                                <Link to="/about">
                                    About
                            </Link>
                            </li>
                            <li>
                                <Link to="/contact">
                                    Contact
                            </Link>
                            </li>
                            <li>
                                <Link to="/faq">
                                    FAQ
                            </Link>
                            </li>
                            <li>
                                <Link to="/legal">
                                    Legal
                            </Link>
                            </li>
                        </ul>
                    </nav>

                    <ul className="footer__socials">
                        <li className="foot__soc-item">
                            <Link to="/">
                                <img src={Insta} alt="logo" />
                            </Link>
                        </li>
                        <li className="foot__soc-item">
                            <Link to="/">
                                <img src={LinkedIn} alt="logo" />
                            </Link>
                        </li>
                    </ul>

                    <ul className="footer__stores">
                        <li className="footer__stores-item">
                            <Link to="/">
                                <img src={AppStore} alt="logo" />
                            </Link>
                        </li>
                        <li className="footer__stores-item">
                            <Link to="/">
                                <img src={GoogleStore} alt="logo" />
                            </Link>
                        </li>
                    </ul>

                    <div className="footer__rights">
                        © Tinvio™ 2019. All Rights Reserved
                    </div>
                </div>
            </div>

        </footer>
        
    )
}

export default Footer
