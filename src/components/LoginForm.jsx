import React, { Component, createRef } from "react";
import Input from "./common/Input";
class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { username, password } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onClick={this.handleSubmit}>
          <Input
            name="username"
            value={username}
            label="Username"
            onChange={this.handleChange}
          />
          <Input
            name="password"
            value={password}
            label="Password"
            onChange={this.handleChange}
          />

          <br />
          <button className="btn btn-md btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
