import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <Link className="navbar-brand" to={"/"}>
          <img src={logo} alt="Site Logo" style={{ width: "90px" }} />
          PlayZone
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to={"/"}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/all"}>
                All
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Platforms
              </NavLink>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to={"/platform/pc"}>
                    PC
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to={"/platform/mobile&web"}
                  >
                    Mobile & Web
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sort By
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </NavLink>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to={"/category/mmorpg"}>
                    mmorpg
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to={"/category/shooter"}>
                    shooter
                  </NavLink>
                </li>

                <li>
                  <NavLink className="dropdown-item" to={"/category/sailing"}>
                    sailing
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to={"/category/permadeath"}
                  >
                    permadeath
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to={"/category/superhero"}>
                    suberhero
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to={"/category/pixel"}>
                    pixel
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
          <ul className=" list-unstyled p-0 m-0">
            {localStorage.getItem("userToken") !== null ? (
              <li className="nav-item ">
                {" "}
                <span className="nav-link cur-pointer" onClick={logout}>
                  LogOut
                </span>
              </li>
            ) : (
              <li className="nav-item ">
                {" "}
                <Link className="nav-link" to={"/register"}>
                  Login/Register
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
