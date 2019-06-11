import React from 'react'
import '../index.css'
import Logo from'./logo.png'

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="logo-wrapper">
                <img src={Logo}/>
                Furniture & Product Design
            </div>
            <ul className="header-links">
                <a href="/">Work</a>
                <a href="/about">About</a>
                <a href="/news">News</a>
            </ul>
        </div>
    )
}

export default Header;