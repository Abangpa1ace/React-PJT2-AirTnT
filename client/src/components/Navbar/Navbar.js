import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import { NAVBARMENU } from './NavbarData';
import { RiGlobalLine, RiMenuLine } from 'react-icons/ri';
import { CgProfile } from 'react-icons/cg';
import './Navbar.css';

export default function Navbar() {
  const [focus, setFocus] = useState(0);

  return (
    <nav className="Navbar">
      <div className="nav-container">
        <div className="nav-left">
          <h2><Link to="/">airbnb</Link></h2>
        </div>
        <div className="nav-center">
          <ul className="nav-menu-container">
            {NAVBARMENU.map((menu, idx) => 
              <li key={menu.key} className={idx === focus ? 'focus' : ''} onClick={() => setFocus(idx)}>
                <Link to={menu.link}>{menu.text}</Link>
              </li>  
            )}
          </ul>
          <SearchBar />
        </div>
        <div className="nav-right">
          <Link to="/host">호스트 되기</Link>
          <button>
            <RiGlobalLine />
          </button>
          <div className="menu-btn-container">
            <button>
              <RiMenuLine />
            </button>
            <button>
              <CgProfile />
            </button>
          </div>
        </div> 
      </div>
    </nav>
  )
}
