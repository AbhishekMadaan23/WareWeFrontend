import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  border: 1px solid #ccc;
`;

const StyledButton = styled.button`
  background-color: #4caf50;
  padding: 10px 15px;
  margin: 0 10px;
  border: none;
  color: white;
`;

const FetchingSingleUser = () => {
  const [userId, setUserId] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    setUserId(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:5000/api/user/${userId}`
      );
      setUserData(response.data);
      setError(null);
    } catch (error) {
      setError(error.response.data.message);
      setUserData(null);
    }
  };

  return (
    <div>
      <StyledDiv>
        <h2>Fetch User Data</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Enter User ID:
            <input
              style={{
                padding: "10px",
                margin: "10px",
                width: "200px",
                border: "1px solid #ccc",
              }}
              type="text"
              value={userId}
              onChange={handleChange}
            />
          </label>
          <StyledButton type="submit">Fetch User</StyledButton>
        </form>
        {error && <p style={{ color: "red" }}>{"Oops! user not found"}</p>}
        {userData && (
          <div>
            <h3>User Details:</h3>
            <p>ID: {userData._id}</p>
            <p>Name: {userData.username}</p>
            <p>Email: {userData.email}</p>
            {/* Add more user details as needed */}
          </div>
        )}
      </StyledDiv>
    </div>
  );
};

export default FetchingSingleUser;
