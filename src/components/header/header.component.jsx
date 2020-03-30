import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.styles.scss";
import { logOut } from "../../redux/user/user.actions";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectUserId } from "../../redux/user/user.selectors";
import {selectHidden} from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';

const Header = props => {
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
        <CartIcon />
      </div>
      {props.isHidden ? null : <CartDropdown />}
    </div>
  );
};

/* const mapStateToProps = state => ({
  loggedUser: selectUserId(state),
  isHidden: selectHidden(state)
}); */
// Same
const mapStateToProps = createStructuredSelector ({
  loggedUser: selectUserId,
  isHidden: selectHidden
});

const mapDispatchToProps = dispatch => ({
  onLogOut: () => dispatch(logOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
