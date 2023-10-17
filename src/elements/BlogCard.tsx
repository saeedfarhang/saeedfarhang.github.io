import React from "react";
import styled from "styled-components";
import Typography from "./Typography";

const Container = styled.div`
  width: 100%;
  max-width: 526px;
  min-height: 160px;
  height: fit-content;
  background-color: #242424;
  box-shadow: 0 0 10px #00000016;
  padding: 15px 20px;
  margin: 25px 8px;

  .bc-title-container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    .bc-title-separator {
      margin-top: 2px;
      width: 50px;
      height: 2px;
      background-color: #fff;
    }
  }

  .bc-desc {
    margin-top: 16px;
    height: 42px;
    overflow: hidden;
  }

  .tech-detail {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 21px;

    .like-section {
      display: flex;

      svg {
        margin-right: 6px;
      }
    }
  }
`;

interface BlogCardProps {
  title: string;
  content: string;
}

const BlogCard: React.FC<BlogCardProps> = (props: BlogCardProps) => {
  return (
    <Container>
      <div className="bc-title-container">
        <Typography
          direction="rtl"
          textAlign="right"
          as="h3"
          fontSize="16px"
          fontWeight="normal"
        >
          {props.title}
        </Typography>
        <div className="bc-title-separator"></div>
      </div>
      <Typography
        as="p"
        className="bc-desc"
        fontSize="12px"
        fontWeight="normal"
        direction="rtl"
        textAlign="right"
      >
        {props.content}
      </Typography>
      <div className="tech-detail">
        <div className="like-section">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16.891"
            height="15.137"
            viewBox="0 0 16.891 15.137"
          >
            {/* SVG path here */}
          </svg>
          <Typography as="p" fontSize="12px" fontWeight="100">
            223
          </Typography>
        </div>
        <Typography
          direction="rtl"
          textAlign="right"
          as="p"
          fontSize="12px"
          fontWeight="100"
        >
          شامل 213،123 کلمه، 9 دقیقه و 24 ثانیه
        </Typography>
      </div>
    </Container>
  );
};

export default BlogCard;
