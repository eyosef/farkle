import React from 'react'; 
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
    <div>
        <h1> Farkle </h1>
    </div>
        <NavLink to="/" activeClassName="is-active">Welcome</NavLink><br></br>
        <NavLink to="/instructions" activeClassName="is-active">Instructions</NavLink><br></br>
        <NavLink to="/farkleinfo" activeClassName="is-active">What's Farkle?</NavLink><br></br>
        <NavLink to="/playfarkle" activeClassName="is-active">Farkle: a Simulation</NavLink><br></br>
        <NavLink to="/comments" activeClassName="is-active">Discuss</NavLink><br></br>
    </header>
);

export default Header;