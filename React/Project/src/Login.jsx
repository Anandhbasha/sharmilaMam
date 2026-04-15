import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { login } from './Slices/authSlice'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [form, setForm] = useState({
    username: "",
    password: ""
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(login(form)) // 🔥 IMPORTANT
    navigate("/")
  }

  return (
    <div className='Login'>
      <h1>Login Page</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Enter Username"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          onChange={handleChange}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login