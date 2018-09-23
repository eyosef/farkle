import React from 'react';
import { NavLink } from 'react-router-dom';

const Discuss = () => (
    <div>
        <h3>Discussion Thread</h3>
        
        <NavLink to="/submitcomment" activeClassName="is-active">Submit a Comment</NavLink><br></br>
    </div>
);

export default Discuss;