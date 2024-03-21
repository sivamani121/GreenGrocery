import userEvent from "@testing-library/user-event";
import { useState } from "react";
import styles from "./LoginForm.module.css";

import axios from "axios";

export function LoginForm({ setUserId }) {
  const [Username, SetUserName] = useState("");
  const [Password, SetPassword] = useState("");
  return (
    <form
      id="login-form"
      action={console.log()}
      method="post"
      onSubmit={async (event) => {
        event.preventDefault();

        // Post form data to the server
        const formData = {
          email: Username,
          password: Password,
        };
        const response = fetch("http://localhost:3001/user/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Add any additional headers if required
          },
          body: JSON.stringify(formData),
        });

        console.log(response.data); // Handle response from the server
      }}
      style={{ display: "block" }}
    >
      <div className="form-group">
        <input
          type="text"
          name="username"
          id="username"
          tabIndex="1"
          className="form-control"
          placeholder="email"
          value={Username}
          onChange={(e) => {
            SetUserName(e.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          name="password"
          id="password"
          tabIndex="2"
          className="form-control"
          placeholder="Password"
          onChange={(e) => {
            SetPassword(e.target.value);
          }}
        />
      </div>
      <div className="form-group text-center">
        <input type="checkbox" tabIndex="3" name="remember" id="remember" />
        <label htmlFor="remember"> Remember Me</label>
      </div>
      <div className="form-group">
        <div className="row">
          <div className="">
            <input
              type="submit"
              name="login-submit"
              id="login-submit"
              tabIndex="4"
              className={`form-control btn ${styles["btn-login"]}`}
              value="Log In"
              onClick={() => {
                console.log(Username, Password);
              }}
            />
          </div>
        </div>
      </div>
      <div className="form-group">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <a
                href="#"
                tabIndex="5"
                className={`${styles["forgot-password"]}`}
              >
                Forgot Password?
              </a>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

const handlePasswordChange = (e, Password2, password) => {
  // Perform your custom password validation here
  // For example, you can check if the password meets certain criteria
  // and update the custom validation message accordingly
};
export function RegForm({ setUserId }) {
  const [Username, SetUserName] = useState("");
  const [Password, SetPassword] = useState("");
  const [Password2, SetPassword2] = useState("");
  const [Email, setEmail] = useState("");
  const [Mobile, setMobile] = useState("");
  const [msg, setMsg] = useState("");

  return (
    // <h1>hi</h1>
    <form
      id="register-form"
      onSubmit={async (event) => {
        event.preventDefault();
        if (Password !== Password2) {
          setMsg("password missmatch");
          console.log(msg);
        } else {
          // Post form data to the server
          const formData = {
            name: Username,
            password: Password,
            email: Email,
            mobileno: Mobile,
            Username: Username,
          };
          const response = fetch("http://localhost:3001/user/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              // Add any additional headers if required
            },
            body: JSON.stringify(formData),
          });

          console.log(response); // Handle response from the server
        }
      }}
      style={{ display: "block" }}
    >
      <div className="form-group">
        <input
          type="text"
          name="username"
          id="username"
          tabIndex="1"
          className="form-control"
          placeholder="Username"
          value={Username}
          required
          onChange={(e) => {
            SetUserName(e.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          name="email"
          id="email"
          tabIndex="1"
          className="form-control"
          placeholder="Email Address"
          value={Email}
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <input
          type="tel"
          name="Mobile"
          id="mobileNumber"
          tabIndex="1"
          className="form-control"
          placeholder="Mobile Number"
          pattern="[0-9]{10}"
          value={Mobile}
          required
          onChange={(e) => {
            setMobile(e.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          name="password"
          id="password"
          tabIndex="2"
          className="form-control"
          placeholder="Password"
          required
          onChange={(e) => {
            SetPassword(e.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          name="confirm-password"
          id="confirm-password"
          tabIndex="2"
          pattern={Password}
          className="form-control"
          placeholder="Confirm Password"
          onChange={(e) => {
            SetPassword2(e.target.value);
          }}
        />
      </div>

      <div className="form-group">
        <div className="row">
          <div className="">
            <input
              type="submit"
              name="register-submit"
              id="register-submit"
              tabIndex="4"
              className={`form-control btn ${styles["btn-register"]}`}
              value="Register Now"
              // disabled={Password !== Password2}
            />
          </div>
        </div>
      </div>
    </form>
  );
}

export function FullComp({ setUserId }) {
  const [loginp, setLoginp] = useState(1);
  return (
    <div className={`${styles.body}`}>
      <div className={`container`}>
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className={`card ${styles["panel-login"]} ${styles.cont}`}>
              <div className={`${styles["panel-heading"]}`}>
                <div className="row">
                  <div className="col-sm-6">
                    <a
                      onClick={() => setLoginp(1)}
                      className={loginp === 1 ? styles["active"] : ""}
                      id="login-form-link"
                      style={{ cursor: "pointer" }}
                    >
                      Login
                    </a>
                  </div>
                  <div className="col-sm-6">
                    <a
                      style={{ cursor: "pointer" }}
                      onClick={() => setLoginp(0)}
                      id="register-form-link"
                      className={loginp === 0 ? styles["active"] : ""}
                    >
                      Register
                    </a>
                  </div>
                </div>
                <hr></hr>
              </div>
              <div className={`${styles["panel-body"]}`}>
                <div className="row justify-content-center">
                  <div className="col-sm-12">
                    {loginp === 1 ? (
                      <LoginForm setUserId={setUserId} />
                    ) : (
                      <RegForm setUserId={setUserId} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
