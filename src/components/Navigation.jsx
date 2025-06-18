import {NavLink} from "react-router-dom";

function Navigation() {
    return (
        <nav className="main-nav">
            <div className="nav-brand">
                Routing demo
            </div>
            <ul className="nav-links">
                <li>
                    <NavLink
                        to="/"
                        className={({isActive}) => isActive ? 'active-link' : ''}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        className={({isActive}) => isActive ? 'active-link' : ''}>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/contact"
                        className={({isActive}) => isActive ? 'active-link' : ''}>
                        Contact
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/products"
                        className={({isActive}) => isActive ? 'active-link' : ''}>
                        Products
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;