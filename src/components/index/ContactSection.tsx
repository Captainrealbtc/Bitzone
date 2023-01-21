import React, { useState } from "react";
import { handleInput } from "../../helpers/inputs";

const ContactSection: React.FunctionComponent = () => {
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(false);
   const [success, setSuccess] = useState(false);
   const [msg, setMsg] = useState({ err: "", scs: "" });
   const [info, setInfo] = useState<any>({
      name: "",
      email: "",
      phone: "",
      message: "",
      subject: "",
   });

   const clrErr = () => {
      setTimeout(() => {
         setLoading(false);
         setError(false);
      }, 2000);
   };

   const handleSubmit = (e: any) => {
      e.preventDefault();
      setLoading(true);
      if (info.name === "") {
         setError(true);
         setMsg({ ...msg, err: "Name required" });
         setLoading(false);
         clrErr();
      } else if (info.email === "") {
         setError(true);
         setMsg({ ...msg, err: "Email required" });
         setLoading(false);
         clrErr();
      } else if (info.phone === "") {
         setError(true);
         setMsg({ ...msg, err: "phone required" });
         setLoading(false);
         clrErr();
      } else if (info.message === "") {
         setError(true);
         setMsg({ ...msg, err: "message required" });
         setLoading(false);
         clrErr();
      } else if (info.subject === "") {
         setError(true);
         setMsg({ ...msg, err: "subject required" });
         setLoading(false);
         clrErr();
      } else {
         setTimeout(() => {
            setLoading(false);
            setInfo({
               name: "",
               email: "",
               phone: "",
               message: "",
               subject: "",
            });
            setSuccess(true);
            setMsg({ ...msg, scs: "message submitted successfully" });
            setLoading(false);
            setTimeout(() => {
               setSuccess(false);
            }, 2000);
         }, 2000);
      }
   };
   return (
      <section id="contact" className="contact-section pt-120 pb-105">
         <div className="container">
            <div className="row align-items-end">
               <div className="col-xl-6 col-lg-7">
                  <div className="contact-wrapper mb-30">
                     <h2 className="mb-20 wow fadeInDown" data-wow-delay=".2s">
                        Contact With Us
                     </h2>
                     <p className="mb-55 wow fadeInUp" data-wow-delay=".4s">
                        Leave us a message, we will responde within 24 hours
                        through email
                     </p>
                     <form onSubmit={handleSubmit} className="contact-form">
                        <div className="row">
                           <div className="col-lg-6 col-md-6">
                              <input
                                 type="text"
                                 value={info.name}
                                 id="name"
                                 name="name"
                                 placeholder="Name"
                                 onChange={(e) => handleInput(e, setInfo)}
                              />
                           </div>
                           <div className="col-lg-6 col-md-6">
                              <input
                                 type="email"
                                 id="email"
                                 name="email"
                                 placeholder="Email"
                                 value={info.email}
                                 onChange={(e) => handleInput(e, setInfo)}
                              />
                           </div>
                           <div className="col-lg-6 col-md-6">
                              <input
                                 type="text"
                                 id="phone"
                                 value={info.phone}
                                 name="phone"
                                 placeholder="Phone"
                                 onChange={(e) => handleInput(e, setInfo)}
                              />
                           </div>
                           <div className="col-lg-6 col-md-6">
                              <input
                                 type="text"
                                 id="subject"
                                 name="subject"
                                 value={info.subject}
                                 placeholder="Subject"
                                 onChange={(e) => handleInput(e, setInfo)}
                              />
                           </div>
                           <div className="col-lg-12">
                              <textarea
                                 name="message"
                                 id="message"
                                 value={info.message}
                                 rows={5}
                                 placeholder="Message"
                                 onChange={(e) => handleInput(e, setInfo)}
                              ></textarea>
                           </div>
                        </div>
                        {error && (
                           <div className="form-group row">
                              <div className="col-md-12">
                                 <p
                                    className="text-danger"
                                    style={{ fontWeight: 500 }}
                                 >
                                    {msg.err}
                                 </p>
                              </div>
                           </div>
                        )}

                        {success && (
                           <div className="form-group row">
                              <div className="col-md-12">
                                 <p
                                    className="text-success"
                                    style={{ fontWeight: 500 }}
                                 >
                                    {msg.scs}
                                 </p>
                              </div>
                           </div>
                        )}
                        {!loading && (
                           <button
                              disabled={loading}
                              type="submit"
                              className="theme-btn theme-btn-2"
                           >
                              SEND MESSAGE
                           </button>
                        )}
                        {loading && (
                           <div className="d-flex justify-content-center align-items-center">
                              <div
                                 className="spinner-grow text-primary p-2"
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

export default ContactSection;
