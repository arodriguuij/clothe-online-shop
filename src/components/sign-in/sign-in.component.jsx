import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import "./sign-in.styles.scss";
import { fetchLoginStartAsyn } from "../../redux/user/user.actions";
import { connect } from "react-redux";
import { selectError } from "../../redux/user/user.selectors";
import { createStructuredSelector } from "reselect";

const SignIn = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async event => {
    event.preventDefault();
    const authData = {
      email,
      password
    };

    setEmail("");
    setPassword("");

    props.onFetchLoginStartAsyn(
      authData,
      "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDvdT8-U7bEUHVVz5NjWs4LG8LfR4vjfp4"
    );
  };

  const handleChange = event => {
    const { value, name } = event.target;
    if (name === "email") setEmail(value);
    else if (name === "password") setPassword(value);
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          value={email}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="password"
          required
        />
        <div className="buttons">
          <CustomButton type="submit"> Sign in </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  error: selectError
});

const mapDispatchToProps = dispatch => {
  return {
    onFetchLoginStartAsyn: (user, url) =>
      dispatch(fetchLoginStartAsyn(user, url))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
