import React from 'react';
import { NavLink } from 'react-router-dom';
export const Nav = ({ open, toggleOpen, user, onLogout }) => {
  console.log('%c  user:', 'color: white;background: red;', user);
  return (
    <ul className={`right-nav ${open ? 'open' : ''}`}>
      <NavLink onClick={toggleOpen} exact to="/">בית</NavLink>
      {user && user.userType === 'מטופל' && <NavLink onClick={toggleOpen} to="/timeline">מסלול</NavLink>}
      {<NavLink to="/medicines">תרופות</NavLink>}
      {user && user.userType === 'אדמין' && <NavLink onClick={toggleOpen} to="/admin">טבלת תרופות</NavLink>}
      {!user.mail && <NavLink onClick={toggleOpen} to="/auth">התחברות</NavLink>}
      {user.mail && <NavLink onClick={onLogout} to="/auth">התנתקות</NavLink>}
    </ul>
  )
}
