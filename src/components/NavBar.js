import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo2 from "../assets/img/logo2.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo2} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
  <Nav className="ms-auto">
    <Nav.Link
      href="#home"
      className={activeLink === "home" ? "active navbar-link" : "navbar-link"}
      onClick={() => onUpdateActiveLink("home")}
    >
      Home
    </Nav.Link>
    <Nav.Link
      href="#skills"
      className={activeLink === "skills" ? "active navbar-link" : "navbar-link"}
      onClick={() => onUpdateActiveLink("skills")}
    >
      Skills
    </Nav.Link>
    <Nav.Link
      href="#projects"
      className={activeLink === "projects" ? "active navbar-link" : "navbar-link"}
      onClick={() => onUpdateActiveLink("projects")}
    >
      Services & Projects
    </Nav.Link>
    <Nav.Link
      href="https://promptbase.com/profile/artistrybynikhil"
      target="_blank"
      className={activeLink === "promptbase" ? "active navbar-link" : "navbar-link"}
      onClick={() => onUpdateActiveLink("promptbase")}
    >
      ArtistryByNikhil
    </Nav.Link>
    <Nav.Link
      href="https://www.youtube.com/@MrNikhil11"
      target="_blank"
      className={activeLink === "youtube" ? "active navbar-link" : "navbar-link"}
      onClick={() => onUpdateActiveLink("youtube")}
    >
      YouTube
    </Nav.Link>
    <Nav.Link
      href="https://github.com/nikhillokare"
      target="_blank"
      className={activeLink === "github" ? "active navbar-link" : "navbar-link"}
      onClick={() => onUpdateActiveLink("github")}
    >
      GitHub
    </Nav.Link>
  </Nav>
  <Nav className="mx-auto">
    <Nav.Item>
      <span className="navbar-text">
        <div className="social-icon">
          <a href="https://www.linkedin.com/in/nikhil-lokare-b45930205/" target="_blank">
            <img src={navIcon1} alt="" />
          </a>
          <a href="https://www.facebook.com/nikhil.lokare.503/" target="_blank">
            <img src={navIcon2} alt="" />
          </a>
          <a href="https://www.instagram.com/artistrybynikhil24/" target="_blank">
            <img src={navIcon3} alt="" />
          </a>
        </div>
      </span>
    </Nav.Item>
  </Nav>
</Navbar.Collapse>

        </Container>
      </Navbar>
    </Router>
  );
};
