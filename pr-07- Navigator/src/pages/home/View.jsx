import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const View = () => {
  const navigate = useNavigate();
  const usersData = JSON.parse(localStorage.getItem('users')) || [];
  const [record, setRecord] = useState(usersData);
  const [mdelete, setMdelete] = useState([]);

  const deleteUser = (id) => {
    const updatedRecords = record.filter((val) => val.id !== id);
    localStorage.setItem('users', JSON.stringify(updatedRecords));
    setRecord(updatedRecords);
    alert("Record deleted");
  };

  const handleChangeDelete = (id, checked) => {
    setMdelete((prevMdelete) => 
      checked ? [...prevMdelete, id] : prevMdelete.filter(val => val !== id)
    );
  };

  const multipleDelete = () => {
    if (mdelete.length > 0) {
      const updatedRecords = record.filter(val => !mdelete.includes(val.id));
      localStorage.setItem("users", JSON.stringify(updatedRecords));
      setRecord(updatedRecords);
      setMdelete([]); 
    } else {
      alert("Select at least one user");
    }
  };

  return (
    <div className="container mt-5 shadow p-5">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <table className="table text-center">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
                <th scope="col">
                  <button onClick={multipleDelete}
                    style={{ fontWeight: "900", background: "transparent", border: "none", fontSize: "12px" }}
                  >
                    Multiple-Delete
                  </button>
                </th>
                <th scope="col">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Action</th> 
              </tr>
            </thead>
            <tbody>
              {record.map((val) => (
                <tr key={val.id}>
                  <td>{val.id}</td>
                  <td>{val.name}</td>
                  <td>{val.email}</td>
                  <td>{val.password}</td>
                  <td>
                    <input
                      type="checkbox"
                      onChange={(e) => handleChangeDelete(val.id, e.target.checked)}
                      style={{ width: "60%" }}
                    />
                  </td>
                  <td>
                    <div className="d-flex justify-content-center">
                      <button
                        onClick={() => deleteUser(val.id)}
                        className="btn btn-danger btn-sm me-2" // Add margin-end for spacing
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => navigate(`/edit`, { state: val })}
                        className="btn btn-primary btn-sm"
                      >
                        Edit
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-lg-8 mx-auto text-center">
          {mdelete.length > 0 ? (
            <button className="btn btn-danger" onClick={multipleDelete}>
              Delete Selected
            </button>
          ) : (
            <Link to={`/add`}>
              <button className="btn btn-success">Add User</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default View;
