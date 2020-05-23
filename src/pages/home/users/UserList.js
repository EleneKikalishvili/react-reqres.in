import React, { useState, useEffect } from "react";
import { makeGetReq, makeDeleteReq } from "../../../api";

function UserList() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    makeGetReq(`/users?page=${page}`).then((res) => {
      setUsers(res.data.data);
      if (page === 2) {
        setUsers(users.concat(res.data.data));
      }
      console.log(users);
    });
  }, [page]);

  const handleDelete = (id, e) => {
    e.preventDefault();
    const confirmed = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (confirmed) {
      makeDeleteReq(`/users/${id}`).then((res) => {
        console.log(res.data);
      });
    }
  };

  const content = users.map((ob) => {
    return (
      <div className="col-6 col-sm-4 mt-3" key={ob.id} id={ob.id}>
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

  const handleClick = (e) => {
    return setPage(2);
  };

  return (
    <div className="container mt-5">
      {" "}
      <div className="row">{content}</div>
      {page === 2 ? (
        <button
          className="btn btn-outline-danger mt-5"
          onClick={(e) => handleClick(e)}
        >
          Nothing To Load
        </button>
      ) : (
        <button
          className="btn btn-outline-dark mt-5"
          onClick={(e) => handleClick(e)}
        >
          Load More
        </button>
      )}
    </div>
  );
}

export default UserList;
