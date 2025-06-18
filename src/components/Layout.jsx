import {Outlet} from "react-router-dom";
import Navigation from "./Navigation.jsx";

function Layout() {
    return (
        <div className="app-container">
            <Navigation />
            <main className="content">
                <Outlet />
            </main>
            <footer className="footer">
                <p>React Router Demo Application - {new Date().getFullYear()}</p>
            </footer>
        </div>
    );
}

export default Layout;