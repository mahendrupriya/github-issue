import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

export default function Navigation({ totalIssue, authorValues, onAuthorChange, setauthorValues }) {
    function changeauthor(author) {
        setauthorValues(author)
    }
    return (
        <Navbar collapseOnSelect expand="lg" className="navbar navbar-expand-lg navbar-light bg-light">
            <Navbar.Toggle/>
            <Navbar.Collapse>
                <Nav className="mr-auto">
                    <Nav.Link href="#features"><span className="px-1"><svg className="octicon-issue-opened" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fillRule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"></path></svg></span>
                        {totalIssue} Open</Nav.Link>
                </Nav>
                <Nav>
                    <NavDropdown title="Author" id="collasible-nav-dropdown">
                        <NavDropdown.Header href="#action/3.1">Filter by Author</NavDropdown.Header>
                        <NavDropdown.ItemText>
                            <input onChange={onAuthorChange} value={authorValues.query1} name="query1" type="text" id="dropdown-custom-components" className="w-auto form-control" />
                        </NavDropdown.ItemText>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={() => changeauthor("priyamahendru26")} >priyamahendru26</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Label" id="collasible-nav-dropdown">
                        <NavDropdown.Header href="#action/3.1">Filter by label
                        </NavDropdown.Header>
                        <NavDropdown.ItemText><input type="text" id="dropdown-custom-components" className="w-auto form-control" /></NavDropdown.ItemText>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Projects" id="collasible-nav-dropdown">
                        <NavDropdown.Header href="#action/3.1">Filter by project</NavDropdown.Header>
                        <NavDropdown.ItemText><input type="text" id="dropdown-custom-components" className="w-auto form-control" /></NavDropdown.ItemText>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Milestones" id="collasible-nav-dropdown">
                        <NavDropdown.Header href="#action/3.1">Filter by milestone</NavDropdown.Header>
                        <NavDropdown.ItemText><input type="text" id="dropdown-custom-components" className="w-auto form-control" /></NavDropdown.ItemText>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Assignee" id="collasible-nav-dropdown">
                        <NavDropdown.Header href="#action/3.1">Filter by who’s assigned</NavDropdown.Header>
                        <NavDropdown.ItemText><input type="submit" id="dropdown-custom-components" className="w-auto form-control" /></NavDropdown.ItemText>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Sort" id="collasible-nav-dropdown">
                        <NavDropdown.Header href="#action/3.1">Sort by</NavDropdown.Header>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Newest</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Oldest</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Most commented</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Least commented</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Recently updated</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Least recently updated</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}