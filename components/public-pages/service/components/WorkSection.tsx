"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import style from "@/styles/public-pages/service/service.module.css";

const WorkSection = () => {
  return (
    <section className="off-white-background">
      <Container className="py-5 off-white-background">
        <Row>
          <Col md={2}></Col>
          <Col md={8}>
            <div className="text-center">
              <p className="caption text-grey weight-600">How it work</p>
              <h2 className="weight-700">
                Lorem ipsum dolor sit amet consectetur.
              </h2>
            </div>
          </Col>
          <Col md={2}></Col>
        </Row>
        <Row className="my-5">
          {/* First 3 Cards */}
          <Col className="px-4 my-md-2 my-3" md={4}>
            <Row className="white-background py-lg-5 py-3">
              <Col md={3}>
                <div className="mb-md-0 mb-3">
                  <img
                    className={style?.workSectionCardImage}
                    src="icons/water-bottle.png"
                    alt="No Icon Found"
                  />
                </div>
              </Col>
              <Col md={9}>
                <div>
                  <h6 className="weight-800">Lorem ipsum dolor</h6>
                  <p className=" text-grey weight-500">
                    Lorem ipsum dolor sit amet consectetur.{" "}
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col className="px-4 my-md-2 my-3" md={4}>
            <Row className="white-background py-lg-5 py-3">
              <Col md={3}>
                <div className="mb-md-0 mb-3">
                  <img
                    className={style?.workSectionCardImage}
                    src="icons/book.png"
                    alt="No Icon Found"
                  />
                </div>
              </Col>
              <Col md={9}>
                <div>
                  <h6 className="weight-800">Lorem ipsum dolor</h6>
                  <p className=" text-grey weight-500">
                    Lorem ipsum dolor sit amet consectetur.{" "}
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col className="px-4 my-md-2 my-3" md={4}>
            <Row className="white-background py-lg-5 py-3">
              <Col md={3}>
                <div className="mb-md-0 mb-3">
                  <img
                    className={style?.workSectionCardImage}
                    src="icons/home.png"
                    alt="No Icon Found"
                  />
                </div>
              </Col>
              <Col md={9}>
                <div>
                  <h6 className="weight-800">Lorem ipsum dolor</h6>
                  <p className=" text-grey weight-500">
                    Lorem ipsum dolor sit amet consectetur.{" "}
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
          {/* Second 3 Cards */}
          <Col className="px-4 my-md-2 my-3" md={4}>
            <Row className="white-background py-lg-5 py-3">
              <Col md={3}>
                <div className="mb-md-0 mb-3">
                  <img
                    className={style?.workSectionCardImage}
                    src="icons/world.png"
                    alt="No Icon Found"
                  />
                </div>
              </Col>
              <Col md={9}>
                <div>
                  <h6 className="weight-800">Lorem ipsum dolor</h6>
                  <p className=" text-grey weight-500">
                    Lorem ipsum dolor sit amet consectetur.{" "}
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col className="px-4 my-md-2 my-3" md={4}>
            <Row className="white-background py-lg-5 py-3">
              <Col md={3}>
                <div className="mb-md-0 mb-3">
                  <img
                    className={style?.workSectionCardImage}
                    src="icons/health.png"
                    alt="No Icon Found"
                  />
                </div>
              </Col>
              <Col md={9}>
                <div>
                  <h6 className="weight-800">Lorem ipsum dolor</h6>
                  <p className=" text-grey weight-500">
                    Lorem ipsum dolor sit amet consectetur.{" "}
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col className="px-4 my-md-2 my-3" md={4}>
            <Row className="white-background py-lg-5 py-3">
              <Col md={3}>
                <div className="mb-md-0 mb-3">
                  <img
                    className={style?.workSectionCardImage}
                    src="icons/home.png"
                    alt="No Icon Found"
                  />
                </div>
              </Col>
              <Col md={9}>
                <div>
                  <h6 className="weight-800">Lorem ipsum dolor</h6>
                  <p className=" text-grey weight-500">
                    Lorem ipsum dolor sit amet consectetur.{" "}
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WorkSection;
