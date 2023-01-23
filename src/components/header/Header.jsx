import React from 'react'
import './header.css'

function Header() {
  return (
    <header>
    <nav class="navbar">
        <ul class="nav-list">
            <li> <a href="/index.html"> <img class="logo" src="logogitemoulin2.png"
                        alt="gites insolites du moulin" /></a></li>
            <li> <a href="./roulotte.html"> Hébergements insolites</a></li>
            <li> <a href="#classiques"> Hébergements classiques</a></li>
            <li> <a href="#services"> Services</a></li>
            <li> <a href="./contact.html"> Contact </a></li>
        </ul>
    </nav>
</header>

  )
}

export default Header