import React from "react";
import App from "../App";
import { FcGoogle } from "react-icons/fc";
import Post from "../components/post";
import Posts from "../components/posts";

function Home() {
  return (
    <div className="container mt-3">
      <div className="row">
        {/* Left Sidebar */}
        <div className="col-md-3 d-none d-md-block">
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
        </div>

        {/* Main Feed */}
        <div className="col-12 col-md-6">
          {/* Create Post */}
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <Posts />
            </div>
          </div>

          {/* Posts */}
          <Post />
          <Post />
        </div>

        {/* Right Sidebar */}
        <div className="col-md-3 d-none d-md-block">
          {/* Who to Follow */}
          <div className="card shadow-sm mb-3">
            <div className="card-body">
              <h6 className="fw-bold mb-3">Who to follow</h6>

              {[
                {
                  name: "Frances Guerrero",
                  role: "News anchor",
                  img: 1,
                  following: false,
                },
                {
                  name: "Lori Ferguson",
                  role: "Web Developer",
                  img: 2,
                  following: false,
                },
                {
                  name: "Samuel Bishop",
                  role: "News anchor",
                  img: 3,
                  following: true,
                },
                {
                  name: "Dennis Barrett",
                  role: "Web Developer at ...",
                  img: 4,
                  following: false,
                },
                {
                  name: "Judy Nguyen",
                  role: "News anchor",
                  img: 5,
                  following: false,
                },
              ].map((user, i) => (
                <div
                  key={i}
                  className="d-flex align-items-center justify-content-between mb-3"
                >
                  <div className="d-flex align-items-center">
                    <img
                      src={`https://i.pravatar.cc/40?img=${user.img}`}
                      alt={user.name}
                      className="rounded-circle me-2"
                      width="40"
                      height="40"
                    />
                    <div>
                      <div className="fw-bold small mb-0">{user.name}</div>
                      <small className="text-muted">{user.role}</small>
                    </div>
                  </div>
                  <button
                    className={`btn btn-sm rounded-circle ${
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
          </div>

          {/* Today's News */}
          <div className="card shadow-sm">
            <div className="card-body">
              <h6 className="fw-bold mb-3">Today’s news</h6>

              {[
                {
                  title: "Ten questions you should answer truthfully",
                  time: "2hr",
                },
                { title: "Five unbelievable facts about money", time: "3hr" },
                {
                  title: "Best Pinterest Boards for learning about business",
                  time: "4hr",
                },
                {
                  title: "Skills that you can learn from business",
                  time: "6hr",
                },
              ].map((news, i) => (
                <div key={i} className="mb-3">
                  <a
                    href="#"
                    className="fw-semibold d-block text-decoration-none text-dark"
                  >
                    {news.title}
                  </a>
                  <small className="text-muted">{news.time}</small>
                </div>
              ))}

              <div className="text-center">
                <a
                  href="#"
                  className="text-decoration-none small text-secondary"
                >
                  View all latest news
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
