// import axios from "axios";
import axios from "axios";
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";

function Signup() {
    const [user, setUser] = useState({ username: '', password: '' })
    const nav = useNavigate()

    async function submit() {
        await axios.post("http://localhost:8000/signup/", user)
        nav('/login')
    }
    return (
        // <div style={{width:'90%',maxWidth:'400px',margin:'100px auto',padding:'20px',border:'1px solid gray',borderRadius:'10px',textAlign:'center'}}>
        //     <center>
        //     <h1>Signup</h1>
        //     <label htmlFor="">Username:</label>
        //     <input onChange={(e)=>setUser({...user,username:e.target.value})}/><br/><br/>
        //     <label htmlFor="">Password:</label>
        //     <input type="password" onChange={(e)=>setUser({...user,password:e.target.value})} /><br/><br/>
        //     <button onClick={submit}>Signup</button><br/><br />
        //     <div>
        //         <span>Already have an account?</span>
        //         <Link to="/login">Login</Link>
        //         {/* <button onClick={()=>nav('/login')}>Login</button> */}
        //     </div>

        //     </center>
        // </div>

        <div className="container">

            <div
                className="card shadow p-4 mx-auto mt-5"
                style={{
                    maxWidth: '450px',
                    borderRadius: '15px'
                }}>
                <h1 className="text-center mb-4"> Signup </h1>
                <div className="mb-3">
                    <label className="form-label"> Username: </label>
                    <input className="form-control" onChange={(e) =>setUser({...user,username: e.target.value})}/></div>
                    <div className="mb-3">
                    <label className="form-label">Password:</label>
                    <input type="password" className="form-control" onChange={(e) =>setUser({...user,password: e.target.value})}/>
                    </div>
                    <button className="btn btn-primary w-100" onClick={submit}> Signup </button>
                    <div className="text-center mt-3">
                    <span>
                        Already have an account?
                    </span>
                    {" "}
                    <Link to="/login">Login</Link>
                </div>
            </div>
        </div>
    )
}
export default Signup;