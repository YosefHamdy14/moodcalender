import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

export default function Profile() {


  return (
    <main className="profile-main" >
      <div className="profile-hero">
        <div className="profile-data">
          <input className="profile-pic" type="image" src="" alt="" />
          <p className="type">EXPLORER</p>
          <p className="profile-name"></p>

        </div>
        
       </div>
    </main>
  );
}