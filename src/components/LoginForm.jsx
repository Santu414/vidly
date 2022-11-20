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
    const { data, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onClick={this.handleSubmit}>
          <Input
            name="username"
            value={data.username}
            label="Username"
            onChange={this.handleChange}
            errors={errors.username}
          />
          <Input
            name="password"
            value={data.password}
            label="Password"
            onChange={this.handleChange}
            errors={errors.password}
          />

          <br />
          <button disabled={this.validate()} className="btn btn-md btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
