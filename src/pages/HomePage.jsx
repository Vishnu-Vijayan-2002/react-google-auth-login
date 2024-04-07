import React from 'react'
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate=useNavigate()
  const handlebacktohome=()=>{
    navigate('/')
    sessionStorage.removeItem("userName")
  }
  const userName=sessionStorage.getItem("userName")
  return (
    <div className='w-100'>
      <div className='homebackground'>
        <h1 style={{color:'white',marginLeft:"35%",paddingTop:'20%',fontWeight:'600',fontSize:'40px'}} className='text-bolder'>Hi Welcome {userName}</h1>
        <button onClick={handlebacktohome} style={{marginLeft:'50%'}} className='btn btn-info mt-5'>Back to Home</button>
      </div>
    </div>
  )
}

export default HomePage
