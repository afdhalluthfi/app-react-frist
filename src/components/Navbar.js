import * as React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar({children}) {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="container-fluid">
                <p className="navbar-brand" >Navbar</p>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/about">about</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/contact">contact</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/user">user</NavLink>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        <div className="container mb-5">
            {children}
        </div>
    </div>
      )
}
