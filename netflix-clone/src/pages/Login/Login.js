import React, { useRef } from "react";
import "./Login.css";
import { auth } from "../../firebase";

function Login(props) {
  const emailRef = useRef(null);
  const passRef = useRef(null);

  const signUp = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passRef.current.value
      )
      .then((authUser) => console.log(authUser))
      .catch((errmsg) => alert(errmsg.code));
  };
  const signIn = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(emailRef.current.value, passRef.current.value)
      .then((authUser) => console.log(authUser))
      .catch((error) => {
        alert(error.code);
      });
  };

  return (
    <>
      <div className="showcase-content">
        <div className="formm">
          <form>
            <h1>Sign In</h1>
            <div className="info">
              <input
                className="email"
                ref={emailRef}
                type="email"
                placeholder="Email or phone number"
              />{" "}
              <br />
              <input
                className="email"
                ref={passRef}
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="btn">
              <button className="btn-primary" type="submit" onClick={signIn}>
                Sign In
              </button>
            </div>
            <div className="help">
              <div style={{ display: "flex", alignItems: "center" }}>
                <input value="true" type="checkbox" />
                <label style={{ color: "#999" }}>Remember me</label>
              </div>
              <a href="https://www.netflix.com/dz-en/LoginHelp">Need Help ?</a>
            </div>
            <div className="signup-netflix">
              <span>New to Netflix?</span>{" "}
              <span
                className="signup-button"
                onClick={(event) => signUp(event)}
              >
                Sign Up Now
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
