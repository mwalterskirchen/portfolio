import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";

export default function Slider() {
    const input = useRef(null)

  useLayoutEffect(() => {
    const theme = window.localStorage.getItem("theme");

    if (theme) {
      document.body.setAttribute("data-theme", theme);
      input.current.checked = theme === "dark" ? true : false
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

  return <Input type="checkbox" ref={input} onChange={handleChange} />;
}

const Input = styled.input`
  -webkit-appearance: none;
  position: relative;
  width: 75px;
  height: 37.5px;
  background-image: url("https://i.postimg.cc/857jHw2q/Screenshot-2020-04-16-at-1-07-06-PM.png");
  background-size: cover;
  border-radius: 37.5px;
  outline: none;
  transition: background-image 0.5s;
  box-shadow: 0px 2px 5px 1px gray;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 37.5px;
    width: 37.5px;
    background-color: navy;
    border-radius: 37.5px;
    transition: all 0.5s;
    background-color: #f7ca33;
  }

  &:checked {
    background-image: url("https://i.postimg.cc/Hn0nstVK/Screenshot-2020-04-16-at-1-07-19-PM.png");
    transition: background-image 0.5s;
  }

  &:checked:before {
    transform: translate(100%);
    transition: all 0.5s;
    background-color: #ecf0f3;
  }
`;
