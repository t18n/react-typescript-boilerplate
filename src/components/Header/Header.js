import React from 'react'
import { Link } from "react-router-dom";

import icon from 'Assets/images/react-icon.png'

const Header = (props) => {
  console.log(props);
  
  return (
    <nav className="navbar navbar-light bg-light navbar-expand-lg">
      <div className="container">
          <a className="navbar-brand" href="#">
            <img alt='React' src={icon} width="50" />
            {props.appName}
          </a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse float-right" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/error">Error</Link>
            </li>
          </ul> 
        </div>
      </div>
    </nav>
  );
}
export default Header