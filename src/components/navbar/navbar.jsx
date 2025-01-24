import React from 'react'
import style from "./navbar.module.css"
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className={style.navbar}>
            <p>Movie Application</p>
            <ul className={style.link}>
                <li><Link to="/" tabIndex="0" aria-label="Home Page"> Home </Link></li>
                <li><Link to="/movies" tabIndex="0" aria-label="All Movies">All Movies</Link> </li>
                <li><Link to="/add" tabIndex="0" aria-label="Add" >Add</Link></li>
                <li><Link to="/aboutus" tabIndex="0" aria-label="About us">About us</Link></li>

            </ul>

        </div>
    )
}

export default Navbar
