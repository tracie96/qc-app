import React, { useState } from "react";
import "./index.scss";
import contries from "../../components/countries";
import NIGStates from "../../components/nigeriaStates";
import authBanner from "../../assets/authbanner.png";
import { useHistory } from "react-router-dom";
import validatePassword from "../../components/validatePassword";
import validateEmail from "../../components/validateEmail";
import { NotificationManager } from "react-notifications";
import { axiosCalls } from "../../components/_api";
import { hideLoader, showLoader } from "../../components/loader";
const Auth = () => {
  const history = useHistory();
  const [auth, setAuth] = useState({
    firstname: "",
    lastname: "",
    othernames: "",
    email: "",
    username: "",
    password: "",
    mobile: "",
  });
  console.log(auth)
  window.localStorage.setItem('user', JSON.stringify(auth));

  const [appLoading, setAppLoading] = useState(false);
  const [tab, setTab] = useState("tab1");
  const [delivery, setDelivery] = useState({
    fromaddress: "",
    zone: "",
    weight: "",
    length: "",
    breath: "",
    deliverylocation: "",
    itemname: "",
    recipientname: "",
    recipientnumber: "",
    state: "",
    city: "",
    rCity: "",
    rState: "",
  });

  const handlesave=()=>{
    window.localStorage.setItem('user', JSON.stringify(auth));
      history.push({
        pathname: '/app',
        state: { detail: auth.lastname }
      });
  }
  const login = async (e) => {
    // hideLoader();
    e.preventDefault();
    console.log(auth);
    setAppLoading(true);
    const emailV = validateEmail(auth.email);
    const passwordV = validatePassword(auth.password);
    if (emailV !== true) {
      setAppLoading(false);
      return NotificationManager.error("Error", "Invalid Email");
    }

    if (passwordV !== true) {
      setAppLoading(false);
      return NotificationManager.error("Error", passwordV);
    }

    if (auth.username == "") {
      setAppLoading(false);
      return NotificationManager.error("Error", "Username name is required");
    }

    if (auth.mobile == "") {
      setAppLoading(false);
      return NotificationManager.error("Error", "Mobile  number is required");
    }

    if (auth.othernames == "") {
      setAppLoading(false);
      return NotificationManager.error("Error", "Middle name is required");
    }

    setAppLoading(true);
    showLoader();
    const res = await axiosCalls("auth/register", "POST", auth);
    setAppLoading(false);
    if (res) {
      hideLoader();
      if (res?.er) {
        if (res?.er === "slowNetwork") {
          NotificationManager.error(
            "Error",
            "Opps your network is slow please try again"
          );
          return;
        }
        console.error(res.er.error);
        NotificationManager.error("Error", res.er.error);
        return;
      }
      NotificationManager.success("Success", res.message);
      history.push(`/login`);

      console.log(res);
    }
  };
  const handleChange = ({ target }) => {
    setDelivery({ ...delivery, [target.name]: target.value });
    console.log(delivery);
  };
  const handleTab = (e) => {
    e.preventDefault();
    if (tab == "tab1") {
      // if (delivery.fromaddress == "") {
      //   return NotificationManager.error("Error", "From address is required");
      // }

      // if (delivery.state == "") {
      //   return NotificationManager.error("Error", "state is required");
      // }

      // if (delivery.city == "") {
      //   return NotificationManager.error("Error", "city is required");
      // }
      e.preventDefault();
      setTab("tab2");
    }

    if (tab == "tab2") {
      // if (delivery.deliverylocation == "") {
      //   if (delivery.zone == "") {
      //     return NotificationManager.error("Error", "Country is required");
      //   }

      //   return NotificationManager.error(
      //     "Error",
      //     "Delivery location is required"
      //   );
      // }

      // if (delivery.recipientname == "") {
      //   return NotificationManager.error("Error", "Recipient name is required");
      // }

      // if (delivery.recipientnumber == "") {
      //   return NotificationManager.error(
      //     "Error",
      //     "Recipient number is required"
      //   );
      // }

      // if (delivery.itemname == "") {
      //   return NotificationManager.error(
      //     "Error",
      //     "Item description is required"
      //   );
      // }
      e.preventDefault();

      setTab("tab3");
    }

    if (tab == "tab3") {
      // if (delivery.weight == "") {
      //   return NotificationManager.error("Error", "weight is required");
      // }

      // if (delivery.length == "") {
      //   return NotificationManager.error("Error", "Length is required");
      // }

      // if (delivery.breath === "") {
      //   return NotificationManager.error("Error", "Breath is required");
      // }
      e.preventDefault();
    }
  };
  return (
    <div className="authWrap">
      <div className="authWrapCol1">
        <img src={authBanner} alt="" />
      </div>
      <div className="authWrapCol2">
        <div className="actionAuthBtn">
          <button
            onClick={() => {
              history.push(`/login`);
            }}
          >
            Sign In
          </button>
          <button
            onClick={() => {
              history.push(`/signup`);
            }}
          >
            Sign up
          </button>
        </div>
        {/* <div className="authHeader">
{tab == "tab2" ? <h2>Verify your phone number</h2> : ""}

{tab == "tab3" ? (
  <h2>
   Create your account
  </h2>
) : (
  ""
)}
          <p>To continue, please provide a valid phone number.</p>
        </div> */}
        <div className="formWrap">
         
        {tab == "tab1" ? (
              <div style={{ alignSelf: "center" }}>
              <div className="authHeader" style={{marginTop:"0px"}}>
          <h2>Get started</h2>
          <p>To continue, please provide a valid phone number.</p>
        </div>                <form style={{ width: "480px" }}>
                 
                 
                  <div className="row">
                  <div className="inputWrapBook">
                        <label htmlFor="">Country</label>

                        <select
                          className="where-address-input-option"
                          name="zone"
                          onChange={handleChange}
                          value={delivery.zone}
                          required
                        >
                          <option value="">Select country</option>
                          {contries.map((data) => {
                            return (
                              <option value={data.Zone}>
                                {data.Countries}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                  </div>
                 
                   
                  <div className="inputWrapBook">
                      <label htmlFor="">Phone Number</label>
                      <input
                        required
                        type="text"
                        placeholder="Input Phone Number"
                        name="number"
                        value={delivery.phonenumber}
                        onChange={handleChange}
                      />
                    </div>

                  <div className="btnsfd">
                    <button
                      onClick={handleTab}
                      className="where-address-button"
                    >
                      Continue
                    </button>
                  </div>
                </form>
              </div>
          ) : (
            ""
          )}
          {tab == "tab2" ? (
           <div style={{ alignSelf: "center" }}>
           <div className="authHeader" style={{marginTop:"0px"}}>
       <h2>Verify your phone number</h2>
       <p>Enter the 6-digit OTP sent to your phone number..</p>
     </div>                <form style={{ width: "480px" }}>
              
              
               <div className="row">
                     <div id="otp" class="inputs d-flex flex-row justify-content-center mt-2"> <input class="m-2 text-center form-control rounded" type="text" id="first" maxlength="1" /> <input class="m-2 text-center form-control rounded" type="text" id="second" maxlength="1" /> <input class="m-2 text-center form-control rounded" type="text" id="third" maxlength="1" /> <input class="m-2 text-center form-control rounded" type="text" id="fourth" maxlength="1" /> <input class="m-2 text-center form-control rounded" type="text" id="fifth" maxlength="1" /> <input class="m-2 text-center form-control rounded" type="text" id="sixth" maxlength="1" /> </div>
                  
               </div>
              
              

       
               <div className="btnsfd">
                 <button
                   onClick={handleTab}
                   className="where-address-button"
                 >
                   Continue
                 </button>
                 <p> Want to change phone number? Click Here</p>

                
               </div>
             </form>
           </div>
          ) : (
            ""
          )}

          {tab == "tab3" ? (
            <div style={{ alignSelf: "center" }}>
            <div className="authHeader">
            <h2>Get started</h2>
            <p>To continue, please provide a valid phone number.</p>
          </div>
          <div className="formWrap">
            <form action="">
              <div className="inputWrapWith2">
                <div className="inputWrapWith2Col">
                  <label htmlFor="">First name</label>
                  <input
                    type="text"
                    onChange={(e) => {
                      setAuth({
                        ...auth,
                        firstname: e.target.value,
                      });
                    }}
                  />
                </div>
  
                <div className="inputWrapWith2Col">
                  <label htmlFor="">Last name</label>
                  <input
                    type="text"
                    onChange={(e) => {
                      setAuth({
                        ...auth,
                        lastname: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>
  
  
              <div className="inputWrap">
                <label htmlFor="">Email</label>
                <input
                  onChange={(e) => {
                    setAuth({
                      ...auth,
                      email: e.target.value,
                    });
                  }}
                  type="text"
                />
              </div>
  
  
              <div className="inputWrap">
                <label htmlFor="">Password</label>
                <input
                  onChange={(e) => {
                    setAuth({
                      ...auth,
                      password: e.target.value,
                    });
                  }}
                  type="password"
                />
              </div>

              <div className="inputWrap">
                <label htmlFor="">Referral Code (<span>Optional</span>)</label>
                <input
                  onChange={(e) => {
                    setAuth({
                      ...auth,
                      username: e.target.value,
                    });
                  }}
                  type="text"
                />
              </div>
              <div className="termsAgree">
                <p>
                  By continuing, I represent that I have read, understand, and
                  fully agree to the qc{" "}
                  <a href="/">terms of service and privacy policy.</a>
                </p>
              </div>
  
              <div className="submitBtn">
                <button onClick={handlesave}>Continue</button>
              </div>
            </form>
          </div>
          </div>

          ) : (
            ""
          )}

        </div>
      </div>
    </div>
  );
};

export default Auth;
