import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
  const nav = useNavigate()
  const [user, setUser] = useState({ username: '', password: '' })

  async function submit() {
    await axios.post('http://localhost:8000/login/', user, { withCredentials: true })
    nav('/home')
  }
  return (
    <div className="container">
      <div className="card shadow p-4 mx-auto mt-5" style={{maxWidth: '450px',borderRadius: '15px'}}>
        <h1 className="text-center mb-4">Login</h1>
        <div className="mb-3">
        <label className="form-label">Username:</label>
          <input type="text" className="form-control" placeholder="Enter username" onChange={(e) =>setUser({...user,username: e.target.value})}/>
        </div>
        <div className="mb-3">
          <label className="form-label">Password:</label>
          <input type="password" className="form-control" placeholder="Enter password"onChange={(e) =>setUser({...user,password: e.target.value})}/>
        </div>
        <button className="btn btn-primary w-100" onClick={submit}> Login </button>
        <div className="text-center mt-3">
        <span> Don't have an account?</span>
          {" "}
          <Link to="/">Signup</Link>
        </div>
      </div>
    </div>


  )

}

export default Login

    // <div>
    //     <center>
    //   <h1>Login</h1>
    //   <label htmlFor="">Username:</label>
    //   <input type="text" placeholder="enter the name"  onChange={(e)=>setUser({...user,username:e.target.value})}/> <br/><br/>
    //   <label htmlFor="">Password:</label>
    //   <input type="password"  onChange={(e)=>setUser({...user,password:e.target.value})}/> <br/><br/>
    //   <button onClick={submit}>Login</button> <br/><br/>
    //   <div>
    //     <span>Don't have an account?</span>
    //     <Link to="/">Signup</Link>
    //     {/* <button onClick={()=>nav('/')}>Signup</button> */}
    //   </div>
    //   </center>
    // </div>
