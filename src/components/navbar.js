import React, { useState, setState } from "react";
import "../css/navbar.css";
import "../css/hero.css";
import sg_logo from "../images/sg_logo.png";
import { Link } from "gatsby";
import { navigate } from "@reach/router";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      email: "",
      errorText: "",
      loggedIn: "",
      emailSent: "",
      resetEmailAddress: "",
    };
    this.handleSignIn = this.handleSignIn.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.navigateToPricing = this.navigateToPricing.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.postLoginData = this.postLoginData.bind(this);
    this.forgotEmail = this.forgotEmail.bind(this);
    this.onChangeResetEmail = this.onChangeResetEmail.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
  }
  componentWillMount() {
    if (typeof window !== "undefined") {
      let loggedIn = window.sessionStorage.getItem("name");
      console.log(loggedIn);
      if (loggedIn !== null && this.state.loggedIn == "") {
        this.setState({ loggedIn });
      }
    }
  }
  async forgotEmail(e) {
    const { resetEmailAddress } = this.state;
    const data = {
      email: resetEmailAddress,
    };
    const response = await fetch(
      "https://staging-webservice.supportgenie.io/v3/agent/reset-password",
      {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );
    const json = await response.json();
    console.log("Success:", JSON.stringify(json.success));
    if (json.success == true) {
      this.setState({
        emailSent:
          "Instructions to reset password has been sent your email address",
      });
    } else {
      this.setState({ emailSent: "No account available with this email" });
    }
  }
  handleLogOut(e) {
    e.preventDefault();
    console.log("logout");
    sessionStorage.removeItem("name", "email", "companyName", "plan");
    navigate("/");
  }
  handleSignIn(e) {
    console.log("asx");
    e.preventDefault();
    let re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/gim;
    const { password, email } = this.state;
    const data = {
      password: password,
      email: email,
    };
    console.log("this is data" + JSON.stringify(data));
    this.postLoginData(data);
  }
  async postLoginData(data) {
    console.log("logging in");
    const response = await fetch(
      "https://staging-webservice.supportgenie.io/v3/company/validate/primaryAgent",
      {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );
    const json = await response.json();
    console.log("Success:", JSON.stringify(json));
    if (json.success === true) {
      window.sessionStorage.setItem("name", json.agent.name);
      window.sessionStorage.setItem("email", json.agent.email);
      window.sessionStorage.setItem("companyName", json.company.name);
      window.sessionStorage.setItem("plan", json.company.planid);
      this.setState({ loggedIn: json.agent.name });
      navigate("/profile");
    }
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  onChangeResetEmail(e) {
    this.setState({
      resetEmailAddress: e.target.value,
    });
  }
  navigateToPricing() {
    navigate("https://supportgenie.io/pricing", { replace: true });
  }
  render() {
    const { loggedIn, emailSent, resetEmailAddress } = this.state;
    return (
      <div className="support-genie-background" id="sg-background">
        <nav className="navbar navbar-default navbar-background first_header">
          <div
            id="pwdModal"
            class="modal fade"
            tabindex="-1"
            role="dialog"
            aria-hidden="true"
          >
            <div class="modal-dialog" style={{ width: "450px" }}>
              <div class="modal-content">
                <div class="modal-header">
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-hidden="true"
                  >
                    ×
                  </button>
                  <h1 class="text-center">Forgot Password?</h1>
                </div>
                <div class="modal-body">
                  <div class="col-md-12">
                    <div class="panel panel-default">
                      <div class="panel-body">
                        <div class="text-center">
                          <p>Please enter your email address.</p>
                          <div class="panel-body">
                            <fieldset>
                              <div class="form-group">
                                <input
                                  class="form-control input-lg"
                                  placeholder="E-mail Address"
                                  name="email"
                                  type="email"
                                  value={resetEmailAddress}
                                  onChange={this.onChangeResetEmail}
                                />
                              </div>
                              <input
                                style={{ backgroundColor: "#f59d23" }}
                                class="btn btn-lg btn-primary btn-block"
                                value="Submit"
                                type="submit"
                                onClick={this.forgotEmail}
                              />
                            </fieldset>
                            {emailSent !== "" ? (
                              <div style={{ color: "red", paddingTop: "10px" }}>
                                {emailSent}
                              </div>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <div class="col-md-12">
                    <button class="btn" data-dismiss="modal" aria-hidden="true">
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
                aria-expanded="false"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a href="https://supportgenie.io" className="navbar-brand">
                <img src={sg_logo}></img>
              </a>
            </div>
            <div
              class="collapse navbar-collapse"
              id="bs-example-navbar-collapse-1"
            >
              <ul class="nav navbar-nav navbar-right">
                <li class={"dropdown "} id="thread">
                  <a
                    href="#"
                    class="dropdown-toggle"
                    style={{ color: "#FFFFFF", backgroundColor: "transparent" }}
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Features <span class="caret"></span>
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a href="https://supportgenie.io/features/overview">
                        Overview
                      </a>
                    </li>
                    <li>
                      <a href="https://supportgenie.io/features/omni-channel">
                        Omni-Channel Support
                      </a>
                    </li>
                    <li>
                      <a href="https://supportgenie.io/features/agent-portal">
                        Fully Featured Agent Portal
                      </a>
                    </li>
                    <li>
                      <a href="https://supportgenie.io/features/chat-bots">
                        Artificial Intelligence and Chat Bots
                      </a>
                    </li>
                    <li>
                      <a href="https://supportgenie.io/features/visual-assistance">
                        Visual Assistance
                      </a>
                    </li>
                    <li>
                      <a href="https://supportgenie.io/features/enhance-contact">
                        Enhance Your Contact Center
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="https://supportgenie.io/pricing">Price</a>
                </li>
                <li>
                  <a
                    href="https://blog.supportgenie.io"
                    style={{ color: "#f59d23" }}
                  >
                    Blog
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="https://supportgenie.io/about">About</a>
                </li>
                {/* <li style={{ display: none }}>
                                {' '}
                                <Link to="profile">Profile</Link>
                            </li> */}
                <li>
                  <a
                    href="https://supportgenie.io/contactus"
                    id="navigateToContact"
                  >
                    Contact Us
                  </a>
                </li>
                <li
                  className={"dropdown sign_border "}
                  //onClick={e => setLogin(!login)}
                >
                  <div className="account_section">
                    {loggedIn == "" ? (
                      <a
                        href="#"
                        className="dropdown-toggle"
                        style={{
                          color: "#FFFFFF",
                          backgroundColor: "transparent",
                        }}
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Sign In
                      </a>
                    ) : (
                      // <Link to="/profile" id="navigateToContact">
                      //  {loggedIn}
                      // </Link>
                      <div class="dropdown">
                        <a
                          class=" btn-secondary dropdown-toggle"
                          type="button"
                          id="dropdownMenuButton"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          style={{ cursor: "pointer" }}
                        >
                          {loggedIn}
                        </a>
                        <div
                          class="dropdown-menu"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <Link
                            to="profile"
                            className="dropdown-item"
                            style={{
                              color: "black",
                              display: "block",
                              margin: "6px",
                            }}
                            id="navigateToContact"
                          >
                            Profile
                          </Link>
                          <a
                            href="javascript:void(0)"
                            class="dropdown-item"
                            style={{
                              color: "black",
                              display: "block",
                              margin: "6px",
                            }}
                            onClick={this.handleLogOut}
                          >
                            Logout
                          </a>
                          {/* <a
                                                    class="dropdown-item"
                                                    href="#"
                                                    style={{ color: 'black', display: 'inline' }}
                                                >
                                                    Something else here
                                                </a><br/> */}
                        </div>
                      </div>
                    )}
                    {loggedIn == "" ? (
                      <ul className="dropdown-menu">
                        <form
                          className="navbar-form"
                          role="signup"
                          formGroup="signInForm"
                        >
                          {/*<form className="navbar-form" role="signup" [formGroup]="signInForm" (ngSubmit)="customerSignIn()"> */}
                          <label className="login-header">
                            Log in to your account:
                          </label>
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control sign-in-input"
                              placeholder="Enter your email"
                              onChange={this.onChangeEmail}
                            ></input>
                          </div>
                          <div className="form-group">
                            <input
                              type="password"
                              className="form-control sign-in-input"
                              placeholder="Enter your password"
                              onChange={this.onChangePassword}
                            ></input>
                          </div>
                          <button
                            className="btn sign-in-button"
                            onClick={this.handleSignIn}
                          >
                            Sign In
                          </button>
                          <a
                            className="forgot-pwd"
                            href="#"
                            data-target="#pwdModal"
                            data-toggle="modal"
                          >
                            Forgot my password
                          </a>
                        </form>
                      </ul>
                    ) : (
                      ""
                    )}
                  </div>
                </li>
                <li className="nav_text_button">
                  <button
                    className="btn transparent-btn  start-free-trial"
                    onClick={this.navigateToPricing}
                  >
                    Start your free trial
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
