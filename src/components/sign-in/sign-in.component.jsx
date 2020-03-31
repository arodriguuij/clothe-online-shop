import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import "./sign-in.styles.scss";
import axios from "axios";
import { logIn } from "../../redux/user/user.actions";
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
      password: this.state.password
    };

    try {
      const response = await axios.post(
        "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDvdT8-U7bEUHVVz5NjWs4LG8LfR4vjfp4",
        authData
      );
      this.setState({ email: "", password: "" });
      const user = {
        email: response.data.email
      }

      this.props.onLogIn(user);
    } catch (error) {
      console.error("What a mistake has appear here :o", error);
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
    onLogIn: user => dispatch(logIn(user))
  };
};
export default connect(null, mapDispatchToProps)(SignIn);
