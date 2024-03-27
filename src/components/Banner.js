import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "AI Artist",
    "Prompt Engineer",
    "Software Engineer",
    "Freelancer",
  ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <a
                    href="https://www.fiverr.com/nikhillokare?up_rollout=true"
                    className="tagline"
                    target="_blank"
                  >
                    Hire Me On Fiverr
                  </a>
                  <h1>
                    {`Hi! I'm Nikhil`}{" "}
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ "AI Artist", "Prompt Engineer", "Software Engineer","Freelancer" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    Welcome to my Fiverr profile! I'm a multi-talented
                    professional, experienced in AI art and software
                    engineering. I create captivating digital art and develop
                    AI-powered applications, from chatbots to recommendation
                    systems. With a strong background in freelancing, I'm
                    dedicated to delivering quality work on time, no matter the
                    project size. Let's work together to bring your innovative
                    software ideas and captivating AI-generated artwork to life.
                    Contact me today to make your vision a reality!
                  </p>
                  <button
                    onClick={() =>
                      window.open(
                        "https://drive.google.com/file/d/11kPMjMKohID5IgmF3DVIHAQl3F7K7eCk/view?usp=sharing",
                        "_blank"
                      )
                    }
                  >
                    Download Resume <ArrowRightCircle size={30} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
