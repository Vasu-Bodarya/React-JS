import React, { useState } from "react";
import { Link } from "react-router-dom";

const Add = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let data = JSON.parse(localStorage.getItem('users')) || [];
  const [record, setRecord] = useState(data);
  const [status, setStatus] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();

    let obj = {
      id: Math.floor(Math.random() * 10000),
      name: name,
      email: email,
      password: password,
      status: status,
    };

    let newfield = [...record, obj];
    localStorage.setItem('users', JSON.stringify(newfield));
    setRecord(newfield);
    alert("Record added");
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="container mt-5 shadow p-5">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <div className="d-flex justify-content-center mb-2">
            <Link to={`/`}>
              <button className="btn btn-success btn-sm">View</button>
            </Link>
          </div>

          <form onSubmit={handlesubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="form-control"
                placeholder="Enter your Name"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
              <input
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="form-control"
                placeholder="Enter your Email"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Password</label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="form-control"
                placeholder="Enter your Password"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>

            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add;
