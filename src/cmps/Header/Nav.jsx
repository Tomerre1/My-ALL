import React from 'react';
import { NavLink } from 'react-router-dom';
export const Nav = ({ open, toggleOpen, user, onLogout }) => {
  const mail = user ? user.mail : null
  return (
    <ul className={`right-nav ${open ? 'open' : ''}`}>
      <NavLink onClick={toggleOpen} exact to="/">בית</NavLink>
      {user && user.userType === 'מטופל' && <NavLink onClick={toggleOpen} to="/timeline">מסלול</NavLink>}
      {user && user.userType && <NavLink to="/medicines">תרופות</NavLink>}
      {user && user.userType === 'אדמין' && <NavLink onClick={toggleOpen} to="/admin">טבלת תרופות</NavLink>}
      {!mail && <NavLink onClick={toggleOpen} to="/auth">התחברות</NavLink>}
      {mail && <NavLink onClick={onLogout} to="/auth">התנתקות</NavLink>}
    </ul>
  )
}
