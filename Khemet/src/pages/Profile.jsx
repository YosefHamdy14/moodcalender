import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import '../css/profile.css'

export default function Profile() {
  const { user, logout } = useAuth();
  if (!user) {
  return <h2>Please login first</h2>;
}


  return (
    <main className="profile-main" >
      <div className="profile-hero">
        <div className="profile-hero-cont">
        <div className="profile-data">
            <div className="profile-pic">
            {user.profilePic ? (
              <img src={user.profilePic} alt="profile" />
            ) : (
                  <div className="placeholder-pic"><svg
                    className="placeholder-pic-svg"
                  width="100"
                  height="100"
                  viewBox="120 1990 40 40"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#3A2A1A"
                >
                  <path d="M134,2008.99998 C131.783496,2008.99998 129.980955,2007.20598 129.980955,2004.99998 C129.980955,2002.79398 131.783496,2000.99998 134,2000.99998 C136.216504,2000.99998 138.019045,2002.79398 138.019045,2004.99998 C138.019045,2007.20598 136.216504,2008.99998 134,2008.99998 M137.775893,2009.67298 C139.370449,2008.39598 140.299854,2006.33098 139.958235,2004.06998 C139.561354,2001.44698 137.368965,1999.34798 134.722423,1999.04198 C131.070116,1998.61898 127.971432,2001.44898 127.971432,2004.99998 C127.971432,2006.88998 128.851603,2008.57398 130.224107,2009.67298 C126.852128,2010.93398 124.390463,2013.89498 124.004634,2017.89098 C123.948368,2018.48198 124.411563,2018.99998 125.008391,2018.99998 C125.519814,2018.99998 125.955881,2018.61598 126.001095,2018.10898 C126.404004,2013.64598 129.837274,2010.99998 134,2010.99998 C138.162726,2010.99998 141.595996,2013.64598 141.998905,2018.10898 C142.044119,2018.61598 142.480186,2018.99998 142.991609,2018.99998 C143.588437,2018.99998 144.051632,2018.48198 143.995366,2017.89098 C143.609537,2013.89498 141.147872,2010.93398 137.775893,2009.67298" />
                </svg></div>
            )}
            </div>
          <div className="profile-hero-personal">
          <p className="profile-hero-type">EXPLORER</p>
          <p className="profile-hero-name"> {user.name}</p>
            <p className="profile-hero-email"> <svg
              className="hero-email-svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"
                stroke="#F5EDD7"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect
                x="3"
                y="5"
                width="18"
                height="14"
                rx="2"
                stroke="#F5EDD7"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>{user.email}</p>
              </div>
          </div>
          <div className="profile-hero-btns">
            <Link  className="profile-hero-btns-gen" to="./trip-plan"><svg className="create-svg" fill="#2A1A08" width="24px" height="20px" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg" stroke="#2A1A08" strokeWidth="8.096"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M197.00781,132.74023l-52.16015-19.21777a3.99186,3.99186,0,0,1-2.3711-2.37012L123.25977,58.99219a11.99948,11.99948,0,0,0-22.51954,0L81.52246,111.15234a3.99186,3.99186,0,0,1-2.37012,2.3711L26.99219,132.74023a11.99948,11.99948,0,0,0,0,22.51954l52.16015,19.21777a3.99186,3.99186,0,0,1,2.3711,2.37012l19.21679,52.16015a11.99948,11.99948,0,0,0,22.51954,0l19.21679-52.16015h.001a3.99186,3.99186,0,0,1,2.37012-2.3711l52.16015-19.21679a11.99948,11.99948,0,0,0,0-22.51954Zm-2.76562,15.01368L142.082,166.96973a11.98076,11.98076,0,0,0-7.11133,7.1123l-19.21679,52.16016a4.00076,4.00076,0,0,1-7.50782,0L89.03027,174.082a11.98076,11.98076,0,0,0-7.1123-7.11133L29.75781,147.75391a4.00076,4.00076,0,0,1,0-7.50782L81.918,121.03027a11.98076,11.98076,0,0,0,7.11133-7.1123l19.21679-52.16016a4.00076,4.00076,0,0,1,7.50782,0L134.96973,113.918a11.98076,11.98076,0,0,0,7.1123,7.11133l52.16016,19.21679a4.00076,4.00076,0,0,1,0,7.50782ZM148,40a4.0002,4.0002,0,0,1,4-4h20V16a4,4,0,0,1,8,0V36h20a4,4,0,0,1,0,8H180V64a4,4,0,0,1-8,0V44H152A4.0002,4.0002,0,0,1,148,40Zm96,48a4.0002,4.0002,0,0,1-4,4H228v12a4,4,0,0,1-8,0V92H208a4,4,0,0,1,0-8h12V72a4,4,0,0,1,8,0V84h12A4.0002,4.0002,0,0,1,244,88Z"></path> </g></svg>
               Plan a trip</Link>
            <Link className="profile-hero-btns-add"> <span className="pf-hero-add-svg">+</span>Add a place</Link>
          </div>
        </div>
        
      </div>
      <div className="pf-link">
        <div className="pf-link-cont">
          <Link  to="/favorites" className="pf-linkat">
            <div className="pf-linkat-data">
              <div className="pf-linkat-svg"></div>
            <div className="pf-linkat-det">
              <p className="pf-link-num">{user.favorites?.length || 0}</p>
              <p className="pf-link-title">FAVORITES</p>
            </div>
            </div>
          </Link>
          <Link to="/SavedTrips" className="pf-linkat">
            <div className="pf-linkat-data">
              <div className="pf-linkat-svg"></div>
            <div className="pf-linkat-det">
              <p className="pf-link-num">{user.savedTrips?.length || 0}</p>
              <p className="pf-link-title">SAVED TRIPS</p>
            </div>
            </div>
          </Link>
          <Link to="/savedtrips" className="pf-linkat">
            <div className="pf-linkat-data">
               <div className="pf-linkat-svg"></div>
            <div className="pf-linkat-det">
              <p className="pf-link-num">{user.savedTrips?.length || 0}</p>
              <p className="pf-link-title">GENERATED TRIPS</p>
            </div>
            </div>
          </Link>
          <Link to="/contributions" className="pf-linkat">
            <div className="pf-linkat-data">
               <div className="pf-linkat-svg"></div>
            <div className="pf-linkat-det">
              <p className="pf-link-num">{user.contributions?.length || 0}</p>
              <p className="pf-link-title">CONTRIBUTIONS</p>
            </div>
            </div>
          </Link>

        </div>
     </div>

    </main>
  );
}