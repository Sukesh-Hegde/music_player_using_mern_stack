import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MusicContext } from "../../Context";

const Login = () => {
  const musicContext = useContext(MusicContext);
  const showAlert = musicContext.showAlert;

  const host = process.env.REACT_APP_BACKEND_URL;



  const [credential, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = credential;

    const response = await fetch(`${host}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const json = await response.json();

    if (json.success) {
      //save the token and redirect
      localStorage.setItem("token", json.token);

      showAlert("Logged in Successfully", "success");
      navigate("/content");
    } else {
      showAlert("Invalid Details", "danger");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credential, [e.target.name]: e.target.value });
  };
  return (
    <div className="container" onSubmit={handleSubmit}>
      <form>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            aria-describedby="emailHelp"
            value={credential.email}
            onChange={onChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={credential.password}
            onChange={onChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
