import React from 'react';
import { Nav } from './Nav';


export function Burger({ open, toggleOpen, user, onLogout }) {
  return (
    <>
      <div className={`burger ${open ? 'open' : ''}`} onClick={toggleOpen}>
        <div className={`burgers ${open ? 'open' : ''}`} />
        <div className={`burgers ${open ? 'open' : ''}`} />
        <div className={`burgers ${open ? 'open' : ''}`} />
      </div>
      <Nav open={open} toggleOpen={toggleOpen} onLogout={onLogout} user={user} />
    </>
  )
}


