import React from "react";
import "./Project.css";
import ExpenseTracker from "../../assets/images/Expense Tracker.png";
import MovieBrowser from "../../assets/images/MovieBrowse.png";
import Pieshop from "../../assets/images/Pieshop.png";
import RojgarSathi from "../../assets/images/rojgar sathi.png";
const Project = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia a
          odit ab, eligendi cupiditate, minima quasi excepturi modi et quo
          delectus, iusto dolor atque aliquam aspernatur eveniet! Ipsam eum
          nobis omnis id voluptatibus quas eos maxime ipsum facere numquam,
          voluptate qui et animi doloribus nulla eius molestiae unde tempore ad
        </p>
        {/* card design */}
        <div className="row" id="ads">
          <div className="col-md-3">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">
                  Frontend Web Application
                </span>
                <img src={MovieBrowser} alt="project1" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">React JS</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h6 className="text-uppercase">Movie Browser</h6>
                </div>
                <a
                  className="ad-btn"
                  href="https://github.com/Kritikhanal/Movie-Browser"
                >
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">
                  Backend Web Application
                </span>
                <img src={Pieshop} alt="project1" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">C#</span>
                <span className="card-detail-badge">.NET</span>
                <span className="card-detail-badge">MVC</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h6 className="text-uppercase">Pieshop</h6>
                </div>
                <a
                  className="ad-btn"
                  href="https://github.com/Kritikhanal/BethanyPieShop"
                >
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Backend</span>
                <img src={RojgarSathi} alt="project2" />
              </div>
              <div className="card-image-overly m-auto">
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">MongoDb</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Job Portal</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://github.com/Kritikhanal/Rojgar-Sathi"
                >
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Backend</span>
                <img src={ExpenseTracker} alt="project1" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>

                <span className="card-detail-badge">MongoDb</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Expense Tracker</h5>
                  <a
                    className="ad-btn"
                    href="https://github.com/Kritikhanal/expense-Track"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
