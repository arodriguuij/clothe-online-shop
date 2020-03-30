import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import "./sign-in.styles.scss";
import axios from "axios";
import { auth } from "../../redux/user/user.actions";
import { connect } from "react-redux";

class SignIn extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = async event => {
    event.preventDefault();
    console.log(this.state);
    const authData = {
      email: this.state.email,
      password: this.state.password,
      returnSecureToken: true
    };

    try {
      const response = await axios.post(
        "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDvdT8-U7bEUHVVz5NjWs4LG8LfR4vjfp4",
        authData
      );
      this.props.onAuth(response);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log("Error", error.message);
    }
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit"> Sign in </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuth: response => dispatch(auth(response))
  };
};
export default connect(null, mapDispatchToProps)(SignIn);
