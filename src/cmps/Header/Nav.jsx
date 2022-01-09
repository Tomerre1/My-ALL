import React from 'react';
import { NavLink } from 'react-router-dom';
export const Nav = ({ open, toggleOpen, user, onLogout }) => {
  return (
    <ul className={`right-nav ${open ? 'open' : ''}`}>
      <NavLink onClick={toggleOpen} exact to="/">Home</NavLink>

      {/* {user && <NavLink onClick={toggleOpen} to="/user">פרופיל</NavLink>} */}

      {user && <NavLink onClick={toggleOpen} to="/timeline">מסלול</NavLink>}

      {/* <NavLink onClick={toggleOpen} to="/review">Reviews</NavLink>
      <NavLink onClick={toggleOpen} to="/about">About</NavLink>
      <NavLink onClick={toggleOpen} to="/chart">Chart</NavLink> */}

      {user && <NavLink onClick={toggleOpen} onClick={onLogout} to="/auth">Logout</NavLink>}
      {!user && <NavLink onClick={toggleOpen} to="/auth">Login</NavLink>}
    </ul>
  )
}
