import axios from "axios"
import { useEffect, useState } from "react"

function Profile() {
    const [user, setUser] = useState({})
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetchProfile()
    }, [])
    async function fetchProfile() {
        try {
            const res = await axios.get("http://localhost:8000/profile/",
                { withCredentials: true }
            )
            console.log(res.data)
            setUser(res.data.user)
            setBlogs(res.data.blogs)
        }
        catch (err) {
            console.log(err)
        }
    }
    return (
        <div className="card shadow p-5 mx-auto" style={{maxWidth:'600px'}}
         //    style={{
        //     width: '70%',
        //     margin: '50px auto',
        //     padding: '20px',
        //     border: '1px solid black',
        //     borderRadius: '10px',
        //     textAlign: 'center'
        // }}
        >
            <h1>Profile</h1>
            <h2>Username:{user.username}</h2>
            <p>Joined:{user.date_joined}</p>
            <p>Total Blogs:{blogs.length}</p> <hr />
            <h2>My Blogs</h2>
            {
                blogs.map((b) =>
                    <div key={b.id}
                        style={{
                            padding: '10px',
                            margin: '10px',
                            border: '1px solid gray'
                        }}>{b.title}</div>
                    )
            }
        </div>
    )
}
export default Profile