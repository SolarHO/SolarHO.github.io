import React from "react";
import Card from "react-bootstrap/Card";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            저는 <span className="purple">한국 </span>
            의 웹&앱 개발자 <span className="purple"> 이선호 </span>입니다.
            <br />
            저는 실생활에서 나오는 다양한 아이디어를 구현하여 많은 사람들에게 실질적으로 도움이 되고
            즐거운 경험을 주는 것을 목표로 개발을 하고있습니다.
            <br />
            JSP와 Django, Spring 프레임워크를 이용하여 맞춤형 웹사이트 개발을 통한 경험을 쌓아가고 있으며
            Flutter를 이용한 크로스플랫폼 앱 개발 또한 경험이 있습니다.
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
