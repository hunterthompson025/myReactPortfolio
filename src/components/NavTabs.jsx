import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
    const currentPage = useLocation().pathname;

    return (
        <header>
            <div className="container">
                <div className="row align-items-center">
                    <h1 className="col-4">Hunter Thompson</h1>
                    <ul className="col-8 nav nav-tabs nav-fill mb-2" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <Link
                                to="/"
                                className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item" role="presentation">
                            <Link
                                to="/About"
                                className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}
                            >
                                About
                            </Link>
                        </li>
                        <li className="nav-item" role="presentation">
                            <Link
                                to="/Portfolio"
                                className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
                            >
                                Portfolio
                            </Link>
                        </li>
                        <li className="nav-item" role="presentation">
                            <Link
                                to="/Contact"
                                className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
                            >
                                Contact
                            </Link>
                        </li>
                        <li className="nav-item" role="presentation">
                            <Link
                                to="/Resume"
                                className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
                            >
                                Resume
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default NavTabs;