import React from "react";
import PropTypes from "prop-types";

export default function NavBar(props) {
  function clrPage() {
    window.location.reload()
  }



  return (
    <div>
      <nav className={`navbar navbar-expand-lg bg-body-${props.mode} navbar-${props.mode} `}>
        <div className="container-fluid">
          <a className="navbar-brand" href=" /">
            {props.title}
          </a>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href=" /">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href=" /">
                  {props.about}
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href=" /"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li onClick={clrPage}>
                    <a className="dropdown-item" href=" /">
                      ReloadPage
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href=" /">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href=" /">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>

        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" onClick={props.toggle} role="switch" id="flexSwitchCheckDefault" />
          <label className="form-check-label mx-3 w-10" htmlFor="flexSwitchCheckDefault">{props.mode === 'dark' ? "Light" : "Dark"}</label>
        </div>
      </nav>
    </div>
  );
}

// Adding PropType
NavBar.propType = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};

//Setting defaultProps
NavBar.defaultProp = {
  title: "Set title",
  about: "About",
};