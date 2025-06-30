import React from "react";

function Posts() {
  return (
    <div className="card-body">
      <div className="d-flex mb-3">
        <img
          src="https://i.pravatar.cc/40"
          alt="User"
          className="rounded-circle me-2"
          width="40"
          height="40"
        />
        <input
          type="text"
          className="form-control rounded-pill"
          placeholder="What's on your mind?"
        />
      </div>

      <div className="d-flex justify-content-between align-items-center mt-3">
        <div className="d-flex flex-column flex-md-row gap-2 w-100">
          <button className="btn btn-outline-primary btn-sm">
            <i className="bi bi-image me-1"></i> Image
          </button>
          <button className="btn btn-outline-danger btn-sm">
            <i className="bi bi-camera-video me-1"></i> Video
          </button>
          {/* Post Button */}
          <button className="btn btn-success btn-sm">
            <i className="bi bi-send me-1"></i> Post
          </button>
        </div>

        <div className="dropdown">
          <button
            className="btn btn-outline-secondary btn-sm dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
          >
            <i className="bi bi-shield-lock me-1"></i> Privacy
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            <li>
              <button className="dropdown-item">
                <i className="bi bi-globe me-2"></i> Everyone
              </button>
            </li>
            <li>
              <button className="dropdown-item">
                <i className="bi bi-people me-2"></i> Friends Only
              </button>
            </li>
            <li>
              <button className="dropdown-item">
                <i className="bi bi-lock me-2"></i> Private
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Posts;
