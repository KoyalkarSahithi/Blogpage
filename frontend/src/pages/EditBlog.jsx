import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditBlog(){
    const {id} = useParams()
    const nav=useNavigate()
    const[blog,setBlog]=useState({title:'',content:''})
    useEffect(()=>{
        fetchBlog()
    },[])

    async function fetchBlog(){
        try{
            const res=await axios.get(`http://localhost:8000/blogs/`)
            const current=res.data.find(b=>b.id==id)
            setBlog(current)
        }
        catch(err){
            console.log((err))
        }
    }
    async function update() {
        try{
            await axios.put(`http://localhost:8000/update/${id}/`,blog)
            nav('/home')
        }
        catch(err){
            console.log(err)
        }
    }
    return(
        <center>
            <h1>Edit Blog</h1>
            <input value={blog.title} onChange={(e)=>setBlog({...blog,title:e.target.value})} />
            <br /><br />
            <textarea value={blog.content} onChange={(e)=>setBlog({...blog,content:e.target.value})}></textarea> <br /><br />
            <button onClick={update}>Update</button>
        </center>
    )
}

export default EditBlog