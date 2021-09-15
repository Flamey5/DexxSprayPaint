import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });

    } 

    render() {
        return (
            <>
                <Navbar className="nav-bar navbar-dark bg-dark"  sticky="top" expand="md">
                    <div className="container">
                        <NavbarBrand className="mr-auto"><img src="/assets/images/dexx-logo.jpg" width="125px" alt="dexx logo" /> </NavbarBrand>
                        <NavbarToggler  onClick={this.toggleNav}></NavbarToggler>
                        <Collapse isOpen={this.state.isNavOpen} navbar >
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <i className="fa fa-home fa-lg" /> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                        <i className="fa fa-info fa-lg" /> About
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/gallery">
                                        <i className="fa fa-list fa-lg" /> Gallery
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </>
        );
    }
}

export default Header;