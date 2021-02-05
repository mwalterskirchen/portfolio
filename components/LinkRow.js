import React from "react";
import styled from "styled-components";

export default function LinkRow() {
  return (
    <Row>
      <Link
        href="https://github.com/mwalterskirchen"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/github.svg"
          alt="Github Profile - Maximilian Walterskirchen"
        />
      </Link>
      <Link
        href="https://www.linkedin.com/in/maximilian-walterskirchen-10b0881b3/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/linkedin.svg"
          alt="LinkedIn Profile - Maximilian Walterskirchen"
        />
      </Link>
      <Link
        href="/resume_walterskirchen.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/resume.svg"
          alt="LinkedIn Profile - Maximilian Walterskirchen"
        />
      </Link>
    </Row>
  );
}

const Row = styled.div`
  margin-top: 1em;
`;

const Link = styled.a`
  :first-child {
    margin: 0.5em 0.5em 0.5em 0;
  }
  :last-child {
    margin: 0.5em 0 0.5em 0.5em;
  }
  margin: 0.5em;

  & img {
    width: 35px;
  }
`;
