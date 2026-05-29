import { useNavigate } from "react-router-dom"
import { FaUser, FaPlus, FaHome } from "react-icons/fa"

function Navbar() {
    const nav = useNavigate()
    return (
        <nav className="navbar navbar-dark bg-dark px-4">
            <h3 className="text-white">
                BlogSphere
            </h3>
            <div className="ms-auto d-flex gap-2">
                <button className="btn btn-light" onClick={() => nav('/home')}>
                    <FaHome /> Home
                </button>
                <button className="btn btn-success" onClick={() => nav('/createblog')}>
                    <FaPlus /> Create
                </button>
                <button className="btn btn-warning" onClick={() => nav('/profile')}>
                    <FaUser /> Profile
                </button>
            </div>
        </nav>
    )
}

export default Navbar