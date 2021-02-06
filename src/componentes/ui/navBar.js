import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Colabor0
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/particulares"
                    >
                        Particulares
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/empresas"
                    >
                        Empresas
                    </NavLink>
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/voluntariado"
                    >
                        Voluntarios
                    </NavLink>
                </div>
            </div>

            <NavLink 
                activeClassName="active"
                className="nav-item nav-link" 
                exact
                to="/login"
            >
                Logout
            </NavLink>
        </nav>
    )
}