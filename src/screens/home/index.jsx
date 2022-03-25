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
          Intracity
          </h2>
          <p>
          Deliveries within Major cities.
          </p>
          <h4>Learn More</h4>
        </div>

        <div className="col5box">
          <ValueSvg2 />
          <h2 style={{ textAlign: "center" }}>
            Country 
          </h2>
          <p>
            Deliveries across states and regions.
          </p>
          <h4>Learn More</h4>
        </div>

        <div className="col5box">
          <ValueSvg3 />
          <h2 style={{ textAlign: "center" }}>
            International
          </h2>
          <p>
            Deliveries across international borders.
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
                <Typography>How do I create a QC Express Account?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Simply log on to the QC Express platform and sign up. An
                  account is created for you instantly upon the completion of
                  the short form on our platform.
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
                <Typography>How do I book a shipment pick-up?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Easy. Just log on the QC Express platform and click on
                  “request a pick-up”
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
                <Typography>What destinations can I ship to?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  We deliver to all locations within Nigeria and over 220
                  countries globally. Please consult our coverage areas on our
                  website.
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
                <Typography>Can I send anything on QC Express?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Please consult our Restricted and Prohibited items list on the
                  QC Express platform/website.
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
                <Typography>How do I calculate my charges?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  A delivery charge is automatically calculated for you once you
                  specify the weight, pick-up and delivery locations on our
                  platform.
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
                <Typography>
                  Can I estimate the size and weight of a parcel?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  No. Actual weights of shipments must be determined before
                  shipping
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
                <Typography>
                  Can I use my own packaging when shipping?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Yes. You are primarily responsible for packaging
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel8"}
              onChange={handleChange("panel8")}
            >
              <AccordionSummary
                aria-controls="panel8d-content"
                id="panel8d-header"
              >
                <Typography>
                  I need to cancel a shipment, what should I do?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Please contact Customer Service at: support@quartzclassic.com
                   
                </Typography>
              </AccordionDetails>
            </Accordion>{" "}
            <Accordion
              expanded={expanded === "panel9"}
              onChange={handleChange("panel9")}
            >
              <AccordionSummary
                aria-controls="panel9d-content"
                id="panel9d-header"
              >
                <Typography>
                  Can I change or cancel a pickup I scheduled online?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  No. Please contact Customer Service at:
                  support@quartzclassic.com
                </Typography>
              </AccordionDetails>
            </Accordion>{" "}
            <Accordion
              expanded={expanded === "panel10"}
              onChange={handleChange("panel10")}
            >
              <AccordionSummary
                aria-controls="panel10d-content"
                id="panel10d-header"
              >
                <Typography>
                  What should I do if the courier can’t take a parcel and I was
                  already charged for the shipment?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  This doesn't happen often, but if a courier arrived but could
                  not take the parcel, it could be because it contains a
                  prohibited item or didn’t have the necessary paperwork ready.
                  We’ll help you arrange a new pickup or refund. Please contact
                  Customer Service at: support@quartzclassic.com
                </Typography>
              </AccordionDetails>
            </Accordion>{" "}
            <Accordion
              expanded={expanded === "panel11"}
              onChange={handleChange("panel11")}
            >
              <AccordionSummary
                aria-controls="panel11d-content"
                id="panel11d-header"
              >
                <Typography>
                  The courier could not take my shipment because it is too
                  big/heavy for their vehicle. What should I do?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  If your shipment is very large in size or heavy in weight: It
                  may require special pickup equipment and a different vehicle.
                  Please contact us to reschedule your pickup.
                </Typography>
              </AccordionDetails>
            </Accordion>{" "}
            <Accordion
              expanded={expanded === "panel12"}
              onChange={handleChange("panel12")}
            >
              <AccordionSummary
                aria-controls="panel12d-content"
                id="panel12d-header"
              >
                <Typography>
                  I have tracked a shipment and been told to contact Customer
                  Service. Why is this?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  This usually occurs if the information we have is insufficient
                  to track the shipment for you. The address may be incorrect,
                  and we require clarification or some additional information
                  may be required. The matter can be resolved very quickly
                  by contacting Customer Service.
                </Typography>
              </AccordionDetails>
            </Accordion>{" "}
            <Accordion
              expanded={expanded === "panel13"}
              onChange={handleChange("panel13")}
            >
              <AccordionSummary
                aria-controls="panel13d-content"
                id="panel13d-header"
              >
                <Typography>
                  My shipment is showing “Custom status updated” from the
                  destination, even though the shipment just left the country.
                  What does this mean?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  This status provides an indication of the clearance processing
                  from the destination. Please click in to the further details
                  (+) to open and see additional information available. This
                  checkpoint allows you to see very early if there is additional
                  information required by customs for clearance.
                </Typography>
              </AccordionDetails>
            </Accordion>{" "}
            <Accordion
              expanded={expanded === "panel14"}
              onChange={handleChange("panel14")}
            >
              <AccordionSummary
                aria-controls="panel14d-content"
                id="panel14d-header"
              >
                <Typography>
                  If I do not have my tracking number, is it still possible to
                  track my shipment?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Yes, under certain conditions. We strongly advise you to make
                  a record of your tracking number however, if you have the
                  shipper's reference number, you can use our online Shipper’s
                  Reference Tracking service.  
                </Typography>
              </AccordionDetails>
            </Accordion>{" "}
            <Accordion
              expanded={expanded === "panel15"}
              onChange={handleChange("panel15")}
            >
              <AccordionSummary
                aria-controls="panel15d-content"
                id="panel15d-header"
              >
                <Typography>How are customs duties calculated?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  The calculation of duties depends on the assessable value of a
                  dutiable shipment. For the purpose of this calculation,
                  dutiable goods are given a classification code that is known
                  as the Harmonized System code. Whether a shipment is a gift or
                  not, it must still go through an import procedure as
                  determined by custom’s law in the destination country. The
                  shipment is cleared through customs based on the origin
                  country, the value and quantity, but not its purpose. Dutiable
                  shipments are subject to a customs duty, which is a tariff or
                  tax imposed on goods when transported across international
                  borders. This system has been assigned by the World Customs
                  Organization and continues to evolve.
                </Typography>
              </AccordionDetails>
            </Accordion>{" "}
            <Accordion
              expanded={expanded === "panel16"}
              onChange={handleChange("panel16")}
            >
              <AccordionSummary
                aria-controls="panel16d-content"
                id="panel16d-header"
              >
                <Typography>
                  Who is responsible for payment of duties and taxes?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  The payment of duties and taxes are typically the
                  responsibility of the receiver.
                </Typography>
              </AccordionDetails>
            </Accordion>{" "}
            <Accordion
              expanded={expanded === "panel17"}
              onChange={handleChange("panel17")}
            >
              <AccordionSummary
                aria-controls="panel17d-content"
                id="panel17d-header"
              >
                <Typography>
                  Why is the receiver being asked to pay Customs duties and
                  taxes?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Duties and taxes are levied by Customs in the destination
                  country and the receiver is responsible for paying them. The
                  Carrier will collect payment from the receiver prior to
                  delivery. Generally, we are unable to deliver parcels until
                  these have been paid.
                </Typography>
              </AccordionDetails>
            </Accordion>{" "}
            <Accordion
              expanded={expanded === "panel18"}
              onChange={handleChange("panel18")}
            >
              <AccordionSummary
                aria-controls="panel18d-content"
                id="panel18d-header"
              >
                <Typography>
                  I’m sending a gift – can I pay duties and taxes instead of the
                  receiver?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  You need an account to pay duties and taxes for the receiver.
                </Typography>
              </AccordionDetails>
            </Accordion>{" "}
            <Accordion
              expanded={expanded === "panel19"}
              onChange={handleChange("panel19")}
            >
              <AccordionSummary
                aria-controls="panel19d-content"
                id="panel19d-header"
              >
                <Typography>
                  Why doesn’t QC include duties and taxes in its prices?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  The customs authorities in the destination country determine
                  whether any duties and taxes are applicable when the parcel
                  arrives. This is based on the information provided on the
                  shipping label (or waybill) and customs paperwork – in
                  particular the shipment contents, declared value and weight.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel20"}
              onChange={handleChange("panel20")}
            >
              <AccordionSummary
                aria-controls="panel20d-content"
                id="panel20d-header"
              >
                <Typography>
                  Why do I need to pay customs duty if I received a shipment as
                  a gift?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Whether a shipment is a gift or not, it must still go through
                  an import procedure as determined by custom’s law in the
                  destination country. The shipment is cleared through customs
                  based on the origin country, the value and quantity, but not
                  its purpose. You will need to pay customs duty and taxes only
                  if the value of the gift is above a stated local threshold.
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
