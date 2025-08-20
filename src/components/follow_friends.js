import React, { useEffect, useState } from "react";
import axios from "axios";

function NewFriends() {
  const [users, setUsers] = useState([]);

  const [getrequest, SendRequest] = useState([]);

  const sentrequest = async (id) => {
  try {
    const res = await fetch(`http://localhost:8000/api/v1/friends/request/${id}`, {
      method: "POST",
      credentials: "include", // if using cookies/JWT
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    alert(data.message);
  } catch (err) {
    console.error(err);
    alert("Something went wrong");
  }
};

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/v1/users/all");
        // console.log("userfetched",res);
        const loggedInUserId = localStorage.getItem("user_id"); // your stored ID
        
         const rawData = res.data?.data || [];
         console.log("rawData:", rawData);


        const filteredUsers = rawData.filter(user => user._id !== loggedInUserId);

        setUsers(filteredUsers);


      } catch (err) {
        console.error("Error fetching users:", err);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="card-body">
      <h6 className="fw-bold mb-3">Who to follow</h6>

      {users.map((user, i) => (
        <div
          key={user._id || i}
          className="d-flex align-items-center justify-content-between mb-3"
        >
          <div className="d-flex align-items-center">
            <img
              src={user.avatar || `https://i.pravatar.cc/40?img=${i + 1}`}
              alt={user.fullname || user.username}
              className="rounded-circle me-2"
              width="40"
              height="40"
            />
            <div>
              <div className="fw-bold small mb-0">
                {user.fullname || user.username}
              </div>
              <small className="text-muted">{user.role || "User"}</small>
            </div>
          </div>
          <button
            onClick={() => sentrequest(user._id)} className={`btn btn-sm rounded-circle ${
              user.following ? "btn-primary" : "btn-light border"
            }`}
          >
            <i
              className={`bi ${
                user.following ? "bi-person-check-fill" : "bi-plus"
              }`}
            ></i>
          </button>
        </div>
      ))}

      <div className="text-center mt-2">
        <button className="btn btn-sm btn-outline-primary">
          View more
        </button>
      </div>
    </div>
  );
}

export default NewFriends;
