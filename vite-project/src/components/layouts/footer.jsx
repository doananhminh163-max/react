import { NavLink } from "react-router-dom";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="premium-footer">
            <div className="container">
                <div className="row gy-5">
                    {/* Column 1: Brand & Info */}
                    <div className="col-lg-4 col-md-6 pe-lg-4">
                        <h5 className="footer-heading">
                            <span className="text-primary">Vite</span>App
                        </h5>
                        <p className="footer-text mt-3">
                            We are dedicated to providing the best experience with modern, elegant, and highly performant web applications. Building the future, one component at a time.
                        </p>
                        <div className="d-flex gap-3 mt-4">
                            <a href="#" className="social-icon-btn" aria-label="Facebook">f</a>
                            <a href="#" className="social-icon-btn" aria-label="Twitter">t</a>
                            <a href="#" className="social-icon-btn" aria-label="LinkedIn">in</a>
                            <a href="#" className="social-icon-btn" aria-label="Github">gh</a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="col-lg-2 col-md-6">
                        <h5 className="footer-heading">Quick Links</h5>
                        <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                            <li><NavLink to="/" className="footer-link">Home</NavLink></li>
                            <li><NavLink to="/news" className="footer-link">News Updates</NavLink></li>
                            <li><NavLink to="/about" className="footer-link">About Us</NavLink></li>
                            <li><NavLink to="/products" className="footer-link">Our Products</NavLink></li>
                        </ul>
                    </div>

                    {/* Column 3: Support */}
                    <div className="col-lg-2 col-md-6">
                        <h5 className="footer-heading">Support</h5>
                        <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                            <li><a href="#" className="footer-link">Help Center</a></li>
                            <li><a href="#" className="footer-link">Terms of Service</a></li>
                            <li><a href="#" className="footer-link">Privacy Policy</a></li>
                            <li><NavLink to="/contact" className="footer-link">Contact Support</NavLink></li>
                        </ul>
                    </div>

                    {/* Column 4: Newsletter/Subscribe */}
                    <div className="col-lg-4 col-md-6">
                        <h5 className="footer-heading">Newsletter</h5>
                        <p className="footer-text mb-4">
                            Don't miss out on our latest updates and news. Subscribe to our newsletter today!
                        </p>
                        <form className="d-flex gap-2" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                className="form-control shadow-none"
                                placeholder="Enter email address"
                                aria-label="Email address"
                                required
                            />
                            <button type="submit" className="btn btn-primary px-4 fw-medium">Join</button>
                        </form>
                    </div>
                </div>

                {/* Bottom Copyright Area */}
                <div className="row footer-bottom align-items-center">
                    <div className="col-md-6 text-center text-md-start">
                        <p className="footer-text mb-0">
                            &copy; {new Date().getFullYear()} <span className="text-white fw-medium">ViteApp</span>. All Rights Reserved.
                        </p>
                    </div>
                    <div className="col-md-6 text-center text-md-end mt-3 mt-md-0">
                        <p className="footer-text mb-0">
                            Designed with <span className="text-danger">&hearts;</span> using Bootstrap 5.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;