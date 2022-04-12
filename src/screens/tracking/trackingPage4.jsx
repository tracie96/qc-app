import React from "react";
import "./index.scss";
import trackingfleximg from "../../assets/qc1.jpg";
import arrowvec from "../../assets/arrowvec.png";
import cancelvec from "../../assets/cancelvec.png";
import greatervec from "../../assets/greatervec.png";
import { useHistory } from "react-router-dom";
import "./style.css";
import authBanner from "../../assets/4.jpeg";

export default function TrackingPage4() {
  const history = useHistory();

  return (
    <div className="where-cont">
      <div className="where-left-flex">
        <div className="where-left-arrow">
          <img
            src={arrowvec}
            onClick={() => {
              history.goBack();
            }}
          />
        </div>
        <div className="where-left-main">
          <img src={authBanner} />
        </div>
      </div>
      <div className="where-right-main" style={{ background: "#fff" }}>
        <img
          className="where-right-main-img"
          src={cancelvec}
          onClick={() => {
            history.goBack();
          }}
        />
        <div
          style={{
            textAlign: "center",
            marginTop: "100px",
            alignSelf: "center",
          }}
        >
          <section class="container max-width-sm">
            <h2>Available Drop-off Points</h2>

            <ul class="cd-accordion cd-accordion--animated margin-top-lg margin-bottom-lg">
              <li class="cd-accordion__item cd-accordion__item--has-children">
                <input
                  class="cd-accordion__input"
                  type="checkbox"
                  name="group-1"
                  id="group-1"
                />
                <label
                  class="cd-accordion__label cd-accordion__label--icon-folder"
                  for="group-1"
                >
                  <span>Lagos </span>
                </label>

                <ul class="cd-accordion__sub cd-accordion__sub--l1">
                  <li class="cd-accordion__item cd-accordion__item--has-children">
                    <input
                      class="cd-accordion__input"
                      type="checkbox"
                      name="sub-group-1"
                      id="sub-group-1"
                    />
                    <label
                      class="cd-accordion__label cd-accordion__label--icon-folder"
                      for="sub-group-1"
                    >
                      <span>IKOSI/MAGODO</span>
                    </label>

                    <ul class="cd-accordion__sub cd-accordion__sub--l2">
                      <li class="cd-accordion__item">
                        <a
                          class="cd-accordion__label cd-accordion__label--icon-img"
                          href="#0"
                        >
                          <span>
                            14A Olatunji Close, Ikosi GRA IV, Off CMD Road,
                            Magodo Lagos
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="cd-accordion__item cd-accordion__item--has-children">
                    <input
                      class="cd-accordion__input"
                      type="checkbox"
                      name="sub-group-2"
                      id="sub-group-2"
                    />
                    <label
                      class="cd-accordion__label cd-accordion__label--icon-folder"
                      for="sub-group-2"
                    >
                      <span>LAGOS ISLAND</span>
                    </label>

                    <ul class="cd-accordion__sub cd-accordion__sub--l2">
                      <li class="cd-accordion__item">
                        <a
                          class="cd-accordion__label cd-accordion__label--icon-img"
                          href="#0"
                        >
                          <span>
                            66, Campbell Street, Lagos Island, Lagos - Ground
                            floor. (Beside Western House)
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="cd-accordion__item cd-accordion__item--has-children">
                    <input
                      class="cd-accordion__input"
                      type="checkbox"
                      name="sub-group-3"
                      id="sub-group-3"
                    />
                    <label
                      class="cd-accordion__label cd-accordion__label--icon-folder"
                      for="sub-group-3"
                    >
                      <span>Redemption Camp</span>
                    </label>

                    <ul class="cd-accordion__sub cd-accordion__sub--l2">
                      <li class="cd-accordion__item">
                        <a
                          class="cd-accordion__label cd-accordion__label--icon-img"
                          href="#0"
                        >
                          <span>
                            14, Sharon Avenue Estate 11 Redemption camp
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li class="cd-accordion__item cd-accordion__item--has-children">
                    <input
                      class="cd-accordion__input"
                      type="checkbox"
                      name="sub-group-4"
                      id="sub-group-4"
                    />
                    <label
                      class="cd-accordion__label cd-accordion__label--icon-folder"
                      for="sub-group-4"
                    >
                      <span>DHL IKOYI</span>
                    </label>

                    <ul class="cd-accordion__sub cd-accordion__sub--l2">
                      <li class="cd-accordion__item">
                        <a
                          class="cd-accordion__label cd-accordion__label--icon-img"
                          href="#0"
                        >
                          <span>32 Awolowo Road,Ikoyi Lagos</span>
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li class="cd-accordion__item cd-accordion__item--has-children">
                    <input
                      class="cd-accordion__input"
                      type="checkbox"
                      name="sub-group-5"
                      id="sub-group-5"
                    />
                    <label
                      class="cd-accordion__label cd-accordion__label--icon-folder"
                      for="sub-group-5"
                    >
                      <span>DHL APAPA</span>
                    </label>

                    <ul class="cd-accordion__sub cd-accordion__sub--l2">
                      <li class="cd-accordion__item">
                        <a
                          class="cd-accordion__label cd-accordion__label--icon-img"
                          href="#0"
                        >
                          <span>24B, creek rd, apapa, lagos</span>
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li class="cd-accordion__item cd-accordion__item--has-children">
                    <input
                      class="cd-accordion__input"
                      type="checkbox"
                      name="sub-group-6"
                      id="sub-group-6"
                    />
                    <label
                      class="cd-accordion__label cd-accordion__label--icon-folder"
                      for="sub-group-6"
                    >
                      <span>DHL SURULERE</span>
                    </label>

                    <ul class="cd-accordion__sub cd-accordion__sub--l2">
                      <li class="cd-accordion__item">
                        <a
                          class="cd-accordion__label cd-accordion__label--icon-img"
                          href="#0"
                        >
                          <span>
                            15, Adeniran Ogunsanya, street, Surulere,Lagos
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="cd-accordion__item cd-accordion__item--has-children">
                    <input
                      class="cd-accordion__input"
                      type="checkbox"
                      name="sub-group-7"
                      id="sub-group-7"
                    />
                    <label
                      class="cd-accordion__label cd-accordion__label--icon-folder"
                      for="sub-group-7"
                    >
                      <span>DHL AKIN ADESOLA</span>
                    </label>

                    <ul class="cd-accordion__sub cd-accordion__sub--l2">
                      <li class="cd-accordion__item">
                        <a
                          class="cd-accordion__label cd-accordion__label--icon-img"
                          href="#0"
                        >
                          <span>
                            Plot 1302A, Akin Adesola str, victoria island, lagos
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li class="cd-accordion__item cd-accordion__item--has-children">
                    <input
                      class="cd-accordion__input"
                      type="checkbox"
                      name="sub-group-8"
                      id="sub-group-8"
                    />
                    <label
                      class="cd-accordion__label cd-accordion__label--icon-folder"
                      for="sub-group-4"
                    >
                      <span>DHL BROAD STREET</span>
                    </label>

                    <ul class="cd-accordion__sub cd-accordion__sub--l2">
                      <li class="cd-accordion__item">
                        <a
                          class="cd-accordion__label cd-accordion__label--icon-img"
                          href="#0"
                        >
                          <span>
                            6, Davies str, off broad str, lagos island
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li class="cd-accordion__item cd-accordion__item--has-children">
                    <input
                      class="cd-accordion__input"
                      type="checkbox"
                      name="sub-group-9"
                      id="sub-group-9"
                    />
                    <label
                      class="cd-accordion__label cd-accordion__label--icon-folder"
                      for="sub-group-9"
                    >
                      <span>DHL MURI OKUNOLA</span>
                    </label>

                    <ul class="cd-accordion__sub cd-accordion__sub--l2">
                      <li class="cd-accordion__item">
                        <a
                          class="cd-accordion__label cd-accordion__label--icon-img"
                          href="#0"
                        >
                          <span>
                            Sandilad Arcade, 230 Muri Okunola str, victoria
                            island
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li class="cd-accordion__item cd-accordion__item--has-children">
                    <input
                      class="cd-accordion__input"
                      type="checkbox"
                      name="sub-group-10"
                      id="sub-group-10"
                    />
                    <label
                      class="cd-accordion__label cd-accordion__label--icon-folder"
                      for="sub-group-10"
                    >
                      <span>DHL CHERUB MALL</span>
                    </label>

                    <ul class="cd-accordion__sub cd-accordion__sub--l2">
                      <li class="cd-accordion__item">
                        <a
                          class="cd-accordion__label cd-accordion__label--icon-img"
                          href="#0"
                        >
                          <span>
                            66, Campbell Street, Lagos Island, Lagos - Ground
                            floor. (Beside Western House)
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="cd-accordion__item cd-accordion__item--has-children">
                    <input
                      class="cd-accordion__input"
                      type="checkbox"
                      name="sub-group-11"
                      id="sub-group-11"
                    />
                    <label
                      class="cd-accordion__label cd-accordion__label--icon-folder"
                      for="sub-group-11"
                    >
                      <span>DHL LEKKI</span>
                    </label>

                    <ul class="cd-accordion__sub cd-accordion__sub--l2">
                      <li class="cd-accordion__item">
                        <a
                          class="cd-accordion__label cd-accordion__label--icon-img"
                          href="#0"
                        >
                          <span>
                            Block 12, plot 13A, Admiralty way. Lekki Phase 1.
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li class="cd-accordion__item cd-accordion__item--has-children">
                    <input
                      class="cd-accordion__input"
                      type="checkbox"
                      name="sub-group-12"
                      id="sub-group-12"
                    />
                    <label
                      class="cd-accordion__label cd-accordion__label--icon-folder"
                      for="sub-group-12"
                    >
                      <span>DHL ISOLO</span>
                    </label>

                    <ul class="cd-accordion__sub cd-accordion__sub--l2">
                      <li class="cd-accordion__item">
                        <a
                          class="cd-accordion__label cd-accordion__label--icon-img"
                          href="#0"
                        >
                          <span>
                            DHL House, Oshodi Apapa expressway. Toyota Bus stop.
                            Isolo.
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li class="cd-accordion__item cd-accordion__item--has-children">
                    <input
                      class="cd-accordion__input"
                      type="checkbox"
                      name="sub-group-13"
                      id="sub-group-13"
                    />
                    <label
                      class="cd-accordion__label cd-accordion__label--icon-folder"
                      for="sub-group-13"
                    >
                      <span>DHL AWOLOWO WAY</span>
                    </label>

                    <ul class="cd-accordion__sub cd-accordion__sub--l2">
                      <li class="cd-accordion__item">
                        <a
                          class="cd-accordion__label cd-accordion__label--icon-img"
                          href="#0"
                        >
                          <span>Trinity plaza, 79 Awolowo way. Ikeja</span>
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li class="cd-accordion__item cd-accordion__item--has-children">
                    <input
                      class="cd-accordion__input"
                      type="checkbox"
                      name="sub-group-14"
                      id="sub-group-14"
                    />
                    <label
                      class="cd-accordion__label cd-accordion__label--icon-folder"
                      for="sub-group-14"
                    >
                      <span>DHL GRA IKEJA</span>
                    </label>

                    <ul class="cd-accordion__sub cd-accordion__sub--l2">
                      <li class="cd-accordion__item">
                        <a
                          class="cd-accordion__label cd-accordion__label--icon-img"
                          href="#0"
                        >
                          <span>41 Joel Ogunaike</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="cd-accordion__item cd-accordion__item--has-children">
                    <input
                      class="cd-accordion__input"
                      type="checkbox"
                      name="sub-group-15"
                      id="sub-group-15"
                    />
                    <label
                      class="cd-accordion__label cd-accordion__label--icon-folder"
                      for="sub-group-15"
                    >
                      <span>DHL ALLEN</span>
                    </label>

                    <ul class="cd-accordion__sub cd-accordion__sub--l2">
                      <li class="cd-accordion__item">
                        <a
                          class="cd-accordion__label cd-accordion__label--icon-img"
                          href="#0"
                        >
                          <span>45 Allen Avenue, ikeja</span>
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li class="cd-accordion__item cd-accordion__item--has-children">
                    <input
                      class="cd-accordion__input"
                      type="checkbox"
                      name="sub-group-16"
                      id="sub-group-16"
                    />
                    <label
                      class="cd-accordion__label cd-accordion__label--icon-folder"
                      for="sub-group-16"
                    >
                      <span>DHL Badagry</span>
                    </label>

                    <ul class="cd-accordion__sub cd-accordion__sub--l2">
                      <li class="cd-accordion__item">
                        <a
                          class="cd-accordion__label cd-accordion__label--icon-img"
                          href="#0"
                        >
                          <span>
                            KM 26, Lagos Badagry Expressway, Alafia bus stop,
                            adjacent FGC, Ijanikin
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li class="cd-accordion__item cd-accordion__item--has-children">
                <input
                  class="cd-accordion__input"
                  type="checkbox"
                  name="group-2"
                  id="group-2"
                />
                <label
                  class="cd-accordion__label cd-accordion__label--icon-folder"
                  for="group-2"
                >
                  <span>Abuja</span>
                </label>

                <ul class="cd-accordion__sub cd-accordion__sub--l1">
                  <li class="cd-accordion__item cd-accordion__item--has-children">
                    <input
                      class="cd-accordion__input"
                      type="checkbox"
                      name="sub-group-17"
                      id="sub-group-17"
                    />
                    <label
                      class="cd-accordion__label cd-accordion__label--icon-folder"
                      for="sub-group-17"
                    >
                      <span>DHL HERITAGE HOUSE</span>
                    </label>

                    <ul class="cd-accordion__sub cd-accordion__sub--l2">
                      <li class="cd-accordion__item">
                        <a
                          class="cd-accordion__label cd-accordion__label--icon-img"
                          href="#0"
                        >
                          <span>
                            Plot 2201 Sultan Abubakar way, Wuze zone 3, Abuja
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <ul class="cd-accordion__sub cd-accordion__sub--l1">
                  <li class="cd-accordion__item cd-accordion__item--has-children">
                    <input
                      class="cd-accordion__input"
                      type="checkbox"
                      name="sub-group-18"
                      id="sub-group-18"
                    />
                    <label
                      class="cd-accordion__label cd-accordion__label--icon-folder"
                      for="sub-group-18"
                    >
                      <span>DHL GARIKI</span>
                    </label>

                    <ul class="cd-accordion__sub cd-accordion__sub--l2">
                      <li class="cd-accordion__item">
                        <a
                          class="cd-accordion__label cd-accordion__label--icon-img"
                          href="#0"
                        >
                          <span>
                            N0 1 Abeokuta street, Area 8,Gariki Abuja.
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>

                <ul class="cd-accordion__sub cd-accordion__sub--l1">
                  <li class="cd-accordion__item cd-accordion__item--has-children">
                    <input
                      class="cd-accordion__input"
                      type="checkbox"
                      name="sub-group-19"
                      id="sub-group-19"
                    />
                    <label
                      class="cd-accordion__label cd-accordion__label--icon-folder"
                      for="sub-group-19"
                    >
                      <span>DHL WUZE 2</span>
                    </label>

                    <ul class="cd-accordion__sub cd-accordion__sub--l2">
                      <li class="cd-accordion__item">
                        <a
                          class="cd-accordion__label cd-accordion__label--icon-img"
                          href="#0"
                        >
                          <span>
                            79 Ademola Adetokunbo street. Wuze 2 Abuja
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <ul class="cd-accordion__sub cd-accordion__sub--l1">
                  <li class="cd-accordion__item cd-accordion__item--has-children">
                    <input
                      class="cd-accordion__input"
                      type="checkbox"
                      name="sub-group-20"
                      id="sub-group-20"
                    />
                    <label
                      class="cd-accordion__label cd-accordion__label--icon-folder"
                      for="sub-group-20"
                    >
                      <span>DHL HAFSAT PLAZA</span>
                    </label>

                    <ul class="cd-accordion__sub cd-accordion__sub--l2">
                      <li class="cd-accordion__item">
                        <a
                          class="cd-accordion__label cd-accordion__label--icon-img"
                          href="#0"
                        >
                          <span>
                            Constitution Avenue, Central Business district
                            Abuja.
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li class="cd-accordion__item cd-accordion__item--has-children">
                <input
                  class="cd-accordion__input"
                  type="checkbox"
                  name="group-3"
                  id="group-3"
                />
                <label
                  class="cd-accordion__label cd-accordion__label--icon-folder"
                  for="group-3"
                >
                  <span>Other Locations</span>
                </label>

                <ul class="cd-accordion__sub cd-accordion__sub--l1">
                  <li class="cd-accordion__item cd-accordion__item--has-children">
                    <input
                      class="cd-accordion__input"
                      type="checkbox"
                      name="sub-group-21"
                      id="sub-group-21"
                    />
                    <label
                      class="cd-accordion__label cd-accordion__label--icon-folder"
                      for="sub-group-21"
                    >
                      <span>DHL IBADAN</span>
                    </label>

                    <ul class="cd-accordion__sub cd-accordion__sub--l2">
                      <li class="cd-accordion__item">
                        <a
                          class="cd-accordion__label cd-accordion__label--icon-img"
                          href="#0"
                        >
                          <span>
                          47 Ring road, Ibadan
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>

                <ul class="cd-accordion__sub cd-accordion__sub--l1">
                  <li class="cd-accordion__item cd-accordion__item--has-children">
                    <input
                      class="cd-accordion__input"
                      type="checkbox"
                      name="sub-group-22"
                      id="sub-group-22"
                    />
                    <label
                      class="cd-accordion__label cd-accordion__label--icon-folder"
                      for="sub-group-22"
                    >
                      <span>DHL Kano</span>
                    </label>

                    <ul class="cd-accordion__sub cd-accordion__sub--l2">
                      <li class="cd-accordion__item">
                        <a
                          class="cd-accordion__label cd-accordion__label--icon-img"
                          href="#0"
                        >
                          <span>
                          139, Murtala Mohammed Way, Kano
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>

                <ul class="cd-accordion__sub cd-accordion__sub--l1">
                  <li class="cd-accordion__item cd-accordion__item--has-children">
                    <input
                      class="cd-accordion__input"
                      type="checkbox"
                      name="sub-group-23"
                      id="sub-group-23"
                    />
                    <label
                      class="cd-accordion__label cd-accordion__label--icon-folder"
                      for="sub-group-23"
                    >
                      <span>DHL Katsina</span>
                    </label>

                    <ul class="cd-accordion__sub cd-accordion__sub--l2">
                      <li class="cd-accordion__item">
                        <a
                          class="cd-accordion__label cd-accordion__label--icon-img"
                          href="#0"
                        >
                          <span>
                          2, IBB Way, Kofar Kaura, Katsina
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>

                <ul class="cd-accordion__sub cd-accordion__sub--l1">
                  <li class="cd-accordion__item cd-accordion__item--has-children">
                    <input
                      class="cd-accordion__input"
                      type="checkbox"
                      name="sub-group-24"
                      id="sub-group-24"
                    />
                    <label
                      class="cd-accordion__label cd-accordion__label--icon-folder"
                      for="sub-group-24"
                    >
                      <span>DHL Jos</span>
                    </label>

                    <ul class="cd-accordion__sub cd-accordion__sub--l2">
                      <li class="cd-accordion__item">
                        <a
                          class="cd-accordion__label cd-accordion__label--icon-img"
                          href="#0"
                        >
                          <span>
                          23, Rwangpam Street, Jos
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>


                <ul class="cd-accordion__sub cd-accordion__sub--l1">
                  <li class="cd-accordion__item cd-accordion__item--has-children">
                    <input
                      class="cd-accordion__input"
                      type="checkbox"
                      name="sub-group-25"
                      id="sub-group-25"
                    />
                    <label
                      class="cd-accordion__label cd-accordion__label--icon-folder"
                      for="sub-group-25"
                    >
                      <span>DHL Sokoto</span>
                    </label>

                    <ul class="cd-accordion__sub cd-accordion__sub--l2">
                      <li class="cd-accordion__item">
                        <a
                          class="cd-accordion__label cd-accordion__label--icon-img"
                          href="#0"
                        >
                          <span>
                          16, Abdullahi Fodio, Sokoto
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>

                <ul class="cd-accordion__sub cd-accordion__sub--l1">
                  <li class="cd-accordion__item cd-accordion__item--has-children">
                    <input
                      class="cd-accordion__input"
                      type="checkbox"
                      name="sub-group-26"
                      id="sub-group-26"
                    />
                    <label
                      class="cd-accordion__label cd-accordion__label--icon-folder"
                      for="sub-group-26"
                    >
                      <span>DHL Bauchi</span>
                    </label>

                    <ul class="cd-accordion__sub cd-accordion__sub--l2">
                      <li class="cd-accordion__item">
                        <a
                          class="cd-accordion__label cd-accordion__label--icon-img"
                          href="#0"
                        >
                          <span>
                          6, Yandoka Road, beside Total Filling Station, Bauchi
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>

                <ul class="cd-accordion__sub cd-accordion__sub--l1">
                  <li class="cd-accordion__item cd-accordion__item--has-children">
                    <input
                      class="cd-accordion__input"
                      type="checkbox"
                      name="sub-group-27"
                      id="sub-group-27"
                    />
                    <label
                      class="cd-accordion__label cd-accordion__label--icon-folder"
                      for="sub-group-27"
                    >
                      <span>DHL Gombe</span>
                    </label>

                    <ul class="cd-accordion__sub cd-accordion__sub--l2">
                      <li class="cd-accordion__item">
                        <a
                          class="cd-accordion__label cd-accordion__label--icon-img"
                          href="#0"
                        >
                          <span>
                          Jakadafare Street, Opp PDP Office by Govt House junction Gombe. 
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>


                <ul class="cd-accordion__sub cd-accordion__sub--l1">
                  <li class="cd-accordion__item cd-accordion__item--has-children">
                    <input
                      class="cd-accordion__input"
                      type="checkbox"
                      name="sub-group-28"
                      id="sub-group-28"
                    />
                    <label
                      class="cd-accordion__label cd-accordion__label--icon-folder"
                      for="sub-group-28"
                    >
                      <span>DHL Yola</span>
                    </label>

                    <ul class="cd-accordion__sub cd-accordion__sub--l2">
                      <li class="cd-accordion__item">
                        <a
                          class="cd-accordion__label cd-accordion__label--icon-img"
                          href="#0"
                        >
                          <span>
                          83, Mohammed Mustapha Way,  Nasarawo jimeta Yola                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>



              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
