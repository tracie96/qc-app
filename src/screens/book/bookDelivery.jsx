import React, { useState } from "react";
import contries from "../../components/countries";
import "./index.scss";
import mainhalf from "../../assets/mainhalf.png";
import arrowvec from "../../assets/arrowvec.png";
import cancelvec from "../../assets/cancelvec.png";
import { NotificationManager } from "react-notifications";
import { hideLoader, showLoader } from "../../components/loader";
import { axiosCalls } from "../../components/_api";
import { useHistory } from "react-router-dom";

export default function BookDelivery() {
  const history = useHistory();
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

  const [tab, setTab] = useState("tab1");

  const [total, setTotal] = useState(0);

  const handleChange = ({ target }) => {
    setDelivery({ ...delivery, [target.name]: target.value });
    console.log(delivery);
  };

  const handleTab = (e) => {
    e.preventDefault();
    if (tab == "tab1") {
      if (delivery.fromaddress == "") {
        return NotificationManager.error("Error", "From address is required");
      }

      if (delivery.state == "") {
        return NotificationManager.error("Error", "state is required");
      }

      if (delivery.city == "") {
        return NotificationManager.error("Error", "city is required");
      }
      e.preventDefault();
      setTab("tab2");
    }

    if (tab == "tab2") {
      if (delivery.deliverylocation == "") {
        if (delivery.zone == "") {
          return NotificationManager.error("Error", "Country is required");
        }

        return NotificationManager.error(
          "Error",
          "Delivery location is required"
        );
      }

      if (delivery.recipientname == "") {
        return NotificationManager.error("Error", "Recipient name is required");
      }

      if (delivery.recipientnumber == "") {
        return NotificationManager.error(
          "Error",
          "Recipient number is required"
        );
      }

      if (delivery.itemname == "") {
        return NotificationManager.error(
          "Error",
          "Item description is required"
        );
      }
      e.preventDefault();

      setTab("tab3");
    }

    if (tab == "tab3") {
      if (delivery.weight == "") {
        return NotificationManager.error("Error", "weight is required");
      }

      if (delivery.length == "") {
        return NotificationManager.error("Error", "Length is required");
      }

      if (delivery.breath == "") {
        return NotificationManager.error("Error", "Breath is required");
      }
      e.preventDefault();
      BookDel();
    }
  };

  const BookDel = async (e) => {
    showLoader();
    const data = {
      fromaddress: delivery.fromaddress,
      zone: delivery.zone,
      weight: delivery.weight,
      length: delivery.length,
      breath: delivery.breath,
      deliverylocation: delivery.deliverylocation,
      itemname: delivery.itemname,
      recipientname: delivery.recipientname,
      recipientnumber: delivery.recipientnumber,
    };
    const res = await axiosCalls("quote", "POST", data);
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
      setTab("tab4");
      NotificationManager.success("Success", res.message);
      console.log(res);
      setTotal(res.Amount);
    }
  };

  return (
    <div className="where-cont">
      <div className="where-left-flex">
        <img src={mainhalf} />
      </div>
      <div className="where-right-main">
        {tab == "tab1" ? (
          <h2>
            Where will we <br />
            be picking up from ?
          </h2>
        ) : (
          ""
        )}

        {tab == "tab2" ? <h2>Pick up location</h2> : ""}

        {tab == "tab3" ? (
          <h2>
            Provide the estimated <br /> weight of your package?
          </h2>
        ) : (
          ""
        )}

        {tab == "tab4" ? (
          <h2>
            Package and <br />
            Delivery Review
          </h2>
        ) : (
          ""
        )}

        <p className="where-right-sub">
          {tab == "tab1" ? " Fill in your origin pickup address" : ""}

          {tab == "tab1" ? " Fill in your benefitor info" : ""}
        </p>
        {tab == "tab1" ? (
          <></>
        ) : (
          // <div className="where-right-address">
          //   <div>
          //     <p>Plot 122, No 1, Banana Island, Victoria Island, </p>

          //     <p className="where-right-address-under">
          //       {" "}
          //       Lagos, Nigeria. 100292
          //     </p>
          //   </div>
          //   <div className="where-right-address-checked">
          //     <input required type="checkbox" checked="checked" />
          //     <span class="checkmark"></span>
          //   </div>
          // </div>
          ""
        )}

        {tab == "tab1" ? (
          <div className="where-right-form-header">
            {/* <h3>Add new address</h3> */}

            <form>
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

              <div className="inputWrapBook">
                <label htmlFor="">State</label>
                <input
                  required
                  type="text"
                  placeholder="Input state"
                  name="state"
                  onChange={handleChange}
                  value={delivery.state}
                />
              </div>

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
              </div>

              <div className="where-address-save-check">
                <label>
                  {" "}
                  <input required type="checkbox" />
                  Save to Address Book
                </label>
              </div>
              <div>
                <button onClick={handleTab} className="where-address-button">
                  Continue
                </button>
              </div>
            </form>
          </div>
        ) : (
          ""
        )}

        {tab == "tab2" ? (
          <div className="where-right-form-header">
            <form>
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
                    return <option value={data.Zone}>{data.Countries}</option>;
                  })}
                </select>
              </div>

              <div className="inputWrapBook">
                <label htmlFor="">House/APT/Flat Number</label>
                <input
                  required
                  type="text"
                  placeholder="34a, Ago Iwoye"
                  name="deliverylocation"
                  onChange={handleChange}
                  value={delivery.deliverylocation}
                />
              </div>

              <div className="inputWrapBook">
                <label htmlFor="">State</label>
                <input
                  required
                  type="text"
                  placeholder="Input state"
                  name="rState"
                  onChange={handleChange}
                  value={delivery.rState}
                />
              </div>

              <div className="inputWrapBook">
                <label htmlFor="">City</label>
                <input
                  required
                  type="text"
                  placeholder="Input city"
                  name="rCity"
                  value={delivery.rCity}
                  onChange={handleChange}
                />
              </div>

              <div className="inputWrapBook">
                <label htmlFor="">Recipient name</label>
                <input
                  required
                  type="text"
                  placeholder="John doe"
                  name="recipientname"
                  onChange={handleChange}
                  value={delivery.recipientname}
                />
              </div>

              <div className="inputWrapBook">
                <label htmlFor="">Recipient number</label>
                <input
                  required
                  type="text"
                  placeholder="+234911"
                  name="recipientnumber"
                  onChange={handleChange}
                  value={delivery.recipientnumber}
                />
              </div>

              <div className="inputWrapBook">
                <label htmlFor="">Item description</label>
                <input
                  required
                  type="text"
                  placeholder="Item description"
                  name="itemname"
                  onChange={handleChange}
                  value={delivery.itemname}
                />
              </div>

              {/* <div className="inputWrapBook">
                <label htmlFor="">Country</label>

                <select
                  className="where-address-input-option"
                  onChange={({ target }) => {
                    setDelivery({
                      ...delivery,
                      zone: target.value,
                    });
                  }}
                  value={delivery.zone}
                >
                  <option value="">Select country</option>
                  {contries.map((data) => {
                    return <option value={data.Zone}>{data.Countries}</option>;
                  })}
                </select>
              </div> */}

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
                  value={delivery.fromaddress}
                />
              </div> */}

              {/* <div className="inputWrapBook">
                <label htmlFor="">State</label>
                <input
                    required
                  type="text"
                  placeholder="Lagos"
                  onChange={({ target }) => {
                    setDelivery({
                      ...delivery,
                      state: target.value,
                    });
                  }}
                  value={delivery.fromaddress}
                />
              </div> */}

              {/* <div className="inputWrapBook">
                <label htmlFor="">City</label>
                <input
                    required
                  type="text"
                  placeholder="Sururlere"
                  onChange={({ target }) => {
                    setDelivery({
                      ...delivery,
                      state: target.value,
                    });
                  }}
                  value={delivery.fromaddress}
                />
              </div> */}

              <div>
                <button onClick={handleTab} className="where-address-button">
                  Continue
                </button>
              </div>
            </form>
          </div>
        ) : (
          ""
        )}

        {tab == "tab3" ? (
          <div className="where-right-form-header">
            <form>
              <div className="inputWrapBook">
                <label htmlFor="">Weight</label>
                <input
                  required
                  type="number"
                  placeholder="10"
                  name="weight"
                  onChange={handleChange}
                  value={delivery.weight}
                />
              </div>

              <div className="inputWrapBook">
                <label htmlFor="">Length</label>
                <input
                  required
                  type="number"
                  placeholder="10"
                  name="length"
                  onChange={handleChange}
                  value={delivery.length}
                />
              </div>

              <div className="inputWrapBook">
                <label htmlFor="">Breath</label>
                <input
                  required
                  type="number"
                  placeholder="10"
                  name="breath"
                  onChange={handleChange}
                  value={delivery.breath}
                />
              </div>

              <div>
                <button onClick={handleTab} className="where-address-button">
                  Continue
                </button>
              </div>
            </form>
          </div>
        ) : (
          ""
        )}

        {tab == "tab4" ? (
          <div className="sumaryWrap">
            <div className="summaryHeader">
              <h2>Summary</h2>
            </div>

            <ul className="submlist">
              <li>
                <span>ITEM</span>
                <span>{delivery.itemname}</span>
              </li>

              <li>
                <span>Weight</span>
                <span>{delivery.weight}</span>
              </li>

              <li>
                <span>Length</span>
                <span>{delivery.length}</span>
              </li>

              <li>
                <span>Total fee</span>
                <span>₦{Number(total).toLocaleString()}</span>
              </li>
            </ul>

            <div className="databdd">
              <svg
                width="19"
                height="20"
                viewBox="0 0 19 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.6837 18.933C18.6837 18.9326 18.6837 18.9322 18.6837 18.9317L18.7758 11.4626C18.7827 10.9031 18.3347 10.4438 17.7751 10.4369C17.2155 10.4299 16.7563 10.8779 16.7493 11.4375L16.6876 16.4522L1.739 1.05613C1.34915 0.654616 0.707667 0.645155 0.306151 1.035C-0.0953649 1.42484 -0.104825 2.06633 0.285019 2.46784L15.2335 17.8639L10.2193 17.7778C9.65973 17.7683 9.19838 18.2141 9.1888 18.7736C9.17918 19.3333 9.62515 19.7946 10.1846 19.8042L17.6532 19.9324C17.6536 19.9324 17.654 19.9323 17.6545 19.9324C18.2151 19.9412 18.676 19.4919 18.6837 18.933Z"
                  fill="#FF0000"
                />
              </svg>
              <span>{`${delivery.fromaddress} ${delivery.city} ${delivery.state}`}</span>
            </div>

            <div className="databdd">
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.2496 1.32195C19.2492 1.32193 19.2487 1.32184 19.2483 1.32185L11.7877 0.953589C11.2288 0.92601 10.7532 1.35669 10.7256 1.9157C10.698 2.47464 11.1287 2.95013 11.6877 2.97775L16.6967 3.22493L0.75827 17.5939C0.342612 17.9686 0.309434 18.6093 0.684163 19.025C1.05889 19.4406 1.69959 19.4738 2.11525 19.0991L18.0536 4.73016L17.7822 9.73782C17.7519 10.2966 18.1803 10.7742 18.7392 10.8044C19.2981 10.8347 19.7755 10.4061 19.8058 9.84742L20.2101 2.38869C20.2102 2.38826 20.2101 2.38783 20.2102 2.38737C20.2397 1.82745 19.8078 1.35025 19.2496 1.32195Z"
                  fill="#FF0000"
                />
              </svg>

              <span>{`${delivery.deliverylocation} ${delivery.rCity} ${delivery.rState}`}</span>
            </div>

            <div className="acceptText">
              <p>
                By continuing, I represent that the declaration above is a
                proper and accurate description of the contents of my package.
              </p>
            </div>

            <div>
              <button
                onClick={() => {
                  NotificationManager.success("Success");
                  history.push("/all_bookings");
                }}
                className="where-address-button"
                style={{
                  width: "100%",
                  borderRadius: "5px",
                }}
              >
                Pay now
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
