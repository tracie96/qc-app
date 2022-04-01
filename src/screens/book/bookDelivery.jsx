import React, { useState } from "react";
import contries from "../../components/countries";
import "./index.scss";
import "./button.css";

import mainhalf from "../../assets/1.jpeg";
import arrowvec from "../../assets/arrow-left.png";
import { PaystackButton } from "react-paystack";
import cancelvec from "../../assets/cancelvec.png";
import { NotificationManager } from "react-notifications";
import { hideLoader, showLoader } from "../../components/loader";
import { axiosCalls } from "../../components/_api";
import { useHistory } from "react-router-dom";
import NIGStates from "../../components/nigeriaStates";
import { Modal } from "react-responsive-modal";
import InAppNavbar from "../../components/layout/inAppNavbar";
export default function BookDelivery() {
  const history = useHistory();
  const [delivery, setDelivery] = useState({
    fromaddress: "",
    zone: "",
    weight: "",
    length: "",
    breath: "",
    height: "",
    deliverylocation: "",
    itemname: "",
    recipientname: "",
    recipientnumber: "",
    state: "",
    city: "",
    number: "",
    rCity: "",
    rState: "",
    postcode: "",
  });
  const [modalConfirm, setModalConfirm] = useState(false);
  const [tab, setTab] = useState(1);

  const [total, setTotal] = useState(0);

  const [prohabittedItem, setprohabittedItem] = useState(false);

  const [showbtn, setShowbtn] = useState(false);

  const [payementDetails, setPaymentDetails] = useState({});
  const [showNewAddress, setshowNewAddress] = useState(false);
  const [showAddress, setShowAddress] = useState(false);
  const [showNewAdd, setshowNewAdd] = useState(false);
  const [showPickup, setshowPickup] = useState(false);
  const [continues, setContinues] = useState(false);

  const makePaymentBackend = () => {
    const data = {
      amount: payementDetails.Amount,
      email: "elizabeth@digicomme.com",
    };
    const res = axiosCalls(`ship/${payementDetails.quoteid}`, "Post", data);
    if (res) {
      if (res.er) {
        return;
      }
      return res;
    }
  };

  const getticket = (ticketId) => {
    const res = axiosCalls(`fixture/${ticketId}`, "GET");
    if (res) {
      if (res.er) {
        return;
      }
      return res;
    }
  };

  const handleOnSuccess = (e) => {
    console.log(e);
    // Call payment buy ticket api
    // access transaction ID using e.trxref or e.reference

    // submitTicket(e);
    setModalConfirm(true);
    makePaymentBackend();
  };
  var retrievedObject = localStorage.getItem("user");

  var auth = JSON.parse(retrievedObject);

  const handleOnClose = () => {
    // Optional
    // Do any custom action like show modal or log cart
    NotificationManager.error("Payment error", "Please retry again");
  };

  const toggleProhabittedModal = () => {
    setprohabittedItem(!prohabittedItem);
  };

  const handleChange = ({ target }) => {
    setDelivery({ ...delivery, [target.name]: target.value });
    console.log(delivery);
  };

  const handleTab = (e) => {
    e.preventDefault();
    if (tab == 1) {
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
      setTab(2);
    }

    if (tab == 2) {
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

      setTab(3);
    }

    if (tab == 3) {
      // if (delivery.weight == "") {
      //   return NotificationManager.error("Error", "weight is required");
      // }

      // if (delivery.length == "") {
      //   return NotificationManager.error("Error", "Length is required");
      // }

      // if (delivery.breath == "") {
      //   return NotificationManager.error("Error", "Breath is required");
      // }
      e.preventDefault();
      setTab(4);
    }
    // if (tab == 4) {
    //   // if (delivery.weight == "") {
    //   //   return NotificationManager.error("Error", "weight is required");
    //   // }

    //   // if (delivery.length == "") {
    //   //   return NotificationManager.error("Error", "Length is required");
    //   // }

    //   // if (delivery.breath == "") {
    //   //   return NotificationManager.error("Error", "Breath is required");
    //   // }
    //   e.preventDefault();
    //   setTab(5);
    // }
    if (tab == 4) {
      // if (delivery.weight == "") {
      //   return NotificationManager.error("Error", "weight is required");
      // }

      // if (delivery.length == "") {
      //   return NotificationManager.error("Error", "Length is required");
      // }

      // if (delivery.breath == "") {
      //   return NotificationManager.error("Error", "Breath is required");
      // }
      e.preventDefault();

      BookDel();
    }
  };

  const BookDel = async (e) => {
    // showLoader();
    const data = {
      fromaddress: delivery.fromaddress ? delivery.fromaddress : "Fara Park",
      zone: delivery.zone ? delivery.zone : "South East",
      weight: 3.5,
      length: delivery.length ? delivery.length : 3.5,
      breath: delivery.breath ? delivery.breath : 3.5,
      deliverylocation: delivery.deliverylocation
        ? delivery.deliverylocation
        : "Fara Park",
      itemname: delivery.itemname ? delivery.itemname : "Shoe",
      recipientname: delivery.recipientname ? delivery.recipientname : "Tracy",
      recipientnumber: delivery.recipientnumber
        ? delivery.recipientnumber
        : "08169530309",
    };
    setTab(4);
    // NotificationManager.success("Success");

    setPaymentDetails(1000000);

    // const res = await axiosCalls("quote", "POST", data);
    // if (res) {
    //   hideLoader();
    //   if (res?.er) {
    //     if (res?.er === "slowNetwork") {
    //       NotificationManager.error(
    //         "Error",
    //         "Opps your network is slow please try again"
    //       );
    //       return;
    //     }
    //     console.error(res.er.error);
    //     NotificationManager.error("Error", res.er.error);
    //     return;
    //   }
    //   setTab(4);
    //   NotificationManager.success("Success", res.message);
    //   console.log(res);
    //   setTotal(res.Amount);
    //   setPaymentDetails(res);
    //   // makePaymentBackend(res.Amount, res.quoteid);
    // }
  };

  return (
    <>
      <InAppNavbar />

      <div className="where-cont">
        {tab > 1 ? (
          <div
            className="cancelBtn"
            onClick={() => {
              setTab(tab - 1);
            }}
          >
            <img
              src={arrowvec}
              alt=""
              onClick={() => {
                setTab(tab - 1);
              }}
            />
          </div>
        ) : (
          <div
            className="cancelBtn"
            onClick={() => {
              history.push({
                pathname: "/app",
                state: { detail: auth.lastname },
              });
            }}
          >
            <img src={cancelvec} alt="" />
          </div>
        )}
        <div className="where-left-flex">
          <img src={mainhalf} />
        </div>
        <div className="where-right-main">
          {tab == 1 ? <h2>Get Started</h2> : ""}

          {tab == 2 ? <h2>PickUp Information</h2> : ""}

          {tab == 3 ? <h2>Delivery Information</h2> : ""}

          {tab == 4 ? (
            <h2>
              Package and <br />
              Delivery Review
            </h2>
          ) : (
            ""
          )}

          <p className="where-right-sub" style={{ textAlign: "center" }}>
            {/* {tab == 1 ? " Get Started" : ""} */}
          </p>

          {tab == 1 ? (
            <div className="where-right-form-header">
              <form>
                <div className="inputWrapBook">
                  <select
                    className="where-address-input-option"
                    name="state"
                    onChange={handleChange}
                    value={delivery.category}
                    required
                  >
                    <option value=""> Select Shipment Type</option>
                    <option value="Document">Document</option>
                    <option value="Document">Package</option>
                  </select>
                </div>
                <div className="inputWrapBook">
                  <label htmlFor="">Weight (KG)</label>
                  <input
                    required
                    type="number"
                    name="weight"
                    min="0.5"
                    onChange={handleChange}
                    value={delivery.weight}
                  />
                </div>

                <div className="row">
                  <div className="col">
                    <div className="inputWrapBook">
                      <label htmlFor="">Length (CM)</label>
                      <input
                        required
                        type="number"
                        min="0.5"
                        name="length"
                        onChange={handleChange}
                        value={delivery.length}
                      />
                    </div>
                  </div>

                  <div className="col">
                    <div className="inputWrapBook">
                      <label htmlFor="">Width (CM)</label>
                      <input
                        required
                        type="number"
                        name="breath"
                        min="0.5"
                        onChange={handleChange}
                        value={delivery.breath}
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="inputWrapBook">
                      <label htmlFor="">Height (CM)</label>
                      <input
                        required
                        type="number"
                        name="height"
                        min="0.5"
                        onChange={handleChange}
                        value={delivery.height}
                      />
                    </div>
                  </div>
                </div>
                <div className="inputWrapBook">
                  <input
                    required
                    type="text"
                    placeholder="Give a detailed description of what you are shipping"
                    name="description"
                    onChange={handleChange}
                    value={delivery.description}
                  />
                </div>

                <div className="row">
                  <div className="col">
                    <div className="inputWrapBook">
                      <label htmlFor="">Number of Items</label>
                      <input
                        required
                        type="number"
                        min="0.5"
                        name="number"
                        onChange={handleChange}
                        value={delivery.numberofitems}
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="inputWrapBook">
                      <label htmlFor="">Value</label>
                      <input
                        required
                        type="number"
                        placeholder=""
                        min="0.5"
                        name="value"
                        onChange={handleChange}
                        value={delivery.value}
                      />
                    </div>
                  </div>
                  <div className="inputWrapBook">
                    <button
                      type="button"
                      onClick={() => {
                        setprohabittedItem(true);
                      }}
                      className="btn-danger"
                      style={{ width: "30%" }}
                    >
                      Prohibited Items
                    </button>
                  </div>
                </div>
                <div className="btnsfd">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                      checked={continues ? true : false}
                      onClick={() => {
                        setContinues(!continues);
                      }}
                    />
                    <label class="form-check-label" for="flexCheckChecked">
                      Checked
                    </label>
                  </div>
                  {continues ? (
                    <button
                      onClick={handleTab}
                      className="where-address-button"
                      style={{ backgroundColor: "#000" }}
                    >
                      Continue
                    </button>
                  ) : (
                    <button
                      onClick={toggleProhabittedModal}
                      style={{ backgroundColor: "#ccc" }}
                      disabled
                      className="where-address-button"
                    >
                      Continue
                    </button>
                  )}
                </div>
              </form>
            </div>
          ) : (
            ""
          )}

          {tab == 2 ? (
            <div style={{ alignSelf: "center", width: "80%" }}>
              <div className="where-right-form-header">
                {/* <h3>Add new address</h3> */}

                <form>
                  <p
                    style={{
                      fontSize: "18px",
                      color: "#4169E2",
                      fontWeight: "800",
                      fontFamily: "Playfair Display",
                      padding: "15px 0 0 0",
                    }}
                  >
                    <div class="form-group">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="gridCheck"
                          onClick={() => {
                            setShowAddress(!showAddress);
                            setshowNewAddress(false);
                          }}
                          checked={showAddress ? true : false}
                        />
                        <label class="form-check-label" for="gridCheck">
                          Use Default Address?
                        </label>
                      </div>
                    </div>{" "}
                  </p>

                  {showAddress ? (
                    <div className="where-right-address">
                      <div>{auth.formaddress}</div>
                      {/* <div className="where-right-address-checked">
                      <input type="checkbox" checked="checked" />
                      <span className="checkmark"></span>
                    </div> */}
                    </div>
                  ) : (
                    ""
                  )}

                  <div>
                    <p
                      style={{
                        fontSize: "18px",
                        color: "#4169E2",
                        fontWeight: "800",
                        fontFamily: "Playfair Display",
                        padding: "15px 0 0 0",
                      }}
                    >
                      <div class="form-group">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="gridCheck"
                            onClick={() => {
                              setshowNewAddress(!showNewAddress);
                              setShowAddress(false);
                            }}
                            checked={showNewAddress ? true : false}
                          />
                          <label class="form-check-label" for="gridCheck">
                            Add new address?
                          </label>
                        </div>
                      </div>{" "}
                    </p>
                  </div>
                  {showNewAddress ? (
                    <>
                      <div className="row">
                        <div className="inputWrapBook">
                          <label htmlFor="">House/APT/Flat Number</label>
                          <input
                            required
                            type="text"
                            placeholder="34a, Ago Iwoye"
                            name="fromaddress"
                            value={delivery.fromaddress}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <div className="inputWrapBook">
                            <label htmlFor="">City</label>
                            <input
                              required
                              type="text"
                              placeholder="Input city"
                              name="city"
                              value={delivery.city}
                              onChange={handleChange}
                            />
                          </div>{" "}
                        </div>
                        <div className="col">
                          <div className="inputWrapBook">
                            <label htmlFor="">Select state</label>

                            <select
                              className="where-address-input-option"
                              name="state"
                              onChange={handleChange}
                              value={delivery.state}
                              required
                            >
                              <option value="">Select state</option>
                              {NIGStates.map((data) => {
                                return <option value={data}>{data}</option>;
                              })}
                            </select>
                          </div>{" "}
                        </div>
                      </div>

                      <div className="row">
                        <div className="col">
                          <div className="inputWrapBook">
                            <label htmlFor="">Country</label>

                            <select
                              className="where-address-input-option"
                              name="zone"
                              onChange={handleChange}
                              value={delivery.zone}
                              required
                            >
                              <option value="">Nigeria</option>
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

                        <div className="col">
                          <div className="inputWrapBook">
                            <label htmlFor="">Post code</label>
                            <input
                              required
                              type="text"
                              placeholder="0039282"
                              onChange={({ target }) => {
                                setDelivery({
                                  ...delivery,
                                  postcode: target.value,
                                });
                              }}
                              value={delivery.postcode}
                            />
                          </div>
                        </div>
                        <div className="inputWrapBook">
                          <label htmlFor="">Phone Number</label>
                          <input
                            required
                            type="text"
                            placeholder="Input Phone Number"
                            name="number"
                            value={delivery.number}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <div class="form-check" style={{ marginTop: "30px" }}>
                            <input
                              class="form-check-input"
                              type="checkbox"
                              id="gridCheck"
                              onClick={() => {
                                setshowPickup(!showPickup);
                              }}
                            />
                            <label class="form-check-label" for="gridCheck">
                              Use Pickup Hubs?
                            </label>
                          </div>
                        </div>

                        <div className="col">
                          <div className="inputWrapBook">
                            <label htmlFor="">Date</label>
                            <input
                              required
                              type="date"
                              onChange={({ target }) => {
                                setDelivery({
                                  ...delivery,
                                  date: target.value,
                                });
                              }}
                              value={delivery.date}
                            />
                          </div>
                        </div>
                        {showPickup ? (
                          <div className="inputWrapBook">
                            <label htmlFor="">Select Hub</label>

                            <select
                              className="where-address-input-option"
                              name="zone"
                              onChange={handleChange}
                              value={delivery.zone}
                              required
                            >
                              <option value="">IKOSI/MAGODO</option>
                              <option value="">LAGOS ISLAND</option>
                              <option value="">Redemption Camp</option>
                              <option value="">DHL IKOYI</option>
                              <option value="">DHL APAPA</option>
                              <option value="">DHL SURULERE</option>

                              <option value="">DHL AKIN ADESOLA</option>
                              <option value="">DHL BROAD STREET</option>
                              <option value="">DHL MURI OKUNOLA</option>
                              <option value="">DHL CHERUB MALL</option>
                              <option value="">DHL LEKKI</option>
                              <option value="">DHL ISOLO</option>

                              <option value="">DHL AWOLOWO WAY</option>
                              <option value="">DHL GRA IKEJA</option>
                              <option value="">DHL ALLEN</option>
                              <option value="">DHL Badagry</option>
                              <option value="">DHL HERITAGE HOUSE</option>
                              <option value="">DHL GARIKI</option>

                              <option value="">DHL WUZE 2</option>
                              <option value="">DHL HAFSAT PLAZA</option>
                              <option value="">DHL AMINU KANO</option>
                              <option value="">DHL PORT HARCOURT</option>
                              <option value="">DHL IBADAN</option>
                              <option value="">DHL Kano</option>
                            </select>
                          </div>
                        ) : (
                          ""
                        )}

                        <div className="inputWrapBook">
                          <label htmlFor="">Phone Number</label>
                          <input
                            required
                            type="text"
                            placeholder="Input Phone Number"
                            name="number"
                            value={delivery.number}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                  {/* <div className="inputWrapBook">
                <label htmlFor="">Post code</label>
                <input
                  required
                  type="text"
                  placeholder="0039282"
                  // onChange={({ target }) => {
                  //   setDelivery({
                  //     ...delivery,
                  //     fromaddress: target.value,
                  //   });
                  // }}
                  // value={delivery.fromaddress}
                />
              </div> */}

                  {/* <div className="inputWrapBook">
                <label htmlFor="">State</label>
                <input
                  required
                  type="text"
                  placeholder="Input state"
                  name="state"
                  onChange={handleChange}
                  value={delivery.state}
                />
              </div> */}

                  {/* <div className="where-address-save-check">
                  <label>
                    {" "}
                    <input required type="checkbox" />
                    Save to Address Book
                  </label>
                </div> */}
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
            </div>
          ) : (
            ""
          )}

          {tab == 3 ? (
            <div style={{ alignSelf: "center", width: "80%" }}>
              <div className="where-right-form-header">
                {/* <h3>Add new address</h3> */}

                <form>
                  <div></div>

                  <>
                    <div className="row">
                      <div className="inputWrapBook">
                        <input
                          required
                          type="text"
                          placeholder="Input Name"
                          name="fromaddress"
                          value={delivery.name}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="inputWrapBook">
                        <label htmlFor="">House/APT/Flat Number</label>
                        <input
                          required
                          type="text"
                          placeholder="34a, Ago Iwoye"
                          name="fromaddress"
                          value={delivery.fromaddress}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <div className="inputWrapBook">
                          <label htmlFor="">City</label>
                          <input
                            required
                            type="text"
                            placeholder="Input city"
                            name="city"
                            value={delivery.city}
                            onChange={handleChange}
                          />
                        </div>{" "}
                      </div>
                      <div className="col">
                        <div className="inputWrapBook">
                          <label htmlFor="">Select state</label>

                          <select
                            className="where-address-input-option"
                            name="state"
                            onChange={handleChange}
                            value={delivery.state}
                            required
                          >
                            <option value="">Select state</option>
                            {NIGStates.map((data) => {
                              return <option value={data}>{data}</option>;
                            })}
                          </select>
                        </div>{" "}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <div className="inputWrapBook">
                          <label htmlFor="">Country</label>

                          <select
                            className="where-address-input-option"
                            name="zone"
                            onChange={handleChange}
                            value={delivery.zone}
                            required
                          >
                            <option value="">Nigeria</option>
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

                      <div className="col">
                        <div className="inputWrapBook">
                          <label htmlFor="">Post code</label>
                          <input
                            required
                            type="text"
                            placeholder="0039282"
                            onChange={({ target }) => {
                              setDelivery({
                                ...delivery,
                                postcode: target.value,
                              });
                            }}
                            value={delivery.postcode}
                          />
                        </div>
                      </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <div className="inputWrapBook">
                            <label htmlFor="">Phone Number</label>
                            <input
                              required
                              type="text"
                              placeholder="Input Phone Number"
                              name="number"
                              value={delivery.number}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col">
                          <div className="inputWrapBook">
                            <label htmlFor="">Email</label>
                            <input
                              required
                              type="text"
                              placeholder="Input Email"
                              name="email"
                              value={delivery.email}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                    </div>
                  </>

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
            </div>
          ) : (
            ""
          )}
          {/* 
          {tab == 3 ? (
            <div className="where-right-form-header">
              <form>
                <div className="where-right-address">
                  <div>
                    <p
                      style={{
                        fontSize: "16px",
                        color: "#434343",
                        padding: "15px",
                      }}
                    >
                      <span style={{ color: "#4169E2" }}>
                        What are we coming to pick
                      </span>
                      <br />
                      tap or click to add item
                    </p>
                  </div>
                  <div style={{ paddingTop: "3%" }}>
                    <button
                      style={{
                        border: "1px solid #4169E2",
                        padding: "0 10px 0 10px",
                        fontSize: "12px",
                        width: "70px",
                      }}
                    >
                      Edit
                    </button>
                  </div>
                </div>
                <div style={{ paddingTop: "3%" }}>
                  <button
                    style={{
                      border: "1px solid #4169E2",
                      padding: "0 2% 0 2%",
                      fontSize: "12px",
                    }}
                    type="button"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    Add Item
                  </button>
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "24px",
                      color: "#4169E2",
                      fontWeight: "800",
                      fontFamily: "Playfair Display",
                      padding: "15px 0 0 0",
                    }}
                  >
                    Summary
                  </p>
                </div>
                <div
                  className="row"
                  style={{
                    display: "flex",
                    color: "rgba(36, 66, 46, 0.75)",
                    fontSize: "18px",
                    fontFamily: "Gilroy-Bold",
                  }}
                >
                  <div className="col">
                    <address>
                      <div style={{ marginTop: "10px" }}>TOTAL QUANTITY</div>
                      <div style={{ marginTop: "10px" }}>TOTAL VALUE</div>
                      <div style={{ marginTop: "10px" }}>INSURANCE FEE</div>
                      <div style={{ marginTop: "10px" }}>COVER</div>
                    </address>
                  </div>
                  <div className="col text-right">
                    <address style={{ float: "right" }}>
                      <div style={{ marginTop: "10px" }}>1</div>
                      <div style={{ marginTop: "10px" }}> 5.0</div>
                      <div style={{ marginTop: "10px" }}>0.00</div>
                      <div style={{ marginTop: "10px" }}>10,000.00</div>
                    </address>
                  </div>
                </div>

                <div className="btnsfd">
                  <button onClick={handleTab} className="where-address-button">
                    Continue
                  </button>
                  <p
                    style={{
                      fontWeight: "500",
                      fontFamily: "Poppins",
                      fontSize: "14px",
                      marginTop: "-20px",
                    }}
                  >
                    By continuing, I represent that the declaration above is a
                    proper and accurate description of the contents of my
                    package.
                  </p>
                </div>
              </form>
            </div>
          ) : (
            ""
          )} */}

          {tab == 4 ? (
            <div className="sumaryWrap">
              <div>
                <p
                  style={{
                    fontSize: "24px",
                    color: "#4169E2",
                    fontWeight: "800",
                    fontFamily: "Playfair Display",
                    padding: "15px 0 0 0",
                  }}
                >
                  Summary
                </p>
              </div>
              <div
                className="row"
                style={{
                  display: "flex",
                  color: "rgba(36, 66, 46, 0.75)",
                  fontSize: "18px",
                  fontFamily: "Gilroy-Bold",
                }}
              >
                <div style={{ marginTop: "10px" }}>ITEM</div>

                <div className="col">
                  <address>
                    <div style={{ marginTop: "10px" }}>WEIGHT</div>
                    <div style={{ marginTop: "10px" }}>LENGTH</div>
                    <div style={{ marginTop: "10px" }}>WIDTH</div>
                    <div style={{ marginTop: "10px" }}>HEIGHT</div>
                    <div style={{ marginTop: "10px" }}>TOTAL</div>
                  </address>
                </div>
                <div className="col text-right">
                  <address style={{ float: "right" }}>

                    <div style={{ marginTop: "10px" }}>{delivery.itemname}</div>
                    <div style={{ marginTop: "10px" }}>
                      {" "}
                      {delivery.weight}KG
                    </div>
                    <div style={{ marginTop: "10px" }}>{delivery.weight}CM</div>

                    <div style={{ marginTop: "10px" }}>{delivery.breath}CM</div>
                    <div style={{ marginTop: "10px" }}>{delivery.height}CM</div>
                    <div style={{ marginTop: "10px" }}>23000</div>
                  </address>
                </div>
              </div>

              <div className="databdd">
                <address>
                  <div style={{ marginTop: "10px" }}>Pickup</div>
                </address>
                <div className="col text-right">
                  <address style={{ float: "right" }}>
                    <span style={{ float: "right" }}>
                      {`${delivery.fromaddress} ${delivery.city} ${delivery.state}`}
                    </span>
                  </address>
                </div>
                <span
                  style={{ float: "right" }}
                >{`${delivery.fromaddress} ${delivery.city} ${delivery.state}`}</span>
              </div>

              <div className="databdd">
                <address>
                  <div style={{ marginTop: "10px" }}>Delivery Location</div>
                </address>
                <div className="col text-right">
                  <address style={{ float: "right" }}>
                    <span style={{ float: "right" }}>
                      {`${delivery.fromaddress} ${delivery.city} ${delivery.state}`}
                    </span>
                  </address>
                </div>
              </div>

              <div className="acceptText">
                <p>
                  By continuing, I represent that the declaration above is a
                  proper and accurate description of the contents of my package.
                </p>
              </div>

              <div>
                {/* <button
                  onClick={() => {
                    NotificationManager.success("Success");
                    history.push("/app");
                  }}
                  className="where-address-button"
                  style={{
                    width: "100%",
                    borderRadius: "5px",
                  }}
                >
                  Pay now
                </button> */}
                <div className="paymentTotalbtn">
                  <PaystackButton
                    reference={new Date().getTime().toString()}
                    email={"frostandy41@gmail.com"}
                    amount={Number(total) ? Number(total) : 23000 * 100}
                    publicKey={process.env.REACT_APP_PAYSTACK_KEY}
                    text="PROCEED TO PAYMENT"
                    onSuccess={handleOnSuccess}
                    onClose={handleOnClose} // Optional
                  />
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="prohabitedItems">
        <Modal
          open={modalConfirm}
          onClose={toggleProhabittedModal}
          center
          showCloseIcon={false}
        >
          <div className="prohabwrap" style={{ textAlign: "center" }}>
            <div>
              <p
                style={{
                  fontSize: "32px",
                  color: "#4169E2",
                  fontWeight: "800",
                  fontFamily: "Playfair Display",
                  padding: "15px 0 0 0",
                }}
              >
                Payment Successful
              </p>
            </div>
            <div className="probitrbody">
              <br />
              <small>
                Track ID: <b>#056278363014</b>
              </small>

              <div className="row">
                <div className="col">
                  <button
                    onClick={() => {
                      history.push({
                        pathname: "/app",
                        state: { detail: auth.lastname },
                      });
                      setModalConfirm(false);
                    }}
                  >
                    Go back to Dashbard
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
      <div className="prohabitedItems">
        <Modal
          open={prohabittedItem}
          onClose={toggleProhabittedModal}
          center
          showCloseIcon={false}
        >
          <div className="prohabwrap">
            <h2>Prohibited Items</h2>

            <div className="probitrbody">
              <ul>
                <li>
                  Our Courier partners do not have the operational capability to
                  transport such items.
                </li>

                <li>
                  Animal or animal’s products contained within Appendix 1 of
                  CITES are prohibited from carriage. The CITES Convention
                  (Convention on International Trade in Endangered Species of
                  Wild Fauna and Flora) is an international agreement between
                  governments concerning the international trade in specimens of
                  wild animals or plants https://www.cites.org/eng. Animal or
                  animal’s products not contained within Appendix 1 of CITES can
                  usually be shipped but may require an export license from the
                  issuing government. See under restricted.
                </li>

                <li>
                  These items are prohibited for carriage as the network is not
                  designed to be sufficiently secure for such transportation. It
                  could lead to our Courier partner’s people or property
                  becoming targets of criminal activity.{" "}
                </li>

                <li>
                  These items are prohibited for carriage as the network is not
                  designed to be sufficiently secure for such transportation. It
                  could lead to our Courier partner’s people or property
                  becoming targets of criminal activity. The relevant local
                  Authority is to be notified if the amount of cash found
                  exceeds the relevant threshold for notification. - Travellers
                  Cheques & Activated Credit Cards As an exception, certain
                  selected and approved customers who have significant volumes
                  of core network shipments may be permitted to transport
                  Travellers Cheques & Activated Credit Cards (GSOP Shipment and
                  Product Handling Policy and Standards 2.2.14 Travellers
                  Cheques & Activated Credit Cards).
                </li>

                <li>
                  These items are prohibited for carriage as our Courier
                  partner’s network is not designed to be sufficiently secure
                  for such transportation. It could lead to its people or
                  property becoming targets of criminal activity.
                </li>
                <li>
                  These items are prohibited for carriage in our Courier
                  partner’s network as in many territories special handling and
                  licenses are required for the carrier. Restrictions also apply
                  in airports worldwide for the airside handling of such items.
                  Under x-ray replica firearms resemble real guns and may cause
                  disruption and delay in the screening process.
                </li>

                <li>
                  Any goods considered to be illegal are prohibited for carriage
                  as our Courier partners could be held financially and
                  criminally responsible for the movement of such goods. This
                  can include items that are country-specific (e.g. the
                  importation of alcohol and pornography including sex-dolls)
                  and commodities considered to be illegal internationally, such
                  as counterfeit goods and narcotics (e.g. Heroin, Cocaine,
                  Fentanyl and chemicals that may be precursors to narcotic
                  manufacture).
                </li>
                <li>
                  Counterfeit goods in breach of intellectual property rights
                  (IPR) are prohibited and carrying them may cause serious harm
                  to the reputation of our Courier partners. As per our policy,
                  all IPR / counterfeit goods and commodities are illegal and
                  are therefore prohibited for carriage.
                </li>
              </ul>
              <input
                class="form-check-input pl-4"
                type="checkbox"
                checked={showbtn}
                onClick={() => {
                  setShowbtn(true);
                }}
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                I Understand
              </label>
              {showbtn ? (
                <button
                  onClick={toggleProhabittedModal}
                  style={{ backgroundColor: "#000" }}
                >
                  Close
                </button>
              ) : (
                <button
                  onClick={toggleProhabittedModal}
                  style={{ backgroundColor: "#ccc" }}
                  disabled
                >
                  Close
                </button>
              )}
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
}
