import React from "react";
import "../css/social.css";
import Fb from "../images/fb.png";
import twitter from "../images/twitter.png";
import linkedin from "../images/linkedin.png";
import gmail from "../images/gmail.png";
import insta from "../images/insta.png";
export default (props) => (
  <>
    <div>
      <h3 style={{ textAlign: "center" }}>
        <u>Share us on</u> :-
      </h3>
    </div>
    <div className="addthis_toolbox addthis_32x32_style ">
      <a
        className="addthis_button_facebook"
        id="buttons"
        href="https://facebook.com/supportgenie/"
      >
        <img src={Fb} id="images" />
      </a>
      <a
        className="addthis_button_twitter"
        id="buttons"
        href="https://twitter.com/supportgenie/"
      >
        <img src={twitter} id="images" />
      </a>
      <a
        className="addthis_button_email"
        id="buttons"
        href="mailto:desk@supportgenie.io"
      >
        <img src={gmail} id="images" />
      </a>
      <a
        className="addthis_button_linkedin"
        id="buttons"
        href="https://linkedin.com/company/supportgenie/"
      >
        <img src={linkedin} id="images" />
      </a>
      <a
        className="addthis_button_instagram"
        id="buttons"
        href="https://instagram.com/supportgenie/"
      >
        <img src={insta} id="images" />
      </a>
    </div>
    <script
      type="text/javascript"
      src="//s7.addthis.com/js/300/addthis_widget.js#apubid=ra-5ef11b51dc41ef48"
      async="async"
    ></script>
    <script type="text/javascript">
      addthis.init(); addthis.button(document.getElementById[('buttons')]);
      addthis.toolbox('.addthis_toolbox')
    </script>
  </>
);
