import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import logo from "../../../assets/logo.svg";

const NavBar = () => {

  const {user, logOut} = useContext(AuthContext);


  const handleLogOut =()=>{
    logOut()
    .then(()=>{})
    .catch(error =>{
      console.log(error.message)
    })
  }

    const navLinks = <>

    <li><NavLink
    to="/"
    className={({ isActive }) => isActive ? "underline font-bold text-orange-400" : ""} >
    Home
  </NavLink></li>
    <li><NavLink
    to="/about"
    className={({ isActive }) => isActive ? "underline font-bold text-orange-400" : ""} >
    About
  </NavLink></li>
    <li><NavLink
    to="/service"
    className={({ isActive }) => isActive ? "underline font-bold text-orange-400" : ""} >
    Services
  </NavLink></li>
    {
      user?.email 
      ? 
      <>
      <li><button onClick={handleLogOut} className="btn btn-sm btn-secondary">LogOut</button></li>
      <li><NavLink
    to="/bookings"
    className={({ isActive }) => isActive ? "underline font-bold text-orange-400" : ""} >
    My Bookings
  </NavLink></li>
      </>
      :
      <li><NavLink
    to="/login"
    className={({ isActive }) => isActive ? "underline font-bold text-orange-400" : ""} >
    Login
   </NavLink></li>
    }

    
    
    
    </>

  return (
    <div className="navbar h-24 mb-6 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
           {navLinks}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-outline btn-warning">Appointment</a>
      </div>
    </div>
  );
};

export default NavBar;
