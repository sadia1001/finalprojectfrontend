import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios.get("https://vast-tuna-wetsuit.cyclic.app/api/products");
      setUsers(data);
    };
    fetchUsers();
  }, []);

  // const handleEdit = (id) => {
  //   // handle edit button click
  // };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://vast-tuna-wetsuit.cyclic.app/api/products/${id}`);
      setUsers(users.filter((user) => user._id !== id)); // remove the deleted product from the state
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <table>
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Product Category</th>
          <th>Product Description</th>
          <th>Product Brand</th>
          <th>Product price</th>
          {/* <th>Action</th> */}
          {/* <th>Product Image</th> */}
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user._id}>
            <td>{user.name}</td>
            <td>{user.category}</td>
            <td>{user.description}</td>
            <td>{user.brand}</td>
            <td>{user.price}</td>

            {/* <td style={{ margin: '10px' }}>
              <button onClick={() => handleEdit(user._id)} class="btn btn-warning" >Edit</button>
              <button onClick={() => handleDelete(user._id)} className="btn btn-danger" style={{ margin: '10px' }}>Delete</button>
            </td> */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
