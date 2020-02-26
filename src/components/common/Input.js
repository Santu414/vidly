import React from "react";

const Input = props => {
  return (
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">User Name</label>
      <input
        onChange={this.handleChange}
        value={this.state.account.username}
        name="username"
        type="email"
        className="form-control"
        id="username"
        aria-describedby="emailHelp"
        placeholder="Enter email"
      />
    </div>
  );
};

export default Input;
