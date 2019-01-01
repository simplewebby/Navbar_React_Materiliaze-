import React from 'react';
const Navbar = () => {
    return(
        <nav className="nav-wrapper pink">
            <div className="container">
                <a className="brand-logo center">simplewebby.com</a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><a href="/home">Home</a></li>
                        <li><a href = "/about"> About </a></li>
                        <li><a href = "/contact"> Contact Us </a></li>
                    </ul>
            </div>
        </nav>
    )
}

export default Navbar;
