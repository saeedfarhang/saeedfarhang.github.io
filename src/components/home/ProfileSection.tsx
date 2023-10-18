import axios from "axios";
import { TTag } from "core/types/tags";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";
import Slider, { ResponsiveObject } from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styled from "styled-components";
import Button from "../../elements/Button";
import SectionTitle from "../../elements/SectionTitle";
import Tag from "../../elements/Tag";
import Typography from "../../elements/Typography";

const Container = styled.div`
  position: relative;
  z-index: 1;
  .profile-text {
    margin: 30px 18vw 14px 18vw;
    max-width: 600px;
  }
  .download-btn {
    margin: 14px 18vw 14px 18vw;
  }
  .tags-container {
    margin-top: 80px;
  }

  .slick-slide {
    width: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

type ProfileSectionProps = {};
export default function ProfileSection(props: ProfileSectionProps) {
  const [tags, setTags] = useState<TTag[]>([]);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    axios.get(`${process.env.PUBLIC_URL}/data/resumeTags.json`).then((res) => {
      setTags(res.data);
    });

    gsap.from(".profile-section-title", {
      scrollTrigger: {
        trigger: ".profile-section-title",
        scrub: 1,
        start: "top 80%",
        end: "bottom 250px",
      },
      duration: 1.3,
      opacity: 0,
      x: -10,
    });
    gsap.from(".profile-text", {
      duration: 0.7,
      opacity: 0,
      y: 20,
      scrollTrigger: {
        trigger: ".profile-text",
        scrub: 1,
        start: "top 80%",
        end: "top 250px",
      },
    });

    gsap.from(".ps-download-btn", {
      duration: 0.7,
      x: -100,
      opacity: 0,
      scrollTrigger: {
        trigger: ".profile-text",
        scrub: 1,
        start: "top 70%",
        end: "bottom 30%",
      },
    });
  }, []);

  const responsive: ResponsiveObject[] = [
    { breakpoint: 370, settings: { slidesToShow: 2 } },
    { breakpoint: 570, settings: { slidesToShow: 3 } },
    { breakpoint: 880, settings: { slidesToShow: 4 } },
    { breakpoint: 1150, settings: { slidesToShow: 6 } },
    { breakpoint: 1400, settings: { slidesToShow: 8 } },
    { breakpoint: 1800, settings: { slidesToShow: 10 } },
    { breakpoint: 40000, settings: { slidesToShow: 12 } },
  ];
  return (
    <Container id="profile">
      <SectionTitle className="profile-section-title">profile</SectionTitle>
      <Typography
        as="p"
        fontSize="18px"
        fontWeight="300"
        className="profile-text"
        textAlign="left"
        lineHeight="32px"
      >
        I am a developer with a strong focus on productivity and a
        specialization in Python (Django) and TypeScript (NestJs/ReactJs)
        technologies. With nearly four years of experience, I have successfully
        collaborated with tech companies on a variety of projects, utilizing
        modern programming languages and frameworks.
      </Typography>
      <div className="ps-download-btn">
        <Button className="download-btn" icon="download">
          download my resume
        </Button>
      </div>
      <div className="tags-container">
        <Slider
          responsive={responsive}
          adaptiveHeight
          arrows={false}
          infinite
          autoplay={true}
          autoplaySpeed={2532}
          pauseOnHover={false}
        >
          {tags.map((tag) => {
            return (
              <div key={tag.id}>
                <Tag>{tag.title}</Tag>
              </div>
            );
          })}
        </Slider>
        <Slider
          responsive={responsive}
          adaptiveHeight
          rtl={true}
          arrows={false}
          infinite
          autoplay={true}
          autoplaySpeed={2100}
          pauseOnHover={false}
        >
          {tags
            .map((tag) => (
              <div key={tag.id}>
                <Tag>{tag.title}</Tag>
              </div>
            ))
            .sort()}
        </Slider>
      </div>
    </Container>
  );
}
