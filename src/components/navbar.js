import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Navbar() {
  const navigate = useNavigate();
  const [requests, setRequests] = useState([]);
  const [requestCount, setRequestCount] = useState(0);

  // ✅ Logout
  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:8000/api/v1/users/logout", {}, { withCredentials: true });

      localStorage.removeItem("user_id");
      localStorage.removeItem("username");
      localStorage.removeItem("token");

      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  // ✅ Fetch pending friend requests
  const fetchRequests = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/v1/friends/requests", {
        method: "GET",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();
      if (res.ok) {
        setRequests(data.data); // full list
        setRequestCount(data.data.length); // count
      } else {
        console.error(data.message);
      }
    } catch (err) {
      console.error("Error fetching requests", err);
    }
  };

  // ✅ Accept friend request
  const acceptRequest = async (id) => {
    try {
      const res = await fetch(`http://localhost:8000/api/v1/friends/accept/${id}`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();
      if (res.ok) {
        alert("Friend request accepted!");
        fetchRequests(); // refresh list
      } else {
        alert(data.message || "Failed to accept request");
      }
    } catch (err) {
      console.error("Error accepting request", err);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-dark shadow-sm py-2">
      <div className="container">
        {/* Brand */}
        <Link className="navbar-brand" to="/home">
          <img src="/assets/img/logo.png" alt="SociyaSpace" style={{ height: "40px" }} />
        </Link>

        {/* Toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center gap-3">

            {/* Chat icon */}
            <li className="nav-item position-relative">
              <Link className="navbar-brand" to="/chatbox">
                <i className="bi bi-chat-dots fs-5 text-secondary"></i>
              </Link>
            </li>

            {/* Notification icon */}
            <li className="nav-item position-relative">
              <i className="bi bi-bell fs-5 text-secondary"></i>
            </li>

            {/* Friend request dropdown */}
            <li className="nav-item dropdown position-relative">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                id="friendDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-person-fill-add fs-5 text-secondary"></i>
                {requestCount > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {requestCount}
                  </span>
                )}
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="friendDropdown" style={{ minWidth: "250px" }}>
                {requests.length > 0 ? (
                  requests.map((req) => (
                    <li key={req._id} className="d-flex justify-content-between align-items-center px-2 py-1">
                      <span>{req.requester?.fullname || req.requester?.username}</span>
                      <button
                        className="btn btn-sm btn-success"
                        onClick={() => acceptRequest(req._id)}
                      >
                        Accept
                      </button>
                    </li>
                  ))
                ) : (
                  <li className="text-center text-muted py-2">No Requests</li>
                )}
              </ul>
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
                <li>
                  <Link className="dropdown-item" to="/Profile">
                    <i className="bi bi-person me-2"></i> Profile
                  </Link>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <Link className="dropdown-item" to="/logout">
                    <i className="bi bi-wrench me-2"></i> Settings
                  </Link>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <button className="dropdown-item" onClick={handleLogout}>
                    <i className="bi bi-box-arrow-right me-2"></i> Logout
                  </button>
                </li>
              </ul>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
