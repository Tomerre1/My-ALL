import React from 'react';
import { NavLink } from 'react-router-dom';
export const Nav = ({ open, toggleOpen, user, onLogout }) => {
  const mail = user ? user.mail : null
  return (
    <ul className={`right-nav ${open ? 'open' : ''}`}>
      <NavLink onClick={toggleOpen} exact to="/">בית</NavLink>
      {user && user.userType === 'מטופל' && <NavLink onClick={toggleOpen} to="/timeline">מסלול</NavLink>}
      {user && user.userType && <NavLink onClick={toggleOpen} to="/medicines">תרופות</NavLink>}
      {user && user.userType === 'אדמין' && <NavLink onClick={toggleOpen} to="/admin">טבלת תרופות</NavLink>}
      {user && <NavLink onClick={toggleOpen} to="/success-stories"> הצלחות</NavLink>}
      {user && <NavLink onClick={toggleOpen} to="tips"> טיפים</NavLink>}
      {!mail && <NavLink onClick={toggleOpen} to="/auth">התחברות</NavLink>}
      {mail && <NavLink onClick={onLogout} to="/auth">התנתקות</NavLink>}
    </ul>
  )
}
