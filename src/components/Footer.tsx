import React, { Component } from "react"
import { Link } from "react-router-dom"
import { BsLinkedin, BsYoutube, BsInstagram, BsFacebook } from "react-icons/bs"
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaCcPaypal,
  FaCcDiscover,
  FaCcDinersClub,
} from "react-icons/fa"

class Footer extends Component {
  render() {
    return (
      <>
        <footer className={"py-5"}>
          <div className={"container-xxl"}>
            <div className={"row"}>
              <div className={"col-5"}>
                <div className={"newsletter d-flex gap-30 align-items-center"}>
                  <img src={"images/newsletter.png"} alt={"subscribe"} />
                  <h2 className={"mb-0 text-white"}>Sign Up for Newsletter</h2>
                </div>
              </div>
              <div className={"col-7"}>
                <div className={"input-group"}>
                  <input
                    type={"text"}
                    className={"form-control py-2"}
                    placeholder={"Your email"}
                    aria-label={"Your email"}
                    aria-describedby={"basic-addon2"}
                  />
                  <button
                    className={"subscribe-btn input-group-text pt-2"}
                    id={"basic-addon2"}
                    type={"button"}
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <footer className={"py-3"}>
          <div className={"container-xxl"}>
            <div className={"row"}>
              <div className={"col-3"}>
                <h5 className={"text-white mb-4"}>Contact Us</h5>
                <div>
                  <p className={"text-white mb-3"}>
                    Dabi Store <br />
                    No. 1259 Freedom, New York, 11 <br />
                    Makepe
                  </p>
                  <a className={"text-white mb-3"} href={"tel: +237676113189"}>
                    +237 676 113 189
                  </a>
                  <a
                    className={"text-white mb-3"}
                    href={": mailto:dabiko.blaise@gmail.com"}
                  >
                    dabiko.blaise@gmail.com
                  </a>
                  <div
                    className={
                      "social-icons d-flex flex-row align-items-center gap-15"
                    }
                  >
                    <a className={"text-white"} href={"/"}>
                      <BsFacebook className={"fs-2"} />
                    </a>
                    <a className={"text-white"} href={"/"}>
                      <BsInstagram className={"fs-2"} />
                    </a>
                    <a className={"text-white"} href={"/"}>
                      <BsLinkedin className={"fs-2"} />
                    </a>
                    <a className={"text-white"} href={"/"}>
                      <BsYoutube className={"fs-2"} />
                    </a>
                  </div>
                </div>
              </div>
              <div className={"col-2"}>
                <h5 className={"text-white mb-4"}>Information</h5>
                <div className={"footer-links d-flex flex-column"}>
                  <Link className={"text-white mb-3"} to={""}>
                    Privacy Policy
                  </Link>
                  <Link className={"text-white mb-3"} to={""}>
                    Refund Policy
                  </Link>
                  <Link className={"text-white mb-3"} to={""}>
                    Shopping Policy
                  </Link>
                  <Link className={"text-white mb-3"} to={""}>
                    Teams of Service
                  </Link>
                  <Link className={"text-white mb-3"} to={""}>
                    Blogs
                  </Link>
                </div>
              </div>
              <div className={"col-2"}>
                <h5 className={"text-white mb-4"}>Account</h5>
                <div className={"footer-links d-flex flex-column"}>
                  <Link className={"text-white mb-3"} to={""}>
                    Search
                  </Link>
                  <Link className={"text-white mb-3"} to={""}>
                    About Us
                  </Link>
                  <Link className={"text-white mb-3"} to={""}>
                    Faq
                  </Link>
                  <Link className={"text-white mb-3"} to={""}>
                    Contact
                  </Link>
                  <Link className={"text-white mb-3"} to={""}>
                    size chart
                  </Link>
                </div>
              </div>
              <div className={"col-2"}>
                <h5 className={"text-white mb-4"}>Quick Links</h5>
                <div className={"footer-links d-flex flex-column"}>
                  <Link className={"text-white mb-3"} to={""}>
                    Laptops
                  </Link>
                  <Link className={"text-white mb-3"} to={""}>
                    Accessories
                  </Link>
                  <Link className={"text-white mb-3"} to={""}>
                    Headphones
                  </Link>
                  <Link className={"text-white mb-3"} to={""}>
                    Smart Watches
                  </Link>
                  <Link className={"text-white mb-3"} to={""}>
                    Tablets
                  </Link>
                </div>
              </div>
              <div className={"col-3"}>
                <h5 className={"text-white mb-4"}>Our App</h5>
                <div>
                  <p className={"text-white mb-3"}>
                    Download our App and get extra <b>15% Discount</b> on your
                    first Order
                  </p>
                  <span className={"app-span d-flex align-items-center"}>
                    <a href={"/"}>
                      <img
                        className={"app-buttons"}
                        src={"images/google-play.png"}
                        alt={"Google Play"}
                      />
                    </a>
                    <a href={"/"}>
                      <img
                        className={"app-buttons"}
                        src={"images/app-store.png"}
                        alt={"App Store"}
                      />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <footer className={"py-3"}>
          <div className={"container-xxl"}>
            <div className={"row"}>
              <div className={"col-6"}>
                <p className={"text-left mb-0 text-white text-start"}>
                  &copy; {new Date().getFullYear()}, Powered by DabiTech Inc.
                </p>
              </div>
              <div className={"col-6"}>
                <div
                  className={"payment-icons d-flex align-items-center gap-15"}
                >
                  <a className={"text-white"} href={"/"}>
                    <FaCcVisa className={"fs-2"} />
                  </a>
                  <a className={"text-white"} href={"/"}>
                    <FaCcMastercard className={"fs-2"} />
                  </a>
                  <a className={"text-white"} href={"/"}>
                    <FaCcAmex className={"fs-2"} />
                  </a>
                  <a className={"text-white"} href={"/"}>
                    <FaCcPaypal className={"fs-2"} />
                  </a>
                  <a className={"text-white"} href={"/"}>
                    <FaCcDiscover className={"fs-2"} />
                  </a>
                  <a className={"text-white"} href={"/"}>
                    <FaCcDinersClub className={"fs-2"} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    )
  }
}

export default Footer
