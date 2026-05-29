import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify'

function CreateBlog() {
    const nav = useNavigate()
    const [blog, setBlog] = useState({ title: '', content: '', image: null })

    async function submit() {
        try {
            let formData = new FormData()
            formData.append('title', blog.title)
            formData.append('content', blog.content)
            formData.append('image', blog.image)
            const res = await axios.post('http://localhost:8000/add-blog/', formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    },
                    withCredentials: true
                }
            )
            console.log(res.data)
            toast.success("Blog added successfully")
            nav('/home')
        } catch (err) {
            console.log(err.response?.data)
            console.log(err)
        }
    }
           
    return (

        <div style={{
            width: '70%',
            margin: '50px auto',
            border: '1px solid black',
            padding: '40px',
            borderRadius: '10px',
            textAlign: 'center',
            boxShadow: '0px 4px 10px rgba(0,0,0,0.2)'
        }}>
            <br />
            <h1>Create Blog</h1>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '20px',
                gap: '10px'
            }}
            >
                <label htmlFor="">Title:    </label>
                <input type="text" placeholder="title" onChange={(e) => setBlog({ ...blog, title: e.target.value })} /></div>
            <div className="card p-4 shadow mx-auto" style={{maxWidth:'500px'}}
            // style={{
            //     display: 'flex',
            //     justifyContent: 'center',
            //     alignItems: 'center',
            //     margin: '20px',
            //     gap: '10px'
            // }}
            >
                <label htmlFor="">Content: </label>
                <textarea onChange={(e) => setBlog({ ...blog, content: e.target.value })}></textarea><br /></div>
            <div style={{ margin: '20px' }}>
                <input type="file" onChange={(e) => setBlog({ ...blog, image: e.target.files[0] })} /> <br /><br /></div>
            <button onClick={submit}>Post Blog</button><br /><br />
        </div >
    )
}
export default CreateBlog;