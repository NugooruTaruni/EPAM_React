import React from 'react';
import Logo from './Logo';
import Button from './Button';

function Header() {
  const userName = 'Taruni Nugooru'; 

  return (
    <header>
      <Logo />
      <p>Welcome, {userName}!</p>
      <Button onClick={() => {}}>Logout</Button>
    </header>
  );
}

export default Header;
