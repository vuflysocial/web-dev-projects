import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import TOD from '../assets/img/TOD.png';
import navIcon1 from '../assets/img/nav-icon1.svg';


export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
  <Container>
    <Navbar.Brand href="/">
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={TOD} alt="Logo" />


      </div>
    </Navbar.Brand>


        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Tokenomics</Nav.Link>
            <Nav.Link href="#project" className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('project')}>Help</Nav.Link>
            <Nav.Link href="https://linktr.ee/wtftod" className={activeLink === '' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('')}>Linktree</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://twitter.com/wtftodbsc"><img src={navIcon1} alt="" /></a>

            </div>
            <div style={{ background: "linear-gradient(90.21deg, rgba(217, 18, 7, 0.5) -5.91%, rgba(209, 121, 14, 0.5) 111.58%)", padding: "8px 10px", borderRadius: "20px", border: "1px solid rgba(255, 255, 255, 0.5)", fontSize: "20px", marginBottom: "16px", display: "inline-block" }}>


            <button className="vvd" onClick={() => console.log('connect')}><span>Buy $TOD</span></button>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
