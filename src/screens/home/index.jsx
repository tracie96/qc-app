import React, { useState } from "react";
import "./index.css";
import pasta from "../../assets/pasta.png";
import home from "../../assets/home.png";
import workerImg from "../../assets/worker.png";
import sym from "../../assets/sym.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import d1 from "../../assets/d1.png";
import d2 from "../../assets/d2.png";
import Phone from "../../assets/Phone.png";
import Standard from "../../assets/Standard.png";
import Standard2 from "../../assets/Standard2.png";
import Tablet from "../../assets/Tablet.png";
import Slider from "react-slick";
import {
  Col5Svg1,
  Col5Svg2,
  Col5Svg3,
  Col5Svg4,
  HomeIcon1,
  HomeIcon2,
  HomeIcon3,
  HomeIcon4,
} from "../../assets/svg";
export default function Index() {
  const [activeTab, setactiveTab] = useState("Pending Verification");
  var settings = {
    dots: true,
    draggable: true,
    autoplay: true,
    dots: true,
    lazyLoad: "ondemand",
    infinite: true,
    arrows: true,
    dots: false,
    centerMode: true,
    // centerPadding: $(".slick").find(".col3-home-slideChild").outerWidth() / 2,
    // infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };
  return (
    <>
      <div style={{ paddingTop: "30px" }} className="home-page app-padding">
        <div className="homepage-header-col1">
          <div className="homepage-header-col1t1">
            <h2>Quick & fast way of getting your next loan.</h2>
          </div>

          <div className="homepage-header-col1t3">
            <p>
              We provide quick access to your finance needs.
              <br /> we support both businesses and individuals alike. <br />
              apply today and enjoy our quick processing times.
            </p>
          </div>

          <div className="homepage-header-col1t4" style={{ display: "flex" }}>
            <img src={d1} alt="" />
            <img src={d2} alt="" />
          </div>
        </div>

        <div className="homepage-header-col2">
          <img src={pasta} alt="" />
        </div>
      </div>
      <div className="col2-home app-padding">
        <div className="col2-home-col1">
          <h2>Simple Steps to Access Loans</h2>
          <p>
            Download the App - Register - Apply - Get Approval - Get Funds in
            your Account
          </p>
        </div>

        <div className="col2-home-col2">
          <div className="col2-home-col2grid">
            <div className="col2-home-col2grid-col1">
              <HomeIcon1 />
            </div>

            <div className="col2-home-col2grid-col2">
              <h2>Sign Up</h2>
              <p>
                Fill a simple form with your personal information that will
                <br /> be verified by our system
              </p>
            </div>
          </div>
          <div className="col2-home-col2grid">
            <div className="col2-home-col2grid-col1">
              <HomeIcon2 />
            </div>

            <div className="col2-home-col2grid-col2">
              <h2>Apply for Loan</h2>
              <p>Make a loan request and get responce in minutes</p>
            </div>
          </div>{" "}
          <div className="col2-home-col2grid">
            <div className="col2-home-col2grid-col1">
              <HomeIcon3 />
            </div>

            <div className="col2-home-col2grid-col2">
              <h2>Get Instant Credit</h2>
              <p>Get approved and recieve funds instantly</p>
            </div>
          </div>{" "}
          <div className="col2-home-col2grid">
            <div className="col2-home-col2grid-col1">
              <HomeIcon4 />
            </div>

            <div className="col2-home-col2grid-col2">
              <h2>Quick & Simple</h2>
              <p>
                Our process is designed to reduce stress and hassle. try it out
                <br />
                and see
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="col4-home app-padding">
        <div className="col4-home-col1">
          <img src={Phone} alt="" />
        </div>
        <div className="col4-home-col2">
          <h2>
            Our Mobile Friendly <br />
            App makes it easier.
          </h2>
          <p>
            Our application is friendly and easy to use, apply for a loan
            <br /> in a few simple steps
          </p>
          <button>Get App Now</button>
        </div>
      </div>

      <div className="col5-home app-padding" style={{ paddingLeft: 0 }}>
        <div className="col5-home-col1">
          <img src={Standard} alt="" />
        </div>
        <div className="col5-home-col2">
          <div className="col5-home-col2-col1">
            <h2>Why StreetCredit?</h2>
            <p>
              Street Credit is your finance partner as we continue to seek ways
              <br />
              to make your business more productive through access to finanace
              <br />
              and funding support on projects
            </p>
          </div>

          <div className="col5-home-grid">
            <div>
              <Col5Svg1 />
              <h2>No collataral</h2>
            </div>
            <div>
              <Col5Svg2 />
              <h2>No Sign Up Hassle</h2>
            </div>{" "}
            <div>
              <Col5Svg3 />
              <h2>No Delays</h2>
            </div>{" "}
            <div>
              <Col5Svg4 />
              <h2> Instant Credit</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="col6-home">
        <div className="col6-home-col1">
          <h2>Our Loan process is easy-peazy</h2>
          <p>
            We have made ur processs seamless to allow you focus on <br />
            what you need the credit for. Our application operates <br />
            on a simple end to end process.
          </p>
          <button>Get started</button>
        </div>

        <div className="dgqu3ubdkl">
          <img src={Tablet} alt="" className="" />
        </div>
      </div>

      <div className="col7-home app-padding" style={{ paddingRight: 0 }}>
        <div className="col7-home-col1">
          <h2>Invest and get monthly returns.</h2>
          <p style={{ textAlign: "center" }}>
            Invest with us today and take advantage of our <br />
            rovust risk managent systems to get good returns <br />
            on a monthly basis
          </p>
          <button style={{ marginTop: "40px" }}>Start investing</button>
        </div>

        <div className="col7-home-col2">
          <img src={Standard2} alt="" />
        </div>
      </div>

      <div
        className="col3-home app-padding"
        // style={{ backgroundColor: "#070F15" }}
      >
        <div className="col3-home-header">
          <h2>Testimonials</h2>
          <p style={{ textAlign: "center" }}>
            See what our customers are saying, customers who have tried our
            <br /> platform with first hand experiences
          </p>
        </div>
      </div>
      <div
        // className="container"
        style={{ width: "100%", background: "#edf6ff", overflow: "hidden " }}
      >
        <Slider {...settings}>
          <div className="col3-home-slideChild">
            <div className="scstcard">
              <h2>Awsome App</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Neque dui sapien eget.{" "}
              </p>
              <img src={Standard2} alt="" />
              <h2
                style={{
                  fontSize: "12px",
                  textAlign: "center",
                  marginTop: "10px",
                }}
              >
                Andrew Okeke
              </h2>
            </div>
          </div>

          <div className="col3-home-slideChild">
            <div className="scstcard">
              <h2>Awsome App</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Neque dui sapien eget.{" "}
              </p>
              <img src={Standard2} alt="" />
              <h2
                style={{
                  fontSize: "12px",
                  textAlign: "center",
                  marginTop: "10px",
                }}
              >
                Andrew Okeke
              </h2>
            </div>
          </div>

          <div className="col3-home-slideChild">
            <div className="scstcard">
              <h2>Awsome App</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Neque dui sapien eget.{" "}
              </p>
              <img src={Standard2} alt="" />
              <h2
                style={{
                  fontSize: "12px",
                  textAlign: "center",
                  marginTop: "10px",
                }}
              >
                Andrew Okeke
              </h2>
            </div>
          </div>

          <div className="col3-home-slideChild">
            <div className="scstcard">
              <h2>Awsome App</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Neque dui sapien eget.{" "}
              </p>
              <img src={Standard2} alt="" />
              <h2
                style={{
                  fontSize: "12px",
                  textAlign: "center",
                  marginTop: "10px",
                }}
              >
                Andrew Okeke
              </h2>
            </div>
          </div>

          <div className="col3-home-slideChild">
            <div className="scstcard">
              <h2>Awsome App</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Neque dui sapien eget.{" "}
              </p>
              <img src={Standard2} alt="" />
              <h2
                style={{
                  fontSize: "12px",
                  textAlign: "center",
                  marginTop: "10px",
                }}
              >
                Andrew Okeke
              </h2>
            </div>
          </div>

          <div className="col3-home-slideChild">
            <div className="scstcard">
              <h2>Awsome App</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Neque dui sapien eget.{" "}
              </p>
              <img src={Standard2} alt="" />
              <h2
                style={{
                  fontSize: "12px",
                  textAlign: "center",
                  marginTop: "10px",
                }}
              >
                Andrew Okeke
              </h2>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
}
