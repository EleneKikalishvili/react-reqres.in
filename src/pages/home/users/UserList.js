import React, { useState, useEffect } from "react";
import { makeGetReq } from "../../../api";

function UserList() {
  const [users, setUsers] = useState();

  useEffect(() => {
    makeGetReq("/users?page=1").then((res) => {
      setUsers(res.data.data);
      console.log(users);
    });
  }, []);

  return <div></div>;
}

export default UserList;
