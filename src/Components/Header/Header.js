import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand to="/" className="fs-8">
                        Dream Bag
                    </Navbar.Brand>
                    <Nav className="ms-auto">
                        <CustomLink to="/">Home</CustomLink>
                        <CustomLink to="/reviews">Reviews</CustomLink>
                        <CustomLink to="/dashboard">Dashboard</CustomLink>
                        <CustomLink to="/blogs">Blogs</CustomLink>
                        <CustomLink to="/about">About</CustomLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
