import React, { useState } from "react";
import contact from "../../assets/images/ContactMe.png";
import "./Contact.css";
import axios from "axios";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendMail = () => {
    axios
      .get("http://localhost:5000/", {
        params: {
          email,
          name,
          message,
        },
      })
      .then(() => {
        //success
        console.log("success");
      })
      .catch(() => {
        console.log("failure");
      });
  };

  return (
    <>
      <div className="contact" id="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <img src={contact} alt="contact" className="image" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="card2 d-flex card border-0 px-4 py-5">
                <div className="row">
                  <div className="row px-4">
                    <h6>
                      Contact With
                      <BsLinkedin
                        color="blue"
                        size={30}
                        className="ms-4 py-1"
                      />
                      <BsGithub color="black" size={30} className="ms-4 py-1" />
                      <BsFacebook
                        color="blue"
                        size={30}
                        className="ms-4 py-1"
                      />
                    </h6>
                  </div>

                  <div className="row px-4 form-group">
                    <input
                      type="text"
                      placeholder="your Name"
                      onChange={(e) => setName(e.target.value)}
                      className="mb-3 form-control"
                    />
                    <input
                      type="text"
                      placeholder="Recipient Email"
                      onChange={(e) => setEmail(e.target.value)}
                      className="mb-3 form-control"
                    />
                    <textarea
                      placeholder="Message"
                      onChange={(e) => setMessage(e.target.value)}
                      className="mb-3 form-control"
                    />
                  </div>
                  <div className="row px-3">
                    <button className="button" onClick={sendMail}>
                      SEND MESSAGE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
