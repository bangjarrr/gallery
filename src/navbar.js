import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

const NavbarComp = () => {
    const scrollY = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <div className="fixed-top nav-bg py-2">
            <Navbar variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/" className="fw-bold fs-4">Gallery | Alfajjar</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto text-center ">
                            <Button
                                className="mx-5 border-0"
                                variant="outline-light"
                                onClick={() => window.location.href = "http://alfajjar.vercel.app"}
                            >
                                Home
                            </Button>
                            <Button
                                className="mx-5 border-0"
                                variant="outline-light"
                                onClick={() => scrollY("gallery")}
                            >
                                Gallery
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavbarComp;
