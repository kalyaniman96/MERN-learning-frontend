import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import dateFormat from "dateformat";

const AllUsers = ({ notify }) => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState();

  //   const [isLoading, setIsLoading] = useState(false);
  // Format the date using the `date-format` module,

  const getdata = async () => {
    try {
      const res = await axios.get(`/getdata`);
      console.log("+++ API response", res);

      setUserData(res.data.fulldata);
      console.log("++++ All user data :", userData);
    } catch (error) {
      console.log("+++ Error while fetching data: ", error);
    }
  };

  useEffect(() => {
    getdata();
    // console.log("++++ API response :", userData);
  }, []);

  const deleteUser = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      const res = await axios.delete(`/deletedata/${id}`);
      notify("User deleted successfully");
      console.log(res);
    }

    getdata();
  };

  const editUser = (id) => {
    navigate("/userdata", { state: { userid: id } });
  };

  const addUser = () => {
    navigate("/adduser");
  };

  return (
    <>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Photo</th>
              <th scope="col">Email</th>
              <th scope="col">Videos</th>
              <th scope="col">Acc status</th>
              <th scope="col">Created At</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {userData?.map((user, index) => {
              // console.log(index);
              // console.log(user.image);
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{user.name}</td>
                  <td>
                    <img
                      src={`/uploads/${user.image}`}
                      style={{ width: 50, height: 50 }}
                    />
                  </td>
                  <td>{user.email}</td>
                  <td>{user.videos}</td>
                  <td>
                    {user.active ? (
                      <p style={{ color: "green", float: "left" }}>Active</p>
                    ) : (
                      <p style={{ color: "red", float: "left" }}>Deactivated</p>
                    )}
                  </td>
                  <td>{dateFormat(user.createdAt, "dd/mm/yyyy")}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-warning m-1"
                      onClick={() => editUser(user._id)}
                    >
                      <i class="bi bi-pencil-square"></i>
                    </button>

                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => deleteUser(user._id)}
                    >
                      <i class="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button className="btn btn-primary" onClick={addUser}>
          Add user
        </button>
      </div>
    </>
  );
};

export default AllUsers;
