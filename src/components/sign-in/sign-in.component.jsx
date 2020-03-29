import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButtom from "../custom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import "./sign-in.styles.scss";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  hanleSubmit = e => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.hanleSubmit}>
          <FormInput
            name="email"
            type="text"
            value={this.state.email}
            handleChange={this.handleChange}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.email}
            label="password"
            handleChange={this.handleChange}
            required
          />
          <div className="buttons">
            <CustomButtom type="submit">Sign in</CustomButtom>
            <CustomButtom isGoogleSignIn onClick={signInWithGoogle}>
              Sign in with Google
            </CustomButtom>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
