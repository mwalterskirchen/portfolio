import Head from "next/head";
import {useEffect} from "react"
import styled from "styled-components";
import Typewriter from 'typewriter-effect/dist/core';

export default function Home() {
  useEffect(()=>{
    new Typewriter('#languages', {
      strings: ['JavaScript', 'TypeScript', 'React', 'Node', 'CSS','HTML', 'Python', 'SQL', 'NoSQL', 'Swift', 'Java'],
      autoStart: true,
      loop: true
    });
  }, [])

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FlexContainer>
        <Wrapper>
          <Title>
            Hi, I'm Max! <AnimatedHand>👋</AnimatedHand>
          </Title>
          <p>I'm a Full-Stack Engineer from Vienna, Austria 🇦🇹</p>
          <p>
            I love building cool things with code using{" "}
            <Languages id="languages">JavaScript</Languages>
            .
          </p>
          <LinkRow>
            <Link href="https://github.com/mwalterskirchen" target="_blank" rel="noopener noreferrer">
              <img
                src="/github.png"
                alt="Github Profile - Maximilian Walterskirchen"
              />
            </Link>
            <Link href="https://www.linkedin.com/in/maximilian-walterskirchen-10b0881b3/" target="_blank" rel="noopener noreferrer">
              <img
                src="/linkedin.png"
                alt="LinkedIn Profile - Maximilian Walterskirchen"
              />
            </Link>
            <Link href="/resume_walterskirchen.pdf" target="_blank" rel="noopener noreferrer">
              <img
                src="/resume.svg"
                alt="LinkedIn Profile - Maximilian Walterskirchen"
              />
            </Link>
          </LinkRow>
          <Button>
            <a href="mailto: m.walterskirchen@hotmail.com">Get in Touch</a>
          </Button>
        </Wrapper>
        <ProfilePicture/>
      </FlexContainer>
    </div>
  );
}

const Wrapper = styled.div`
  flex-basis: 780px;
`

const ProfilePicture = styled.div`
  height: 350px;
  width: 350px;
  background-image: url("/bewerbungsfoto.jpg");
  border-radius: 50%;
  background-position: center;
  background-size: 350px;
  background-repeat: no-repeat;

  @media (max-width: 1060px) {
    height: 200px;
    width: 200px;
    background-size: 200px;
  }
`

const LinkRow = styled.div`
  margin-top: 1em;
`

const Link = styled.a`
  :first-child {
    margin: 0.5em 0.5em 0.5em 0;
  }
  :last-child {
    margin: 0.5em 0 0.5em 0.5em;
  }
  margin: 0.5em;
  & > img {
    height: 2.25em;
  }
`

const FlexContainer = styled.main`
  display: flex;
  font-size: 1rem;
  max-width: 1350px;
  margin: auto;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  padding: 15px;

  & p {
    font-size: 2em;
    margin: 0.1em 0;
  }

  @media (max-width: 1060px) {
    height: auto;
    margin-top: 30px;
    flex-direction: column-reverse;
    font-size: 0.85rem;
  }
`;

const Button = styled.button`
  margin-top: 2em;
  border: none;
  background: var(--primary);
  color: white;
  font-family: inherit;
  font-size: 1.2em;
  padding: 0.8em 1.5em;
  border-radius: 8px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  cursor: pointer;
  transition: background 150ms ease;
  transition: transform 150ms ease-in;

  &:hover {
    background: var(--primary-hover);
    transform: translateY(-1px);
  }
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 3em;

  @media (max-width: 1060px) {
    margin: 0.2em 0;
  }
`;

const Languages = styled.span`
  font-weight: bold;
  border-bottom: 5px var(--primary) solid;
`;

const AnimatedHand = styled.span`
  display: inline-block;
  animation-name: waving;
  animation-iteration-count: infinite;
  animation-duration: 600ms;

  @keyframes waving {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(10deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;
