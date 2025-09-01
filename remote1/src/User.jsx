import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsers, setSearchTerm } from "./store";

const Users = () => {
  const dispatch = useDispatch();
  const { data, searchTerm } = useSelector((state) => state.users);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => dispatch(setUsers(users)));
  }, [dispatch]);

  const filteredUsers = data.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", border: "1px solid gray" }}>
      <h2>Remote Users List</h2>
      <input
        type="text"
        placeholder="Search user..."
        value={searchTerm}
        onChange={(e) => dispatch(setSearchTerm(e.target.value))}
      />
      <ul>
        {filteredUsers.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
