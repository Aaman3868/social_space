import { Link } from "react-router-dom";
function Navbar() {
 return(
 <nav className="navbar navbar-expand-lg bg-dark shadow-sm py-2">
      <div className="container">

        {/* Brand */}
       <Link className="navbar-brand" to="/home">
        <img src="/assets/img/logo.png" alt="SociyaSpace" style={{ height: '40px' }} />
      </Link>

        {/* Toggle button */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center gap-3">

            {/* Chat icon */}
            <li className="nav-item position-relative">
              <i className="bi bi-chat-dots fs-5 text-secondary"></i>
              {/* <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                0
              </span> */}
            </li>

            {/* Notification icon */}
            <li className="nav-item position-relative">
              <i className="bi bi-bell fs-5 text-secondary"></i>
              {/* <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                0
              </span> */}
            </li>

             {/* Notification icon */}
            <li className="nav-item position-relative">
              <i className="bi-person-fill-add fs-5 text-secondary"></i>
              
              {/* <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                0
              </span> */}
            </li>

            {/* Avatar Dropdown */}
            <li className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle d-flex align-items-center"
                id="userDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://i.pravatar.cc/40?img=3"
                  alt="avatar"
                  className="rounded-circle"
                  width="35"
                  height="35"
                />
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                <li><Link className="dropdown-item" to="/Profile"><i className="bi bi-person me-2"></i> Profile</Link></li>
                 <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="/logout"><i className="bi bi-wrench me-2"></i> Settings</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="/logout"><i className="bi bi-box-arrow-right me-2"></i> Logout</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
 )
}

export default Navbar