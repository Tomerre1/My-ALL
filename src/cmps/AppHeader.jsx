import { NavLink } from "react-router-dom";
export const AppHeader = () => {
    return (
        <header className="app-header flex align-center justify-center">
            <NavLink to="/">
                <p style={{ color: 'white' }}>My ALL</p>
            </NavLink>
        </header>
    )
}
