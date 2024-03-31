import React from "react";
import "./about.css";
import img from "../../assets/images/ae331564-e09d-4e2c-ab1c-c5ecfe126cf3.jpg";
const about = () => {
  return (
    <>
      <div className="about" id="about">
        <div className="row">
          <div className="col-md-12 col-xl-6 col-lg-12 col-xs-6 about-img col-sm-12">
            <img src={img} alt="profile" />
          </div>
          <div className="col-md-12 col-xl-6 col-lg-12 col-xs-6 col-sm-12 about-content">
            <h1>About Me</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
              molestiae, est sed earum dicta in, autem optio expedita quae
              facilis obcaecati sapiente corporis, tempora quibusdam aperiam
              accusamus aliquid asperiores necessitatibus. Perspiciatis incidunt
              dolor est blanditiis magni ad, alias earum minus tempore ducimus
              fugit animi suscipit, impedit aperiam commodi? Eligendi officia id
              quod error aperiam ut vel corporis, cupiditate illum accusantium.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default about;
