import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { tryLogin } from "./redux/user/user.actions";
import { selectUserId } from "./redux/user/user.selectors";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/ShopPage.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
import CheckoutPage from "./pages/checkout/checkoutPage.component";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.onTryLogin();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.logedUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    logedUser: selectUserId(state) !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryLogin: () => dispatch(tryLogin())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
