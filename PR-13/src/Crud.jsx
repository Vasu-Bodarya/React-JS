import React, { useState, useEffect } from 'react';
import { FaRegEdit } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { MdDelete } from "react-icons/md"; 
import { getAuth, signOut, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth, db } from '../firebase'; // Import Firestore db
import { collection, addDoc, updateDoc, deleteDoc, doc, getDocs } from 'firebase/firestore'; // Firestore methods
import './Style.css';

const Crud = () => {
  const [userName, setUserName] = useState('');
  const [userCourse, setUserCourse] = useState('');
  const [userRecords, setUserRecords] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [editUserId, setEditUserId] = useState('');
  const [loading, setLoading] = useState(false);

  const usersCollectionRef = collection(db, "users"); // Firestore collection reference

  // Fetch users from Firestore
  const fetchUsers = async () => {
    const querySnapshot = await getDocs(usersCollectionRef);
    const usersList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setUserRecords(usersList);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      name: userName,
      course: userCourse,
    };

    if (!userName || !userCourse) {
      alert("Please fill all the fields");
      return;
    }

    if (editUserId) {
      // Update user in Firestore
      const userDocRef = doc(db, "users", editUserId);
      await updateDoc(userDocRef, newUser);
      alert("User Updated!");
      setEditUserId("");
      setCurrentUser(null);
    } else {
      // Add new user to Firestore
      await addDoc(usersCollectionRef, newUser);
      alert("Record Added");
    }

    // Reset form fields
    setUserName("");
    setUserCourse("");
    fetchUsers(); // Refresh user records
  };

  // Delete user from Firestore
  const deleteUser = async (id) => {
    const userDocRef = doc(db, "users", id);
    await deleteDoc(userDocRef);
    alert("User Deleted");
    fetchUsers(); // Refresh user records
  };

  // Edit user
  const editUser = (id, name, course) => {
    setEditUserId(id);
    setUserName(name);
    setUserCourse(course);
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      alert("User Logged Out!");
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      alert("User Logged In with Google!");
    } catch (error) {
      console.error(error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setCurrentUser);
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (currentUser) {
      fetchUsers(); // Fetch user records from Firestore when the user is logged in
    }
  }, [currentUser]);

  return (
    <div className="app-container">
      {/* If the user is not logged in, show the login page */}
      {!currentUser ? (
        <div className="login-container">
          <h1>Login with Google</h1>
          <div className="google-signin-btn-container">
            {/* Google Sign-In Button */}
            <button 
              onClick={handleGoogleSignIn} 
              className="google-signin-btn"
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign In with Google"}
            </button>
          </div>
        </div>
      ) : (
        // If the user is logged in, show the Todo App (CRUD) page
        <div className="todo-app-container">
          <div className="header text-center">
            <h1>Todo App</h1>
            <h4>Welcome, {currentUser.displayName || currentUser.email}</h4>
            <button onClick={handleSignOut} className="sign-out-btn">Sign Out</button>
          </div>
          <form onSubmit={handleSubmit} className="form-container text-center">
            <label>
              Name: &nbsp;
              <input
                type="text"
                placeholder="Add your Name"
                onChange={(e) => setUserName(e.target.value)}
                value={userName}
              />
            </label>
            &nbsp;&nbsp;
            <label>
              Course: &nbsp;
              <input
                type="text"
                placeholder="Add your Course"
                onChange={(e) => setUserCourse(e.target.value)}
                value={userCourse}
              />
            </label> <br />
            <br /><button type="submit" className="submit-button">
              {editUserId ? <FaRegEdit /> : <AiOutlineUsergroupAdd />}
            </button>
          </form>
          <div className="records-container">
            <div className="row justify-content-center">
              {userRecords.map((user) => {
                const { id, name, course } = user;
                return (
                  <div className="col-md-4 col-lg-3 mb-4" key={id}>
                    <div className="card modern-card shadow-lg hover-card">
                      <div className="card-body text-center">
                        <h4 className="card-subtitle mb-2 text-dark">{name}</h4>
                        <p className="card-text text-muted">{course}</p>
                      </div>
                      <div className="card-footer d-flex justify-content-around">
                        <button onClick={() => editUser(id, name, course)} className="btn btn-primary btn-sm">
                          <FaRegEdit /> Edit
                        </button> &nbsp;
                        <button onClick={() => deleteUser(id)} className="btn btn-danger btn-sm">
                          <MdDelete /> Delete
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Crud;
