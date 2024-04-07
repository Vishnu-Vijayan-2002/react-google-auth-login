import React from 'react'
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Login() {
    const navigate=useNavigate()
  return (
    <div>
      <GoogleLogin
                                
                                onSuccess={credentialResponse => {
                                    const credentialResponseDecoded = jwtDecode(credentialResponse.credential);
                                    console.log(credentialResponseDecoded);
                                    sessionStorage.setItem("userName", credentialResponseDecoded.name);
                                    toast.success("Login Succesfully")
                                    setTimeout(() => {
                                        navigate('/home')
                                    }, 2000)
                                }}
                                onError={() => {
                                    console.log('Login Failed');
                                }}
                            />
                            <ToastContainer position='top-center' theme='colored' autoClose={3000} />
    </div>
  )
}

export default Login
