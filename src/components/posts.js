import { useState } from "react";
import axios from "axios";

const Post = ({ userId }) => {
 const [text, setText] = useState("");
const [mediaFiles, setMediaFiles] = useState([]);
const [privacy, setPrivacy] = useState("Everyone");

const handleFileInput = () => {
  document.getElementById("mediaInput").click();
};

const handleFileChange = (e) => {
  setMediaFiles([...e.target.files]);
};

const handlePost = async () => {
  const userId = localStorage.getItem("user_id"); // ✅ Get _id from localStorage

  if (!userId) {
    alert("User not logged in!");
    return;
  }

  if (!text && mediaFiles.length === 0) {
    alert("Please write something or upload media.");
    return;
  }

  const formData = new FormData();
  formData.append("author", userId); // ✅ Set author from localStorage
  formData.append("text", text);
  formData.append("privacy", privacy);
  mediaFiles.forEach((file) => formData.append("media", file));

  try {
    await axios.post("http://localhost:8000/api/v1/posts/create", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    setText("");
    setMediaFiles([]);
    alert("Post uploaded!");
  } catch (err) {
    console.error(err);
    alert("Failed to upload post");
  }
};

  return (
    <>
      {/* Hidden File Input */}
      <input
        type="file"
        id="mediaInput"
        accept="image/*,video/*"
        multiple
        style={{ display: "none" }}
        onChange={handleFileChange}
      />

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
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <div className="d-flex justify-content-between align-items-center mt-3">
          <div className="d-flex flex-column flex-md-row gap-2 w-100">
            <button
              className="btn btn-outline-primary btn-sm"
              onClick={handleFileInput}
            >
              <i className="bi bi-image me-1"></i> Image
            </button>
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={handleFileInput}
            >
              <i className="bi bi-camera-video me-1"></i> Video
            </button>
            {/* Post Button */}
            <button className="btn btn-success btn-sm" onClick={handlePost}>
              <i className="bi bi-send me-1"></i> Post
            </button>
          </div>

          <div className="dropdown">
            <button
              className="btn btn-outline-secondary btn-sm dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
            >
              <i className="bi bi-shield-lock me-1"></i> {privacy}
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => setPrivacy("Everyone")}
                >
                  <i className="bi bi-globe me-2"></i> Everyone
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => setPrivacy("Friends Only")}
                >
                  <i className="bi bi-people me-2"></i> Friends Only
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => setPrivacy("Private")}
                >
                  <i className="bi bi-lock me-2"></i> Private
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
