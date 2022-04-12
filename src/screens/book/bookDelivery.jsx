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
import axios from "axios";

export default function BookDelivery() {
  var retrievedObject = localStorage.getItem("user");

  var auth = JSON.parse(retrievedObject);
  const data = {
    "IKOSI/MAGODO":
      "14A Olatunji Close, Ikosi GRA IV, Off CMD Road, Magodo Lagos",
    "LAGOS ISLAND":
      "66, Campbell Street, Lagos Island, Lagos - Ground floor. (Beside Western House)",
    "Redemption Camp": "14, Sharon Avenue Estate 11 Redemption camp)",
    "DHL IKOYI": "32 Awolowo Road,Ikoyi Lagos",
    "DHL APAPA": "24B, creek rd, apapa, lagos",
    "DHL SURULERE": "15, Adeniran Ogunsanya, street, Surulere,Lagos",
    "DHL AKIN ADESOLA": "Plot 1302A, Akin Adesola str, victoria island, lagos",
    "DHL BROAD STREET": "6, Davies str, off broad str, lagos island",
    "DHL MURI OKUNOLA":
      "Sandilad Arcade, 230 Muri Okunola str, victoria island",
    "DHL CHERUB MALL": "Cherub Mall,Km 18 lekki/epe e/way, lagos",
    "DHL LEKKI":"Block 12, plot 13A, Admiralty way. Lekki Phase 1.",
    "DHL ISOLO":"DHL House, Oshodi Apapa expressway. Toyota Bus stop. Isolo.",
    "DHL AWOLOWO WAY":"Trinity plaza, 79 Awolowo way. Ikeja",
    "DHL GRA IKEJA":"41 Joel Ogunaike",
    "DHL ALLEN":"45 Allen Avenue, ikeja",
    "DHL Badagry":"KM 26, Lagos Badagry Expressway, Alafia bus stop, adjacent FGC, Ijanikin",
    "DHL HERITAGE HOUSE":"Plot 2201 Sultan Abubakar way, Wuze zone 3, Abuja",
    "DHL GARIKI":"N0 1 Abeokuta street, Area 8,Gariki Abuja.",
    "DHL WUZE 2":"79 Ademola Adetokunbo street. Wuze 2 Abuja",
    "DHL HAFSAT PLAZA":"Constitution Avenue, Central Business district Abuja.",
    "DHL PORT HARCOURT":"No 14, Chief Nwuke street, Trans Amadi, Port Harcourt."
  };
  const [addval, setAddVal] = useState("");
  const [datas,setDatas]=useState('')
  const displayAddress = () => {
    return <p>{addval ? data[addval] : ""}</p>;
  };
  const history = useHistory();
  const [delivery, setDelivery] = useState({
    shipment_type: "",
    weight: "",
    length: "",
    width: "",
    height: "",
    description: "",
    number_items: "",
    value: "",
    pickup_address: addval ? data[addval]:'',
    pickup_hub: datas ? datas:'',
    useDefaultAddress: auth.address,
    country: "",
    delivery_address: "",
    delivery_name: "",
    delivery_email: "",
    delivery_number: "",
  });
console.log(delivery)
  const handleBooking = () => {
    try {
      axios
        .post("http://localhost:4000/api/book/create-booking", {
          shipment_type: delivery.shipment_type,
          weight: delivery.weight,
          length: delivery.length,
          width: delivery.width,
          height: delivery.height,
          description: delivery.description,
          number_items: delivery.number_items,
          value: delivery.value,
          pickup_hub: displayAddress(),
          pickup_address: delivery.pickup_address,
          useDefaultAddress: auth.useDefaultAddress,
          country: delivery.country,
          delivery_address: delivery.delivery_address,
          delivery_name: delivery.delivery_name,
          delivery_email: delivery.delivery_email,
          delivery_number: delivery.delivery_number,
        })
        .then((res) => {
          NotificationManager.success("Success", "Booking Created Successful ");
          // sessionStorage.setItem("token", res.data.token);
          // const auth = {
          //   firstname: res.data.firstname,
          //   referral: res.data.referral,
          // };
          localStorage.setItem("user", JSON.stringify(auth));
          history.push({
            // pathname: "/login",
            // state: { detail: res.data.firstname },
          });
        });
    } catch (error) {
      if (error.response) {
      }
    }
  };


  // console.log(data['IKOSI/MAGODO'])

  const [modalConfirm, setModalConfirm] = useState(false);
  const [tab, setTab] = useState(1);

  const [total, setTotal] = useState(10);

  const [prohabittedItem, setprohabittedItem] = useState(false);

  const [showbtn, setShowbtn] = useState(false);

  const [payementDetails, setPaymentDetails] = useState({});
  const [showNewAddress, setshowNewAddress] = useState(false);
  const [showAddress, setShowAddress] = useState(false);
  const [showPickup, setshowPickup] = useState(false);
  const [continues, setContinues] = useState(false);
  const [selectValue, setselectValue] = useState("");

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
  // const displayAddress = () => {
  //   return <p>{addval ? data[addval] : ""}</p>;
  // };

  const getticket = (ticketId) => {
    const res = axiosCalls(`fixture/${ticketId}`, "GET");
    if (res) {
      if (res.er) {
        return;
      }
      return res;
    }
  };

  const handleOnSuccess =  (e) => {
    console.log("e",e);
    handleBooking()
    // setModalConfirm(true);
    // makePaymentBackend();
  };


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
      e.preventDefault();
      setTab(2);
    }

    if (tab == 2) {
      e.preventDefault();
      setTab(3);
    }

    if (tab == 3) {
      e.preventDefault();
      setTab(4);
    }

    if (tab == 4) {
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

    //  const res = await axiosCalls("quote", "POST", data);
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
        <div className="where-left-flex" style={{ marginTop: "-160px" }}>
          <img src={mainhalf} />
        </div>
        <div className="where-right-main">
          {tab == 1 ? <h2>Shipment Details</h2> : ""}

          {tab == 2 ? <h2>PickUp Information</h2> : ""}

          {tab == 3 ? <h2>Delivery Information</h2> : ""}

          {tab == 4 ? (
            <h2 style={{ fontSize: "24px" }}>Shipment Summary</h2>
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
                    name="shipment_type"
                    onChange={handleChange}
                    value={delivery.shipment_type}
                    required
                  >
                    <option value=""> Select Shipment Type</option>
                    <option value="Document">Document</option>
                    <option value="Package">Package</option>
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
                        name="width"
                        min="0.5"
                        onChange={handleChange}
                        value={delivery.width}
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
                      />
                    </div>
                  </div>
                </div>
                <div className="inputWrapBook">
                  <input
                    required
                    type="text"
                    row="3"
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
                        name="number_items"
                        onChange={handleChange}
                        value={delivery.number_items}
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
                      By ticking the box, you agree that you have read and
                      understood the prohibited list
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
                          onClick={(e) => {
                            setShowAddress(!showAddress);
                            setshowNewAddress(false);
                            setshowPickup(false);
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
                      <div>
                        <input type="hidden" value="Amuwo-Odofin" />
                        Amuwo-Odofin
                      </div>
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
                              setshowPickup(false);
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
                            placeholder=""
                            name="delivery_address"
                            value={delivery.delivery_address}
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
                              name="country"
                              onChange={handleChange}
                              value={delivery.country}
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
                            value={delivery.delivery_number}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="row">
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
                      </div>
                    </>
                  ) : (
                    ""
                  )}

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
                            setshowPickup(!showPickup);
                            setshowNewAddress(false);
                            setShowAddress(false);
                          }}
                          checked={showPickup ? true : false}
                        />
                        <label class="form-check-label" for="gridCheck">
                          Use Dropoff Locations?
                        </label>
                      </div>
                    </div>{" "}
                  </p>

                  {showPickup ? (
                    <div className="row">
                      <div className="col">
                        <div className="inputWrapBook">
                          <label htmlFor="">Select Hub</label>
                          <select
                            className="where-address-input-option"
                            onChange={(e) => {
                              setselectValue(e.target.value);
                            }}
                            value={selectValue}
                            required
                          >
                            <option value="">--SELECT--</option>
                            <option value="lagos">LAGOS</option>
                            <option value="abuja">ABUJA</option>
                            <option value="other">OTHER LOCATIONS</option>
                          </select>
                        </div>
                      </div>
                      <div className="col">
                        <div className="inputWrapBook">
                          <label htmlFor="">Select Hub</label>
                          <select
                            className="where-address-input-option"
                            onChange={(e) => {
                              setAddVal(e.target.value);
                              setDatas(displayAddress())
                            }}
                            value={addval}
                            required
                          >
                            {/* <option value="">IKOSI/MAGODO</option> */}
                            {selectValue == "lagos" ? (
                              <>
                                <option value="">--SELECT--</option>
                                <option value="LAGOS ISLAND">
                                  LAGOS ISLAND
                                </option>
                                <option value="Redemption Camp">
                                  Redemption Camp
                                </option>
                                <option value="DHL IKOYI">DHL IKOYI</option>
                                <option value="DHL APAPA">DHL APAPA</option>
                                <option value="DHL SURULERE">
                                  DHL SURULERE
                                </option>
                                <option value="DHL AKIN ADESOLA">
                                  DHL AKIN ADESOLA
                                </option>
                                <option value="DHL BROAD STREET">
                                  DHL BROAD STREET
                                </option>
                                <option value="DHL MURI OKUNOLA">
                                  DHL MURI OKUNOLA
                                </option>
                                <option value="DHL CHERUB MALL">
                                  DHL CHERUB MALL
                                </option>
                                <option value="DHL LEKKI">DHL LEKKI</option>
                                <option value="DHL ISOLO">DHL ISOLO</option>
                                <option value="DHL AWOLOWO WAY">
                                  DHL AWOLOWO WAY
                                </option>
                                <option value="DHL GRA IKEJA">
                                  DHL GRA IKEJA
                                </option>
                                <option value="DHL ALLEN">DHL ALLEN</option>
                                <option value="DHL Badagry">DHL Badagry</option>
                              </>
                            ) : (
                              ""
                            )}

                            {selectValue == "abuja" ? (
                              <>
                                <option value="DHL HERITAGE HOUSE">
                                  DHL HERITAGE HOUSE
                                </option>
                                <option value="DHL GARIKI">DHL GARIKI</option>

                                <option value="DHL WUZE 2">DHL WUZE 2</option>
                                <option value="">DHL HAFSAT PLAZA</option>
                                <option value="">DHL AMINU KANO</option>
                                <option value="">DHL PORT HARCOURT</option>
                              </>
                            ) : (
                              ""
                            )}

                            {selectValue == "other" ? (
                              <>
                                <option value="">DHL IBADAN</option>
                                <option value="">DHL Kano</option>

                                <option value="">DHL Katsina</option>
                                <option value="">DHL Jos</option>
                                <option value="">DHL Sokoto</option>
                                <option value="">DHL Bauchi</option>
                                <option value="">DHL Gombe</option>
                                <option value="">DHL Yola</option>

                                <option value="">DHL Maiduguri</option>
                                <option value="">DHL Lokoja</option>
                                <option value="">DHL Kaduna</option>
                                <option value="">DHL Zaria</option>
                                <option value="">DHL Minna</option>
                                <option value="">DHL Lafia</option>

                                <option value="">DHL Makurdi</option>
                                <option value="">DHL Aba</option>
                                <option value="">DHL Umuahia</option>
                                <option value="">DHL Uyo</option>
                                <option value="">DHL Eket</option>
                                <option value="">DHL Calabar</option>
                                <option value="">DHL Bonny Island</option>
                                <option value="">DHL Yenogoa</option>
                                <option value="">DHL Sokoto</option>
                                <option value="">DHL Warri</option>
                                <option value="">DHL Sapele</option>
                                <option value="">DHL Benin</option>
                                <option value="">DHL Asaba</option>
                                <option value="">DHL Onitsha</option>
                                <option value="">DHL Nnewi</option>
                                <option value="">DHL Nsuka</option>
                                <option value="">DHL Abakaliki</option>
                                <option value="">DHL Enugu</option>

                                <option value="">DHL Owerri</option>
                                <option value="">DHL Akure/ADO</option>
                                <option value="">DHL Ilorin</option>
                                <option value="">DHL Abeokuta</option>
                                <option value="">DHL Ife</option>
                                <option value="">DHL Ota</option>
                                <option value="">DHL Mowe</option>
                              </>
                            ) : (
                              ""
                            )}
                          </select>
                        </div>
                      </div>
                      <div className="inputWrapBook"><input type="hidden" value={displayAddress()} />{displayAddress()}</div>
                    </div>
                  ) : (
                    ""
                  )}

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
                          name="delivery_name"
                          value={delivery.delivery_name}
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
                          placeholder=""
                          name="fromaddress"
                          value={delivery.delivery_address}
                          onChange={handleChange}
                        />
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
                          <label htmlFor="">Add State</label>
                          <input
                            required
                            type="text"
                            placeholder="Input State"
                            name="delivery_state"
                            value={delivery.state}
                            onChange={handleChange}
                          />
                        </div>{" "}
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
                            name="delivery_number"
                            value={delivery.delivery_number}
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
                            name="delivery_email"
                            value={delivery.delivery_email}
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

          {tab == 4 ? (
            <div className="sumaryWrap">
              <div></div>
              <div
                className="row"
                style={{
                  display: "flex",
                  color: "rgba(36, 66, 46, 0.75)",
                  fontSize: "18px",
                  fontFamily: "Gilroy-Bold",
                }}
              >
                <div style={{ marginTop: "10px", fontWeight: "Bold" }}>
                </div>
                <div style={{ marginTop: "10px" }}>
                  Phone Number : {delivery.delivery_number}
                </div>

                {/* <div style={{ marginTop: "10px" }}>ITEM</div> */}

                <div className="col">
                  <address>
                    <div style={{ marginTop: "10px" }}>Order Description</div>
                    <div style={{ marginTop: "10px" }}>WEIGHT</div>
                    <div style={{ marginTop: "10px" }}>LENGTH</div>
                    <div style={{ marginTop: "10px" }}>WIDTH</div>
                    <div style={{ marginTop: "10px" }}>HEIGHT</div>
                  </address>
                </div>
                <div className="col text-right">
                  <address style={{ float: "right" }}>
                    <div style={{ marginTop: "10px" }}>
                      {delivery.description}
                    </div>

                    <div style={{ marginTop: "10px" }}>{delivery.itemname}</div>
                    <div style={{ marginTop: "10px" }}>
                      {" "}
                      {delivery.weight}KG
                    </div>
                    <div style={{ marginTop: "10px" }}>{delivery.length}CM</div>

                    <div style={{ marginTop: "10px" }}>{delivery.width}CM</div>
                    <div style={{ marginTop: "10px" }}>{delivery.height}CM</div>
                  </address>
                </div>
              </div>

              <div className="databdd">
                <address>
                  <div style={{ marginTop: "10px" }}>Pickup</div>
                  <div style={{ marginTop: "10px" }}>Pickup Name</div>
                </address>
                <div className="col text-right">
                  <address style={{ float: "right" }}>
                  <div >
                
                  Amuwo-Odofin
                </div>
                <div >
               
                  {auth.lastname} {auth.firstname}
                </div>
                  </address>
                </div>
               
                
              </div>

              <div className="databdd">
                <address>
                  <div style={{ marginTop: "10px" }}>Delivery Location</div>
                  <div style={{ marginTop: "10px" }}>Recipient Name</div>
                </address>
                <div className="col text-right">
                  <address style={{ float: "right" }}>
                    <div>
                      Fara Park
                    </div>
                    <div style={{ marginTop: "10px" }}>{delivery.delivery_name}</div>
                  </address>

                </div>
              

              </div>


              <div className="acceptText">
                <p>
                  By continuing, I represent that the declaration above is a
                  proper and accurate description of the contents of my package.
                </p>
              </div>
              <div className="row">
                <div
                  className="col"
                  style={{ fontSize: "20px", fontWeight: "bold" }}
                >
                  Shipping Cost
                </div>
                <div
                  className="col"
                  style={{
                    marginLeft: "470px",
                    fontSize: "24px",
                    marginTop: "-30px",
                  }}
                >
                  <span>&#8358;</span>
                  20,000
                </div>
              </div>
              <div>
                <div className="paymentTotalbtn">
                  <PaystackButton
                    reference={new Date().getTime().toString()}
                    email={"tracyamara07@gmail.com"}
                    amount={Number(total) ? Number(total) : 20000 * 100}
                    publicKey={process.env.REACT_APP_PAYSTACK_KEY}
                    text="PROCEED TO PAYMENT"
                    onSuccess={handleOnSuccess}
                    onClose={handleOnClose} 
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
          // onClose={toggleProhabittedModal}
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
                    Go back to Cockpit
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
