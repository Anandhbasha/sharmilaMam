import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { login } from './Slices/authSlice'

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleClick = ()=>{
      dispatch(login())
      navigate("/")
    }
  return (
    <div className='Login'>
        <h1>Login Page</h1>
        <button onClick={handleClick}>Login</button>
    </div>
  )
}

export default Login