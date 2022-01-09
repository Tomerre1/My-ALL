import React from 'react';
import { NavLink } from 'react-router-dom';
export const Nav = ({ open, toggleOpen, user, onLogout }) => {
  console.log('%c  user:', 'color: white;background: red;', user);
  return (
    <ul className={`right-nav ${open ? 'open' : ''}`}>
      <NavLink onClick={toggleOpen} exact to="/">בית</NavLink>
      {user && <NavLink onClick={toggleOpen} to="/timeline">מסלול</NavLink>}
      {user && <NavLink onClick={onLogout} to="/auth">התנתקות</NavLink>}
      {!user && <NavLink onClick={toggleOpen} to="/auth">התחברות</NavLink>}
    </ul>
  )
}
