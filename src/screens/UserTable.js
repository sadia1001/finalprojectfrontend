// import React, { useContext, useEffect, useState } from 'react';
// import axios from 'axios';
// import { Store } from '../Store';

// const UserTable = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const fetchUsers = async () => {
//         const { data } = await axios.get('http://localhost:3000/api/users');
//       setUsers(data);
//     };
//     fetchUsers();
//   }, []);

//   // const handleEdit = (id) => {
//   //   // handle edit button click
//   // };
//   //const apiKey = 'qhnkheqk';
//   const { state } = useContext(Store);
//   const handleDelete = async (id) => {
//     const { userInfo } = state;
//     try {
//       await axios.delete(`http://localhost:3000/api/users/${id}`, {
       
//           headers: { Authorization: `Bearer ${userInfo.token}` },
        
//       });
//       setUsers(users.filter(user => user._id !== id));
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>User Name</th>
//           <th>User Email</th>
//           <th>Admin</th>
//           <th>Action</th>
//         </tr>
//       </thead>
//       <tbody>
//         {users.map((user) => (
//           <tr key={user._id}>
//             <td>{user.name}</td>
//             <td>{user.email}</td>
            
//             <td>{user.isAdmin ? 'Yes' : 'No'}</td>
//             <td>
//               {/* <button onClick={() => handleEdit(user._id)} className="btn btn-warning">Edit</button> */}
//               {!user.isAdmin && (
//                 <button onClick={() => handleDelete(user._id)} className="btn btn-danger" style={{ margin: '10px' }}>Delete</button>
//               )}
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default UserTable;
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Store } from '../Store';
import { useNavigate } from 'react-router-dom';



const UserTable = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [modelView,setModelView] = useState(false)
  const modelviewer = ()=>{
    setModelView(true)
  
  }
  useEffect(() => {
    const fetchUsers = async () => {
        const { data } = await axios.get('http://localhost:3000/api/users');
      setUsers(data);
    };
    fetchUsers();
  }, []);

  // const handleEdit = (id) => {
  //   // handle edit button click
  // };
  //const apiKey = 'qhnkheqk';
  const { state } = useContext(Store);
  const handleDelete = async (id) => {
    const { userInfo } = state;
    try {
      await axios.delete(`http://localhost:3000/api/users/${id}`, {
       
          headers: { Authorization: `Bearer ${userInfo.token}` },
        
      });
      setUsers(users.filter(user => user._id !== id));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
   
    <table>
      <thead>
        <tr>
          <th>User Name</th>
          <th>User Email</th>
          <th>Admin</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user._id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            
            <td>{user.isAdmin ? 'Yes' : 'No'}</td>
            <td>
              <button className="btn btn-warning" onClick={()=>{navigate('/EditUserTable',{
                state:user
              })}} >Edit</button>
              {!user.isAdmin && (
                <button onClick={() => handleDelete(user._id)} className="btn btn-danger" style={{ margin: '10px' }}>Delete</button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>

  
    </>
  );
};

export default UserTable;
