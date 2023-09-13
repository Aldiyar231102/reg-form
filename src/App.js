import React, { useState } from "react";
import "./index.css";
import InputField from "./components/InputField";
import SuccessMessage from "./components/SuccessMessage";

export default function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.firstName && values.lastName && values.email) {
      setValid(true);
    }
    setSubmitted(true);
  };

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        {submitted && valid ? <SuccessMessage /> : null}
        <InputField
          id="first-name"
          value={values.firstName}
          onChange={handleInputChange}
          type="text"
          placeholder="First Name"
          name="firstName"
          error={submitted && !values.firstName ? "Please enter a first name" : null}
        />
        <InputField
          id="last-name"
          value={values.lastName}
          onChange={handleInputChange}
          type="text"
          placeholder="Last Name"
          name="lastName"
          error={submitted && !values.lastName ? "Please enter a last name" : null}
        />
        <InputField
          id="email"
          value={values.email}
          onChange={handleInputChange}
          type="text"
          placeholder="Email"
          name="email"
          error={submitted && !values.email ? "Please enter an email" : null}
        />
        <button className="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}