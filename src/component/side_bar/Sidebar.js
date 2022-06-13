import React from "react";
import { useSelector } from "react-redux";

export default function Sidebar() {
  
  const info=useSelector((state)=>state.user.detail)
  const count = useSelector((state) => state.user.message);
  return (
    <div>
      <div className="aside">
        <div className="profile">
          <img
            src="https://mir-s3-cdn-cf.behance.net/projects/404/73c56092222591.Y3JvcCwxNzk4LDE0MDYsMTQ2LDA.jpg"
            alt=""
          />
          <h1>Saurabh Anthwal</h1>
        </div>
        <div className="navigate">
          <p>
            <a href="">MY SCHEDULE</a>
          </p>
          <p>
            <a href="">MY SESSION</a>
            <span className="count">{count}</span>
          </p>
        </div>


      </div>
    </div>
  );
}
