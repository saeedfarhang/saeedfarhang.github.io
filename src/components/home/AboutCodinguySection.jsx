import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
import styled from "styled-components";
import SectionTitle from "../../elements/SectionTitle";
import Typography from "../../elements/Typography";
const Container = styled.div`
  position: relative;
  .acs-text {
    width: 555px;
    margin: 30px 15vw;
    @media screen and (max-width: 725px) {
      width: 400px;
    }
    @media screen and (max-width: 525px) {
      width: 70%;
      margin: 30px 15%;
    }
  }
  .acs-bg {
    position: absolute;
    right: 10vw;
    bottom: 400px;
    transform: translateY(0px);
    @media screen and (max-width: 525px) {
      right: 5vw;
    }
  }
`;

export default function AboutCodinguySection(props) {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.from(".acs-title-section", {
      scrollTrigger: {
        trigger: ".acs-title-section",
        scrub: 1,
        start: "top 80%",
        end: "bottom 250px",
      },
      duration: 1.3,
      opacity: 0,
      x: -10,
    });
    gsap.from(".acs-text", {
      scrollTrigger: {
        scrub: 1,
        trigger: ".acs-text",
        start: "top 70%",
        end: "top 70%",
      },
      opacity: 0,
      y: 0,
    });

    gsap.from(".acs-bg", {
      scrollTrigger: {
        scrub: 1,
        trigger: ".acs-bg",
        start: "bottom 0",
        end: "bottom 60px",
      },
      y: 400,
    });
  }, []);
  return (
    <Container>
      <SectionTitle className="acs-title-section">
        what is codinguy?
      </SectionTitle>
      <Typography
        as="p"
        textAlign="left"
        lineHeight="40px"
        className="acs-text"
        fontSize="18px"
        fontWeight="100"
      >
        This channel, @codinguy_ on YouTube, is a platform dedicated to coding
        tutorials and tips. It provides educational content on various
        programming languages, frameworks, and technologies. The channel aims to
        help beginners and intermediate-level coders enhance their skills and
        gain a deeper understanding of coding concepts through clear and concise
        explanations. With a focus on practical examples and hands-on projects,
        @codinguy_ strives to make coding accessible and engaging to its
        audience. Whether you're interested in web development, mobile app
        development, or software engineering, this channel offers valuable
        insights and resources to support your programming journey.
      </Typography>
      <div className="acs-bg">
        <img
          src={`${process.env.PUBLIC_URL}/assets/logoV1White.png`}
          alt="codinguy logo"
        />
      </div>
    </Container>
  );
}
