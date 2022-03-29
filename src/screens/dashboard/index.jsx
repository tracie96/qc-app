import React from "react";
import Ds1 from "../../assets/ds1.png";
import Ds2 from "../../assets/ds2.png";
import Ds3 from "../../assets/ds3.png";
import Ds4 from "../../assets/ds4.png";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useLocation } from "react-router-dom";

import InAppNavbar from "../../components/layout/inAppNavbar";
import "./index.scss";
import { useHistory } from "react-router-dom";

export default function Index() {
  const location = useLocation();

  const history = useHistory();

  return (
    <div>
      <InAppNavbar />
      <div className="app-padding">
        <div className="dashboardHeader">
          <h2>Hello {location.state.detail?location.state.detail:"User"},</h2>
        </div>

      <div style={{marginTop:"50px"}}>The Cockpit helps you navigate through your transactions with QC Express</div>
        <div className="dashbordCard1">
   
          <div className="card" onClick={() => history.push(`/book_delivery`)}>
            <div className="card-item" style={{padding:"10px 0 0 15px"}}>
            <img src={Ds1} alt="" />
            <h2>Book Delivery</h2>
            <p>Schedule nationwide and international deliveries</p>
            <svg
              width="19"
              height="11"
              viewBox="0 0 19 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{marginTop:"30px"}}
            >
              <path
                d="M18.7823 4.97464C18.7821 4.97442 18.7819 4.97416 18.7816 4.97394L14.9036 1.11456C14.613 0.825441 14.1431 0.826517 13.8539 1.11708C13.5648 1.40761 13.5659 1.87753 13.8564 2.16668L16.4602 4.75781H0.742188C0.332277 4.75781 0 5.09009 0 5.5C0 5.90991 0.332277 6.24219 0.742188 6.24219H16.4601L13.8565 8.83331C13.5659 9.12247 13.5648 9.59238 13.854 9.88291C14.1432 10.1735 14.6131 10.1745 14.9036 9.88544L18.7817 6.02606C18.7819 6.02584 18.7821 6.02558 18.7824 6.02536C19.073 5.73523 19.0721 5.2638 18.7823 4.97464Z"
                fill="black"
              />
            </svg>
            </div>
          </div>
          <div className="card" onClick={() => history.push(`/tracking_page1`)}>
          <div className="card-item" style={{padding:"10px 0 0 15px"}}>

            <img src={Ds2} alt="" />
            <h2>Track Delivery</h2>
            <p>
              Follow up on the location of your <br />
              deliveries
            </p>
            <svg
              width="19"
              height="11"
              viewBox="0 0 19 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{marginTop:"20px"}}

            >
              <path
                d="M18.7823 4.97464C18.7821 4.97442 18.7819 4.97416 18.7816 4.97394L14.9036 1.11456C14.613 0.825441 14.1431 0.826517 13.8539 1.11708C13.5648 1.40761 13.5659 1.87753 13.8564 2.16668L16.4602 4.75781H0.742188C0.332277 4.75781 0 5.09009 0 5.5C0 5.90991 0.332277 6.24219 0.742188 6.24219H16.4601L13.8565 8.83331C13.5659 9.12247 13.5648 9.59238 13.854 9.88291C14.1432 10.1735 14.6131 10.1745 14.9036 9.88544L18.7817 6.02606C18.7819 6.02584 18.7821 6.02558 18.7824 6.02536C19.073 5.73523 19.0721 5.2638 18.7823 4.97464Z"
                fill="black"
              />
            </svg>
          </div>
          </div>
          <div className="card" onClick={() => history.push(`/locate_hub`)}>
          <div className="card-item" style={{padding:"10px 0 0 15px"}}>
            <img src={Ds3} alt="" />
            <h2>Locate Hub</h2>
            <p>
              Find nearby hubs to drop off your <br />
              deliveries
            </p>
            <svg
              width="19"
              height="11"
              viewBox="0 0 19 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{marginTop:"20px"}}

            >
              <path
                d="M18.7823 4.97464C18.7821 4.97442 18.7819 4.97416 18.7816 4.97394L14.9036 1.11456C14.613 0.825441 14.1431 0.826517 13.8539 1.11708C13.5648 1.40761 13.5659 1.87753 13.8564 2.16668L16.4602 4.75781H0.742188C0.332277 4.75781 0 5.09009 0 5.5C0 5.90991 0.332277 6.24219 0.742188 6.24219H16.4601L13.8565 8.83331C13.5659 9.12247 13.5648 9.59238 13.854 9.88291C14.1432 10.1735 14.6131 10.1745 14.9036 9.88544L18.7817 6.02606C18.7819 6.02584 18.7821 6.02558 18.7824 6.02536C19.073 5.73523 19.0721 5.2638 18.7823 4.97464Z"
                fill="black"
              />
            </svg>
          </div>
          </div>
        </div>

        <div className="dashbordCard1">
   
   <div className="card" onClick={() => history.push(`/book_delivery`)} style={{width:"49.5%"}}>
     <div className="card-item" style={{padding:"10px 0 0 15px"}}>
     <img src={Ds1} alt="" />
     <h2>Refer a Friend</h2>
     <p>Schedule nationwide and international deliveries</p>
     <svg
       width="19"
       height="11"
       viewBox="0 0 19 11"
       fill="none"
       xmlns="http://www.w3.org/2000/svg"
       style={{marginTop:"30px"}}
     >
       <path
         d="M18.7823 4.97464C18.7821 4.97442 18.7819 4.97416 18.7816 4.97394L14.9036 1.11456C14.613 0.825441 14.1431 0.826517 13.8539 1.11708C13.5648 1.40761 13.5659 1.87753 13.8564 2.16668L16.4602 4.75781H0.742188C0.332277 4.75781 0 5.09009 0 5.5C0 5.90991 0.332277 6.24219 0.742188 6.24219H16.4601L13.8565 8.83331C13.5659 9.12247 13.5648 9.59238 13.854 9.88291C14.1432 10.1735 14.6131 10.1745 14.9036 9.88544L18.7817 6.02606C18.7819 6.02584 18.7821 6.02558 18.7824 6.02536C19.073 5.73523 19.0721 5.2638 18.7823 4.97464Z"
         fill="black"
       />
     </svg>
     </div>
   </div>
   <div className="card" onClick={() => history.push(`/tracking_page1`)} style={{width:"49.5%"}}>
   <div className="card-item" style={{padding:"10px 0 0 15px"}}>

     <img src={Ds2} alt="" />
     <h2>Import</h2>
     <p>
       Follow up on the location of your <br />
       deliveries
     </p>
     <svg
       width="19"
       height="11"
       viewBox="0 0 19 11"
       fill="none"
       xmlns="http://www.w3.org/2000/svg"
       style={{marginTop:"20px"}}

     >
       <path
         d="M18.7823 4.97464C18.7821 4.97442 18.7819 4.97416 18.7816 4.97394L14.9036 1.11456C14.613 0.825441 14.1431 0.826517 13.8539 1.11708C13.5648 1.40761 13.5659 1.87753 13.8564 2.16668L16.4602 4.75781H0.742188C0.332277 4.75781 0 5.09009 0 5.5C0 5.90991 0.332277 6.24219 0.742188 6.24219H16.4601L13.8565 8.83331C13.5659 9.12247 13.5648 9.59238 13.854 9.88291C14.1432 10.1735 14.6131 10.1745 14.9036 9.88544L18.7817 6.02606C18.7819 6.02584 18.7821 6.02558 18.7824 6.02536C19.073 5.73523 19.0721 5.2638 18.7823 4.97464Z"
         fill="black"
       />
     </svg>
   </div>
   </div>
 
 </div>


      </div>
    </div>
  );
}
