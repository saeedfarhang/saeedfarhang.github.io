import axios from "axios";
import { TBlog } from "core/types/blogs";
import { TweenLite, gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";
import styled from "styled-components";
import BlogCard from "../../elements/BlogCard";
import SectionTitle from "../../elements/SectionTitle";
import SeeMore from "../../elements/SeeMore";
const Container = styled.div`
  .blogcards-container {
    padding: 60px 10vw 25px 10vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    @media screen and (max-width: 1015px) {
      padding: 60px 5vw 25px 5vw;
    }
    @media screen and (max-width: 815px) {
      padding: 60px 5vw 25px 5vw;
      grid-template-columns: 1fr;
    }
  }
  .b-seemore {
    margin: 0 10vw;
  }
`;
type BlogSectionProps = {};
export default function BlogSection(props: BlogSectionProps) {
  const [blogs, setBlogs] = useState<TBlog[]>([]);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    axios.get(`${process.env.PUBLIC_URL}/data/blog.json`).then((res) => {
      setBlogs(res.data);
    });

    gsap.from(".blog-section-title", {
      scrollTrigger: {
        trigger: ".blog-section-title",
        scrub: 1,
        start: "top 80%",
        end: "bottom 250px",
      },
      duration: 1.3,
      opacity: 0,
      x: -10,
    });
    TweenLite.from(".blogcards-container", {
      scrollTrigger: {
        trigger: ".blog-section-title",
        start: "top 90%",
        end: "top 50%",
        scrub: 1,
      },
      // duration: 1,
      opacity: 0,
      y: 100,
    });
    TweenLite.from(".b-seemore", {
      scrollTrigger: {
        scrub: 1,
        trigger: ".b-seemore",
        start: "top 80%",
        end: "top 70%",
      },
      x: "-100vw",
    });
  }, []);

  return (
    <Container>
      <SectionTitle className="blog-section-title">blog</SectionTitle>
      <div className="blogcards-container">
        {blogs.map((blog) => (
          <BlogCard content={blog.content} title={blog.title} />
        ))}
      </div>
      <SeeMore className="b-seemore" />
    </Container>
  );
}
