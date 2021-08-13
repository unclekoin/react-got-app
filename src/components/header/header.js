import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <nav className="header">
      <div className="header__title">
        <Link to="/">Game of Thrones DB</Link>
      </div>
      <ul className="header__list">
        <li className="header__item"><Link to="/characters/">Characters</Link></li>
        <li className="header__item"><Link to="/houses/">Houses</Link></li>
        <li className="header__item"><Link to="/books/">Books</Link></li>
      </ul>
    </nav>
  );
};

export default Header;
