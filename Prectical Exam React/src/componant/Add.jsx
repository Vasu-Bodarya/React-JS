import React, { useState, useEffect } from "react";
import { db, auth } from "../firebaseConfig";
import { collection, addDoc, updateDoc, doc, deleteDoc, getDocs } from "firebase/firestore";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import "../App.css";

const UserManagement = () => {
  const [userName, setUserName] = useState("");
  const [editUserId, setEditUserId] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const usersCollectionRef = collection(db, "users");

  const fetchUsers = async () => {
    const querySnapshot = await getDocs(usersCollectionRef);
    const usersList = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setUsers(usersList);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userName) {
      alert("Please enter a name");
      return;
    }

    const newUser = { name: userName, active: true };
    if (editUserId) {
      const userDocRef = doc(db, "users", editUserId);
      await updateDoc(userDocRef, newUser);
      alert("User Updated!");
      setEditUserId(null);
    } else {
      await addDoc(usersCollectionRef, newUser);
      alert("User Added!");
    }

    setUserName("");
    fetchUsers();
  };

  const deleteUser = async (id) => {
    const userDocRef = doc(db, "users", id);
    await deleteDoc(userDocRef);
    alert("User Deleted");
    fetchUsers();
  };

  const editUser = (id, name) => {
    setEditUserId(id);
    setUserName(name);
  };

  const toggleUserStatus = async (id, currentStatus) => {
    const userDocRef = doc(db, "users", id);
    await updateDoc(userDocRef, { active: !currentStatus });
    fetchUsers();
  };

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      alert("User Logged In!");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      alert("User Logged Out!");
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setCurrentUser);
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (currentUser) {
      fetchUsers();
    }
  }, [currentUser]);

  return (
    <div className="full-page-container">
      <header className="app-header">
        <h1>Todo List App</h1>
        {currentUser ? (
          <button onClick={handleSignOut} className="auth-button">Sign Out</button>
        ) : (
          <button onClick={handleGoogleSignIn} className="auth-button">
            {loading ? "Signing In..." : "Sign In with Google"}
          </button>
        )}
      </header>

      {currentUser && (
        <div className="content">
          <form onSubmit={handleSubmit} className="form">
            <input
              type="text"
              placeholder="Enter Your Name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="input-field"
            />
            <button type="submit" className="add-button">
              {editUserId ? "Update User" : "Add User"}
            </button>
          </form>

          <table className="user-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Your Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>
                    <button
                      className="toggle-button"
                      onClick={() => toggleUserStatus(user.id, user.active)}
                    >
                      {user.active ? "Deactivate" : "Activate"}
                    </button>&nbsp;&nbsp;   
                    <button
                      className="edit-button"
                      onClick={() => editUser(user.id, user.name)}
                    >
                      Edit
                    </button> &nbsp;&nbsp;
                    <button
                      className="delete-button"
                      onClick={() => deleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
