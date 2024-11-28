import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Edit = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  let data = JSON.parse(localStorage.getItem("users")) || [];
  const [record, setRecord] = useState(data);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setName(location.state.name);
    setEmail(location.state.email);
    setPassword(location.state.password);
    setStatus(location.state.status);
  }, [location.state]);

  const handlesubmit = (e) => {
    e.preventDefault();

    let up = record.map((val) => {
      if (val.id === location.state.id) {
        val.name = name;
        val.email = email;
        val.password = password;
        val.status = status; 
      }
      return val;
    });

    localStorage.setItem("users", JSON.stringify(up));
    alert("Record updated");

    setTimeout(() => {
      navigate('/');
    }, 2000);
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
              <label htmlFor="exampleInputName" className="form-label">Name</label>
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="form-control"
                placeholder="Enter your Name"
                id="exampleInputName"
                aria-describedby="nameHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail" className="form-label">Email</label>
              <input
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="form-control"
                placeholder="Enter your Email"
                id="exampleInputEmail"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword" className="form-label">Password</label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="form-control"
                placeholder="Enter your Password"
                id="exampleInputPassword"
                aria-describedby="passwordHelp"
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

export default Edit;
