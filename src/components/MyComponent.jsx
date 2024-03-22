import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  padding: 20px;
`;

const StyledButton = styled.button`
  background-color: #4caf50;
  padding: 10px 15px;
  margin: 0 10px;
  border: none;
  color: white;
`;
const DataDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  border: 1px solid #ccc;
  padding: 20px;
`;

const newUser = {
  username: "John Doe",
  email: "JohnDoe@gmail.com",
  password: "JohmDoe123",
  phone: "123456",
  address: "123 Main St",
};

const MyComponent = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  console.log("////////", data);

  console.log(">>>>>>>>>>>", error);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/user");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const addData = async (newData) => {
    try {
      await axios.post("http://localhost:5000/api/user", newData);
      // Refresh data after adding
      fetchData();
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };

  const updateData = async (id, updatedData) => {
    try {
      await axios.put(`http://localhost:5000/api/user/${id}`, updatedData);
      // Refresh data after updating
      fetchData();
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  const deleteData = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/user/${id}`);
      // Refresh data after deletion
      fetchData();
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  return (
    <div>
      <StyledDiv>
        <h1>Fetch All users Data</h1>
        <StyledButton onClick={fetchData}>Fetch all users</StyledButton>
        <div style={{ display: "flex", gap: "5px" }}>
          {data.map((item) => (
            <DataDiv key={item._id}>
              <p>{item.username}</p>
              <p>{item.email}</p>
              <p>{item.phone}</p>
              <p>{item.address}</p>
              <div>
                <StyledButton
                  onClick={() =>
                    updateData(item._id, {
                      username: `Updated ${item.username}`,
                    })
                  }
                >
                  Update
                </StyledButton>
                <StyledButton onClick={() => deleteData(item._id)}>
                  Delete
                </StyledButton>
              </div>
            </DataDiv>
          ))}
        </div>

        {/* <button onClick={() => addData(newUser)}>Add Data</button> */}
      </StyledDiv>
    </div>
  );
};

export default MyComponent;
