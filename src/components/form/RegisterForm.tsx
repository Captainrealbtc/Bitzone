import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { handleInput } from "../../helpers/inputs";
import { register } from "../../request";
import { setErrMsg, clrMsg } from "../../helpers/messages";
import { useNavigate, useSearchParams } from "react-router-dom";
import { REFUSED } from "dns";

type User = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  referred_by: any;
};
const RegisterForm: React.FunctionComponent = () => {
  const [user, setUser] = useState<User>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    referred_by: "",
  });

  const [, setCookies] = useCookies();
  const [param] = useSearchParams();
  const ref = param.get("ref");
  const navigate = useNavigate();
  useEffect(() => {
    const ref = param.get("ref");
    setUser({ ...user, referred_by: ref });
  }, []);

  const [msg, setMsg] = useState({ success: "", error: "" });
  const [bools, setBools] = useState({
    error: false,
    success: false,
    loading: false,
  });

  const reset = () => {
    setUser({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      referred_by: "",
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setBools({...bools, loading: true})
    if (user.username === "") {
      setErrMsg(setBools, setMsg, "All field required");
      clrMsg(setBools, setMsg);
    } else if (user.email === "") {
      setErrMsg(setBools, setMsg, "All field required");
      clrMsg(setBools, setMsg);
    } else if (user.password === "") {
      setErrMsg(setBools, setMsg, "All field required");
      clrMsg(setBools, setMsg);
    } else if (user.confirmPassword === "") {
      setErrMsg(setBools, setMsg, "All field required");
      clrMsg(setBools, setMsg);
    } else if (user.password.localeCompare(user.confirmPassword) !== 0) {
      setErrMsg(setBools, setMsg, "Password does not match");
      clrMsg(setBools, setMsg);
    } else {
      try {
        const res = await register(user);
        if (res?.status === 200) {
          reset();
          setCookies("user", res.data, { path: "/" });
          navigate("/dashboard");
        } else {
          setErrMsg(setBools, setMsg, res?.data);
          clrMsg(setBools, setMsg);
        }
      } catch (err) {
      }
    }
  };
  return (
    <section id="register" className="contact-section pt-120 pb-105 form-style">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-md-3"></div>
          <div className="col-sm-12 col-md-6">
            <div className="contact-wrapper mb-30">
              <h2
                className="mb-20 wow fadeInDown text-center text-white"
                data-wow-delay=".2s"
              >
                Register
              </h2>
              <p
                className="mb-55 wow fadeInUp text-center text-white"
                data-wow-delay=".4s"
              >
                Your account would be ready within seconds!
              </p>
              <form
                id="register-form"
                className="contact-form"
                onSubmit={handleSubmit}
              >
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <input
                      type="text"
                      id="name"
                      name="username"
                      placeholder="Create your username"
                      value={user.username}
                      onChange={(e) => handleInput(e, setUser)}
                    />
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      value={user.email}
                      onChange={(e) => handleInput(e, setUser)}
                    />
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <input
                      type="password"
                      name="password"
                      placeholder="Create password"
                      value={user.password}
                      onChange={(e) => handleInput(e, setUser)}
                    />
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <input
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm your password"
                      value={user.confirmPassword}
                      onChange={(e) => handleInput(e, setUser)}
                    />
                  </div>
                </div>
                <p className="text-white">
                  Already have an account?{" "}
                  <a href="#login" className="text-white fw-bold mb-1">
                    Login
                  </a>
                </p>

                {bools.error && (
                  <div className="form-group row">
                    <div className="col-md-12">
                      <p className="text-danger" style={{ fontWeight: 500 }}>
                        {msg.error}
                      </p>
                    </div>
                  </div>
                )}

                {bools.success && (
                  <div className="form-group row">
                    <div className="col-md-12">
                      <p className="text-success" style={{ fontWeight: 500 }}>
                        {msg.success}
                      </p>
                    </div>
                  </div>
                )}

                <button disabled={bools.loading} type="submit" className="theme-btn w-100">
                  Register{bools.loading? "...": ""}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;
