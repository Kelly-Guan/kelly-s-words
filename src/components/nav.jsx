import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import logo from '../img/logo.png';


function Nav() {
    return(
        <nav>
        <div id="h4" >
            <Link to="/"><a><img src={logo}/></a></Link>
            <Link to="/wordle"><a>my wordle</a></Link>
            <Link to="/candycrush"><a>candycrush</a></Link>
            <Link to="/honey"><a>honey</a></Link>
        </div>
      </nav>
    )
}
export default Nav;
