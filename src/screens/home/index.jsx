import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import apd1 from "../../assets/apd1.png";
import country from "../../assets/nigeria.png";
import networking from "../../assets/networking.png";
import team from "../../assets/team1.png";
import team_2 from "../../assets/team2.png";
import team3 from "../../assets/team3.png";
import team4 from "../../assets/team4.png";
import international from "../../assets/earth.png";
import hero3 from "../../assets/hero-carousel-3.svg";
import apd2 from "../../assets/apd2.png";
import conversation from "../../assets/conversation.png";
import ps from "../../assets/ps.svg";
import as from "../../assets/as.svg";
import team1 from "../../assets/team1.jpeg";
import team2 from "../../assets/team2.jpeg";
import { useHistory } from "react-router-dom";

import pasta from "../../assets/pasta.png";
import phone1 from "../../assets/phone1.jpg";
import Standard2 from "../../assets/Standard2.png";
import { ValueSvg1, ValueSvg2, ValueSvg3 } from "../../assets/svg";
import "./index.css";
import "./hero.css";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  fontFamily: "Poppins",
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));


const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "#fff",
  borderBottom: "2px solid #000",

  flexDirection: "row-reverse",
  borderRadius: "5%",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(6),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
  backgroundColor: "#fff",
  color: "#373737",
  fontSize: "12px",
}));

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

  const [expanded, setExpanded] = React.useState("");
  const history = useHistory();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div
              className="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center"
              style={{ zIndex: "999999" }}
            >
              <div data-aos="zoom-out">
                <h1>
                  Welcome to our world of seamless and simplified delivery
                </h1>
                <h2>
                  Welcome to our world of seamless and simplified delivery of
                  your shipments locally and internationally
                </h2>
                <div className="text-center text-lg-start">
                  <img src={ps} width="30%"></img>
                  <img src={as} width="30%"></img>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 order-1 order-lg-2 hero-img"
              data-aos="zoom-out"
              data-aos-delay="300"
            >
              <img src={pasta} className="img-fluid animated" alt="" />
            </div>
          </div>
        </div>

        <svg
          className="hero-waves"
          xmlns="http://www.w3.org/2000/svg"
          xmnlsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28 "
          preserveAspectRatio="none"
        >
          <defs>
            <path
              id="wave-path"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="wave1">
            <use
              xlinkHref="#wave-path"
              x="50"
              y="3"
              fill="rgba(255,255,255, .1)"
            />
          </g>
          <g className="wave2">
            <use
              xlinkHref="#wave-path"
              x="50"
              y="0"
              fill="rgba(255,255,255, .2)"
            />
          </g>
          <g className="wave3">
            <use xlinkHref="#wave-path" x="50" y="9" fill="#fff" />
          </g>
        </svg>
      </section>
      {/* <div className="homepage-header-col1">
          <div className="homepage-header-col1t1">
            <h2>Welcome to our world of seamless and simplified delivery</h2>
          </div>

          <div className="homepage-header-col1t3">
            <p>
              Welcome to our world of seamless and simplified delivery <br />
              of your shipments locally and internationally
            </p>
          </div>

          <div className="homepage-header-col1t4" style={{ display: "flex" }}>
            <img src={d1} alt="" />
            <img src={d2} alt="" />
          </div>
        </div> */}

      <div className="col4-home app-padding">
        <div className="col4-home-col1">
          <h2>
            Domestic &<br /> International shipping
          </h2>
          <p>
            Book a pickup directly from your location or from your 3rd party
            customer for delivery in more than 220 countries around the world
          </p>
        </div>

        <div
          className="col4-home-col2"
          style={{
            height: "fit-content",
            width: "30%",
            padding: "0px",
            background: "none",
          }}
        >
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-ride="carousel"
            data-interval="2000"
            style={{border:"1px dashed #ccc",padding:"10px"}}
          >
            <ol class="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                class="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div className="shapeCirCol4">
                  <p>
                    <img
                      class="d-block w-100"
                      src={team}
                      style={{
                        objectFit: "contain",
                        borderRadius: "100%",
                        width: "100%",
                      }}
                    />
                  </p>
                </div>
                <div className="shapeCirCol4text">
                  <p>
                    “QC Express seeks to help eCommerce companies and end users
                    access excellent last mile delivery of packages at the most
                    competitive price. Our overarching desire is to make last
                    mile delivery accessible to all and make our customers happy
                    and successful.”
                  </p>
                  <p>Sesan Ibitoye. CEO</p>
                </div>
              </div>
              <div class="carousel-item">
                <div className="shapeCirCol4">
                  <p>
                    <img
                      class="d-block w-100"
                      src={team4}
                      style={{
                        objectFit: "contain",
                        borderRadius: "100%",
                        width: "100%",
                      }}
                    />
                  </p>
                </div>
                <div className="shapeCirCol4text">
                  <p>
                    “Our multicultural background has enabled us build robust
                    financial systems, processes and controls to protect and
                    assure the integrity of our platforms”
                  </p>
                  <p>Yomi Isafiade (CFO)</p>
                </div>{" "}
              </div>
              <div class="carousel-item">
                <div className="shapeCirCol4">
                  <p>
                    <img
                      class="d-block w-100"
                      src={team3}
                      style={{
                        objectFit: "contain",
                        borderRadius: "100%",
                        width: "100%",
                      }}
                    />
                  </p>
                </div>
                <div className="shapeCirCol4text">
                  <p>
                    “At QC Express, we leverage our combined logistics
                    background and strategic partnerships with world class
                    fulfilment partners. This enables us deliver best-in-class
                    logistics services to our customers. ”
                  </p>
                  <p>Yomi Isafiade (CFO)</p>
                </div>{" "}
              </div>
              <div class="carousel-item">
                <div className="shapeCirCol4">
                  <p>
                    <img
                      class="d-block w-100"
                      src={team_2}
                      style={{
                        objectFit: "contain",
                        borderRadius: "100%",
                        width: "100%",
                      }}
                    />
                  </p>
                </div>
                <div className="shapeCirCol4text">
                  <p>
                    “We have deployed innovative technological solutions that
                    ensures seamless customer experience across our various
                    platforms.”
                  </p>
                  <p>Idris Mustapha (CTO)</p>
                </div>{" "}
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>

      <section
        id="pricing"
        className="pricing section-bg"
        style={{ padding: "30px", padding: "30px" }}
      >
        <div className="container" style={{ maxWidth: "87%" }}>
          <div className="row" data-aos="fade-left">
            <div className="col-lg-4 col-md-6">
              <div className="box" data-aos="zoom-in" data-aos-delay="100">
                <img src={networking} width="30%"></img>
                <h4>Intracity</h4>
                <p>Deliveries within cities in Nigeria.</p>

                <div className="btn-wrap">
                <a onClick={()=>{history.push('/login')}} className="btn-buy">
                    Book Now
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mt-4 mt-md-0">
              <div
                className="box featured"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <img src={country} width="30%"></img>
                <h4>Country</h4>
                <p>Deliveries across states and regions in Nigeria.</p>
                <div className="btn-wrap">
                <a onClick={()=>{history.push('/login')}} className="btn-buy">
                  Book Now
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
              <div className="box" data-aos="zoom-in" data-aos-delay="300">
                <img src={international} width="30%"></img>
                <h4>International</h4>
                <p>Deliveries across international borders.</p>
                <div className="btn-wrap">
                  <a onClick={()=>{history.push('/login')}} className="btn-buy">
                  Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="col6-home app-padding" id="features">
        <div
          className="col6-home-img-col1"
          data-aos="zoom-out"
          data-aos-delay="300"
        >
          <img src={hero3} className="img-fluid animated" alt="" width="50%" />
        </div>

        <div className="col6-home-col2">
          <h2>
            An eCommerce technology company providing best-in-class delivery
            solutions.
          </h2>
  
          <div className="col6-home-col2HR"></div>
          <ul>
            <li>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.49998 15C11.6421 15 15 11.6421 15 7.49998C15 3.35786 11.6421 0 7.49998 0C3.35786 0 0 3.35786 0 7.49998C0 11.6421 3.35786 15 7.49998 15Z"
                  fill="#4169E2"
                />
                <path
                  d="M11.4518 3.52808L6.14987 8.83005L3.54823 6.2285L2.22729 7.54924L6.14987 11.4719L12.7728 4.84882L11.4518 3.52808Z"
                  fill="#EBF0F3"
                />
              </svg>
              Quick pick-up once booking is confirmed
            </li>
            <li>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.49998 15C11.6421 15 15 11.6421 15 7.49998C15 3.35786 11.6421 0 7.49998 0C3.35786 0 0 3.35786 0 7.49998C0 11.6421 3.35786 15 7.49998 15Z"
                  fill="#4169E2"
                />
                <path
                  d="M11.4518 3.52808L6.14987 8.83005L3.54823 6.2285L2.22729 7.54924L6.14987 11.4719L12.7728 4.84882L11.4518 3.52808Z"
                  fill="#EBF0F3"
                />
              </svg>
              Excellent local and global reach
            </li>
            <li>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.49998 15C11.6421 15 15 11.6421 15 7.49998C15 3.35786 11.6421 0 7.49998 0C3.35786 0 0 3.35786 0 7.49998C0 11.6421 3.35786 15 7.49998 15Z"
                  fill="#4169E2"
                />
                <path
                  d="M11.4518 3.52808L6.14987 8.83005L3.54823 6.2285L2.22729 7.54924L6.14987 11.4719L12.7728 4.84882L11.4518 3.52808Z"
                  fill="#EBF0F3"
                />
              </svg>
              Secured shipping locally and globally
            </li>
            <li>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.49998 15C11.6421 15 15 11.6421 15 7.49998C15 3.35786 11.6421 0 7.49998 0C3.35786 0 0 3.35786 0 7.49998C0 11.6421 3.35786 15 7.49998 15Z"
                  fill="#4169E2"
                />
                <path
                  d="M11.4518 3.52808L6.14987 8.83005L3.54823 6.2285L2.22729 7.54924L6.14987 11.4719L12.7728 4.84882L11.4518 3.52808Z"
                  fill="#EBF0F3"
                />
              </svg>
              One global team/network
            </li>
          </ul>
        </div>
      </div>

      <div className="col6-home app-padding">
        <div className="col6-home-col2">
          <h2>Simplified document and parcel delivery at your fingertips.</h2>
      
          <div className="col6-home-col2HR"></div>
          <ul>
            <li>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.49998 15C11.6421 15 15 11.6421 15 7.49998C15 3.35786 11.6421 0 7.49998 0C3.35786 0 0 3.35786 0 7.49998C0 11.6421 3.35786 15 7.49998 15Z"
                  fill="#4169E2"
                />
                <path
                  d="M11.4518 3.52808L6.14987 8.83005L3.54823 6.2285L2.22729 7.54924L6.14987 11.4719L12.7728 4.84882L11.4518 3.52808Z"
                  fill="#EBF0F3"
                />
              </svg>
              One stop shop
            </li>
            <li>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.49998 15C11.6421 15 15 11.6421 15 7.49998C15 3.35786 11.6421 0 7.49998 0C3.35786 0 0 3.35786 0 7.49998C0 11.6421 3.35786 15 7.49998 15Z"
                  fill="#4169E2"
                />
                <path
                  d="M11.4518 3.52808L6.14987 8.83005L3.54823 6.2285L2.22729 7.54924L6.14987 11.4719L12.7728 4.84882L11.4518 3.52808Z"
                  fill="#EBF0F3"
                />
              </svg>
              One-touch shipping
            </li>
            <li>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.49998 15C11.6421 15 15 11.6421 15 7.49998C15 3.35786 11.6421 0 7.49998 0C3.35786 0 0 3.35786 0 7.49998C0 11.6421 3.35786 15 7.49998 15Z"
                  fill="#4169E2"
                />
                <path
                  d="M11.4518 3.52808L6.14987 8.83005L3.54823 6.2285L2.22729 7.54924L6.14987 11.4719L12.7728 4.84882L11.4518 3.52808Z"
                  fill="#EBF0F3"
                />
              </svg>
              Door-to-door logistics solutions
            </li>

            <li>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.49998 15C11.6421 15 15 11.6421 15 7.49998C15 3.35786 11.6421 0 7.49998 0C3.35786 0 0 3.35786 0 7.49998C0 11.6421 3.35786 15 7.49998 15Z"
                  fill="#4169E2"
                />
                <path
                  d="M11.4518 3.52808L6.14987 8.83005L3.54823 6.2285L2.22729 7.54924L6.14987 11.4719L12.7728 4.84882L11.4518 3.52808Z"
                  fill="#EBF0F3"
                />
              </svg>
              Most cost-effective shipping
            </li>
          </ul>
        </div>

        <div className="col6-home-img-col1">
          <img src={hero3} alt="" />
        </div>
      </div>

      <section className="faq section-bg pt-4">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <p>Frequently Asked Questions</p>
          </div>

          <div className="faq-list">
            <ul>
              <li data-aos="fade-up">
                <i className="bx bx-help-circle icon-help"></i>{" "}
                <a
                  data-bs-toggle="collapse"
                  className="collapsed"
                  data-bs-target="#faq-list-1"
                >
                  How do I create a QC Express Account?{" "}
                  <i className="bx bx-chevron-down icon-show"></i>
                  <i className="bx bx-chevron-up icon-close"></i>
                </a>
                <div
                  id="faq-list-1"
                  className="collapse show"
                  data-bs-parent=".faq-list"
                >
                  <p>
                    Simply log on to the QC Express platform and sign up. An
                    account is created for you instantly upon the completion of
                    the short form on our platform.
                  </p>
                </div>
              </li>

              <li data-aos="fade-up" data-aos-delay="100">
                <i className="bx bx-help-circle icon-help"></i>{" "}
                <a
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-list-2"
                  className="collapsed"
                >
                  How do I book a shipment pick-up?{" "}
                  <i className="bx bx-chevron-down icon-show"></i>
                  <i className="bx bx-chevron-up icon-close"></i>
                </a>
                <div
                  id="faq-list-2"
                  className="collapse"
                  data-bs-parent=".faq-list"
                >
                  <p>
                    Easy. Just log on the QC Express platform and click on
                    “request a pick-up”
                  </p>
                </div>
              </li>

              <li data-aos="fade-up" data-aos-delay="200">
                <i className="bx bx-help-circle icon-help"></i>{" "}
                <a
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-list-3"
                  className="collapsed"
                >
                  What destinations can I ship to?{" "}
                  <i className="bx bx-chevron-down icon-show"></i>
                  <i className="bx bx-chevron-up icon-close"></i>
                </a>
                <div
                  id="faq-list-3"
                  className="collapse"
                  data-bs-parent=".faq-list"
                >
                  <p>
                    We deliver to all locations within Nigeria and over 220
                    countries globally. Please consult our coverage areas on our
                    website.
                  </p>
                </div>
              </li>

              <li data-aos="fade-up" data-aos-delay="300">
                <i className="bx bx-help-circle icon-help"></i>{" "}
                <a
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-list-4"
                  className="collapsed"
                >
                  Can I send anything on QC Express?
                  <i className="bx bx-chevron-down icon-show"></i>
                  <i className="bx bx-chevron-up icon-close"></i>
                </a>
                <div
                  id="faq-list-4"
                  className="collapse"
                  data-bs-parent=".faq-list"
                >
                  <p>
                    Please consult our Restricted and Prohibited items list on
                    the QC Express platform/website.
                  </p>
                </div>
              </li>

              <li data-aos="fade-up" data-aos-delay="400">
                <i className="bx bx-help-circle icon-help"></i>{" "}
                <a
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-list-5"
                  className="collapsed"
                >
                  How do I calculate my charges?{" "}
                  <i className="bx bx-chevron-down icon-show"></i>
                  <i className="bx bx-chevron-up icon-close"></i>
                </a>
                <div
                  id="faq-list-5"
                  className="collapse"
                  data-bs-parent=".faq-list"
                >
                  <p>
                    A delivery charge is automatically calculated for you once
                    you specify the weight, pick-up and delivery locations on
                    our platform.
                  </p>
                </div>
              </li>

              <li data-aos="fade-up" data-aos-delay="400">
                <i className="bx bx-help-circle icon-help"></i>{" "}
                <a
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-list-6"
                  className="collapsed"
                >
                  Can I estimate the size and weight of a parcel?{" "}
                  <i className="bx bx-chevron-down icon-show"></i>
                  <i className="bx bx-chevron-up icon-close"></i>
                </a>
                <div
                  id="faq-list-6"
                  className="collapse"
                  data-bs-parent=".faq-list"
                >
                  <p>
                    No. Actual weights of shipments must be determined before
                    shipping
                  </p>
                </div>
              </li>

              <li data-aos="fade-up" data-aos-delay="400">
                <i className="bx bx-help-circle icon-help"></i>{" "}
                <a
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-list-7"
                  className="collapsed"
                >
                  Can I use my own packaging when shipping?{" "}
                  <i className="bx bx-chevron-down icon-show"></i>
                  <i className="bx bx-chevron-up icon-close"></i>
                </a>
                <div
                  id="faq-list-7"
                  className="collapse"
                  data-bs-parent=".faq-list"
                >
                  <p>Yes. You are primarily responsible for packaging</p>
                </div>
              </li>

              <li data-aos="fade-up" data-aos-delay="400">
                <i className="bx bx-help-circle icon-help"></i>{" "}
                <a
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-list-8"
                  className="collapsed"
                >
                  I need to cancel a shipment, what should I do?
                  <i className="bx bx-chevron-down icon-show"></i>
                  <i className="bx bx-chevron-up icon-close"></i>
                </a>
                <div
                  id="faq-list-8"
                  className="collapse"
                  data-bs-parent=".faq-list"
                >
                  <p>
                    Please contact Customer Service at:
                    support@quartzclassic.com
                  </p>
                </div>
              </li>

              <li data-aos="fade-up" data-aos-delay="400">
                <i className="bx bx-help-circle icon-help"></i>{" "}
                <a
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-list-9"
                  className="collapsed"
                >
                  Can I change or cancel a pickup I scheduled online?
                  <i className="bx bx-chevron-down icon-show"></i>
                  <i className="bx bx-chevron-up icon-close"></i>
                </a>
                <div
                  id="faq-list-9"
                  className="collapse"
                  data-bs-parent=".faq-list"
                >
                  <p>
                    No. Please contact Customer Service at:
                    support@quartzclassic.com
                  </p>
                </div>
              </li>

              <li data-aos="fade-up" data-aos-delay="400">
                <i className="bx bx-help-circle icon-help"></i>{" "}
                <a
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-list-10"
                  className="collapsed"
                >
                  What should I do if the courier can’t take a parcel and I was
                  already charged for the shipment?{" "}
                  <i className="bx bx-chevron-down icon-show"></i>
                  <i className="bx bx-chevron-up icon-close"></i>
                </a>
                <div
                  id="faq-list-10"
                  className="collapse"
                  data-bs-parent=".faq-list"
                >
                  <p>
                    This doesn't happen often, but if a courier arrived but
                    could not take the parcel, it could be because it contains a
                    prohibited item or didn’t have the necessary paperwork
                    ready. We’ll help you arrange a new pickup or refund. Please
                    contact Customer Service at: support@quartzclassic.com
                  </p>
                </div>
              </li>

              <li data-aos="fade-up" data-aos-delay="400">
                <i className="bx bx-help-circle icon-help"></i>{" "}
                <a
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-list-11"
                  className="collapsed"
                >
                  The courier could not take my shipment because it is too
                  big/heavy for their vehicle. What should I do?{" "}
                  <i className="bx bx-chevron-down icon-show"></i>
                  <i className="bx bx-chevron-up icon-close"></i>
                </a>
                <div
                  id="faq-list-11"
                  className="collapse"
                  data-bs-parent=".faq-list"
                >
                  <p>
                    If your shipment is very large in size or heavy in weight:
                    It may require special pickup equipment and a different
                    vehicle. Please contact us to reschedule your pickup.
                  </p>
                </div>
              </li>

              <li data-aos="fade-up" data-aos-delay="400">
                <i className="bx bx-help-circle icon-help"></i>{" "}
                <a
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-list-12"
                  className="collapsed"
                >
                  I have tracked a shipment and been told to contact Customer
                  Service. Why is this?{" "}
                  <i className="bx bx-chevron-down icon-show"></i>
                  <i className="bx bx-chevron-up icon-close"></i>
                </a>
                <div
                  id="faq-list-12"
                  className="collapse"
                  data-bs-parent=".faq-list"
                >
                  <p>
                    This usually occurs if the information we have is
                    insufficient to track the shipment for you. The address may
                    be incorrect, and we require clarification or some
                    additional information may be required. The matter can be
                    resolved very quickly by contacting Customer Service.
                  </p>
                </div>
              </li>

              <li data-aos="fade-up" data-aos-delay="400">
                <i className="bx bx-help-circle icon-help"></i>{" "}
                <a
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-list-13"
                  className="collapsed"
                >
                  My shipment is showing “Custom status updated” from the
                  destination, even though the shipment just left the country.
                  What does this mean?{" "}
                  <i className="bx bx-chevron-down icon-show"></i>
                  <i className="bx bx-chevron-up icon-close"></i>
                </a>
                <div
                  id="faq-list-13"
                  className="collapse"
                  data-bs-parent=".faq-list"
                >
                  <p>
                    This status provides an indication of the clearance
                    processing from the destination. Please click in to the
                    further details (+) to open and see additional information
                    available. This checkpoint allows you to see very early if
                    there is additional information required by customs for
                    clearance.
                  </p>
                </div>
              </li>

              <li data-aos="fade-up" data-aos-delay="400">
                <i className="bx bx-help-circle icon-help"></i>{" "}
                <a
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-list-14"
                  className="collapsed"
                >
                  If I do not have my tracking number, is it still possible to
                  track my shipment?{" "}
                  <i className="bx bx-chevron-down icon-show"></i>
                  <i className="bx bx-chevron-up icon-close"></i>
                </a>
                <div
                  id="faq-list-14"
                  className="collapse"
                  data-bs-parent=".faq-list"
                >
                  <p>
                    Yes, under certain conditions. We strongly advise you to
                    make a record of your tracking number however, if you have
                    the shipper's reference number, you can use our online
                    Shipper’s Reference Tracking service.  
                  </p>
                </div>
              </li>

              <li data-aos="fade-up" data-aos-delay="400">
                <i className="bx bx-help-circle icon-help"></i>{" "}
                <a
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-list-15"
                  className="collapsed"
                >
                  How are customs duties calculated?{" "}
                  <i className="bx bx-chevron-down icon-show"></i>
                  <i className="bx bx-chevron-up icon-close"></i>
                </a>
                <div
                  id="faq-list-15"
                  className="collapse"
                  data-bs-parent=".faq-list"
                >
                  <p>
                    The calculation of duties depends on the assessable value of
                    a dutiable shipment. For the purpose of this calculation,
                    dutiable goods are given a classification code that is known
                    as the Harmonized System code. Whether a shipment is a gift
                    or not, it must still go through an import procedure as
                    determined by custom’s law in the destination country. The
                    shipment is cleared through customs based on the origin
                    country, the value and quantity, but not its purpose.
                    Dutiable shipments are subject to a customs duty, which is a
                    tariff or tax imposed on goods when transported across
                    international borders. This system has been assigned by the
                    World Customs Organization and continues to evolve.
                  </p>
                </div>
              </li>

              <li data-aos="fade-up" data-aos-delay="400">
                <i className="bx bx-help-circle icon-help"></i>{" "}
                <a
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-list-16"
                  className="collapsed"
                >
                  Who is responsible for payment of duties and taxes?
                  <i className="bx bx-chevron-down icon-show"></i>
                  <i className="bx bx-chevron-up icon-close"></i>
                </a>
                <div
                  id="faq-list-16"
                  className="collapse"
                  data-bs-parent=".faq-list"
                >
                  <p>
                    The payment of duties and taxes are typically the
                    responsibility of the receiver.
                  </p>
                </div>
              </li>

              <li data-aos="fade-up" data-aos-delay="400">
                <i className="bx bx-help-circle icon-help"></i>{" "}
                <a
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-list-17"
                  className="collapsed"
                >
                  Why is the receiver being asked to pay Customs duties and
                  taxes? <i className="bx bx-chevron-down icon-show"></i>
                  <i className="bx bx-chevron-up icon-close"></i>
                </a>
                <div
                  id="faq-list-17"
                  className="collapse"
                  data-bs-parent=".faq-list"
                >
                  <p>
                    Duties and taxes are levied by Customs in the destination
                    country and the receiver is responsible for paying them. The
                    Carrier will collect payment from the receiver prior to
                    delivery. Generally, we are unable to deliver parcels until
                    these have been paid.
                  </p>
                </div>
              </li>

              <li data-aos="fade-up" data-aos-delay="400">
                <i className="bx bx-help-circle icon-help"></i>{" "}
                <a
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-list-18"
                  className="collapsed"
                >
                  I’m sending a gift – can I pay duties and taxes instead of the
                  receiver? <i className="bx bx-chevron-down icon-show"></i>
                  <i className="bx bx-chevron-up icon-close"></i>
                </a>
                <div
                  id="faq-list-18"
                  className="collapse"
                  data-bs-parent=".faq-list"
                >
                  <p>
                    You need an account to pay duties and taxes for the
                    receiver.
                  </p>
                </div>
              </li>

              <li data-aos="fade-up" data-aos-delay="400">
                <i className="bx bx-help-circle icon-help"></i>{" "}
                <a
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-list-19"
                  className="collapsed"
                >
                  Why doesn’t QC include duties and taxes in its prices?
                  <i className="bx bx-chevron-down icon-show"></i>
                  <i className="bx bx-chevron-up icon-close"></i>
                </a>
                <div
                  id="faq-list-19"
                  className="collapse"
                  data-bs-parent=".faq-list"
                >
                  <p>
                    The customs authorities in the destination country determine
                    whether any duties and taxes are applicable when the parcel
                    arrives. This is based on the information provided on the
                    shipping label (or waybill) and customs paperwork – in
                    particular the shipment contents, declared value and weight.
                  </p>
                </div>
              </li>

              <li data-aos="fade-up" data-aos-delay="400">
                <i className="bx bx-help-circle icon-help"></i>{" "}
                <a
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-list-20"
                  className="collapsed"
                >
                  Why do I need to pay customs duty if I received a shipment as
                  a gift? <i className="bx bx-chevron-down icon-show"></i>
                  <i className="bx bx-chevron-up icon-close"></i>
                </a>
                <div
                  id="faq-list-20"
                  className="collapse"
                  data-bs-parent=".faq-list"
                >
                  <p>
                    Whether a shipment is a gift or not, it must still go
                    through an import procedure as determined by custom’s law in
                    the destination country. The shipment is cleared through
                    customs based on the origin country, the value and quantity,
                    but not its purpose. You will need to pay customs duty and
                    taxes only if the value of the gift is above a stated local
                    threshold.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <p>Contact Us</p>
          </div>

          <div className="row">
            <div
              className="col-lg-4"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div className="info">
                <div className="address">
                  <i className="bi bi-geo-alt"></i>
                  <h4>Location:</h4>
                  <p>A108 Adam Street, New York, NY 535022</p>
                </div>

                <div className="email">
                  <i className="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>info@example.com</p>
                </div>

                <div className="phone">
                  <i className="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p>+1 5589 55488 55s</p>
                </div>
              </div>
            </div>

            <div
              className="col-lg-8 mt-5 mt-lg-0"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <form
                action="forms/contact.php"
                method="post"
                role="form"
                className="php-email-form"
              >
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="form-group mt-3">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="5"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <div
        // className="container"
        style={{
          width: "100%",
          backgroundColor: "#446ce4",
          overflow: "hidden ",
          marginTop: "3%",
        }}
      >
        {/* <div className="testimonalHeader app-padding" id="testimonials">
          <h2 style={{ textAlign: "center" }}>Testimonials</h2>
        </div> */}
        {/* <Slider {...settings}>
          <div className="col3-home-slideChild">
            <div className="scstcard">
              <div className="userImageCol3-col1">
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes
                </p>

                <p>Okeke Andrew</p>
              </div>
              <div className="userImageCol3-col2">
                <img src={Standard2} alt="" />
              </div>
            </div>
          </div>

          <div className="col3-home-slideChild">
            <div className="scstcard">
              <div className="userImageCol3-col1">
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes
                </p>

                <p>Okeke Andrew</p>
              </div>
              <div className="userImageCol3-col2">
                <img src={Standard2} alt="" />
              </div>
            </div>
          </div>

          <div className="col3-home-slideChild">
            <div className="scstcard">
              <div className="userImageCol3-col1">
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes
                </p>

                <p>Okeke Andrew</p>
              </div>
              <div className="userImageCol3-col2">
                <img src={Standard2} alt="" />
              </div>
            </div>
          </div>

          <div className="col3-home-slideChild">
            <div className="scstcard">
              <div className="userImageCol3-col1">
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes
                </p>

                <p>Okeke Andrew</p>
              </div>
              <div className="userImageCol3-col2">
                <img src={Standard2} alt="" />
              </div>
            </div>
          </div>

          <div className="col3-home-slideChild">
            <div className="scstcard">
              <div className="userImageCol3-col1">
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes
                </p>

                <p>Okeke Andrew</p>
              </div>
              <div className="userImageCol3-col2">
                <img src={Standard2} alt="" />
              </div>
            </div>
          </div>

          <div className="col3-home-slideChild">
            <div className="scstcard">
              <div className="userImageCol3-col1">
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes
                </p>

                <p>Okeke Andrew</p>
              </div>
              <div className="userImageCol3-col2">
                <img src={Standard2} alt="" />
              </div>
            </div>
          </div>
        </Slider> */}

        <div className="footerHome app-padding">
          <div className="footerHomeCol1">
            <h2 style={{ color: "#fff" }}>
              Enjoy best in class pickup
              <br /> and delivery solutions <br /> from the professionals
            </h2>
            <p>
              Book a pickup directly from your location or from your 3rd party
              customer for delivery
              <br /> in more than 220 countries around the world
            </p>
            <div className="downloadOPtionsfooter">
              <img src={apd1} alt="" />
              <img src={apd2} alt="" />
            </div>
          </div>
          <div className="footerHomeCol2"></div>
        </div>
      </div>
    </>
  );
}
