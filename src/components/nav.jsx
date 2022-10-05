import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import logo from '../img/logo.png';


function Nav() {
    return(
        <nav>
        <div id="h4" >
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><img src={logo}/></a>
            <Link to="/wordle"><a>my wordle</a></Link>
        </div>
      </nav>
    )
}
export default Nav;
