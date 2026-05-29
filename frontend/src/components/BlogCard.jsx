import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaEdit, FaTrash } from "react-icons/fa"

function BlogCard({ data, blogs, setBlogs }) {

    const [comment, setComment] = useState("")
    const [comments, setComments] = useState([])
    const nav = useNavigate()

    useEffect(() => {
        fetchComments()
    }, [])

    async function fetchComments() {
        const res = await axios.get(`http://localhost:8000/comments/${data.id}/`)
        setComments(res.data)

    }

    async function addComment() {
        await axios.post(`http://localhost:8000/comment/${data.id}/`, { text: comment }, { withCredentials: true })
        fetchComments()
        setComment("")

    }
    async function del() {
        try {
            await axios.delete(`http://127.0.0.1:8000/delete/${data.id}/`)

            setBlogs(blogs.filter((blog) => blog.id !== data.id))
        }
        catch (err) {
            console.log(err)
        }
    }

    async function like() {
        await axios.post(`http://localhost:8000/like/${data.id}/`)
        window.location.reload()
    }
    // window.location.reload()
    return (
        <div className="card shadow p-4 mx-auto mt-4" style={{ width: '90%', maxWidth: '700px', borderRadius: '15px' }}>
            <img src={`http://localhost:8000/media/${data.image}`} alt="blog"
                className="img-fluid rounded mx-auto d-block"
                style={{ maxWidth: '400px', height: 'auto' }} />
            <h2 className="text-center mt-3">{data.title}</h2>
            <p className="text-center">{data.content}</p> <hr />
            <h4>Comments</h4>
            {
                comments.map((c, index) =>
                    <div key={index}>
                        <b>
                            {c.user__username}
                        </b>:{c.text}</div>
                )
            } <br />
            <textarea className="form-control mt-3" placeholder="Write comment" value={comment} onChange={(e) => setComment(e.target.value)} />
            <br /><br />
            <div className="d-flex justify-content-center gap-2 flex-wrap mt-3">
                <button className="btn btn-primary" onClick={addComment}>Comment</button>
                <button className="btn btn-danger" onClick={like}><FaHeart /> {data.likes}</button>
                <button className="btn btn-warning" onClick={() => nav(`/edit/${data.id}`)}><FaEdit /> Edit</button>
                <button className="btn btn-secondary" onClick={del}><FaTrash /> Delete</button>
                {/* <button className="btn btn-danger" onClick={like}>❤️{data.likes}</button>
                <button className="btn btn-warning" onClick={() => nav(`/edit/${data.id}`)}> Edit </button>
                <button className="btn btn-secondary" onClick={del}>Delete</button> */}
            </div>
        </div >
    )
}
export default BlogCard;