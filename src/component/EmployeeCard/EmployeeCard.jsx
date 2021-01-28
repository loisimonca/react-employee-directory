import React, { useEffect, useState } from "react";
import axios from "axios";

//-----------------------STATE----------------------------//

const EmployeeCard = () => {
  const [users, setUsers] = useState([]);
  const [usersToDisplay, setUsersToDisplay] = useState([]);
  const [sortDirection, setSortDirection] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");

  //-----------------------API CALL---------------------------//
  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=50")
      .then((response) => {
        console.log(response.data.results);
        setUsers(response.data.results);
        setUsersToDisplay(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  //-----------------------FUNCTION DEFINITION---------------------------//
  const handleSubmit = (e) => {
    e.preventDefault();
    const filteredUsers = users.filter((user) => {
      return user.phone.includes(searchTerm);
    });
    setUsersToDisplay(filteredUsers);
  };
  const sortByName = () => {
    if (sortDirection === "asc") {
      nameAscending();
      setSortDirection("desc");
    } else {
      nameDescending();
      setSortDirection("asc");
    }
  };
  const nameAscending = () => {
    const tempUser = [...users];
    const sortedUser = tempUser.sort((a, b) => {
      const aValue = a.name.first;
      const bValue = b.name.first;
      if (aValue < bValue) {
        return -1;
      }
      if (aValue > bValue) {
        return 1;
      }
      return 0;
    });

    setUsersToDisplay(sortedUser);
  };
  const nameDescending = () => {
    const tempUser = [...users];
    const sortedUser = tempUser.sort((a, b) => {
      const aValue = a.name.first;
      const bValue = b.name.first;
      if (aValue > bValue) {
        return -1;
      }
      if (aValue < bValue) {
        return 1;
      }
      return 0;
    });

    setUsersToDisplay(sortedUser);
  };

  //-----------------------RENDERED SECTION---------------------------//

  return (
    <div>
      <div>
        <form className="d-flex justify-content-center" onSubmit={handleSubmit}>
          <input
            style={{ marginTop: 100 }}
            type="text"
            name="searchTerm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Enter phone number to filer"
          ></input>
          <button style={{ marginTop: 100 }} className="btn btn-primary">
            Search
          </button>
        </form>
      </div>
      <div className="container" style={{ marginTop: 60 }}>
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Photo</th>
              <th scope="col" onClick={sortByName}>
                Name
              </th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
            </tr>
          </thead>
          <tbody>
            {usersToDisplay.map((user, index) => (
              <tr key={index}>
                <th scope="row">{user.id.value}</th>
                <td>
                  <img
                    src={user.picture.thumbnail}
                    alt="{user.name.first} {user.name.last}"
                  ></img>
                </td>
                <td>
                  {user.name.first} {user.name.last}
                </td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeCard;
