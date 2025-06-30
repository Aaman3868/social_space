import React from 'react';

const Post = () => {
  return (
    <div className="card shadow-sm mb-4">
     {/* Header */}
  <div className="card-header d-flex justify-content-between align-items-center bg-white">
    <div className="d-flex align-items-center">
      <img
        src="https://i.pravatar.cc/40"
        alt="User"
        className="rounded-circle me-2"
        width="40"
        height="40"
      />
      <div>
        <h6 className="mb-0 fw-bold">Aaman Mujawar</h6>
        <small className="text-muted">Just now</small>
      </div>
    </div>
    <div className="dropdown">
      <button
        className="btn btn-sm"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i className="bi bi-three-dots fs-5 text-secondary"></i>
      </button>
      <ul className="dropdown-menu dropdown-menu-end">
        <li><button className="dropdown-item">Block</button></li>
        <li><button className="dropdown-item">Report</button></li>
      </ul>
    </div>
  </div>

  {/* Content */}
  <div className="card-body">
    <p>This is a sample post with an image. You can replace it with dynamic data.</p>
    <img
      src="https://picsum.photos/600/300"
      alt="Post"
      className="img-fluid rounded"
    />
  </div>

  {/* Footer buttons */}
  <div className="card-footer bg-white">
    <div className="d-flex justify-content-around mb-2">
      <button className="btn btn-light d-flex align-items-center">
        <i className="bi bi-hand-thumbs-up me-1"></i> Like
      </button>
      <button className="btn btn-light d-flex align-items-center">
        <i className="bi bi-chat-left-text me-1"></i> Comment
      </button>
      <button className="btn btn-light d-flex align-items-center">
        <i className="bi bi-share me-1"></i> Share
      </button>
    </div>

    {/* Comments */}
    <div className="mt-2">
      <div className="d-flex mb-2">
        <img
          src="https://i.pravatar.cc/30?img=11"
          alt="Commenter"
          className="rounded-circle me-2"
          width="30"
          height="30"
        />
        <div>
          <div className="bg-light rounded px-3 py-2">
            <strong>Lori Ferguson</strong>
            <p className="mb-0 small">Wow, this is awesome!</p>
          </div>
        </div>
      </div>

      <div className="d-flex">
        <img
          src="https://i.pravatar.cc/30?img=14"
          alt="Commenter"
          className="rounded-circle me-2"
          width="30"
          height="30"
        />
        <div>
          <div className="bg-light rounded px-3 py-2">
            <strong>Judy Nguyen</strong>
            <p className="mb-0 small">Looks great! Keep it up 🔥</p>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  );
};

export default Post;
