import React from "react";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import { selectIsLoading } from "../../redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import "./sign-in-and-sign-up.styles.scss";

const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLoading
});

export default connect(mapStateToProps)(WithSpinner(SignInAndSignUpPage));
