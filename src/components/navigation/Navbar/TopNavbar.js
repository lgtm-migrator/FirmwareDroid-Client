import React from 'react';
import Nav from "react-bootstrap/esm/Nav";
import Navbar from "react-bootstrap/esm/Navbar";
import ThemeToggle from "../../toggle/ThemeToggle/ThemeToggle";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";


const styles = {
  grid: {
    paddingLeft: 0,
    paddingRight: 0
  },
  row: {
    marginLeft: 0,
    marginRight: 0
  },
  col: {
    paddingLeft: 0,
    paddingRight: 0
  }
};

const TopNavbar = ({ theme, toggleTheme, clientSettings, isAuthenticated }) => {
  const isLoggedIn = isAuthenticated === true;
  const isUploadActive = clientSettings.is_firmware_upload_active === true;
  const isSignupActive = clientSettings.is_signup_active === true;

  return (
    <Container fluid bg={theme} style={styles.grid}>
      <Row style={styles.row}>
        <Col style={styles.col}>
          <Navbar bg={theme} variant={theme} sticky="top">
            <Navbar.Brand href="/">FirmwareDroid</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/search">Search</Nav.Link>
              {isLoggedIn && isUploadActive && <Nav.Link href="/upload">Upload</Nav.Link>}
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
            <Nav className="pullRight">
              <ThemeToggle toggleTheme={toggleTheme} theme={theme}/>
              {isLoggedIn && <Nav.Link href="/logout">Logout</Nav.Link>}
              {isLoggedIn && <Nav.Link href="/profile">Profile</Nav.Link>}
              {!isLoggedIn && <Nav.Link href="/login">Sign in</Nav.Link>}
              {!isLoggedIn && isSignupActive && <Nav.Link href="/register">Sign up</Nav.Link>}
            </Nav>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
};

export default TopNavbar;