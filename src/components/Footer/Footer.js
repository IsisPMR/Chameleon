import React from "react";
import "./Footer.css";
import linkedIn from "../../img/icons/in.png";
import instagram from "../../img/icons/instagram.png";
import fb from "../../img/icons/fb.png";
import twitter from "../../img/icons/twitter.png";

class Footer extends React.Component {
  render() {
    return (
      <div className="footerStyle">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5>Chameleon</h5>
              <p>
                The love of sharing, love, crafts, DIY, exercises and recipes!
              </p>
              <p>
                {" "}
                © 2020 Chameleon. ALl rigths Reserved - Powered by IM{" "}
                <a href="https://www.linkedin.com/in/isis-mora-555739179/" target="_blank" rel="noopener noreferrer">
                  <img src={linkedIn} alt="LinkedIn"/>
                </a>
              </p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5>Follow us on:</h5>
              <ul>
                <li>
                  <a href="#!">
                    <img src={twitter} alt="Twitter" />
                  </a>
                  <a href="#!">
                    <img src={instagram} alt="Instagram" />
                  </a>
                  <a href="#!">
                    <img src={fb} alt="Facebook" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
