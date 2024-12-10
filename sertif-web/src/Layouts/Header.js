import { Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="Header" style={{ marginBottom:"70px" }}>
            <img className="mb-5" src={'images/logo.jpg'} alt="Logo" />
            <div className="d-flex justify-content-center gap-2 font-bold">
                <Nav.Link as={Link} to="/">
                    <Button size="lg" style={{ border:"none", backgroundColor: "#4D7C0F", padding:"10px 110px 10px 110px", borderRadius:0 }}>PROFIL</Button>
                </Nav.Link>
                <Nav.Link as={Link} to="/">
                    <Button size="lg" style={{ border:"none", backgroundColor: "#4D7C0F", padding:"10px 110px 10px 110px", borderRadius:0 }}>POLIKNIK</Button>
                </Nav.Link>
                <Nav.Link as={Link} to="/fasilitas">
                    <Button size="lg" style={{ border:"none", backgroundColor: "#4D7C0F", padding:"10px 110px 10px 110px", borderRadius:0 }}>FASILITAS</Button>
                </Nav.Link>
                <Nav.Link as={Link} to="/">
                    <Button size="lg" style={{ border:"none", backgroundColor: "#4D7C0F", padding:"10px 110px 10px 110px", borderRadius:0 }}>LOKASI</Button>
                </Nav.Link>
                <Nav.Link as={Link} to="/">
                    <Button size="lg" style={{ border:"none", backgroundColor: "#4D7C0F", padding:"10px 110px 10px 110px", borderRadius:0 }}>KONTAK</Button>
                </Nav.Link>
            </div>
        </div>
    )
}

export default Header;