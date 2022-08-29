import { useState, useEffect, ReactComponent } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
// import { navIcon1 } from "../assets/img/nav-icon1.png";
// import { navIcon2 } from "../assets/img/nav-icon2.png";
// import { navIcon3 } from "../assets/img/nav-icon3.png";

import logo from '../assets/img/logo_rect.svg';
import logo1 from '../assets/img/nav-icon1.svg';
import logo2 from '../assets/img/nav-icon2.svg';
import logo3 from '../assets/img/nav-icon3.svg';


const NavBar = () => {
    const [activeLink, setactiveLink] = useState('home'); 
    const [scrolled, setScrolld] = useState(false); 

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolld(true);
            } else {
                setScrolld(false);
            }
        }

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setactiveLink(value);
    }

    return (
        <Navbar expand="lg" className={ "scrolled" ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} className="App-logo" alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggle-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home"
                            className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('home')}
                        >Home</Nav.Link>
                        <Nav.Link href="#skill"
                            className={activeLink === 'skill' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('skill')}
                        >Skills</Nav.Link>
                        <Nav.Link href="#project"
                            className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('project')}
                        >Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="#"><img src={logo1} /></a>
                            <a href="#"><img src={logo2} /></a>
                            <a href="#"><img src={logo3} /></a>
                        </div>
                        <button className="vvd" onclick={() => console.log("Love")}>
                            <span>Let's connect</span>
                        </button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
 
export default NavBar;