import React, { useState, useEffect } from "react";
import { makeGetReq, makeDeleteReq } from "../../../api";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    makeGetReq("/users?page=1").then((res) => {
      setUsers(res.data.data);
      console.log(users);
    });
  }, []);

  const handleDelete = (id, e) => {
    e.preventDefault();
    const confirmed = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (confirmed) {
      makeDeleteReq(`/users/${id}`);
    }
  };

  const content = users.map((ob) => {
    return (
      <div className="col-sm" key={ob.id} id={ob.id}>
        <img src={ob.avatar} alt={ob.first_name} />
        <h3>{ob.first_name}</h3>
        <h3>{ob.last_name}</h3>
        <p>Email: {ob.email}</p>
        <button
          className="btn btn-outline-danger"
          onClick={(e) => handleDelete(ob.id, e)}
        >
          Delete
        </button>
      </div>
    );
  });

  return (
    <div className="container mt-5">
      {" "}
      <div className="row">{content}</div>
    </div>
  );
}

export default UserList;
