import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import styled from "styled-components";
import MenuItem from "../../elements/MenuItem";
import SocialLink from "../../elements/SocialLink";
import Typography from "../../elements/Typography";

const Container = styled.div`
  /* height: calc(100vh - 150px); */
  position: relative;
  width: 100%;
  padding: 0 10vw;
  height: 100vh;
  @media screen and (max-width: 600px) {
    padding: 0 5vw;
  }
  .c-content {
    position: relative;
    padding-top: 37vh;
    z-index: 1;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 540px) {
      padding-top: 27vh;
      flex-direction: column;
    }
    .texts {
      .title {
        width: 533px;
        @media screen and (max-width: 540px) {
          width: 333px;
        }
        @media screen and (max-width: 376px) {
          width: 233px;
          font-size: 30px;
        }
      }
      .description {
        width: 300px;
        @media screen and (max-width: 376px) {
          width: 200px;
          font-size: 14px;
        }
      }
    }
    .social-links {
      div {
        margin: 10px;
      }
      @media screen and (max-width: 540px) {
        display: flex;
        margin-top: 20px;
      }
    }
  }
  .bottom {
    /* margin-top: 9vh; */
    z-index: 1;
    width: 100%;
    left: 0;
    bottom: 60px;
    padding: 0 11vw;
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  .circle-bg {
    position: absolute;
    background-color: #000;
    opacity: 0.2;
    border-radius: 50%;
    width: 600px;
    height: 600px;
    top: 350px;
    left: -187px;
    z-index: 0;
    @media screen and (max-width: 445px) {
      width: 450px;
      height: 450px;
    }
  }
  .quick-access {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    @media screen and (max-height: 640px) {
      display: none;
    }
  }
`;
type TopSectionProps = {};
export default function TopSection(props: TopSectionProps) {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    window.addEventListener("scroll", handleScroll);
    gsap.from(".title", {
      scrollTrigger: {
        trigger: ".title",
        toggleActions: "play reset play play",
      },
      delay: 0.3,
      duration: 0.5,
      opacity: 0,
      y: -100,
    });
    gsap.from(".description", {
      scrollTrigger: {
        trigger: ".description",
        toggleActions: "play reset play play",
      },
      delay: 0.8,
      duration: 0.5,
      opacity: 0,
      x: -100,
    });
    gsap.from(".social-links", {
      scrollTrigger: {
        trigger: ".social-links",
        toggleActions: "play reset play play",
      },
      delay: 1.2,
      duration: 0.5,
      opacity: 0,
      x: 10,
    });
    gsap.from(".bottom", {
      scrollTrigger: {
        trigger: ".bottom",
        toggleActions: "play reset play play",
      },
      delay: 1.8,
      duration: 0.5,
      opacity: 0,
      y: 10,
    });
    gsap.fromTo(
      ".arrow-down",
      { rotate: -10 },
      { rotate: 10, delay: 2, repeat: -1, duration: 0.4, yoyo: true }
    );

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <Container>
      <div className="c-content">
        <div className="texts">
          <Typography
            as="h6"
            className="title"
            fontSize="40px"
            fontWeight="bold"
            textAlign="left"
          >
            Hello! I am Saeed Farhang, a Python and TypeScript developer.
          </Typography>
          <Typography
            className="description"
            fontSize="18px"
            fontWeight="normal"
            as="p"
            textAlign="left"
          >
            I also run a YouTube channel called 'codinguy.' You can learn more
            about it by clicking 'codinguy' in the navigation menu.
          </Typography>
        </div>
        <div className="social-links">
          <SocialLink
            href="https://www.linkedin.com/in/saeedfarhang/"
            social="linkedin"
          />
          <SocialLink
            href="https://twitter.com/_saeedfarhang_"
            social="twitter"
          />
          <SocialLink
            href="https://www.youtube.com/channel/UCw9CcaW7usjx--4cCIYh7rg"
            social="youtube"
          />
        </div>
      </div>
      <div className="bottom">
        <HashLink to="/#profile-section" smooth>
          <div className="arrow-down">
            <svg
              id="arrow-down"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="8"
              viewBox="0 0 14 8"
            >
              <path
                id="Icon_ionic-ios-arrow-down"
                data-name="Icon ionic-ios-arrow-down"
                d="M13.19,16.723l5.294-5.189a1.011,1.011,0,0,1,1.413,0,.974.974,0,0,1,0,1.388l-6,5.879a1.014,1.014,0,0,1-1.38.029l-6.04-5.9a.971.971,0,0,1,0-1.388,1.011,1.011,0,0,1,1.413,0Z"
                transform="translate(-6.188 -11.246)"
                fill="#fff"
              />
            </svg>
          </div>
        </HashLink>
        <div className="quick-access">
          <HashLink smooth to="/#profile-section">
            <MenuItem>profile</MenuItem>
          </HashLink>
          <HashLink smooth to="/#publishes-section">
            <MenuItem>publishes</MenuItem>
          </HashLink>
          <HashLink smooth to="/#contactme-section">
            <MenuItem>contact me</MenuItem>
          </HashLink>
        </div>
      </div>
      <div
        className="circle-bg"
        style={{ transform: `translateY(${offsetY * 0.5}px)` }}
      >
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="600"
          height="600"
          viewBox="0 0 600 600"
        >
          <circle
            id="Ellipse_5"
            data-name="Ellipse 5"
            cx="300"
            cy="300"
            r="300"
            opacity="0.2"
          />
        </svg> */}
      </div>
    </Container>
  );
}
