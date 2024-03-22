import axios from "axios";
import React from "react";
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
const inputStyle = {
  width: "100%",
  padding: "8px",
  boxSizing: "border-box",
  marginBottom: "5px",
};

const buttonStyle = {
  width: "100%",
  padding: "10px",
  backgroundColor: "blue",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

const AddingUser = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      username: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value,
      phone: e.target.phone.value,
      address: e.target.address.value,
    };
    try {
      await axios.post("http://localhost:5000/api/user", newUser);
      alert("User added successfully");
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };
  return (
    <div>
      <StyledDiv>
        <h1>Add User</h1>

        <form
          onSubmit={handleSubmit}
          style={{ maxWidth: "300px", margin: "auto" }}
        >
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              required
              style={inputStyle}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              style={inputStyle}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              style={inputStyle}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              style={inputStyle}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              required
              style={inputStyle}
            />
          </div>
          <button type="submit" style={buttonStyle}>
            Add User
          </button>
        </form>
      </StyledDiv>
    </div>
  );
};

export default AddingUser;
