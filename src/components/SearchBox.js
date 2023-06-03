import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { useNavigate } from "react-router-dom";

export default function SearchBox() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    navigate(query ? `/search/?query=${query}` : "/search");
  };

  return (
    <Form className="d-flex me-auto" onSubmit={submitHandler}>
      <div className="input-group pt-3 mx-auto " style={{ width: "50%" }}>
        <FormControl
          type="text"
          name="q"
          id="q"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="search products..."
          aria-label="Search Products"
          aria-describedby="button-search"
          style={{ width: "50%" }}
        ></FormControl>
        <div class="input-group-append">
          <Button variant="outline-primary" type="submit" id="button-search">
            <i className="fas fa-search"></i>
          </Button>
        </div>
      </div>
    </Form>
  );
}
{
  /* <div className="text-center pt-3 bold">
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

        </div> */
}
