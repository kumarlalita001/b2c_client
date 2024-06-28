import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/companyLogo.png";
import linkedInLogo from "../../assets/linkedIn.svg";
import facebookLogo from "../../assets/facebook.svg";
import instagramLogo from "../../assets/instagram.svg";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.Footer}>
      <hr
        style={{
          border: "1px solid gold",
          marginTop: "20px",
          marginBottom: "10px",
        }}
      />
      <div className={styles.footerWrapper}>
        <div className={styles.footerSection}>
          <div className={styles.section1}>
            <h3>About Interns</h3>
            {/* <a href="/home" target="_blank">
              <p>Home</p>
            </a> */}
            <p
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });

                navigate("/");
              }}
            >
              Home
            </p>

            <p
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
                navigate("/privacy-policy");
              }}
            >
              Privacy Policy
            </p>
            {/* <a href="/FAQs">
              <p>FAQ's</p>
            </a> */}

            <p
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
                navigate("/terms-conditions");
              }}
            >
              Terms of Use
            </p>

            <p
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
                navigate("/refund-policy");
              }}
            >
              Refund Policy
            </p>
          </div>

          <div className={styles.section2}>
            <h3>Career Opportunities</h3>
            <div className="flex gap-8">
              <div>
                <p
                  onClick={() => {
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                    navigate("/powerbi");
                  }}
                >
                  Power Bi
                </p>

                <p
                  onClick={() => {
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                    navigate("/tableau");
                  }}
                >
                  Tableau
                </p>
                <p
                  onClick={() => {
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                    navigate("/basicsql");
                  }}
                >
                  Basic SQL
                </p>
              </div>
              <div>
                <p
                  onClick={() => {
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                    navigate("/AdvancedSQL");
                  }}
                >
                  Advanced SQL
                </p>

                <p
                  onClick={() => {
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                    navigate("/GoogleSheets");
                  }}
                >
                  Google Sheets
                </p>

                <p
                  onClick={() => {
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                    navigate("/MS-Excel");
                  }}
                >
                  MS-Excel
                </p>
              </div>
            </div>
          </div>
          <div className={styles.section3}>
            <h3>Explore</h3>
            {/* <a href="/HireFromUs">
              <p>Hire From Us</p>
            </a> */}

            <p
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
                navigate("/HireFromUs");
              }}
            >
              Hire From Us
            </p>

            <a href="mailto:admission@theinterns.org.in">
              <p>Become a Mentor</p>
            </a>
          </div>
        </div>
        {/* <div className={styles.verticalLine1}></div> */}
        <div className={styles.section4}>
          <div className={styles.logo}>
            <img src={logo} alt="company logo" />
          </div>
          <div className={styles.footerLogo}>
            <p>
              The <span style={{ color: "#BFA55B" }}>Interns</span>
            </p>
            <div className={styles.verticalLine}></div>
            <p style={{ fontSize: "24px" }}>Nuturing Students Growth</p>
          </div>
          <div className={styles.mail}>
            <a href="mailto:admission@theinterns.org.in">
              <p>admission@theinterns.org.in</p>
            </a>
          </div>
          <div className={styles.socialMediaIcons}>
            <div className={styles.iconDiv}>
              <a
                href="https://www.linkedin.com/company/theinterns"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={linkedInLogo}
                  alt="LinkedIn logo"
                  className={styles.linkedInLogo}
                  style={{
                    height: "25px",
                    padding: "0px",
                  }}
                />
              </a>
            </div>
            <div className={styles.iconDiv}>
              <a
                href="https://www.facebook.com/people/The-Interns/61556327636790/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img
                  src={facebookLogo}
                  alt="facebook logo"
                  className={styles.facebookLogo}
                  style={{
                    height: "25px",
                    padding: "0px",
                  }}
                />{" "}
              </a>
            </div>
            <div className={styles.iconDiv}>
              <a
                href="https://www.instagram.com/theinternscompany?igsh=MW85amZzeG9wMmdqOQ=="
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={instagramLogo}
                  alt="Instagram logo"
                  className={styles.instagramLogo}
                  style={{
                    height: "25px",
                    padding: "0px",
                  }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <hr style={{ border: "1px solid gold", marginTop: "70px" }} />
      <div className={styles.footerBottom}>
        <p>
          © Copyrights 2024{" "}
          <a href="/" target="_blank">
            The{" "}
            <span style={{ color: "#BFA55B", fontSize: "20px" }}>Interns</span>
          </a>{" "}
          All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
