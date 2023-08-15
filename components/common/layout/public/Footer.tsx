/* eslint-disable @next/next/no-img-element */
"use client";
import React, { FC } from "react";
import Link from "next/link";
import * as yup from "yup";

// Styles
import styles from "@/styles/common/layout/public/footer.module.css";

// Components
import FormikChatInputField from "@/shared/NewsLetterForm";

const Footer: FC = () => {
  //  Validation Schema
  const chatValidationSchema = yup.object({
    email: yup.string().required("Required").email("Invalid email"),
  });

  return (
    <footer className={`${styles.footerMainContainer} container-wide py-4`}>
      <div className="row">
        <div className="col-md-12">
          <div className="d-flex align-items-center justify-content-between flex-wrap">
            <img
              src="/footer-logo.png"
              alt="Logo"
              className={`${styles.footerLogo} cursor-pointer`}
            />
            <div className="d-flex">
              <img
                src="icons/behance-icon.png"
                alt="social-icon"
                className="cursor-pointer me-2"
              />
              <img
                src="icons/facebook-icon.png"
                alt="social-icon"
                className="cursor-pointer mx-2"
              />
              <img
                src="icons/twitter-icon.png"
                alt="social-icon"
                className="cursor-pointer mx-2"
              />
              <img
                src="icons/youtube-icon.png"
                alt="social-icon"
                className="cursor-pointer mx-2"
              />
            </div>
          </div>
          <hr className={styles.footerDivider} />
        </div>
        <div className="col-md-2 col-sm-6">
          <h6 className={styles?.footerLinkTitle}>ABOUT US</h6>
          <p className={`${styles?.footerLinkText} m-0`}>
            Lorem ipsum dolor sit
          </p>
          <p className={`${styles?.footerLinkText} m-0`}>
            Lorem ipsum dolor sit
          </p>{" "}
          <p className={`${styles?.footerLinkText} m-0`}>
            Lorem ipsum dolor sit
          </p>{" "}
          <p className={`${styles?.footerLinkText} m-0`}>
            Lorem ipsum dolor sit
          </p>
          <p className={`${styles?.footerLinkText} m-0`}>Privacy & Policy</p>
        </div>
        <div className="col-md-2 col-sm-6">
          <h6 className={styles?.footerLinkTitle}>SUPPORT US</h6>
          <p className={`${styles?.footerLinkText} m-0`}>
            Lorem ipsum dolor sit
          </p>
          <p className={`${styles?.footerLinkText} m-0`}>
            Lorem ipsum dolor sit
          </p>{" "}
          <p className={`${styles?.footerLinkText} m-0`}>
            Lorem ipsum dolor sit
          </p>{" "}
          <p className={`${styles?.footerLinkText} m-0`}>
            Lorem ipsum dolor sit
          </p>
          <p className={`${styles?.footerLinkText} m-0`}>Privacy & Policy</p>
        </div>
        <div className="col-md-3 d-flex flex-column col-sm-6">
          <h6 className={styles?.footerLinkTitle}>QUICK LINKS</h6>

          <Link legacyBehavior href={"/"} className={styles.footerLink}>
            <a id="about" className={styles.footerLinkText}>
              Home
            </a>
          </Link>

          <Link legacyBehavior href={"/"} className={styles.footerLink}>
            <a id="about" className={styles.footerLinkText}>
              About Us
            </a>
          </Link>
          <Link legacyBehavior href={"/"} className={styles.footerLink}>
            <a id="about" className={styles.footerLinkText}>
              Contact Us
            </a>
          </Link>
          <Link legacyBehavior href={"/"} className={styles.footerLink}>
            <a id="about" className={styles.footerLinkText}>
              Blog
            </a>
          </Link>
          <Link legacyBehavior href={"/"} className={styles.footerLink}>
            <a id="about" className={styles.footerLinkText}>
              Lorem Ipsum
            </a>
          </Link>
        </div>

        <div className="col-md-5">
          <h6 className={styles?.footerLinkTitle}>NEWS LETTER</h6>

          <FormikChatInputField />
        </div>

        <div className="col-md-12">
          <hr className={styles.footerDivider} />
          <div className="d-flex align-items-center justify-content-between">
            <p className={styles.footerCopyRightText}>
              Copyright@example 2023 all right receved
            </p>
            <div className="d-flex align-items-center">
              <p className={`${styles.footerCopyRightText} m-0 `}>SCROLL TOP</p>
              <div className="mx-2">
                <div className={`${styles.scrollTopIconContainer}`}>
                  <img
                    src="icons/arrowUp.png"
                    alt="Logo"
                    className={` cursor-pointer p-3`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
