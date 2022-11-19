import React, { Component } from "react";

export class LoginForm extends Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
        <form>
          <div class="form-group">
            <label htmlFor="username">Username</label>
            <input id="username" type="text" class="form-control" />
          </div>
          <div class="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="text" class="form-control" />
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
