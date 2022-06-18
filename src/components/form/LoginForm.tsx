import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

import { handleInput } from "../../helpers/inputs";
import { errorMessage, successMessage } from "../../helpers/messages";
import { login } from "../../request";

type User = {
  username: string;
  password: string;
};

const LoginForm: React.FunctionComponent = () => {
  const [user, setUser] = useState<User>({
    username: "",
    password: "",
  });

  const [, setCookies] = useCookies();

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const reset = () => {
    setUser({ username: "", password: "" });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    if (user.username === "") {
      setLoading(true);
      errorMessage(setLoading, "Fill in username");
    } else if (user.password === "") {
      errorMessage(setLoading, "Fill in password");
    } else {
      try {
        const res = await login(user);
        if (res?.status === 200) {
          reset();
          setCookies("user", res.data, { path: "/" });
          successMessage(setLoading, "Login successful!");
          navigate("/dashboard");
        }else if(res?.status === 400){
          errorMessage(setLoading, `${res?.data}`);
        } else {
          if (res?.status !== 200 && res?.data) {
            errorMessage(setLoading, `${res?.data}`);
          }
        }
      } catch (err) {
      }
    }
  };

  return (
    <section id="login" className="contact-section pt-120 pb-105 form-style">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-md-3"></div>
          <div className="col-sm-12 col-md-6">
            <div className="contact-wrapper mb-30">
              <h2
                className="mb-20 wow fadeInDown text-center text-white"
                data-wow-delay=".2s"
              >
                Login
              </h2>
              <p
                className="mb-55 wow fadeInUp text-center text-white"
                data-wow-delay=".4s"
              >
                Welcome back!
              </p>
              <form
                id="login-form"
                className="contact-form"
                onSubmit={handleSubmit}
              >
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <input
                      type="text"
                      id="name"
                      name="username"
                      placeholder="enter your username"
                      onChange={(e) => handleInput(e, setUser)}
                    />
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter password"
                      onChange={(e) => handleInput(e, setUser)}
                    />
                  </div>
                </div>

                <p className="text-white">
                  Don't have an account?{" "}
                  <a href="#register" className="text-white fw-bold mb-1">
                    Register
                  </a>
                </p>

                <button
                  disabled={loading}
                  type="submit"
                  className="theme-btn w-100"
                >
                  {loading ? "wait a moment ..." : "Login"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
