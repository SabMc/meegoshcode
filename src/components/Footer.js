import React from "react";

import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
      <div>
        <h4>
          Contact
          </h4>
          <p>
            Meegosh Code
            <br/>
            Diezestraat 19-2
            <br/>
            1078JM Amsterdam
          </p>
          <p className="legal-numbers">
            kvk: 82899282
            <br/>
            BTW: NL003746808B75
          </p>
        </div>
      <div className="sitemap">
        <h4>Sitemap</h4>
        Home
        <br/>
        Service
        <br/>
        Portfolio
        <br/>
        Contact

      </div>

      </div>
      <div className="copyright-container">
        <p>Copyright © 2022 | built by Meegosh Code</p>
      </div>
    </div>
  );
}

export default Footer;
