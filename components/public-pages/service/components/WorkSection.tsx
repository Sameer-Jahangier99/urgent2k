"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const WorkSection = () => {
  return (
    <>
      <Container className="py-5">
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
      </Container>
    </>
  );
};

export default WorkSection;
