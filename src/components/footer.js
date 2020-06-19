import React from "react";
import "../css/footer.css";
import cross_icon from "../images/cross-icon.png";
import apple_store from "../images/apple_store.png";
import google_play from "../images/google_play.png";
import footer_logo from "../images/footer_logo.png";
import { Link } from "gatsby";

export default ({ data }) => {
  return (
    <div className="footer-background">
      <div className="container">
        <div className="row footer-row hidden-xs">
          <div className="width_20 footer-column-alignment">
            <h4 className="footer-header">PRODUCT</h4>
            <div>
              <Link to="features/overview" className="footer-items">
                {" "}
                Features{" "}
              </Link>
            </div>
            <div>
              <a href="#" className="footer-items">
                Integrations
              </a>
            </div>
            <div>
              <Link to="pricing" className="footer-items">
                {" "}
                Pricing{" "}
              </Link>
            </div>
            <div>
              <a href="#" className="footer-items">
                Extensions
              </a>
            </div>
          </div>
          <div className="width_20 footer-column-alignment">
            <h4 className="footer-header">COMPANY</h4>
            <div>
              <a href="#" className="footer-items">
                Team
              </a>
            </div>
            <div>
              <a href="#" className="footer-items">
                Careers
              </a>
            </div>
            <div>
              <a href="#" className="footer-items">
                Terms of Service
              </a>
            </div>
            <div>
              <a href="#" className="footer-items">
                Privacy Policy
              </a>
            </div>
          </div>
          <div className="width_20 footer-column-alignment">
            <h4 className="footer-header">SUPPORT</h4>
            <div>
              <a href="#" className="footer-items">
                Help Docs
              </a>
            </div>
            <div>
              <a href="#" className="footer-items">
                Developers
              </a>
            </div>
            <div>
              <a href="#" className="footer-items">
                Best Practices
              </a>
            </div>
            <div>
              <a href="#" className="footer-items">
                Status
              </a>
            </div>
          </div>
          <div className="width_20 footer-column-alignment">
            <h4 className="footer-header">RESOURCES</h4>
            <div>
              <a href="https://blog.supportgenie.io/" className="footer-items">
                Blog
              </a>
            </div>
            <div>
              <a href="#" className="footer-items">
                Press Resources
              </a>
            </div>
            <div>
              <a href="#" className="footer-items">
                Customers
              </a>
            </div>
          </div>
          <div className="width_20 footer-column-alignment">
            <h4 className="footer-header">CONTACT</h4>
            <div>
              <a href="mailto:desk@supportgenie.io" className="footer-items">
                contact@supportgenie.io
              </a>
            </div>
            <div>
              <a href="#" className="footer-items">
                {" "}
                + 1 (415) 305 4541
              </a>
            </div>
            <div>
              <ul className="social_links">
                <li>
                  <a href="https://twitter.com/supportgenie/">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="https://facebook.com/supportgenie/">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com/company/supportgenie/">
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/supportgenie/">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*Mobile Footer */}
        <div className="row footer-row visible-xs">
          <div className="panel-group " id="accordion">
            <div className="width_20 footer-column-alignment panel panel-default">
              <div className="panel-heading">
                <h4 className="footer-header">
                  <a
                    className="accordion-toggle"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseOne"
                  >
                    PRODUCT
                    <img src={cross_icon} alt="cross-icon"></img>
                    <i className="fa" aria-hidden="true"></i>
                  </a>
                </h4>
              </div>
              <div id="collapseOne" className="panel-collapse collapse in">
                <div className="panel-body">
                  <div>
                    <a routerLink="features/overview" className="footer-items">
                      Features
                    </a>
                  </div>
                  <div>
                    <a href="#" className="footer-items">
                      Integrations
                    </a>
                  </div>
                  <div>
                    <a routerLink="pricing" className="footer-items">
                      Pricing
                    </a>
                  </div>
                  <div>
                    <a href="#" className="footer-items">
                      Extensions
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="width_20 footer-column-alignment panel panel-default">
              <div className="panel-heading">
                <h4 className="footer-header">
                  <a
                    className="accordion-toggle"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseTwo"
                  >
                    COMPANY
                    <img src={cross_icon} alt="cross-icon"></img>
                    <i className="fa" aria-hidden="true"></i>
                  </a>
                </h4>
              </div>
              <div id="collapseTwo" className="panel-collapse collapse">
                <div className="panel-body">
                  <div>
                    <a href="#" className="footer-items">
                      Team
                    </a>
                  </div>
                  <div>
                    <a href="#" className="footer-items">
                      Careers
                    </a>
                  </div>
                  <div>
                    <a href="#" className="footer-items">
                      Terms of Service
                    </a>
                  </div>
                  <div>
                    <a href="#" className="footer-items">
                      Privacy Policy
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="width_20 footer-column-alignment panel panel-default">
              <div className="panel-heading">
                <h4 className="footer-header">
                  <a
                    className="accordion-toggle"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseThree"
                  >
                    SUPPORT
                    <img src={cross_icon} alt="cross-icon"></img>
                    <i className="fa" aria-hidden="true"></i>
                  </a>
                </h4>
              </div>
              <div id="collapseThree" className="panel-collapse collapse">
                <div className="panel-body">
                  <div>
                    <a href="#" className="footer-items">
                      Help Docs
                    </a>
                  </div>
                  <div>
                    <a href="#" className="footer-items">
                      Developers
                    </a>
                  </div>
                  <div>
                    <a href="#" className="footer-items">
                      Best Practices
                    </a>
                  </div>
                  <div>
                    <a href="#" className="footer-items">
                      Status
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="width_20 footer-column-alignment panel panel-default">
              <div className="panel-heading">
                <h4 className="footer-header">
                  <a
                    className="accordion-toggle"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseFour"
                  >
                    RESOURCES
                    <img src={cross_icon} alt="cross-icon"></img>
                    <i className="fa" aria-hidden="true"></i>
                  </a>
                </h4>
              </div>
              <div id="collapseFour" className="panel-collapse collapse">
                <div className="panel-body">
                  <div>
                    <a
                      href="https://supportgenie.io/blog/"
                      className="footer-items"
                    >
                      Blog
                    </a>
                  </div>
                  <div>
                    <a href="#" className="footer-items">
                      Press Resources
                    </a>
                  </div>
                  <div>
                    <a href="#" className="footer-items">
                      Customers
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="width_20 footer-column-alignment panel panel-default">
              <div className="panel-heading">
                <h4 className="footer-header">
                  <a
                    className="accordion-toggle"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseFive"
                  >
                    CONTACT
                    <img src={cross_icon} alt="cross-icon"></img>
                    <i className="fa" aria-hidden="true"></i>
                  </a>
                </h4>
              </div>
              <div id="collapseFive" className="panel-collapse collapse">
                <div className="panel-body">
                  <div>
                    <a
                      href="mailto:desk@supportgenie.io"
                      className="footer-items"
                    >
                      desk@supportgenie.io
                    </a>
                  </div>
                  <div>
                    <a href="#" className="footer-items">
                      {" "}
                      +1(234)5678900
                    </a>
                  </div>
                  <div>
                    <ul className="social_links">
                      <li>
                        <a href="#">
                          <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-linkedin" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row footer-row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 section-break">
            {/* <img src="../../../img/line2.png"> */}
          </div>
        </div>
        <div className="row footer-row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <h4 className="footer-header">TAKE SUPPORT GENIE WITH YOU</h4>
            <p className="footer-items small_text">
              Everywhere you go. Download our customer support team app today on
              your smartphone and stay connected with your clients even when
              you're away from your desk.
            </p>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 footer-image-alignment">
            <img src={apple_store} className="apple-store-image"></img>
            <img src={google_play} className="google-play-image"></img>
          </div>
        </div>
        <div className="row footer-last-row hidden-xs hidden-sm">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 footer-left-alignment">
            <img src={footer_logo} className="footer-logo"></img>
            <p className="copyright">
              &copy; Copyright 2020 Support Genie, Inc.
            </p>
          </div>
          <div className="col-lg-6 footer-right-alignment">
            <p className="copyright" style={{ display: "inline" }}>
              Powered by{" "}
              <a href="https://www.supportgenie.io/" className="footer-items">
                Support Genie
              </a>
            </p>
          </div>
        </div>
        {/* <div className="row footer-last-row hidden-md hidden-lg">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 footer-column-alignment">
            <img src={footer_logo} className="footer-logo"></img>
            <p className="copyright">
              &copy; Copyright 2020 Support Genie, Inc.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};
