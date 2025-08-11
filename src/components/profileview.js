import React from "react";

function profilepanel(){

    return(
         <div className="card shadow-sm">
              <img
                src="https://picsum.photos/seed/banner/500/150"
                className="card-img-top"
                alt="Banner"
              />
              <div className="card-body text-center">
                <img
                  src="https://i.pravatar.cc/80"
                  alt="Avatar"
                  className="rounded-circle border border-3 border-white"
                  style={{ marginTop: "-40px" }}
                />
                <h5 className="mt-2 mb-0 fw-bold">Aaman Mujawar</h5>
                <small className="text-muted">Web Developer at StackBros</small>
                <p className="text-muted mt-2" style={{ fontSize: "0.9rem" }}>
                  I'd love to change the world, but they won’t give me the
                  source code.
                </p>

                <div className="d-flex justify-content-around border-top pt-2">
                  <div>
                    <strong>256</strong>
                    <br />
                    <small className="text-muted">Posts</small>
                  </div>
                  <div>
                    <strong>2.5K</strong>
                    <br />
                    <small className="text-muted">Followers</small>
                  </div>
                  <div>
                    <strong>365</strong>
                    <br />
                    <small className="text-muted">Following</small>
                  </div>
                </div>

                <hr />
                {/* Navigation */}
                <ul className="list-unstyled text-start ps-2">
                  <li>
                    <i className="bi bi-house-door me-2"></i>Feed
                  </li>
                  <li>
                    <i className="bi bi-person-lines-fill me-2"></i>Connections
                  </li>

                  <li>
                    <i className="bi bi-chat-dots me-2"></i>Chats
                  </li>
                  <li>
                    <i className="bi bi-bell me-2"></i>Notifications
                  </li>
                  <li>
                    <i className="bi bi-gear me-2"></i>Settings
                  </li>
                </ul>
                <div className="text-center mt-2">
                  <a href="/Profile" className="text-primary text-decoration-none">
                    View Profile
                  </a>
                </div>
              </div>
            </div>
    )
}


export default profilepanel