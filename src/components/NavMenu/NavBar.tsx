import axios from "axios";
import { TBlog } from "core/types/blogs";
import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import styled from "styled-components";
import BlogCardMinimal from "../../elements/BlogCardMinimal";
import Button from "../../elements/Button";
import MenuItem from "../../elements/MenuItem";
import PublishCardMinimal from "../../elements/PublishCardMinimal";
import SocialLink from "../../elements/SocialLink";
import Typography from "../../elements/Typography";

const Container = styled.div<any>`
  background-color: ${(props) => (props.menuOpen ? "#2C2C2C" : "#242424")};
  position: fixed;
  width: ${(props) => (props.menuOpen ? "95%" : "100%")};
  top: 0;
  left: 50%;
  display: ${(props) => (props.menuOpen ? "block" : "flex")};
  align-items: center;
  transform: translateX(-50%);
  /* right: auto; */
  height: ${(props) =>
    props.offsetYc <= 150
      ? props.menuOpen
        ? "500px"
        : "150px"
      : props.menuOpen
      ? "500px"
      : "100px"};
  @media screen and (max-width: 1210px) {
    height: ${(props) =>
      props.offsetYc <= 150
        ? props.menuOpen
          ? "650px"
          : "150px"
        : props.menuOpen
        ? "650px"
        : "100px"};
  }
  @media screen and (max-width: 722px) {
    /* height: ${(props) => (props.menuOpen ? "520px" : "150px")}; */
    height: ${(props) =>
      props.offsetYc <= 150
        ? props.menuOpen
          ? "520px"
          : "120px"
        : props.menuOpen
        ? "520px"
        : "100px"};
  }
  z-index: 100;
  border-radius: ${(props) => (props.menuOpen ? "0 0 25px 25px" : "0")};
  transition: height 0.2s ease;
  .close-menu-container {
    width: ${(props) => (props.menuOpen ? "unset" : "100%")};
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 64px 80px 70px 80px;
    @media screen and (max-width: 517px) {
      margin: 64px 50px 70px 50px;
    }
    @media screen and (max-width: 440px) {
      margin: 64px 30px 70px 30px;
    }
    .name-holder {
      display: flex;
      justify-content: center;
      transform: ${(props) => (props.menuOpen ? "translateX(-2.5vw)" : "")};
      margin-right: 10px;
      .name-holder-text {
        font-size: 24px;
      }
      .name-holder-slash {
        margin: 0 10px;
      }
      @media screen and (max-width: 440px) {
        .name-holder-text {
          font-size: 18px;
        }
      }
    }
    .hamb-menu {
      transform: ${(props) => (props.menuOpen ? "translateX(2.5vw)" : "")};

      .hamb-menu-line {
        width: 45px;
        height: 2px;
        background-color: #ffffff;
        margin: 6px 0;
      }
      .hamb-menu-line-1 {
        transition: all 0.2s ease-in-out;
        width: ${(props) => (props.menuOpen ? "24px" : "45px")};
        transform: ${(props) => (props.menuOpen ? "translateX(21px)" : "")};
      }
    }
  }
  .open-menu-container {
    display: ${(props) => (props.menuOpen ? "flex" : "none")};
    justify-content: space-evenly;
    align-items: baseline;
    margin: 0 80px;
    @media screen and (max-width: 1210px) {
      margin: 0 50px;
    }
    .nav-menu-items {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
    .nav-extra-content-container {
      @media screen and (max-width: 578px) {
        display: none;
      }
      display: flex;
      flex-direction: column;
      width: 100%;
      margin-left: 35px;
      .nav-buttons {
        display: flex;
        width: 100%;
        align-items: center;
        .nav-btns {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
        }
        .nav-social-btns {
          display: flex;
          margin-left: 30px;
          @media screen and (max-width: 1210px) {
            margin-left: 10px;
          }
        }
      }
      .nav-contents {
        width: 100%;
        margin-top: 40px;
        display: flex;
        @media screen and (max-width: 1210px) {
          flex-direction: column;
          align-items: stretch;
        }
        @media screen and (max-width: 940px) {
          align-items: center;
        }
        .nav-publishes {
          width: 100%;
          display: flex;
          @media screen and (max-width: 940px) {
            justify-content: center;
            .pcm-last-child {
              display: none;
            }
          }
          @media screen and (max-width: 722px) {
            display: none;
          }
        }
        .nav-blogs {
          width: fit-content;
          display: flex;
          flex-direction: column;
          margin-left: 30px;
          margin-top: 30px;
        }
        @media screen and (max-width: 578px) {
          display: none;
        }
      }
    }
  }
  .nav-overly {
    display: ${(props) => (props.menuOpen ? "block" : "none")};
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
`;
type NavBarProps = {};
export default function NavBar(props: NavBarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [offsetYc, setOffsetYc] = useState(0);
  const handleScroll = () => {
    setOffsetYc(window.scrollY);
    setMenuOpen(false);
  };
  const [blogs, setBlogs] = useState<TBlog[]>([]);

  useEffect(() => {
    axios.get(`${process.env.PUBLIC_URL}/data/blog.json`).then((res) => {
      setBlogs(res.data);
    });
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <Container menuOpen={menuOpen} offsetYc={offsetYc}>
      <div className="close-menu-container">
        <div className="name-holder">
          <HashLink smooth to="/#profile-section">
            <Typography
              className="name-holder-sf name-holder-text"
              as="h2"
              // fontSize="24px"
              fontWeight="bold"
            >
              saeedfarhang
            </Typography>
          </HashLink>
          <Typography
            className="name-holder-slash name-holder-text"
            as="h2"
            // fontSize="24px"
            fontWeight="bold"
          >
            /
          </Typography>
          <HashLink smooth to="/#blog-section">
            <Typography
              className="name-holder-cg name-holder-text"
              as="h2"
              // fontSize="24px"
              fontWeight="bold"
            >
              codinguy
            </Typography>
          </HashLink>
        </div>
        <div
          className="hamb-menu"
          onClick={() => setMenuOpen((state) => !state)}
        >
          <div className="hamb-menu-line hamb-menu-line-1"></div>
          <div className="hamb-menu-line hamb-menu-line-2"></div>
        </div>
      </div>
      <div className="open-menu-container">
        <div className="nav-menu-items">
          <HashLink smooth to="/#profile-section">
            <MenuItem marginTop="0">profile</MenuItem>
          </HashLink>
          {/* <HashLink smooth to="/#portfolio-section">
            <MenuItem marginTop="40px">my portfolio</MenuItem>
          </HashLink> */}
          <HashLink smooth to="/#blog-section">
            <MenuItem marginTop="40px">blog</MenuItem>
          </HashLink>
          <HashLink smooth to="/#publishes-section">
            <MenuItem marginTop="40px">publishes</MenuItem>
          </HashLink>
          <HashLink smooth to="/#aboutcodinguy-section">
            <MenuItem marginTop="40px">about codinguy</MenuItem>
          </HashLink>
        </div>
        <div className="nav-extra-content-container">
          <div className="nav-buttons">
            <div className="nav-btns">
              <Button margin="5px 12px 5px 0" icon="download">
                download my resume
              </Button>
              <Button margin="5px 12px 5px 0" icon="download">
                donate me
              </Button>
              <Button margin="5px 12px 5px 0" icon="download">
                hire me
              </Button>
              <div className="nav-social-btns">
                <SocialLink
                  href="https://twitter.com/_saeedfarhang_"
                  marginRight="12px"
                  social="twitter"
                />
                <SocialLink
                  href="https://www.youtube.com/channel/UCw9CcaW7usjx--4cCIYh7rg"
                  marginRight="12px"
                  social="youtube"
                />
                <SocialLink
                  href="https://www.linkedin.com/in/saeedfarhang/"
                  marginRight="12px"
                  social="linkedin"
                />
                {/* <SocialLink
                  href="https://"
                  marginRight="12px"
                  social="twitter"
                />
                <SocialLink
                  href="https://"
                  marginRight="12px"
                  social="twitter"
                /> */}
              </div>
            </div>
          </div>
          <div className="nav-contents">
            <div className="nav-publishes">
              <a
                target="_blank"
                href="https://youtu.be/Xjb5yB6yMPI"
                rel="noreferrer"
              >
                <PublishCardMinimal>
                  <iframe
                    width="310"
                    height="196"
                    src="https://www.youtube.com/embed/Xjb5yB6yMPI"
                    title="دریافت اطلاعات از صفحات وب با پایتون - معرفی و نصب سلنیوم | جلسه اول (web scrapping python selenium)"
                    allowFullScreen={true}
                  ></iframe>
                </PublishCardMinimal>
              </a>
              <a
                target="_blank"
                href="https://www.youtube.com/channel/UCw9CcaW7usjx--4cCIYh7rg"
                rel="noreferrer"
              >
                <PublishCardMinimal className="pcm-last-child">
                  <iframe
                    width="310"
                    height="196"
                    src="https://www.youtube.com/embed/vVUFjTBflwU"
                    title="پروژه های جنگو - ساخت اپلیکیشن لیست کارها - معرفی و استارت پروژه | جلسه اول (todo list app django)"
                    allowFullScreen={true}
                  ></iframe>
                </PublishCardMinimal>
              </a>
            </div>
            <div className="nav-blogs">
              {blogs.length && blogs[0] ? (
                <BlogCardMinimal
                  title={blogs[0].title}
                  likeCount={blogs[0].likeCount}
                />
              ) : null}
              {blogs.length && blogs[1] ? (
                <BlogCardMinimal
                  title={blogs[1].title}
                  likeCount={blogs[1].likeCount}
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <div className="nav-overly" onClick={() => setMenuOpen(false)}></div>
    </Container>
  );
}
