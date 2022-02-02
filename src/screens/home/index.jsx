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
import apd2 from "../../assets/apd2.png";
import conversation from "../../assets/conversation.png";
import d1 from "../../assets/d1.png";
import d2 from "../../assets/d2.png";
import pasta from "../../assets/pasta.png";
import phone1 from "../../assets/phone1.jpg";
import Standard2 from "../../assets/Standard2.png";
import { ValueSvg1, ValueSvg2, ValueSvg3 } from "../../assets/svg";
import "./index.css";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
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
  backgroundColor: "#f9f4ea",
  flexDirection: "row-reverse",
  borderRadius: "5px",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
  backgroundColor: "#f9f4ea",
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

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <>
      <div style={{ paddingTop: "30px" }} className="home-page app-padding">
        <div className="homepage-header-col1">
          <div className="homepage-header-col1t1">
            <h2>Manage your package delivery like never before</h2>
          </div>

          <div className="homepage-header-col1t3">
            <p>
              We help you with local and international deliveries to your
              <br />
              customers anywhere in the world.
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
          <p>
            Trusted by world <br />
            leading companies and <br />
            personal individuals
          </p>
        </div>

        <div className="col2-home-col2">
          <div>
            <h2>100K</h2>
            <p>DELIVERY</p>
          </div>

          <div>
            <h2>18K</h2>
            <p>CUSTOMERS</p>
          </div>

          <div>
            <h2>20K</h2>
            <p>REVIEWS</p>
          </div>
        </div>
      </div>

      <div className="col4-home app-padding">
        <div className="col4-home-col1">
          <h2>
            Local & <br />
            International shipping
          </h2>
          <p>
            Request a pickup or delivery from you or from the seller and <br />
            we'll get it delivered to where you need it to go.
          </p>
        </div>

        <div className="col4-home-col2">
          <div className="shapeCirCol4">
            <p>“</p>
          </div>
          <div className="shapeCirCol4text">
            <p>
              “Lorem ipsum dolor sit amet, consectetuer adipiscing
              <br /> elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
              sociis natoque penatibus”.
            </p>
            <p>Okeke Andrew</p>
          </div>
        </div>
      </div>

      <div className="col5-home app-padding">
        <div className="col5box">
          <ValueSvg1 />
          <h2 style={{ textAlign: "center" }}>
            Local <br />
            Deliveries
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor.
          </p>
          <h4>Learn More</h4>
        </div>

        <div className="col5box">
          <ValueSvg2 />
          <h2 style={{ textAlign: "center" }}>
            Country <br />
            Deliveries
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor.
          </p>
          <h4>Learn More</h4>
        </div>

        <div className="col5box">
          <ValueSvg3 />
          <h2 style={{ textAlign: "center" }}>
            International <br />
            Deliveries
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor.
          </p>
          <h4>Learn More</h4>
        </div>
      </div>

      <div className="col6-home app-padding" id="features">
        <div className="col6-home-img-col1">
          <img src={phone1} alt="" />
        </div>

        <div className="col6-home-col2">
          <h2>
            The solutions provider <br /> with services that fit <br /> your
            needs.
          </h2>
          <p>
            From personal needs to platform integrations, we are ready to
            <br /> work with you.
          </p>
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
              Offline, Online Social Seller
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
              Platform and Market Places
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
              Agents and Franchise Partners
            </li>
          </ul>
        </div>
      </div>

      <div className="col6-home app-padding">
        <div className="col6-home-col2">
          <h2>
            The solutions provider <br /> with services that fit <br /> your
            needs.
          </h2>
          <p>
            From personal needs to platform integrations, we are ready to
            <br /> work with you.
          </p>
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
              Offline, Online Social Seller
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
              Platform and Market Places
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
              Agents and Franchise Partners
            </li>
          </ul>
        </div>

        <div className="col6-home-img-col1">
          <img src={phone1} alt="" />
        </div>
      </div>

      <div
        // className="container"
        style={{ width: "100%", background: "#F0E5CF", overflow: "hidden " }}
      >
        <div className="testimonalHeader app-padding" id="testimonials">
          <h2>Testimonials</h2>
        </div>
        <Slider {...settings}>
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
        </Slider>
        <div className="faqHeader app-padding" id="faq">
          <h2>
            Frequently <br />
            Asked Questions
          </h2>
        </div>
        <div className="faqSeaction app-padding">
          <div className="faqSeactionMainOne">
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <Typography>Collapsible Group Item #1</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                aria-controls="panel2d-content"
                id="panel2d-header"
              >
                <Typography>Collapsible Group Item #2</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                aria-controls="panel3d-content"
                id="panel3d-header"
              >
                <Typography>Collapsible Group Item #3</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary
                aria-controls="panel4d-content"
                id="panel4d-header"
              >
                <Typography>Collapsible Group Item #1</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel5"}
              onChange={handleChange("panel5")}
            >
              <AccordionSummary
                aria-controls="panel5d-content"
                id="panel5d-header"
              >
                <Typography>Collapsible Group Item #1</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel6"}
              onChange={handleChange("panel6")}
            >
              <AccordionSummary
                aria-controls="panel6d-content"
                id="panel6d-header"
              >
                <Typography>Collapsible Group Item #1</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel7"}
              onChange={handleChange("panel7")}
            >
              <AccordionSummary
                aria-controls="panel7d-content"
                id="panel7d-header"
              >
                <Typography>Collapsible Group Item #1</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>

          <div className="faqSeactionMainTwo">
            <img src={conversation} alt="" />
            <h2>You have different question?</h2>
            <p>
              AsdfLorem ipsum dolor sit amet, conse <br />
              ctetuer adipiscing elit
            </p>
            <button>Shoot a Direct Mail</button>
          </div>
        </div>

        <div className="footerHome app-padding">
          <div className="footerHomeCol1">
            <h2>
              Manage your <br />
              package delivery <br />
              like never before
            </h2>
            <p>
              Request a pickup or delivery from you or from the seller and
              <br /> we'll get it delivered to where you need it to go.
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
