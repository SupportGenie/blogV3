import React from "react";
import Helmet from "react-helmet";
import "font-awesome/scss/font-awesome.scss";
import Navigation from "../components/Navigation";
import Navbar from '../components/Navigation/Navbar';
import config from "../../data/SiteConfig";
import "./index.scss";
import "./global.scss";
import "../css/navbar.css";
import Footer from "../components/Footer/index";

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      // <Navigation config={config} LocalTitle={this.props.title}>
        <div>
          <Navbar/>
          {/* <Helmet> */}
            <meta name="description" content={config.siteDescription} />
          {/* </Helmet> */}
          {children}
          <Footer/>
        </div>
      // </Navigation>
    );
  }
}
