import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Add_user } from '../Action/CrudAction'

const Add = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState("")
    const [title, setTitle] = useState("") 
    const [isSubmitted, setIsSubmitted] = useState(false) 

    const handleSubmit = (e) => {
        e.preventDefault();
        let obj = {
            id: Math.floor(Math.random() * 10000),
            name: name,
            title: title,
        }

        dispatch(Add_user(obj))
        setIsSubmitted(true); 
        setName("") 
        setTitle("") 
    }

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 align="center">Redux</h2> <br />
                    <form onSubmit={handleSubmit} className="border p-4 rounded shadow-sm">
                        <h3 className="mb-4 text-center">Add User</h3>

                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input 
                                type="text" 
                                id="title"
                                className="form-control"
                                placeholder="Enter title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input 
                                type="text" 
                                id="name"
                                className="form-control"
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div className="d-flex justify-content-between align-items-center">
                            <button 
                                type="submit"
                                className="btn btn-success"
                                disabled={!name || !title} 
                            >
                                Add User
                            </button>
                            <Link to="/view" className="btn btn-outline-primary">View Data</Link>
                        </div>

                        {isSubmitted && (
                            <div className="alert alert-success mt-3" role="alert">
                                Record added successfully!
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Add;