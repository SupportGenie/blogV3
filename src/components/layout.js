import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Navigation from "../components/navigation";
import "prismjs/themes/prism-okaidia.css";
import Footer from "./footer";
import Navbar from "./navbar";
export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );
  return (
    <>
      <Navbar />
      <div className="site-wrapper">
        <header className="site-header">
          <div className="site-title">
            <Link to="/">{data.site.siteMetadata.title}</Link>
          </div>
          <Navigation />
        </header>
        {children}
        {/* <footer className="site-footer">
        <p>
          &copy; {new Date().getFullYear()} Delog &bull; Crafted with{" "}
          <span role="img" aria-label="love">
            ❤️
          </span>{" "}
          by <a href="https://w3layouts.com">W3Layouts</a>
        </p>
      </footer> */}
      </div>
      {/* <a className="addthis_button_facebook"></a>
      <a className="addthis_button_twitter"></a>
      <a className="addthis_button_email"></a>
      <a className="addthis_button_linkedin"></a>
      */}
      <Footer />
    </>
  );
};
