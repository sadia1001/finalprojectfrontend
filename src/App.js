import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import { useContext } from "react";
import { Store } from "./Store";
import CartScreen from "./screens/CartScreen";
import SigninScreen from "./screens/SigninScreen";
import ShippingAddressScreen from "./screens/ShippingAddressScreen";
import SignupScreen from "./screens/SignupScreen";
import NavLogo from "./assests/logo1.png";
import AboutUs from "./screens/AboutUs";
import PaymentMethodScreen from "./screens/PaymentMethodScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
//import OrderScreen from "./screens/OrderScreen";
import OrderHistoryScreen from "./screens/OrderHistory";
import ProfileScreen from "./screens/ProfileScreen";
import ProtectedRoute from "./components/ProtectedRoute";
import DashboardScreen from "./screens/DashboardScreen";
import AddProduct from "./screens/AddProduct";
import ProductTable from "./screens/ProductTable";
import UserTable from "./screens/UserTable";
import SearchBox from "./components/SearchBox";
import OrderScreen from "./screens/OrderScreen";
import SearchScreen from "./screens/SearchScreen";
import FAQ from "./screens/FAQ";
import CheckoutSuccess from "./components/CheckOutSuccess";
// import UserTable from "./screens/UserTable";
import EditUser from "./screens/EditUser";

function App() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: "USER_SIGNOUT" });
    localStorage.removeItem("userInfo");
    localStorage.removeItem("shippingAddress");
    localStorage.removeItem("paymentMethod");
    window.location.href = "/signin";
  };
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <ToastContainer position="bottom-center" limit={1} />
        <header>
          <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>
                  <img
                    src={NavLogo}
                    width="20%"
                    height="20%"
                    color="black"
                    alt=""
                  ></img>
                  Shopping.com
                </Navbar.Brand>
              </LinkContainer>

              <Nav className=" d-flex flex-row justify-content-end">
                <div
                  className="collapse navbar-collapse navbar-contents mx-auto"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                    <li className="nav-item">
                      <Link
                        className="nav-link  p-3"
                        aria-current="page"
                        to="/"
                      >
                        Home
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link p-3" to="/about">
                        About Us
                      </Link>
                    </li>

                    <li></li>
                  </ul>
                </div>
                <div className="old d-flex flex-row mt-2 me-auto">
                  <Link to="/cart" className="nav-link ">
                    Cart
                    {cart.cartItems.length > 0 && (
                      <Badge pill bg="danger">
                        {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                      </Badge>
                    )}
                  </Link>

                  {/* 
    <Link className="nav-link p-3" to="/signin">
                        Sign in 
                      </Link> */}
                  {!userInfo ||
                    (userInfo.isAdmin && (
                      <NavDropdown title="Admin" id="admin-nav-dropdown">
                        <LinkContainer to="/admin/dashboard">
                          <NavDropdown.Item>Dashboard</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/admin/products">
                          <NavDropdown.Item>Products</NavDropdown.Item>
                        </LinkContainer>
                        {/* <LinkContainer to="/admin/orders">
      <NavDropdown.Item>Orders</NavDropdown.Item>
    </LinkContainer> */}
                        <LinkContainer to="/admin/users">
                          <NavDropdown.Item>Users</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/admin/addproduct">
                          <NavDropdown.Item>Add Product</NavDropdown.Item>
                        </LinkContainer>
                        <Link
                          className="dropdown-item"
                          to="#signout"
                          onClick={signoutHandler}
                        >
                          Sign Out
                        </Link>
                      </NavDropdown>
                    )) || (
                      <NavDropdown
                        title={userInfo.name}
                        id="basic-nav-dropdown"
                      >
                        <LinkContainer to="/profile">
                          <NavDropdown.Item>User Profile</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/orderhistory">
                          <NavDropdown.Item>Order History</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/faq">
                          <NavDropdown.Item>FAQ</NavDropdown.Item>
                        </LinkContainer>
                        <NavDropdown.Divider />
                        <Link
                          className="dropdown-item"
                          to="#signout"
                          onClick={signoutHandler}
                        >
                          Sign Out
                        </Link>
                      </NavDropdown>
                    )}
                </div>
                {!userInfo && (
                  <li className="nav-item">
                    <Link className="nav-link p-3" to="/signin">
                      Sign in
                    </Link>
                  </li>
                )}
              </Nav>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/signin" element={<SigninScreen />} />
              <Route path="/signup" element={<SignupScreen />} />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <ProfileScreen />
                  </ProtectedRoute>
                }
              />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/EditUserTable" element={<EditUser/>}/>
              <Route path="/admin/dashboard" element={<DashboardScreen />} />
              <Route path="/search" element={<SearchScreen />} />
              <Route path="/admin/products" element={<ProductTable />} />
              <Route path="/admin/users" element={<UserTable />} />
              <Route path="/admin/addproduct" element={<AddProduct />} />
              <Route path="/checkout-success" element={<CheckoutSuccess />} />
              <Route path="/placeorder" element={<PlaceOrderScreen />} />
              <Route path="/order/:id" element={<OrderScreen />}></Route>

              <Route
                path="/orderhistory"
                element={
                  <ProtectedRoute>
                    <OrderHistoryScreen />
                  </ProtectedRoute>
                }
              ></Route>
              <Route
                path="/shipping"
                element={<ShippingAddressScreen />}
              ></Route>

              <Route path="/payment" element={<PaymentMethodScreen />}></Route>

              <Route path="/" element={<HomeScreen />} />
              <Route path="/about" element={<AboutUs />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">All rights reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
