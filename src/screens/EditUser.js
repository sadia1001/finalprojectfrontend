import axios from 'axios'
import React,{useState} from 'react'
import { useLocation } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

const EditUserData = () => {
    const location = useLocation()
   // console.log('looooo',location)
    const [name,setName] = useState(location.state.name)
    const [email,setEmail] = useState(location.state.email)
    const [type,setType] = useState(location.state.isAdmin)

    const updataToastDisplay = ()=>{
        console.log('tooooosss','successs')
        toast('Data Updated Successfully', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    }

const editData = async(e)=>{
    e.preventDefault();
    try{
   let res =await axios.put(`http://localhost:3000/api/users/edit/${location.state._id}`,{
    name:name,
    email:email,
    type:type
   })
   if(res.data.message === 'updated'){
    updataToastDisplay();
   }
    }
    catch(error){
        console.log(error)
    }
}
  return (
    <>
    <div style={{border:'2px solid black',width:'50%',margin:'0 auto',borderRadius:'15px',paddingTop:'10px'}}>

        <label style={{textAlign:'center',fontWeight:'bold',fontSize:'20px',textTransform:'uppercase'}}>Edit User Details</label>
    <div style={{display:'flex',padding:'10px 10px'}}>
     <label>
        Name
     </label>
     <input
     name='name'
     style={{
        marginLeft:'35px',
        border:'none',
        borderBottom:'2px solid black'
    }}
     value={name}
     onChange={(e)=>{setName(e.target.value)}}
     />
    </div>
    <div style={{display:'flex',padding:'10px 10px'}}>
     <label>
        Email
     </label>
     <input
     name='email'
     style={{
        marginLeft:'39px',
        border:'none',
        borderBottom:'2px solid black'
    }}
     value={email}
     onChange={(e)=>{setEmail(e.target.value)}}

     />
    </div>
    <div style={{display:'flex',padding:'10px 10px'}}>
     <label>
        Admin
     </label>
     <input
     name='type'
     style={{
        marginLeft:'30px',
        border:'none',
        borderBottom:'2px solid black'
    }}
     value={type}
     onChange={(e)=>{setType(e.target.value)}}

     />
    </div>
    <div>
        <button style={{marginTop:'20px',marginLeft:'40%',padding:'5px',border:'2px solid black',borderRadius:'15px',marginBottom:'10px'}} onClick={editData}>Update Details</button>
    </div>
    <ToastContainer/>

    </div>
    </>
  )
}

export default EditUserData;