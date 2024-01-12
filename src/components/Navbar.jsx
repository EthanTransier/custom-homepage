import React from 'react';
import $ from 'jquery';

const Navbar = () => {
  const handleHover = () => {
    $('nav').toggleClass('active');
  };

  return (
    <nav onMouseEnter={handleHover} onMouseLeave={handleHover}>
      <input type="radio" name="theme" id="theme1" value={1} />
      <input type="radio" name="theme" id="theme2" value={2} />
      <input type="radio" name="theme" id="theme3" value={3} />
    </nav>
  );
};

export default Navbar;
