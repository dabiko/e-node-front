import React, { Component } from "react"
import { Link } from "react-router-dom"

class Home extends Component {
  render() {
    return (
      <>
        <section className={"home-wrapper-1 py-5"}>
          <div className={"container-xxl"}>
            <div className={"row"}>
              <div className={"col-6"}>
                <div className={"main-banner position-relative p-3"}>
                  <img
                    className={"img-fluid rounded-3"}
                    src={"images/main-banner.jpg"}
                    alt={"main banner"}
                  />
                  <div className={"main-banner-content position-absolute"}>
                    <h4>SUPERCHARGED FOR PROS</h4>
                    <h5>Special Sale</h5>
                    <p>
                      From $999.00 or $41.62/mo. <br />
                      for 24 mo. Footnote*
                    </p>
                    <Link to={"/"}>
                      <button className={"glow-on-hover"}>BUY NOW</button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className={"col-6"}>
                <div
                  className={
                    "d-flex flex-wrap justify-content-between align-items-center"
                  }
                >
                  <div className={"small-banner position-relative p-3"}>
                    <img
                      className={"img-fluid rounded-3"}
                      src={"images/cart-banner-01.jpg"}
                      alt={"small banner"}
                    />
                    <div className={"small-banner-content position-absolute"}>
                      <h4>BEST SALE</h4>
                      <h5>Laptops Max</h5>
                      <p>
                        From $999.00 or <br />
                        $41.62/mo.
                      </p>
                    </div>
                  </div>
                  <div className={"small-banner position-relative p-3"}>
                    <img
                      className={"img-fluid rounded-3"}
                      src={"images/cart-banner-02.jpg"}
                      alt={"small banner"}
                    />
                    <div className={"small-banner-content position-absolute"}>
                      <h4>New Arrival</h4>
                      <h5>BUY IPad Air</h5>
                      <p>
                        From $999.00 or <br />
                        $41.62/mo.
                      </p>
                    </div>
                  </div>
                  <div className={"small-banner position-relative p-3"}>
                    <img
                      className={"img-fluid rounded-3"}
                      src={"images/cart-banner-03.jpg"}
                      alt={"small banner"}
                    />
                    <div className={"small-banner-content position-absolute"}>
                      <h4>15% OFF</h4>
                      <h5>Smartwatch 7</h5>
                      <p>
                        Shop the lates band <br />
                        style and colors*
                      </p>
                    </div>
                  </div>
                  <div className={"small-banner position-relative p-3"}>
                    <img
                      className={"img-fluid rounded-3"}
                      src={"images/cart-banner-04.jpg"}
                      alt={"small banner"}
                    />
                    <div className={"small-banner-content position-absolute"}>
                      <h4>FREE ENGRAVING</h4>
                      <h5>AirPods Max</h5>
                      <p>
                        High-fidelity playback & <br />
                        ultra-low distortion
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={"home-wrapper-2 py-5"}>
          <div className={"container-xxl"}>
            <div className={"row"}>
              <div className={"col-12"}>
                <div
                  className={
                    "services d-flex align-items-center justify-content-between"
                  }
                >
                  <div className={"d-flex align-items-center gap-15"}>
                    <img src={"images/service.png"} alt={"service"} />
                    <div className={""}>
                      <h6>Free Shipping</h6>
                      <p className={"mb-0"}>From all orders over $500</p>
                    </div>
                  </div>
                  <div className={"d-flex align-items-center gap-15"}>
                    <img src={"images/service-02.png"} alt={"service"} />
                    <div className={""}>
                      <h6>Daily Surprise Offers</h6>
                      <p className={"mb-0"}>Save up to 25% off</p>
                    </div>
                  </div>
                  <div className={"d-flex align-items-center gap-15"}>
                    <img src={"images/service-03.png"} alt={"service"} />
                    <div className={""}>
                      <h6>Support 24/7</h6>
                      <p className={"mb-0"}>Shop with an expert</p>
                    </div>
                  </div>
                  <div className={"d-flex align-items-center gap-15"}>
                    <img src={"images/service-04.png"} alt={"service"} />
                    <div className={""}>
                      <h6>Affordable Prices</h6>
                      <p className={"mb-0"}>Get factory direct prices</p>
                    </div>
                  </div>
                  <div className={"d-flex align-items-center gap-15"}>
                    <img src={"images/service-05.png"} alt={"service"} />
                    <div className={""}>
                      <h6>Secure Payments</h6>
                      <p className={"mb-0"}>100% protected payments</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={"home-wrapper-2 py-5"}>
          <div className={"container-xxl"}>
            <div className={"row"}>
              <div className={"col-12"}>
                <div
                  className={
                    "categories d-flex justify-content-between flex-wrap align-items-center"
                  }
                >
                  <div className={"d-flex gap-8 align-items-center"}>
                    <div>
                      <h6>Smart Devices</h6>
                      <p>12 items</p>
                    </div>
                    <img src={"images/camera.jpg"} alt={""} />
                  </div>
                  <div className={"d-flex gap-8 align-items-center"}>
                    <div>
                      <h6>Smart Devices</h6>
                      <p>12 items</p>
                    </div>
                    <img src={"images/speaker.jpg"} alt={""} />
                  </div>
                  <div className={"d-flex gap-8 align-items-center"}>
                    <div>
                      <h6>Smart Devices</h6>
                      <p>12 items</p>
                    </div>
                    <img src={"images/tv.jpg"} alt={""} />
                  </div>
                  <div className={"d-flex gap-8 align-items-center"}>
                    <div>
                      <h6>Smart Devices</h6>
                      <p>12 items</p>
                    </div>
                    <img src={"images/headphone.jpg"} alt={""} />
                  </div>
                  <div className={"d-flex gap-8 align-items-center"}>
                    <div>
                      <h6>Smart Devices</h6>
                      <p>12 items</p>
                    </div>
                    <img src={"images/camera.jpg"} alt={""} />
                  </div>
                  <div className={"d-flex gap-8 align-items-center"}>
                    <div>
                      <h6>Smart Devices</h6>
                      <p>12 items</p>
                    </div>
                    <img src={"images/speaker.jpg"} alt={""} />
                  </div>
                  <div className={"d-flex gap-8 align-items-center"}>
                    <div>
                      <h6>Smart Devices</h6>
                      <p>12 items</p>
                    </div>
                    <img src={"images/tv.jpg"} alt={""} />
                  </div>
                  <div className={"d-flex gap-8 align-items-center"}>
                    <div>
                      <h6>Smart Devices</h6>
                      <p>12 items</p>
                    </div>
                    <img src={"images/headphone.jpg"} alt={""} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default Home
