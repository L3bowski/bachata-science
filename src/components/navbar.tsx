import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => (
    <nav className="navbar navbar-expand-md fixed-top custom-navbar bg-primary">
        <div className="container">
            <Link className="navbar-brand" to="/?$modena=bachata-science">
                Bachata Science
            </Link>
            <button
                className="navbar-toggler navbar-toggler-right"
                type="button"
                data-toggle="collapse"
                data-target="#navbarResponsive"
                aria-controls="navbarResponsive"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span style={{ fontSize: '25px' }}>💃</span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item mx-0 mx-md-1">
                        <Link
                            className="nav-link py-3 px-0 px-md-3 rounded"
                            to="/stages?$modena=bachata-science"
                        >
                            Fases
                        </Link>
                    </li>
                    <li className="nav-item mx-0 mx-md-1">
                        <Link
                            className="nav-link py-3 px-0 px-md-3 rounded"
                            to="/glossary?$modena=bachata-science"
                        >
                            Glosario
                        </Link>
                    </li>
                    <li className="nav-item mx-0 mx-md-1">
                        <Link
                            className="nav-link py-3 px-0 px-md-3 rounded"
                            to="/positions?$modena=bachata-science"
                        >
                            Posiciones
                        </Link>
                    </li>
                    <li className="nav-item mx-0 mx-md-1">
                        <Link
                            className="nav-link py-3 px-0 px-md-3 rounded"
                            to="/steps?$modena=bachata-science"
                        >
                            Pasos
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);
