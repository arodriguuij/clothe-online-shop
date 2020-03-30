import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/ShopPage.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
import { connect } from 'react-redux';
import {tryLogin} from './redux/user/user.actions';
import "./App.css";

class App extends Component {
  componentDidMount(){
    this.props.onTryLogin();
  }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return{
    onTryLogin: () => dispatch(tryLogin())
  }
}

export default connect(null, mapDispatchToProps)(App);
