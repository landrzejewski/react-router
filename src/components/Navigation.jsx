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
          </ul>
      </nav>
    );
}

export default Navigation;