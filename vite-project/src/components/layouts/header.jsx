import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg premium-header sticky-top">
            <div className="container">
                <NavLink className="navbar-brand fw-bold text-uppercase brand-logo" to="/">
                    <span className="text-primary">Vite</span>App
                </NavLink>

                <button className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="collapse" data-bs-target="#premiumNav" aria-controls="premiumNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="premiumNav">
                    <ul className="navbar-nav align-items-center gap-2 gap-lg-4">
                        <li className="nav-item">
                            <NavLink className="nav-link custom-nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link custom-nav-link" to="/users">Users</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link custom-nav-link" to="/products">Products</NavLink>
                        </li>
                        <li className="nav-item mt-2 mt-lg-0">
                            <NavLink className="btn btn-primary custom-btn-contact rounded-pill px-4 py-2" to="/login">Login</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;