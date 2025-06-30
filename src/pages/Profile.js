import React from "react";
import Post from "../components/post";
import Posts from "../components/posts";

function Profile(){
return(
     <div className="container mt-3">
      <div className="row">
        {/* Profile Info Section */}
        <div className="col-md-8">
          <div className="card mb-3">
            <div className="position-relative">
              <img
                src="https://picsum.photos/900/200"
                className="card-img-top"
                alt="Cover"
              />
              <img
                src="https://i.pravatar.cc/100"
                className="rounded-circle border border-white position-absolute"
                style={{
                  width: "100px",
                  left: "20px",
                  bottom: "-30px",
                }}
                alt="Profile"
              />
            </div>

            <div className="card-body pt-5">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <h5 className="mb-0 fw-bold">
                    Sam Lanson <i className="bi bi-patch-check-fill text-primary ms-1"></i>
                  </h5>
                  <small className="text-muted">250 connections</small>
                </div>
                <div className="d-flex gap-2">
                  <button className="btn btn-danger btn-sm">
                    <i className="bi bi-pencil-fill me-1"></i> Edit profile
                  </button>
                  <button className="btn btn-light btn-sm">
                    <i className="bi bi-three-dots"></i>
                  </button>
                </div>
              </div>

              <div className="mt-2 text-muted small">
                <div><i className="bi bi-briefcase me-2"></i>Lead Developer</div>
                <div><i className="bi bi-geo-alt me-2"></i>New Hampshire</div>
                <div><i className="bi bi-calendar me-2"></i>Joined on Nov 26, 2019</div>
              </div>
            </div>

            <div className="border-top px-3">
              <ul className="nav nav-tabs mt-2">
                <li className="nav-item">
                  <a className="nav-link active" href="#">Feed</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About</a>
                </li>
              
                <li className="nav-item">
                  <a className="nav-link" href="#">Media</a>
                </li>
               
          
               
              </ul>
            </div>
          </div>
                
          {/* Share Post Section */}
          <div className="card mb-3">
             <Posts/>
          
          </div>

          <div>
            <Post/>
          </div>
     
        </div>

        {/* Sidebar - About & Experience */}
        <div className="col-md-4">
          {/* About Card */}
          <div className="card mb-3">
            <div className="card-body">
              <h6 className="fw-bold">About</h6>
              <p className="small text-muted">
                He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire
                difficulty gay assistance joy.
              </p>
              <ul className="list-unstyled small text-muted">
                <li><i className="bi bi-cake me-2"></i><strong>Born:</strong> October 20, 1990</li>
                <li><i className="bi bi-heart me-2"></i><strong>Status:</strong> Single</li>
                <li><i className="bi bi-envelope me-2"></i><strong>Email:</strong> abc@xyz.com</li>
              </ul>
            </div>
          </div>

          {/* Experience Card */}
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h6 className="fw-bold">Experience</h6>
                <button className="btn btn-sm btn-light"><i className="bi bi-plus"></i></button>
              </div>

              {[
                {
                  company: "Apple Computer, Inc.",
                  duration: "May 2015 – Present",
                  note: "Employment Duration 8 mos",
                  logo: "bi bi-chat-dots-fill",
                  color: "text-success"
                },
                {
                  company: "Microsoft Corporation",
                  duration: "May 2017 – Present",
                  note: "Employment Duration 1 yrs 5 mos",
                  logo: "bi bi-envelope-fill",
                  color: "text-danger"
                },
                {
                  company: "Tata Consultancy Services.",
                  duration: "May 2022 – Present",
                  note: "Employment Duration 6 yrs 10 mos",
                  logo: "bi bi-box-fill",
                  color: "text-warning"
                }
              ].map((exp, idx) => (
                <div key={idx} className="d-flex mb-3">
                  <div className={`fs-3 me-3 ${exp.color}`}>
                    <i className={exp.logo}></i>
                  </div>
                  <div>
                    <h6 className="mb-0">{exp.company}</h6>
                    <small className="text-muted d-block">{exp.duration}</small>
                    <small className="text-muted">{exp.note}</small>
                    <div>
                      <button className="btn btn-sm btn-link p-0">Edit</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
);
}

export default Profile