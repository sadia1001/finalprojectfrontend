import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import { Store } from "../Store";

// import { useSelector } from "react-redux";
// import { url } from "../slices/api";

const PayButton = ({ cartItems }) => {
  //   const user = useSelector((state) => state.auth);
  const { state } = useContext(Store);

  const { userInfo } = state;

  const handleCheckout = async () => {
    axios
      .post("http://localhost:3000/api/stripe/create-checkout-session", {
        cartItems,
        userId: userInfo._id,
      })
      .then((response) => {
        if (response.data.url) {
          window.location.href = response.data.url;
        }
      })
      .catch((err) => console.log(err.message));

    console.log(cartItems);
    console.log(userInfo);
  };

  return (
    <>
      <button onClick={() => handleCheckout()}>Check out</button>
    </>
  );
};

export default PayButton;
