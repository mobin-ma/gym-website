import React from 'react';
import './Footer.css';
import Github from '../../assets/github.png';
import Instagram from '../../assets/instagram.png';
import LinkedIn from '../../assets/linkedin.png';
import Logo from '../../assets/logo.png';

const Footer = () => {
    return (
        <div className='footer-container'>
            <hr />
            <div className="footer">
                <div className="social-link">
                    <a href='#'><img src={Github} alt="Github" /></a>
                    <a href='#'><img src={Instagram} alt="Instagram" /></a>
                    <a href='#'><img src={LinkedIn} alt="LinkedIn" /></a>
                </div>

                <div className="logo-f">
                    <a href="#Home"><img src={Logo} alt="logo" /></a>
                </div>
            </div>

            <div className="blur footer-blur-1"></div>
            <div className="blur footer-blur-2"></div>
        </div>
    )
}

export default Footer;