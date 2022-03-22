import React, { useState } from "react";
import contries from "../../components/countries";
import "./index.scss";
import mainhalf from "../../assets/mainhalf.png";
import arrowvec from "../../assets/arrowvec.png";
import cancelvec from "../../assets/cancelvec.png";
import { NotificationManager } from "react-notifications";
import { hideLoader, showLoader } from "../../components/loader";
import { axiosCalls } from "../../components/_api";

export default function BookDelivery() {
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
  });

  const [tab, setTab] = useState("tab1");

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

      if (delivery.zone == "") {
        return NotificationManager.error("Error", "Country is required");
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
      NotificationManager.success("Success", res.message);
      console.log(res);
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

        {tab == "tab2" ? (
          <h2>
            Where will we be <br />
            delivering to?
          </h2>
        ) : (
          ""
        )}

        {tab == "tab3" ? (
          <h2>
            Provide the estimated <br /> weight of your package?
          </h2>
        ) : (
          ""
        )}

        <p className="where-right-sub">
          {tab == "tab1" ? " Fill in your origin pickup address" : ""}

          {tab == "tab1" ? " Fill in your benefitor info" : ""}
        </p>
        {tab == "tab1" ? (
          <div className="where-right-address">
            <div>
              <p>Plot 122, No 1, Banana Island, Victoria Island, </p>

              <p className="where-right-address-under">
                {" "}
                Lagos, Nigeria. 100292
              </p>
            </div>
            <div className="where-right-address-checked">
              <input required type="checkbox" checked="checked" />
              <span class="checkmark"></span>
            </div>
          </div>
        ) : (
          ""
        )}

        {tab == "tab1" ? (
          <div className="where-right-form-header">
            <h3>Add new address</h3>

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
                  placeholder="Lagos"
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
                  placeholder="Sururlere"
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
      </div>
    </div>
  );
}
