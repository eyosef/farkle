import React from 'react';
import { NavLink } from 'react-router-dom';

const Welcome = () => (
    <div>
        <br></br>
        <h1> Welcome to Farkle! </h1>
        <p>This is a safe space to discuss all things related to the game Farkle.</p>
        <NavLink to="/submitcomment" activeClassName="is-active">Submit a Comment</NavLink><br></br>
    </div>
);

export default Welcome;