import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Delete_user } from '../Action/CrudAction';

const View = () => {
    const dispatch = useDispatch();
    const records = useSelector(state => state.crud.users);

    return (
        <div className="container">
            <style>
                {`
                /* General Page Styles */
                .container {
                    width: 90%;
                    max-width: 1200px;
                    margin: 0 auto;
                    padding-top: 30px;
                    font-family: Arial, sans-serif;
                }

                .header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 30px;
                }

                .header h2 {
                    font-size: 2rem;
                    color: #333;
                }

                .btn-add {
                    background-color: #28a745;
                    color: white;
                    padding: 10px 20px;
                    border-radius: 5px;
                    text-decoration: none;
                    font-size: 1rem;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    transition: background-color 0.3s ease;
                }

                .btn-add:hover {
                    background-color: #218838;
                }

                /* Table Styles */
                table {
                    width: 100%;
                    border-collapse: collapse;
                    margin-top: 20px;
                }

                th, td {
                    padding: 12px;
                    text-align: center;
                    border-bottom: 1px solid #ddd;
                }

                th {
                    background-color: #f4f4f9;
                    color: #333;
                    font-size: 1.1rem;
                }

                tr:hover {
                    background-color: #f1f1f1;
                }

                /* Button Styles */
                .btn {
                    padding: 8px 15px;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                    font-size: 0.9rem;
                    text-align: center;
                    display: inline-block;
                    text-decoration: none;
                }

                .btn-danger {
                    background-color: #dc3545;
                    color: white;
                }

                .btn-danger:hover {
                    background-color: #c82333;
                }

                .btn-primary {
                    background-color: #007bff;
                    color: white;
                }

                .btn-primary:hover {
                    background-color: #0056b3;
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

                    table {
                        font-size: 0.9rem;
                    }
                }
                `}
            </style>

            <div className="header">
                <h2>User List</h2>
                <Link to="/add" className="btn btn-add">Add New User</Link>
            </div>

            <div>
                {records.length > 0 ? (
                    <table>
                        <thead>
                            <tr>
                                <th>SRNO</th>
                                <th>Title</th>
                                <th>Name</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {records.map((val, index) => (
                                <tr key={val.id}>
                                    <td>{index + 1}</td>
                                    <td>{val.title}</td>
                                    <td>{val.name}</td>
                                    <td>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => dispatch(Delete_user(val.id))}
                                        >
                                            DELETE
                                        </button>
                                        &nbsp;&nbsp; 
                                        <Link to={`/edit/${val.id}`}>
                                            <button className="btn btn-primary">EDIT</button>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No users found. Please add new users.</p>
                )}
            </div>
        </div>
    );
};

export default View;
