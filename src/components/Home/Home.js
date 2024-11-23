import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/증사(2).jpg";
import SocialMedia from "../SocialMedia";
import TypeWriter from "./TypeWriter";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={6} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                저는
                <strong className="main-name"> 이선호</strong>
                입니다.
              </h1>

              <p className="heading-description blockquote">
                저는 다양한 웹&앱 프레임워크를 통한 웹과 모바일 앱개발에 열정을 쏟고 있습니다.
                JSP와 Django, Spring 등의 웹 프레임워크를 이용한 웹 개발에 대한 경험을
                쌓고 있으며 Flutter를 이용한 모바일 크로스플랫폼 앱 개발에 대한
                경험 또한 가지고 있습니다.
              </p>

              <div className="heading-type">
                <TypeWriter />
              </div>
            </Col>

            <Col md={5}>
              <img src={myImg} className="profile-pic" alt="avatar" />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>Contact</h1>
              <SocialMedia />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
