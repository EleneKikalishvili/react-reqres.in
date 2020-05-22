import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/authContext";

function Signup() {
  const Auth = useContext(AuthContext);
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = (data) => {
    if (
      data["username"] === "superman" &&
      data["password"] === data["repassword"]
    ) {
      //Login
      Auth.login();
    }
  };
  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            ref={register({ required: true, minLength: 3 })}
            aria-describedby="emailHelp"
            name="username"
          />
          {errors.username && errors.username.type === "required" && (
            <small
              id="emailHelp"
              className="form-text "
              style={{ color: "red" }}
            >
              Email is required.
            </small>
          )}
          {errors.username && errors.username.type === "minLength" && (
            <small
              id="emailHelp"
              className="form-text "
              style={{ color: "red" }}
            >
              min length is 3
            </small>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            ref={register({ required: true })}
          />
          {errors.password && errors.password.type === "required" && (
            <small
              id="emailHelp"
              className="form-text "
              style={{ color: "red" }}
            >
              Password is required.
            </small>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Retype Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="repassword"
            ref={register({ required: true })}
          />
          {errors.repassword && errors.repassword.type === "required" && (
            <small
              id="emailHelp"
              className="form-text "
              style={{ color: "red" }}
            >
              Password is required.
            </small>
          )}
          {errors.password !== errors.repassword && (
            <small
              id="emailHelp"
              className="form-text "
              style={{ color: "red" }}
            >
              Passwords don't match.
            </small>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
        <span>
          {" "}
          Back to{" "}
          <NavLink exact to="/login">
            Log In
          </NavLink>
        </span>
      </form>
    </div>
  );
}

export default Signup;
