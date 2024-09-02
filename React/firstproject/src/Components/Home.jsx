import React from "react";
import myImage from "../asserts/Vamsi pic.png";

export default function Home() {
  return (
    <div className="homeDesc">
      <img src={myImage} alt="vamsikrishnapic" width={"350px"} /> 
      <h1>
        Hello I'm{" "}
        <span style={{ color: "orangered" }}>Vamsi Krishna Dudyala</span>
      </h1>
      <h1 style={{ color: "purple" }}>Frontend Developer</h1>
      <p style={{ fontSize: "30px", color: "red", fontWeight: "600" }}>
        I'm a professional Web Developer. Our main Goal to help & satisfied the
        Local & Global Clients by web development solutions
      </p>
    </div>
  );
}

/*import React, { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const isEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const isValidPassword = (password) => {
    const symbolRegex = /[!@#$%^&*(),.?"{}|<>]/;
    const numberRegex = /[0-9]/;
    const upperCaseRegex = /[A-Z]/;
    const lowerCaseRegex = /[a-z]/;
    return (
      password.length >= 8 &&
      symbolRegex.text(password) &&
      numberRegex.text(password) &&
      upperCaseRegex.text(password) &&
      lowerCaseRegex.text(password)
    );
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const validateForm = () => {
    let newErrors = {};
    if (!formData.username) {
      newErrors.username = "Username is required!!";
    }
    if (!formData.email) {
      newErrors.email = "Email is required!!";
    } else if (!isEmail(formData.email)) {
      newErrors.email = "Invalid Email format";
    }
    if (!formData.password) {
      newErrors.password = "Password is required!!";
    } else if (!isValidPassword(formData.password) > 8) {
      newErrors.password =
        "Password must be atleast 8 characters long and contain atleast one symbol, one number,one uppercase letter, and one lowercase letter.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      alert("Logging Successfully!!!");
    } else {
      alert("Once check your email and password");
    }
  };
  return (
    <div className="homeDesc">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Username: </label>
          <input
            type="text"
            placeholder="Enter your name"
            name="username"
            value={formData?.username}
            onChange={handleChange}
          />
          {errors.username && (
            <span style={{ color: "red" }}>{errors.username}</span>
          )}
        </div>
        <div>
          <label htmlFor="">Email: </label>
          <input
            type="email"
            placeholder="example@gmail.com"
            name="email"
            value={formData?.email}
            onChange={handleChange}
          />
          {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
        </div>
        <div>
          <label htmlFor="">Password: </label>
          <input
            type="password"
            placeholder="Enter your name"
            name="password"
            value={formData?.password}
            onChange={handleChange}
          />
          {errors.password && (
            <span style={{ color: "red" }}>{errors.password}</span>
          )}
        </div>
        <button>Login</button>
      </form>
    </div>
  );
}*/
