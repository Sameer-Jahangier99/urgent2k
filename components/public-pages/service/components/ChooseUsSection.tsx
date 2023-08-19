"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import style from "@/styles/public-pages/service/service.module.css";

const ChooseUsSection = () => {
  return (
    <section className="off-white-background pb-5">
      <Container>
        <Row>
          <Col md={6}>
            <div>
              <img
                className={style.chooseUsImage}
                src="/service/circle.png"
                alt="No Image Found"
              />
            </div>
          </Col>
          <Col md={6}>
            <div>
              <p className="caption text-grey weight-600">Why Choose Us</p>
              <h2 className="weight-700">
                Lorem ipsum dolor sit amet consectetur.
              </h2>
              <p className="subtitle text-grey">
                Lorem ipsum dolor sit amet consectetur. Cursus quisque elit
                sollicitudin aliquet sit. Massa dignissim phasellus id lectus
                sed rutrum elit cras etiam. Sollicitudin hac lobortis sit nunc
                quis gravida commodo. Quis luctus risus eget dolor suspendisse
                suspendisse ridiculus. Risus orci vitae tellus velit eu
                pellentesque urna aenean iaculis.{" "}
              </p>
              <button className={style.blueButton}>Learn more &rarr;</button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ChooseUsSection;
