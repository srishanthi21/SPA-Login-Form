import React from "react";
import { Nav,Navbar } from "react-bootstrap";

function Header(){
    return(
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#">Seller Reviews</Navbar.Brand>
            <Nav className="ml-auto">
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#">About</Nav.Link>
                <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
        </Navbar>
    );
}
export default Header;