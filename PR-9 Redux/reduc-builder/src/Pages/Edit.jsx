import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { EDIT_USER, UPDATE_USER } from '../Action/CrudAction';

const Edit = () => {
    const [name, setName] = useState("");
    const [title, setTitle] = useState(""); // Added title state

    let single = useSelector(state => state.crud.single);
    let editId = useParams();
    let dispatch = useDispatch();
    let navigate = useNavigate();

    useEffect(() => {
        if (editId) {
            dispatch(EDIT_USER(editId));
        }
    }, [editId, dispatch]);

    useEffect(() => {
        setName(single?.name || "");
        setTitle(single?.title || ""); // Set title if available
    }, [single]);

    const handleSubmit = (e) => {
        e.preventDefault();
        let obj = {
            id: single?.id,
            name,
            title // Added title to the object
        };
        dispatch(UPDATE_USER(obj));
        setName("");
        setTitle(""); // Reset title after update

        setTimeout(() => {
            navigate('/view');
        }, 1000);
    };

    return (
        <div className="container">
            <style>
                {`
                /* General Page Styles */
                .container {
                    width: 90%;
                    max-width: 900px;
                    margin: 0 auto;
                    padding-top: 50px;
                    font-family: Arial, sans-serif;
                }

                .header {
                    text-align: center;
                    margin-bottom: 20px;
                }

                .header h2 {
                    font-size: 2rem;
                    color: #333;
                }

                .form-container {
                    background-color: #fff;
                    padding: 20px;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
                    border-radius: 8px;
                }

                .form-group {
                    margin-bottom: 20px;
                }

                .form-input {
                    width: 100%;
                    padding: 10px;
                    border: 1px solid #ddd;
                    border-radius: 5px;
                    font-size: 1rem;
                    margin-bottom: 10px;
                }

                .submit-btn {
                    width: 100%;
                    padding: 12px;
                    border: none;
                    background-color: #28a745;
                    color: white;
                    font-size: 1.1rem;
                    cursor: pointer;
                    border-radius: 5px;
                }

                .submit-btn:hover {
                    background-color: #218838;
                }

                .link-container {
                    margin-top: 20px;
                    text-align: center;
                }

                .link-container a {
                    text-decoration: none;
                    font-size: 1rem;
                    color: #007bff;
                    transition: color 0.3s;
                }

                .link-container a:hover {
                    color: #0056b3;
                }

                /* Responsive Design */
                @media (max-width: 768px) {
                    .container {
                        width: 100%;
                        padding-top: 20px;
                    }

                    .header h2 {
                        font-size: 1.6rem;
                    }
                }
                `}
            </style>

            <div className="header">
                <h2>Edit User</h2>
            </div>

            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    {/* Title Input */}
                    <div className="form-group">
                        <label htmlFor="title">Title:</label>
                        <input
                            type="text"
                            id="title"
                            className="form-input"
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                            required
                        />
                    </div>

                    {/* Name Input */}
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            className="form-input"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            required
                        />
                    </div>

                    <button type="submit" className="submit-btn">
                        Update User
                    </button>
                </form>
            </div>

            <div className="link-container">
                <Link to="/view">Back to View Data</Link>
            </div>
        </div>
    );
};

export default Edit;
