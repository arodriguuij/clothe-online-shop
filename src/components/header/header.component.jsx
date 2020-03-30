import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.styles.scss";
import { logOut } from "../../redux/user/user.actions";

const Header = (props) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {props.loggedUser ? (
          <div className="option" onClick={props.onLogOut}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  loggedUser: state.user.userId !== null
});

const mapDispatchToProps = dispatch => ({
  onLogOut: () => dispatch(logOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
