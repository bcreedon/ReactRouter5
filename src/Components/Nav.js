import React from 'react';
import '../App.css';
import{Link} from 'react-router-dom'
import { Dropdown } from 'react-bootstrap';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import {ButtonGroup} from 'react-bootstrap';

function Nav() {
    const navStyle = {
        color: 'white'
    }
  return (
<nav>
    <ul className="nav-Links">
<Dropdown  as={ButtonGroup}>
<Dropdown.Toggle variant="success">
    CRM
  </Dropdown.Toggle>
    <Dropdown.Menu>
        <Dropdown.Item as={Link} to='/Emails' class="ddlCRM">Emails</Dropdown.Item>
        <Dropdown.Item as={Link} to='/Orders' class="ddlCRM">Orders</Dropdown.Item>
    </Dropdown.Menu >
</Dropdown>

        <Link to='/IT' style={navStyle}>
            <li>IT</li>
        </Link>
        <Link to='/OMNI' style={navStyle}>
            <li>OMNI</li>
        </Link>        
    </ul>
</nav>
  );
}

export default Nav;