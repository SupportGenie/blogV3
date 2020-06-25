import React from "react";
import "../css/social.css";
export default (props) => (
  <>
    <div className="addthis_toolbox addthis_32x32_style ">
      <a
        className="addthis_button_facebook"
        id="buttons"
        href="https://facebook.com/supportgenie/"
      ></a>
      <a
        className="addthis_button_twitter"
        id="buttons"
        href="https://twitter.com/supportgenie/"
      ></a>
      <a
        className="addthis_button_email"
        id="buttons"
        href="mailto:desk@supportgenie.io"
      ></a>
      <a
        className="addthis_button_linkedin"
        id="buttons"
        href="https://linkedin.com/company/supportgenie/"
      ></a>
    </div>
    {/* <script
      type="text/javascript"
      src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5ef11b51dc41ef48"
      async="async"
    ></script> */}
  </>
);
