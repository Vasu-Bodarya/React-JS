import React, { useEffect, useState } from 'react';
import { FaRegEdit } from "react-icons/fa"; // edit
import { AiOutlineUsergroupAdd } from "react-icons/ai"; // add
import { MdDelete } from "react-icons/md"; // delete
import "./Style.css";

const Crud = () => {
    const [userName, setUserName] = useState("");
    const [userCourse, setUserCourse] = useState("");
    const initialData = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];
    const [userRecords, setUserRecords] = useState(initialData);
    const [currentUser, setCurrentUser] = useState(null);
    const [editUserId, setEditUserId] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newUser = {
            id: Math.floor(Math.random() * 1000),
            name: userName,
            course: userCourse
        };

        if (!userName || !userCourse) {
            alert("Please fill all the fields");
            return;
        }

        if (editUserId) {
            const updatedRecords = userRecords.map((user) => {
                if (user.id === editUserId) {
                    return { ...user, name: userName, course: userCourse };
                }
                return user;
            });
            setUserRecords(updatedRecords);
            localStorage.setItem('users', JSON.stringify(updatedRecords));
            setEditUserId("");
            setCurrentUser(null);
        } else {
            const updatedRecords = [...userRecords, newUser];
            localStorage.setItem('users', JSON.stringify(updatedRecords));
            setUserRecords(updatedRecords);
            alert("Record Added");
        }

        setUserName("");
        setUserCourse("");
    };

    const deleteUser = (id) => {
        const updatedRecords = userRecords.filter(user => user.id !== id);
        localStorage.setItem('users', JSON.stringify(updatedRecords));
        setUserRecords(updatedRecords);
        alert("User Deleted");
    };

    const editUser = (id) => {
        const userToEdit = userRecords.find(user => user.id === id);
        setEditUserId(userToEdit.id);
        setCurrentUser(userToEdit);
    };

    useEffect(() => {
        if (currentUser) {
            setUserName(currentUser.name);
            setUserCourse(currentUser.course);
        }
    }, [currentUser]);

    return (
        <>
            <div align="center">
                <h1>Todo App</h1>
                <br />
                <form onSubmit={handleSubmit}>
                    <label>
                        Name: &nbsp;
                        <input
                            type='text'
                            placeholder='Add your Name'
                            onChange={(e) => setUserName(e.target.value)}
                            value={userName}
                        />
                    </label>
                    &nbsp;&nbsp;
                    <label>
                        Course: &nbsp;
                        <input
                            type='text'
                            placeholder='Add your Course'
                            onChange={(e) => setUserCourse(e.target.value)}
                            value={userCourse}
                        />
                    </label> &nbsp;
                    <button type="submit" className='submit-button'>
                        {editUserId ? <FaRegEdit /> : <AiOutlineUsergroupAdd />}
                    </button>
                    <br /><br />
                </form>
            </div>
            <div className="container">
                <div className="row d-flex">
                    {userRecords.map((user) => {
                        const { id, name, course } = user;
                        return (
                            <div className="user-card" key={id}>
                                <h4>ID: {id}</h4>
                                <p>Name: {name}</p>
                                <p>Course: {course}</p>
                                <button onClick={() => deleteUser(id)} className="delete-button"><MdDelete /></button>
                                <button onClick={() => editUser(id)} className="edit-button"><FaRegEdit /></button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Crud;
