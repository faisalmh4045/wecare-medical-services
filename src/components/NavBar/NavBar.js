import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { getAuth } from "firebase/auth";

const NavBar = () => {
    const { user, logOut, userDisplayName } = useAuth();
    const auth = getAuth();
    const myuser = auth.currentUser;
    let username='';
    if (myuser !== null) {
        username = myuser.displayName;
    }
    return (
        <div className='border-bottom'>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container className='py-3'>
                    <Navbar.Brand className='fs-3 fw-bold text-dark ms-2' style={{ fontFamily: 'Charmonman' }}>WeCare</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <nav className="ms-lg-5 me-auto">
                            <div className='d-md-block d-lg-inline'>
                                <Link className="text-dark text-decoration-none me-4" to='/home'>Featured</Link>
                            </div>
                            <div className='d-md-block d-lg-inline'>
                                <Link className="text-dark text-decoration-none me-4" to='/about'>About us</Link>
                            </div>
                            <div className='d-md-block d-lg-inline'>
                                <Link className="text-dark text-decoration-none me-4" to='/contact'>Contact us</Link>
                            </div>
                        </nav>
                        <hr className='d-md-block d-lg-none' />
                        <div>
                            <span>{userDisplayName}</span>
                            <span>{username}</span>
                        </div>
                        {user.email ? <button onClick={logOut} className='btn btn-dark ms-3'>
                            Log out
                        </button> :
                            <button className='btn btn-dark ms-3'>
                                <Link className='text-light text-decoration-none' to='/login'>Login</Link>
                            </button>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;