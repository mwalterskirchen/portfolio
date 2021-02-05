import React, { useEffect, useRef } from "react";
import styled from "styled-components";

export default function Slider() {
  const input = useRef(null);

  useEffect(() => {
    const theme = window.localStorage.getItem("theme");

    if (theme) {
      document.body.setAttribute("data-theme", theme);
      input.current.checked = theme === "dark" ? true : false;
    }
  }, []);

  const handleChange = () => {
    //check if there is a saved theme otherwise use default
    const theme =
      window.localStorage.getItem("theme") ||
      document.body.getAttribute("data-theme");

    const newTheme = theme === "light" ? "dark" : "light";

    //set theme and save the new theme to the local storage
    document.body.setAttribute("data-theme", newTheme);
    window.localStorage.setItem("theme", newTheme);
  };

  return (
    <Wrapper>
    <Label>
      <input type="checkbox" ref={input} onChange={handleChange} />
      <span />
    </Label>
    <span>Dark Mode</span>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
`

const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  margin: 5px 0;
  height: 34px;

  & input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  & input:checked + span {
    background-color: var(--primary);
  }

  & input:focus + span {
    box-shadow: 0 0 1px var(--primary);
  }

  & input:checked + span:before {
    transform: translateX(26px);
  }

  & span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.4s;
    border-radius: 34px;
  }

  & span:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`;
