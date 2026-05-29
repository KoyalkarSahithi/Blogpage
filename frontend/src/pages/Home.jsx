import axios from "axios"
import { useState, useEffect } from "react"
import BlogCard from "../components/BlogCard"
import { useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"



function Home() {
    const [blogs, setBlogs] = useState([])
    const [search, setSearch] = useState("")
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        fetchBlogs()
    }, [])

    async function fetchBlogs() {
        try {
            const res = await axios.get("http://localhost:8000/blogs/")
            console.log(res.data)
            setBlogs(res.data)
            setLoading(false)
        } catch (err) {
            console.log(err)
        }
    }
    const filtered = blogs.filter((b) => b.title.toLowerCase().includes(search.toLowerCase()))
    if (loading) {

        return (
            <div className="text-center mt-5">
                <div className="spinner-border">
                </div>
            </div>
        )
    }
    return (

        <div>

            <Navbar />

            <div className="container text-center">

                <div className="my-5">

                    <h1>
                        Share Ideas. Publish Stories.
                    </h1>

                    <p className="text-muted">
                        Create and explore blogs from users.
                    </p>

                </div>

                <h2>
                    Recent Blogs
                </h2>

                <input
                    className="form-control w-50 mx-auto"
                    placeholder="Search blogs"
                    onChange={(e) => setSearch(e.target.value)}
                />

                {

                    filtered.map((b) =>

                        <BlogCard
                            key={b.id}
                            data={b}
                            blogs={blogs}
                            setBlogs={setBlogs}
                        />

                    )

                }

                <footer className="text-center mt-5 p-3">

                    BlogSphere © 2026

                </footer>

            </div>

        </div>

        // <div>
        //       <Navbar/>


        //         <div className="text-center my-5">
        //             <h1> Share Ideas. Publish Stories.</h1>
        //             <p className="text-muted"> Create and explore blogs from users.</p>
        //         </div>
        //         {/* <h1>Blog page</h1>
        //         <div
        //             style={{
        //                 display: 'flex',
        //                 justifyContent: 'center',
        //                 gap: '10px',flexWrap:'wrap'
        //                 // marginBottom: '20px'
        //             }}>
        //                 <button
        //             onClick={() =>
        //                 nav('/createblog')
        //             } >
        //             Create Blog
        //         </button>
        //         <button onClick={()=>nav('/profile')}>Profile</button>
        //         </div> */}
        //         <h2>
        //             Recent Blogs
        //         </h2>

        //         <input
        //             placeholder='Search blogs'
        //             onChange={(e) => setSearch(e.target.value)}
        //         />


        //         {filtered.map((b) => <BlogCard key={b.id} data={b} blogs={blogs} setBlogs={setBlogs} />)}
        //         <footer className="text-center mt-5 p-3">
        //             BlogSphere © 2026
        //         </footer>
        // </div>
    )
}
export default Home;