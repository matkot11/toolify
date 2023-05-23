import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  padding: 0;
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  
  @media only screen and (min-width: 1200px) {
    padding: 0 200px;
  }
}

h1, h2, h3 {
  margin: 0;
}

button {
  border: none;
  background: none;
  font-family: 'Montserrat', sans-serif;
}

ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

a {
  text-decoration: none;
  color: initial;
}
`;

export default GlobalStyle;
