import React, { useEffect, useState } from "react";
import axios from "axios";

const PostsList = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/v1/posts");
      setPosts(res.data.data); // Assuming response uses ApiResponse format: { success, message, data }
    } catch (err) {
      console.error("Failed to fetch posts", err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      {posts.map((post) => (
        <div className="card shadow-sm mb-4" key={post._id}>
          {/* Header */}
          <div className="card-header d-flex justify-content-between align-items-center bg-white">
            <div className="d-flex align-items-center">
              <img
                src={post.author?.avatar || "https://i.pravatar.cc/40"}
                alt="User"
                className="rounded-circle me-2"
                width="40"
                height="40"
              />
              <div>
                <h6 className="mb-0 fw-bold">{post.author?.fullname || "Unknown"}</h6>
                <small className="text-muted">
                  {new Date(post.createdAt).toLocaleString()}
                </small>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="card-body">
            <p>{post.text}</p>
            {post.media.length > 0 && post.media[0].endsWith(".mp4") ? (
              <video controls className="img-fluid rounded">
                <source src={post.media[0]} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : post.media.length > 0 ? (
              <img
                src={post.media[0]}
                alt="Post"
                className="img-fluid rounded"
              />
            ) : null}
          </div>

          {/* Footer */}
          <div className="card-footer bg-white">
            <div className="d-flex justify-content-around mb-2">
              <button className="btn btn-light d-flex align-items-center">
                <i className="bi bi-hand-thumbs-up me-1"></i> Like
              </button>
              <button className="btn btn-light d-flex align-items-center">
                <i className="bi bi-share me-1"></i> Share
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PostsList;
