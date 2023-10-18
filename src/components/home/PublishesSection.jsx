import axios from "axios";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";
import styled from "styled-components";
import PublishCard from "../../elements/PublishCard";
import SectionTitle from "../../elements/SectionTitle";
import SeeMore from "../../elements/SeeMore";
const Container = styled.div`
  .pc-container {
    padding: 30px 8vw 15px 8vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    @media screen and (max-width: 700px) {
      padding: 30px 4vw 15px 4vw;
    }
  }
  .p-seemore {
    margin: 15px 10vw;
  }
`;

export default function PublishesSection(props) {
  const [publishes, setPublishes] = useState([]);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    axios.get(`${process.env.PUBLIC_URL}/data/publishes.json`).then((res) => {
      setPublishes(res.data);
    });

    gsap.from(".publishes-title-section", {
      scrollTrigger: {
        trigger: ".publishes-title-section",
        scrub: 1,
        start: "top 80%",
        end: "bottom 250px",
      },
      duration: 1.3,
      opacity: 0,
      x: -10,
    });
    gsap.from(".p-seemore", {
      scrollTrigger: {
        scrub: 1,
        trigger: ".p-seemore",
        start: "top 80%",
        end: "top 70%",
      },
      x: -500,
    });
    gsap.from(".pc-container", {
      scrollTrigger: {
        trigger: ".pc-container",
        start: "top 90%",
        end: "top 50%",
        scrub: 1,
      },
      // duration: 1,
      opacity: 0,
      y: 100,
    });
  }, []);
  return (
    <Container>
      <SectionTitle className="publishes-title-section">publishes</SectionTitle>
      <div className="pc-container">
        {publishes.map((publish) => (
          <PublishCard margin="10px" />
        ))}
      </div>
      <SeeMore className="p-seemore" />
    </Container>
  );
}
