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
}

h1 {
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
