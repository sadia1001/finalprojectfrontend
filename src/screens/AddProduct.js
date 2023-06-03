import React, { useContext, useState } from "react";
import axios from "axios";
import { Store } from "../Store";

function AddProduct() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");

  const { state } = useContext(Store);
  // const { userInfo } = state;

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("category", category);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("brand", brand);
      formData.append("countInStock", 0);
      formData.append("numReviews", 0);
      formData.append("rating", 0);
      formData.append("image", "");

      const res = await axios.post(
        "https://vast-tuna-wetsuit.cyclic.app/api/products/addproduct",
        formData,
        {
          headers: {
            // "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Product Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="category">Product Category:</label>
        <input
          type="text"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">Product Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="brand">Product Brand:</label>
        <input
          type="text"
          id="brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="price">Product Price:</label>
        <input
          type="text"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default AddProduct;
