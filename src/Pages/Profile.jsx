import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

function Profile() {
  // const { user, isLoading } = useAuth0();
  // console.log(user);
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState({});
  // const location = useLocation();
  // const id = location.state?.userId;
  const id = localStorage.getItem("user ID");

  const getdata = async () => {
    const res = await axios.get(`/getdata/${id}`);
    console.log("++++ API response :", res.data);
    setUserData(res.data.userData);
    if (res.data) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getdata();
  }, []); // The empty dependency list is very important , otherwise the api call will keep executing in infinite-loop

  const styles = {
    style: {
      display: "flex",
      flexDirection: "column",
      // justifyContent: "center",
      alignItems: "center",
      color: "blueViolet",
    },
  };

  return (
    <>
      {isLoading ? (
        <div>
          <p>Loading...</p>
        </div>
      ) : (
        <div style={styles.style}>
          {/* <img src={userData} alt={user.name} /> */}
          &nbsp;
          <h2>{`Welcome ${userData.name}`}</h2>&nbsp;
          <p>{`Your email ID is ${userData.email}`}</p>
          <p>{`You have ${userData.videos} videos`}</p>
          <p style={{ display: "inline-flex" }}>
            Your account status is&nbsp;
            {userData.active ? (
              <div className="text-success">active</div>
            ) : (
              <div className="text-danger">inactive</div>
            )}{" "}
          </p>
        </div>
      )}
    </>
  );
}

export default Profile;
