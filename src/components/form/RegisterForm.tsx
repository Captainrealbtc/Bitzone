import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { handleInput } from "../../helpers/inputs";
import { register } from "../../request";
import { errorMessage, successMessage } from "../../helpers/messages";
import { useNavigate, useSearchParams } from "react-router-dom";
import { setCookie } from "cookies-next";

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

   const [loading, setLoading] = useState(false);

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
      setLoading(true);
      if (user.username === "") {
         errorMessage(setLoading, "Fill in username field");
      } else if (user.email === "") {
         errorMessage(setLoading, "Fill in email field");
      } else if (user.password === "") {
         errorMessage(setLoading, "Fill in password field");
      } else if (user.confirmPassword === "") {
         errorMessage(setLoading, "Fill in confirm password field");
      } else if (user.password.localeCompare(user.confirmPassword) !== 0) {
         errorMessage(setLoading, "The two password inputed don't match");
      } else {
         try {
            const res = await register(user);
            if (res?.status === 200) {
               reset();
               setCookie("user", res.data, { maxAge: 60 * 60 * 2 });
               successMessage(setLoading, "Account created successfully!");
               navigate("/dashboard");
            } else if (res?.status === 400) {
               errorMessage(setLoading, `${res?.data}`);
            } else {
               if (res?.status !== 200 && res?.data) {
                  errorMessage(setLoading, `${res?.data}`);
               }
            }
         } catch (err: any) {
            errorMessage(setLoading, err.message);
         }
      }
   };
   return (
      <section
         id="register"
         className="contact-section pt-120 pb-105 form-style"
      >
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
                                 name="username"
                                 placeholder="Create your username"
                                 value={user.username}
                                 onChange={(e) => handleInput(e, setUser)}
                              />
                           </div>
                           <div className="col-lg-6 col-md-6">
                              <input
                                 type="email"
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

                        {!loading && (
                           <button
                              disabled={loading}
                              type="submit"
                              className="theme-btn w-100"
                           >
                              Register
                           </button>
                        )}
                        {loading && (
                           <div className="d-flex justify-content-center align-items-center">
                              <div
                                 className="spinner-grow text-success p-2"
                                 style={{ height: "4rem", width: "4rem" }}
                                 role="status"
                              >
                                 <span className="sr-only">Loading...</span>
                              </div>
                           </div>
                        )}
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default RegisterForm;
