import React from 'react';
import { NavLink } from 'react-router-dom';
export const Nav = ({ open, toggleOpen, user, onLogout }) => {
  return (
    <ul className={`right-nav ${open ? 'open' : ''}`}>
      <NavLink onClick={toggleOpen} exact to="/">בית</NavLink>
      {user?.userType === 'מטופל' && <NavLink onClick={toggleOpen} to="/timeline">מסלול</NavLink>}
      <NavLink onClick={toggleOpen} to="/videos">סרטונים</NavLink>
      {user?.userType === 'מטופל' && <NavLink onClick={toggleOpen} to="/medicines">תרופות</NavLink>}
      {user?.userType === 'אדמין' && <NavLink onClick={toggleOpen} to="/admin">טבלת תרופות</NavLink>}
      <NavLink onClick={toggleOpen} to="/success-stories"> הצלחות</NavLink>
      <NavLink onClick={toggleOpen} to="tips"> טיפים</NavLink>
      {user?.userType === 'מטופל' && <NavLink onClick={toggleOpen} to="/visits">ביקורים</NavLink>}
      {user?.userType === 'מטופל' && <NavLink onClick={toggleOpen} to="/workshops">סדנאות</NavLink>}
      {user?.userType === 'מטופל' && <NavLink onClick={toggleOpen} to="/contacts">אנשי קשר</NavLink>}
      {!user?.mail && <NavLink onClick={toggleOpen} to="/auth">התחברות</NavLink>}
      {user?.mail && <NavLink onClick={onLogout} to="/auth">התנתקות</NavLink>}
    </ul>
  )
}
