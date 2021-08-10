import React from 'react';
import './header.css'

const Header = () => {

  return (
    <nav className='header'>
      <div className='header__title'>
        <a href="/">Game of Thrones DB</a>
      </div>
      <ul className='header__list'>
        <li className='header__item'><a href="/">Characters</a></li>
        <li className='header__item'><a href="/">Houses</a></li>
        <li className='header__item'><a href="/">Books</a></li>
      </ul>
    </nav>
  )
}

export default Header;
