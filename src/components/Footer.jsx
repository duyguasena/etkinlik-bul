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
            <h4>Plan Events</h4>
            <a href="/employer">
              <p>Create and Set Up</p>
            </a>
            <a href="/healtplan">
              <p>Online RSVP</p>
            </a>
            <a href="/individual">
              <p>Online Events</p>
            </a>
          </div>
          <div className="footer_link_div">
            <h4>Resource center</h4>
            <a href="/resource">
              <p>Resource Center</p>
            </a>
            <a href="/resource">
              <p>Testimpntials</p>
            </a>
            <a href="/resource">
              <p>STV</p>
            </a>
          </div>

          <div className="footer_link_div">
            <h4>Company</h4>
            <a href="/about">
              <p>About</p>
            </a>
            <a href="/press">
              <p>Press</p>
            </a>
            <a href="/career">
              <p>Career</p>
            </a>
          </div>
          <div className="footer_link_div">
            <h4>Send message</h4>
            <input className="input" type="text" placeholder="Message..." />
            <br></br>
            <button className="send">SEND</button>
          </div>
          <div className="footer_link_div">
            <h4>Follow Us</h4>

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
          <a href="/terms">
            <div>
              <p>Term condition</p>
            </div>
          </a>
          <a href="/privacy">
            <div>
              <p>Privacy</p>
            </div>
          </a>
          <a href="/security">
            <div>
              <p>Security</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
