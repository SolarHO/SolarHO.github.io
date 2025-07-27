import MEOMEOKJI from "./Assets/Projects/Meomeokji.png";
import DAEDONG from "./Assets/Projects/대동여지도.png";
import FTS from "./Assets/Projects/Java_FTS.png";
import INHATAB from "./Assets/Projects/INHATAB.png";
import Plogging from "./Assets/Projects/Plogging.png";
import Customize_AD from "./Assets/Projects/Customize_AD.png";

//Conteant(프로젝트)
export const PROJECTS = [
  {
    image: MEOMEOKJI,
    name: "MeoMeokJi",
    technologyUsed: "JSP, Javascript, MySQL, AJAX",
    description: "MeoMeokJi(머먹지)는 JSP 기반의 웹 사이트로 사용자의 음식 취향 위시리스트를 반영하여 특정 지역에서의 음식점을 추천하여 네이버 지도 API로 표시해주는 사이트입니다.",
    url: "https://github.com/SolarHO/MeoMeokJi",
  },
  {
    image: DAEDONG,
    name: "대동여지도",
    technologyUsed: "JSP, Javascript, MySQL",
    description: "대동여지도는 JSP 기반의 웹 사이트로 일반적인 여행 기록 게시판 기능에 지도 API를 추가하여 여행한 장소를 지도에 표시하여 나만의 여행 기록 지도를 만들 수 있는 사이트입니다.",
    url: "https://github.com/SolarHO/JSPsideprject",
  },
  {
    image: FTS,
    name: "JavaGUI FTS",
    technologyUsed: "Java, AWS RDS, Swing",
    description: "Java Swing으로 만든 GUI FTS(File Transfer System)으로 서버-클라이언트 TCP/IP 소켓 통신으로 서로 다른 PC에서 파일 전송이 가능하도록 하는 시스템입니다.",
    url: "https://github.com/SolarHO/JavaSwing_FTS",
  },
  {
    image: INHATAB,
    name: "INHATAB",
    technologyUsed: "Flutter, Firebase",
    description: "Flutter로 만든 '인하공업전문대학교' 전용 크로스플랫폼 커뮤니티 모바일 앱으로 시간표, 게시판, 채팅 등의 기능이 구현되어 있습니다.",
    url: "https://github.com/SolarHO/INHATAB",
  },
  {
    image: Plogging,
    name: "Plogging APP",
    technologyUsed: "Android, YOLO, TFLite",
    description: "AI 기반 쓰레기 분류 모델을 이용한 플로깅 활동 기록 앱입니다.",
    url: "https://github.com/IMBLOP/Plogging_App",
  },
  {
    image: Customize_AD,
    name: "성별 맞춤 광고 시스템",
    technologyUsed: "OpenCV, GCS, Django, Raspberry Pi",
    description: "OpenCV기반 성별 구분 AI모델을 이용한 사용자 맞춤 광고 시스템으로 사용자의 성별과, 착용악세사리, 연령대를 판단하여 광고를 노출하는 시스템입니다.",
    url: "https://github.com/SolarHO/inhatc-24-1/tree/main",
  }
];

//사용 기술 스택
export const SKILLS = [
  { name: "JSP", initialRating: 4 },
  { name: "Flutter", initialRating: 4 },
  { name: "android", initialRating: 2},
  { name: "Spring", initialRating: 2 },
  { name: "Django", initialRating: 2 },
  { name: "JavaScript", initialRating: 3 },
  { name: "CSS", initialRating: 3 },
  { name: "MySQL", initialRating: 4 },
  { name: "OracleDB", initialRating: 3 },
  { name: "AWS RDS", initialRating: 3 },
  { name: "Firebase", initialRating: 3 },
  { name: "Git", initialRating: 4 },
];

//사용 가능 툴
export const TOOLS = ["Visual Studio Code", "Eclipse IDE", "Git", "Chrome DevTools", "Npm (Node Package Manager)", "Amazon Web Service" , "FireBase", "Linux",]
