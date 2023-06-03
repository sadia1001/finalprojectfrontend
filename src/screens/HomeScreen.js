import React from "react";
import { useEffect, useReducer, useState } from "react";
import axios from "axios";
import logger from "use-reducer-logger";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Product from "../components/Product";
import { Helmet } from "react-helmet-async";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import Banner from "../assests/banner-image-short.jpg";
import SearchBox from "../components/SearchBox";
import FAQ from "./FAQ";
// import data from '../data';

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, products: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function HomeScreen() {
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: "",
  });
  // const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("https://vast-tuna-wetsuit.cyclic.app/api/products");
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }

      // setProducts(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <Helmet>
        <title>Shoopingcart</title>
      </Helmet>

      <div
        className="container-fluid"
        style={{
          backgroundImage: `url(${Banner})`,
          width: "100%",
          height: "60vh",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* <div className="text-center pt-3 bold">
          SEARCH THE PRODUCTS OF YOUR LIKING
        </div>
        <div className="input-group pt-3 mx-auto " style={{ width: "50%" }}>
          <input
            type="search"
            class="form-control"
            placeholder="Search product"
            // style={{ width: "50%" }}
          />
          <div class="input-group-append">
            <button class="btn btn-secondary" type="button">
              <i class="fa fa-search"></i>
            </button>
          </div>

        </div> */}
        <div className="text-center pt-3 bold">
          SEARCH THE PRODUCTS OF YOUR LIKING
        </div>
        <SearchBox />
      </div>
      <h1>Featured Products</h1>
      <div className="products">
        {loading ? (
          <LoadingBox />
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <Row>
            {products.map((product) => (
              <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
                <Product product={product}></Product>
              </Col>
            ))}
          </Row>
        )}
      </div>

      <FAQ />
    </div>
  );
}
export default HomeScreen;
