import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: calc(10px + 2vmin);
    &::-webkit-scrollbar {
      width: 0.4rem;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: #ff7676;
    }
    &::-webkit-scrollbar-track {
      background: white;
    }
  }
  body {
    width: 100%;
    font-family: 'Montserrat', sans-serif;
    overflow-x: hidden;
  }
  h2 {
    font-family: 'Abril Fatface', cursive;
    font-size: 1.6rem;
    font-weight: lighter;
    color: #333333;
  }
  h3 {
    padding: 0.5rem 0;
    font-size: 1rem;
    color: #333333;
  }
  p {
    font-size: 0.8rem;
    color: #696969;
    line-height: 150%;
  }
  a {
    color: #333333;
    text-decoration: none;
  }
  img {
    display: block;
  }
  input {
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
  }
`

export default GlobalStyles
