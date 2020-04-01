import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import "./sign-up.styles.scss";
import { connect } from "react-redux";
import { fetchLoginStartAsyn } from "../../redux/user/user.actions";
import { createStructuredSelector } from "reselect";
import { selectError } from "../../redux/user/user.selectors";

const SignUp = props => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    const authData = {
      email,
      password
    };
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");

    props.onFetchLoginStartAsyn(
      authData,
      "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyDvdT8-U7bEUHVVz5NjWs4LG8LfR4vjfp4"
    );
  };

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "confirmPassword":
        setConfirmPassword(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          label="Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  error: selectError
});

const mapDispatchToProps = dispatch => ({
  onFetchLoginStartAsyn: (user, url) => dispatch(fetchLoginStartAsyn(user, url))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
