import React from 'react';
import '../App.css';
import{Link} from 'react-router-dom'
import {Dropdown} from 'react-bootstrap';
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
<Dropdown  as={ButtonGroup}>
<Dropdown.Toggle variant="success">
    IT
  </Dropdown.Toggle>
    <Dropdown.Menu>
        <Dropdown.Item as={Link} to='/DatabaseLookup' class="ddlCRM">Database Lookup</Dropdown.Item>
    </Dropdown.Menu >
</Dropdown>
<Dropdown  as={ButtonGroup}>
<Dropdown.Toggle variant="success">
    OMNI
  </Dropdown.Toggle>
    <Dropdown.Menu>
        <Dropdown.Item as={Link} to='/ManagerLookup' class="ddlCRM">Manager Lookup</Dropdown.Item>
    </Dropdown.Menu >
</Dropdown>
      
    </ul>
</nav>
  );
}

export default Nav;