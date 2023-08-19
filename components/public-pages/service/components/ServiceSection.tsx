"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import style from "@/styles/public-pages/service/service.module.css";

const ServiceSection = () => {
  return (
    <section className="off-white-background">
      <Container className="py-md-5 py-2 off-white-background">
        <Row>
          <Col md={2}></Col>
          <Col md={8}>
            <div className="text-center">
              <p className="caption text-grey weight-600">Our Services</p>
              <h2 className="weight-700">
                Lorem ipsum dolor sit amet consectetur.
              </h2>
            </div>
          </Col>
          <Col md={2}></Col>
        </Row>
        <Row className="my-5">
          <Col md={4}>
            <img
              className={style.serviceSectionImage}
              src="/service/pic1.png"
              alt="No Image Found"
            />
            <div className={style.serviceSectionContainer}>
              <div className={style.serviceSectionImageBox}>
                <h5 className="weight-800 text-dull-black">Services</h5>
                <p className="subtitle text-grey">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
                <button>Learn more &rarr;</button>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <img
              className={style.serviceSectionImage}
              src="/service/pic2.png"
              alt="No Image Found"
            />
            <div className={style.serviceSectionContainer}>
              <div className={style.serviceSectionImageBox}>
                <h5 className="weight-800 text-dull-black">Services</h5>
                <p className="subtitle text-grey">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
                <button>Learn more &rarr;</button>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <img
              className={style.serviceSectionImage}
              src="/service/pic3.png"
              alt="No Image Found"
            />
            <div className={style.serviceSectionContainer}>
              <div className={style.serviceSectionImageBox}>
                <h5 className="weight-800 text-dull-black">Services</h5>
                <p className="subtitle text-grey">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
                <button>Learn more &rarr;</button>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <img
              className={style.serviceSectionImage}
              src="/service/pic1.png"
              alt="No Image Found"
            />
            <div className={style.serviceSectionContainer}>
              <div className={style.serviceSectionImageBox}>
                <h5 className="weight-800 text-dull-black">Services</h5>
                <p className="subtitle text-grey">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
                <button>Learn more &rarr;</button>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <img
              className={style.serviceSectionImage}
              src="/service/pic2.png"
              alt="No Image Found"
            />
            <div className={style.serviceSectionContainer}>
              <div className={style.serviceSectionImageBox}>
                <h5 className="weight-800 text-dull-black">Services</h5>
                <p className="subtitle text-grey">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
                <button>Learn more &rarr;</button>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <img
              className={style.serviceSectionImage}
              src="/service/pic3.png"
              alt="No Image Found"
            />
            <div className={style.serviceSectionContainer}>
              <div className={style.serviceSectionImageBox}>
                <h5 className="weight-800 text-dull-black">Services</h5>
                <p className="subtitle text-grey">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
                <button>Learn more &rarr;</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ServiceSection;
