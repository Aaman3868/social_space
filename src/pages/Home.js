import React from "react";
import App from "../App";
import { FcGoogle } from "react-icons/fc";
import Post from "../components/post";
import Posts from "../components/posts";
import Follow_friends from "../components/follow_friends"
import Profilepanel from "../components/profileview"

function Home() {
  return (
    <div className="container mt-3">
      <div className="row">
        {/* Left Sidebar */}
        <div className="col-md-3 d-none d-md-block">
        <Profilepanel />
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
          <Follow_friends />
          </div>

        
        </div>
      </div>
    </div>
  );
}

export default Home;
