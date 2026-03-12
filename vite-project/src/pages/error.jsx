import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light text-center px-3">
            <h1 className="display-1 fw-bold text-danger mb-3">404</h1>
            <h2 className="h3 mb-3 text-dark">Oops! This page do not exist.</h2>
            <p className="text-muted mb-4 fs-5">
                Sorry, an unexpected error has occurred.
                <br />
                <i className="text-secondary">{error.statusText || error.message}</i>
            </p>
            <Link to="/" className="btn btn-primary btn-lg rounded-pill shadow px-5 py-2 fw-semibold">
                Back to Home
            </Link>
        </div>
    );
}
