import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Login from './Login';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function LoginPage() {
    const navigate=useNavigate()
    const [userinputs,setUserinputs]=useState({
        username:"",password:""
    })
    const handleloginbtn=()=>{
        if(userinputs.username && userinputs.password)
        {
            toast.success("login success")
            navigate('/home')
            sessionStorage.setItem("userName",userinputs.username)
        }else{
            toast.warning("Please fill the form completely")
        }
    }

    console.log(userinputs);
  return (
    <div style={{width:'100%',height:'100vh'}} className='d-flex justify-content-center align-items-center'>
        <div className="container w-75">
            <div className="card shadow p-5">
                <div className='row'>
                    <div className='col lg 6'>
                        <img className='w-100' src="https://kadamburhss.eschoolweb.org/assets/img/gallery/login.png" alt="" />
                    </div>
                    <div className='col lg 6'>
                        <h1 style={{fontWeight:'400',color:"blueviolet"}}>Hello,</h1>
                        <h1 style={{color:"blueviolet",fontWeight:'800',fontSize:'40px'}} className='fw-bolder'>Welcome!</h1>
                        <TextField  value={userinputs.username} onChange={(e)=>{setUserinputs({...userinputs,username:e.target.value})}} style={{width:'100%'}} id="outlined-basic" label="Username" variant="outlined" />
                        <TextField  value={userinputs.password} onChange={(e)=>{setUserinputs({...userinputs,password:e.target.value})}} className='mt-5 mb-3' style={{width:'100%'}} id="filled-password-input" type='password' label="password" variant="outlined" />
                        <Button onClick={handleloginbtn} className='mt-3 w-100' variant="contained">Login</Button>
                        <h5 className='text-center mt-3'>or</h5>
                        <button style={{borderRadius:'5px',marginLeft:'15%'}} className='btn w-100'><Login/></button>
                    </div>
                </div>
            </div>
        </div>
        <ToastContainer position='top-center' theme='colored' autoClose={3000} />
    </div>
  )
}

export default LoginPage
