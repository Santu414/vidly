import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./common/Input";
import Form from "./common/Form";
class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };
  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onClick={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}

          <br />
          {this.renderMethod("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
