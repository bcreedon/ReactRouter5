import React from 'react';
import '../App.css';
import {Link} from '@reach/router'
import { Dropdown } from 'react-bootstrap';
import {ButtonGroup} from 'react-bootstrap';

const navStyle = {
    color: 'white'
}
const Nav = () => (

<div className="nav">
<Dropdown  as={ButtonGroup}>
<Dropdown.Toggle variant="success">
    CRM
  </Dropdown.Toggle>
    <Dropdown.Menu>
        <Dropdown.Item as={Link} to="/Emails" class="ddlCRM">Emails</Dropdown.Item>
        <Dropdown.Item as={Link} to="/Orders" class="ddlCRM">Orders</Dropdown.Item>
    </Dropdown.Menu >
</Dropdown>

        <Link to='/IT' style={navStyle}>
            <li>IT</li>
        </Link>
        <Link to='/OMNI' style={navStyle}>
            <li>OMNI</li>
        </Link>        
</div>
);


export default Nav;