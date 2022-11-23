import React from "react";
import Joi from "joi-browser";
import Form from "./common/Form";
import * as userService from "../services/userService";
class RegisterForm extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {},
  };
  schema = {
    username: Joi.string().email().required().label("Username"),
    password: Joi.string().min(5).required().label("Password"),
    name: Joi.string().required().label("Name"),
  };

  doSubmit = async () => {
    await userService.register(this.state.data);
  };
  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onClick={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}

          <br />
          {this.renderMethod("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
