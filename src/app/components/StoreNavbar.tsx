import { Badge, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../hooks";
import { IoCartOutline } from 'react-icons/io5';

const StoreNavbar = () => {
  const cartItems = useAppSelector((state) => state.products.carts);
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/cart">Cart</NavLink>
          </Nav>
          <Button color="danger" >
          <Badge>{cartItems.length}</Badge><IoCartOutline/>
          </Button>
        </Container>
      </Navbar>
    </>
  );
};

export default StoreNavbar;
