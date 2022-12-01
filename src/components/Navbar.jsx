import { Link, NavLink } from "react-router-dom";
import Sidebar from "./SideBar";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <nav className="d-flex justify-content-between align-items-center p-3 flex-column flex-md-row">
        <div className="logo  d-flex justify-content-between align-items-center">
          <Link to="/"></Link>
          <button
            className="hamburger fs-2 d-flex justify-content-between align-items-center d-md-none border-0 bg-transparent"
            onClick={() => setShowMenu(!showMenu)}
          >
            <GiHamburgerMenu />
          </button>
        </div>
        {showMenu ? (
          <div className="links d-flex fs-4 flex-column flex-md-row gap-md-4 flex-wrap">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "active-link border-1 border-bottom border-danger text-center"
                  : "inactive-link border-1 border-bottom border-danger text-center"
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "active-link border-1 border-bottom border-danger text-center"
                  : "inactive-link border-1 border-bottom border-danger text-center"
              }
              to="/skills"
            >
              Skills
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "active-link border-1 border-bottom border-danger text-center"
                  : "inactive-link border-1 border-bottom border-danger text-center"
              }
              to="/projects"
            >
              Projects
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "active-link border-1 border-bottom border-danger text-center"
                  : "inactive-link border-1 border-bottom border-danger text-center"
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </div>
        ) : (
          <div className="links d-md-flex gap-4 fs-4 d-none ">
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-link fw-bold" : "inactive-link"
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-link fw-bold" : "inactive-link"
              }
              to="/skills"
            >
              Skills
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-link fw-bold " : "inactive-link"
              }
              to="/projects"
            >
              Projects
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-link fw-bold" : "inactive-link"
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </div>
        )}
      </nav>
      <div>
        <Sidebar />
      </div>
    </>
  );
};

export default Navbar;
