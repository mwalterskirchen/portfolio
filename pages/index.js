import Head from "next/head";
import styled from "styled-components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FlexContainer>
        <div>
          <Title>
            Hi, I'm Max! <AnimatedHand>👋</AnimatedHand>
          </Title>
          <p>I'm a Full-Stack Engineer from Vienna, Austria 🇦🇹</p>
          <p>
            I love building cool things with code using{" "}
            <Languages>JavaScript</Languages>
          </p>
        </div>
      </FlexContainer>
    </div>
  );
}

const FlexContainer = styled.main`
  display: flex;
  font-size: 1rem;
  justify-content: center;
  align-items: center;
  height: 100vh;

  & p {
    font-size: 2em;
    margin: 0.5em 0;
  }
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 3em;
`;

const Languages = styled.span`
  font-weight: bold;
  border-bottom: 3px var(--primary) solid;
`;

const AnimatedHand = styled.span`
  display: inline-block;
  animation-name: waving;
  animation-iteration-count: infinite;
  animation-duration: 500ms;

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
