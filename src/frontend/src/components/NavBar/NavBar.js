import axios from 'axios';
import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { authCheckLoggedIn } from '../../store/actions/action';
import withErrorHandler from '../ErrorHandler/withErrorHandler';

const NavBar = () => {

    const isLoggedIn = useSelector(state => state.isLoggedIn);

    const dispatch = useDispatch();

    const logout = (e)=>{
        let url = 'http://localhost:8080/logout';
        const  logoutUser = async()=>{
            axios({
                method: 'get',
                url: url,
                responseType: 'stream',
                withCredentials: true
              }).then((res)=>{
                  dispatch(authCheckLoggedIn())
                  window.location.reload();
                  console.log(res);
              }).catch((err)=>{
                  console.log("Here")
                  console.error(err);
              })
        }
        logoutUser();
    }

    return (
        <section>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand to="#home">RECIPIIS</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link className="nav-link" to="/">Home</Link>
                            <Link className="nav-link" to="/add">Submit a Recipe</Link>
                            <Link className="nav-link" to="/about">About</Link>
                            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item to="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item to="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item to="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item to="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                        <Nav>

                            {isLoggedIn
                                ? <Link className="nav-link" to="#" onClick={(e)=>logout(e)}>Logout</Link>
                                : <>
                                    <Link className="nav-link" to="/login">Login</Link>
                                    <Link className="nav-link" to="/signup">
                                        Sign Up
                                    </Link>
                                </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </section>
    );
}

export default withErrorHandler(NavBar, axios);