import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.scss";
import { useEffect, useState } from "react";
import NewRequest from "../../utils/NewRequest";


const Navbar = () => {

  const [active, setActive] = useState(false);
  const [optionOpen, setOptionOpen] = useState(false);
  const navigate = useNavigate();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true): setActive(false);
  }
  const { pathname } = useLocation();

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    //now cleanup function of useEffect
    return () => {
      window.removeEventListener("scroll", isActive);
    }
  }, []);

  let storedData = localStorage.getItem("currentUser");
  let currentUser;
  if (storedData != null) {
    currentUser = JSON.parse(storedData).info;
  } else {
    currentUser = null;
  }

  const handleLogout = async () => {
    await NewRequest.post("/auth/logout");
    localStorage.removeItem("currentUser");
    navigate("/");
  }
  return (
    <div className={ (active || pathname !== "/") ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link to="/" className="link">
            <span className="text">freelance</span>
          </Link>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Business</span>
          <span>Explore</span>
          <span>English</span>
          {!currentUser && <Link to = "/login" className="link"><span>Sign in</span></Link>}
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {!currentUser && <Link to="/register" className="link"><button>Join</button></Link>}
          {currentUser && (
            <div className="user" onClick={() => {setOptionOpen(!optionOpen)}}>
              <img src= {currentUser.img || "https://images.unsplash.com/photo-1689631137053-ba78cc134cd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80"} alt="user"></img>
              <span>{currentUser.username}</span>
               {/* Menu Options of User  */}
              {optionOpen &&
                (
                  <div className="options">
                    {
                      currentUser?.isSeller && (
                        <>
                          <Link to = "/mygigs" className="link">Gigs</Link>
                          <Link to = "/add" className="link">Add new Gigs</Link>
                        </>
                      )
                    }
                    <Link to = "/orders" className="link">Orders</Link>
                    <Link to = "/messages" className="link">Messages</Link>
                  <Link to="" className="link" onClick={handleLogout}>Logout</Link>
                  </div>
                )
              }
            </div>
          )}
        </div>
      </div>

      { (active || pathname !== "/") &&
        <>
          <hr />
          <div className="menu">
            <Link to= "/" className="link">Graphic & Design</Link>
            <Link to= "/" className="link">Video & Animation</Link>
            <Link to= "/" className="link">Writing & Translation</Link>
            <Link to= "/" className="link">AI Services</Link>
            <Link to= "/" className="link">Digital Marketing</Link>
            <Link to="/" className="link">Music & Audio</Link>
            <Link to="/" className="link">Development & Technology</Link>
            <Link to="/" className="link">Business</Link>
            <Link to= "/" className="link">Lifestyle</Link>
        </div>
        </>
      }
    </div>
  )
}

export default Navbar