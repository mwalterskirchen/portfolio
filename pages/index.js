import styled from "styled-components";
import LinkRow from "../components/LinkRow";
import Slider from "../components/Slider";
import useTypewriter from "../hooks/useTypewriter";
import Button from "../components/Button"

export default function Home() {
  //typewriter effect for langs
  useTypewriter()

  return (
    <div>
      <Slider />
      <FlexContainer>
        <Wrapper>
          <Title>
            Hi, I'm Max! <AnimatedHand>👋</AnimatedHand>
          </Title>
          <p>I'm a Full-Stack Developer from Vienna, Austria 🇦🇹</p>
          <p>
            I love building cool things with code using{" "}
            <Languages id="languages">JavaScript</Languages>.
          </p>
          <LinkRow/>
          <Button>
            <a href="mailto: m.walterskirchen@hotmail.com">Get in Touch</a>
          </Button>
        </Wrapper>
        <ProfilePicture />
      </FlexContainer>
    </div>
  );
}

const Wrapper = styled.div`
  flex-basis: 780px;

  @media (max-width: 1060px) {
    flex-basis: auto;
    margin-top: 30px;
  }
`;

const ProfilePicture = styled.div`
  height: 350px;
  width: 350px;
  background-image: url("/bewerbungsfoto-min.jpg");
  border-radius: 50%;
  background-position: center;
  background-size: 350px;
  background-repeat: no-repeat;

  @media (max-width: 1060px) {
    height: 200px;
    width: 200px;
    background-size: 200px;
  }
`;

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
