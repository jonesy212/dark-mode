import React from 'react';
import useDarkMode from '../hooks/useDarkMode'

const Navbar = () => {
  const [darkValue,setDarkValue] = useDarkMode(false);
  //e can be named anything
  //e represents an event handler
  const toggleMode = e => {
    e.preventDefault();
    //prevent default stops the default form
    //stopping new value 
    setDarkValue(!darkValue);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkValue ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
