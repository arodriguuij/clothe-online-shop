import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import "./sign-up.styles.scss";
import axios from "axios";
import { connect } from "react-redux";
import { logIn } from "../../redux/user/user.actions";

class SignUp extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  handleSubmit = async event => {
    event.preventDefault();
    console.log(this.state);

    if (this.state.password !== this.state.confirmPassword) {
      alert("passwords don't match");
      return;
    }

    const authData = {
      email: this.state.email,
      password: this.state.confirmPassword
    };

    try {
      const response = await axios.post(
        "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyDvdT8-U7bEUHVVz5NjWs4LG8LfR4vjfp4",
        authData
      );
      this.setState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
      });

      const user = {
        email: response.data.email
      }
      this.props.onLogIn(user);
    } catch (error) {
      console.error("What a mistake has appear here :o", error);
    }
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { name, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            label="Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onLogIn: user => dispatch(logIn(user))
});
export default connect(null, mapDispatchToProps)(SignUp);
