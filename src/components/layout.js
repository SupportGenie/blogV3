import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Navigation from "../components/navigation";
import "prismjs/themes/prism-okaidia.css";
import "../css/style.css";
import "../css/navbar.css";

export default ({ children }) => {
  // const data = useStaticQuery(
  //   graphql`
  //     query {
  //       site {
  //         siteMetadata {
  //           title
  //         }
  //       }
  //     }
  //   `
  // );
  return (
    <>
      <Navigation />
      <div className="site-wrapper">
        {/* <header className="site-header"> */}
        {/* <div className="site-title"> */}
        {/* <Link to="/">{data.site.siteMetadata.title}</Link> */}
        {/* </div> */}
        {/* <Navigation /> */}
        {/* </header> */}
        {children}
        <footer className="site-footer">
          <p>
            &copy; {new Date().getFullYear()} &bull; Copyrighted{" "}
            {/* <span role="img" aria-label="love">
              ❤️
            </span>{" "} */}
            by <a href="https://supportgenie.io">SupportGenie</a>
          </p>
        </footer>
      </div>
    </>
  );
};
