"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import style from "@/styles/public-pages/service/service.module.css";

const CaseStudy = () => {
  return (
    <section className="off-white-background">
      <Container className="py-md-5 py-4 off-white-background">
        <Row>
          <Col md={2}></Col>
          <Col md={8}>
            <div className="text-center">
              <p className="caption text-grey weight-600">Our Work</p>
              <h2 className="weight-700">Case Study</h2>
            </div>
          </Col>
          <Col md={2}></Col>
        </Row>
        <Row className="pt-md-5 pt-3">
          <Col md={4} className="pb-lg-5 pb-3">
            <div>
              <img
                src="/service/pic2.png"
                className={style.caseStudyImage}
                alt=""
              />
            </div>
          </Col>
          <Col md={4} className="pb-lg-5 pb-3">
            <div>
              <img
                src="/service/pic1.png"
                className={style.caseStudyImage}
                alt=""
              />
            </div>
          </Col>
          <Col md={4} className="pb-lg-5 pb-3">
            <div>
              <img
                src="/service/pic3.png"
                className={style.caseStudyImage}
                alt=""
              />
            </div>
          </Col>
          <Col md={4} className="pb-lg-5 pb-3">
            <div>
              <img
                src="/service/pic1.png"
                className={style.caseStudyImage}
                alt=""
              />
            </div>
          </Col>
          <Col md={4} className="pb-lg-5 pb-3">
            <div>
              <img
                src="/service/pic2.png"
                className={style.caseStudyImage}
                alt=""
              />
            </div>
          </Col>
          <Col md={4} className="pb-lg-5 pb-3">
            <div>
              <img
                src="/service/pic3.png"
                className={style.caseStudyImage}
                alt=""
              />
            </div>
          </Col>
        </Row>
        <div className="text-center">
          <button className={style.blueButton}>See more &rarr;</button>
        </div>
      </Container>
    </section>
  );
};

export default CaseStudy;
