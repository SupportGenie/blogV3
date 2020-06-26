import React from "react";
import PropTypes from "prop-types";
export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
        <script
          src="https://code.jquery.com/jquery-3.2.1.min.js"
          integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
          crossOrigin="anonymous"
        ></script>
        <script src="https://js.stripe.com/v3/" async></script>
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        {/* <!-- Go to www.addthis.com/dashboard to customize your tools --> */}
        {/* <div className="addthis_toolbox addthis_default_style addthis_32x32_style">
          <a className="addthis_button_facebook"></a>
          <a className="addthis_button_twitter"></a>
          <a className="addthis_button_email"></a>
          <a className="addthis_button_linkedin"></a>
          <a className="addthis_button_compact"></a>
        </div> */}
        <script
          type="text/javascript"
          src="//s7.addthis.com/js/300/addthis_widget.js##async=1&pubid=ra-5ef11b51dc41ef48"
          async="async"
        ></script>
      </body>
    </html>
  );
}
HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
