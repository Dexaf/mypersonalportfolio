import { Link } from "react-router-dom";

function Navbar() {
    return <>
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <span role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </span>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <Link className="navbar-item" to="/AboutMe">
                        <i className="fa-solid fa-user"></i> &nbsp; About me
                    </Link>
                    <Link className="navbar-item" to="/Skills">
                        <i className="fa-solid fa-screwdriver-wrench"></i> &nbsp; My skills
                    </Link>
                    <Link className="navbar-item" to="/Portfolio">
                        <i className="fa-solid fa-folder-open"></i> &nbsp; Portfolio
                    </Link>
                    <Link className="navbar-item" to="/MyCv">
                        <i className="fa-solid fa-file"></i> &nbsp; My CV
                    </Link>
                    <Link className="navbar-item" to="/Contacts">
                        <i className="fa-solid fa-address-book"></i> &nbsp; Contacts
                    </Link>
                </div>
            </div>
        </nav>
    </>
}

export default Navbar;