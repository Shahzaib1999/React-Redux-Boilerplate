import React, { Component } from "react";
import "../../App.css";
import * as firebase from "firebase";
import { NavLink } from "react-router-dom";
// import { updateUser } from "../../Redux/acions/authActions";
import { connect } from "react-redux";
import swal from "sweetalert";
import { logOut } from '../../store/actions/Action'


class Navbar extends Component {

  constructor() {
    super();

    this.state = {

    }

    this.signOut = this.signOut.bind(this);

  }

  signOut() {
    this.props.logOut()
  }

  render() {
    console.log(this.props,"aaaaaa");
    
    return <div>
      <nav className="navbar navbar-expand-sm navbar-dark flex-row bg-primary" id="color">
        <a className="navbar-brand" href="/" id="navHeading">
          Navbar
        </a>
        <button className="navbar-toggler ml-lg-0" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse float-right" id="navbarSupportedContent">
          <ul className="nav navbar-nav ml-auto" id="navbar">

            <li className="nav-item">
              <NavLink to="/">
                <span className="nav-link">
                  Home <span className="sr-only" />
                </span>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/dashboard">
                <span className="nav-link">
                  Dashboard <span className="sr-only" />
                </span>
              </NavLink>
            </li>
            {!this.props.loginData ?
            <React.Fragment>
              <li className="nav-item">
                <NavLink to="/login">
                  <span className="nav-link">
                    LogIn <span className="sr-only" />
                  </span>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/SignUp">
                  <span className="nav-link">
                    SignUp <span className="sr-only" />
                  </span>
                </NavLink>
              </li>
            </React.Fragment>
            :
            ""
            }
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle mr-3 mr-lg-0" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fa fa-user" />
                <span className="caret" />
              </a>
              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                <span className="dropdown-item" onClick={this.signOut}>
                  LogOut
                        </span>
              </div>
            </li>

          </ul>
        </div>
      </nav>
    </div>;
  }
}

const mapStateToProps = (state) => {
  return {
    USER: state.reducer.user,
    loginData: state.reducer.loginData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(logOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

