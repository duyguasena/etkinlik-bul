import React from "react";
import "../style/Footer.css";
import fb from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_padding">
        <div className="footer_links">
          <div className="footer_link_div">
            <h4 className="title">Plan Events</h4>

            <p>Create and Set Up</p>

            <p>Online RSVP</p>

            <p>Online Events</p>
          </div>
          <div className="footer_link_div">
            <h4 className="title">Resource center</h4>

            <p>Resource Center</p>

            <p>Testimpntials</p>

            <p>STV</p>
          </div>

          <div className="footer_link_div">
            <h4 className="title">Company</h4>

            <p>About</p>

            <p>Press</p>

            <p>Career</p>
          </div>
          <div className="footer_link_div">
            <h4 className="title">Send message</h4>
            <input className="input" type="text" placeholder="Message..." />
            <br></br>
            <button className="send">SEND</button>
          </div>
          <div className="footer_link_div">
            <h4 className="title">Follow Us</h4>

            <a href="#">
              <p>
                <img width={50} src={fb} />
              </p>
            </a>
            <a href="#">
              <p>
                <img width={50} src={twitter} />
              </p>
            </a>
            <a href="#">
              <p>
                <img width={50} src={instagram} />
              </p>
            </a>
            <a href="#">
              <p>
                <img width={50} src={linkedin} />
              </p>
            </a>
          </div>
        </div>
      </div>
      <hr></hr>

      <div className="footer_below">
        <div className="footer_below_link">
          <div>
            <p>Term condition</p>
          </div>

          <div>
            <p>Privacy</p>
          </div>

          <div>
            <p>Security</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
