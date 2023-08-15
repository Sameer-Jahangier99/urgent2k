/* eslint-disable @next/next/no-img-element */
"use client";
import React, { FC } from "react";
import Link from "next/link";

import Navbar from "react-bootstrap/Navbar";

// Styles
import styles from "@/styles/common/layout/public/header.module.css";

const Header: FC = () => {
  return (
    <Navbar expand="lg" className="container-wide">
        <Navbar.Brand href="#home">
          <img src="/logo.png" alt="Logo" className={styles.headerLogo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="ms-3 w-100 d-flex justify-content-between align-items-center">
            <div>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item px-3">
                  <Link legacyBehavior href={"/"} className={styles.headerLink}>
                    <a id="home" className={styles.headerLinkText}>
                      Home
                    </a>
                  </Link>
                </li>
                <li className="nav-item  px-3">
                  <Link
                    legacyBehavior
                    href={"/about"}
                    className={styles.headerLink}
                  >
                    <a id="about" className={styles.headerLinkText}>
                      About
                    </a>
                  </Link>
                </li>
                <li className="nav-item px-3">
                  <Link
                    legacyBehavior
                    href={"/services"}
                    className={styles.headerLink}
                  >
                    <a id="services" className={styles.headerLinkText}>
                      Services
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <button
                type="button"
                className={`${styles.registerBtn} px-4 py-2`}
              >
                REGISTER
              </button>
            </div>
          </div>
        </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
